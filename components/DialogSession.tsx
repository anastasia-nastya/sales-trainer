'use client';

import { useState, useRef, useEffect } from 'react';
import { DialogMessage } from '@/types/dialog';
import { getTextToSpeech } from '@/lib/audio/text-to-speech';

interface DialogSessionProps {
  scenarioId: string;
  scenarioType: 'meeting' | 'objection' | 'negotiation';
  clientPersona: any;
  successCriteria: any[];
  onComplete: (result: any) => void;
}

// Функция определения пола клиента (только на клиенте)
function determineGender(clientPersona: any): 'male' | 'female' {
  if (!clientPersona || !clientPersona.name) {
    return 'male';
  }

  const name = clientPersona.name.toLowerCase();
  const role = (clientPersona.role || '').toLowerCase();

  // Женские имена
  const femaleNames = ['елена', 'анна', 'ольга', 'мария', 'екатерина', 'наталья', 'татьяна', 'ирена', 'юлия', 'светлана'];
  // Женские роли
  const femaleRoles = ['hr director', 'hr', 'hr-директор'];

  // Мужские имена
  const maleNames = ['александр', 'сергей', 'дмитрий', 'андрей', 'михаил', 'иван', 'николай', 'юрий', 'павел', 'алексей', 'виктор', 'игорь'];
  // Мужские роли
  const maleRoles = ['cio', 'cto', 'ceo', 'it director', 'it manager', 'cfo', 'procurement'];

  // Проверяем женские
  if (femaleNames.some(n => name.includes(n)) || femaleRoles.some(r => role.includes(r))) {
    return 'female';
  }

  // Проверяем мужские
  if (maleNames.some(n => name.includes(n)) || maleRoles.some(r => role.includes(r))) {
    return 'male';
  }

  // По умолчанию — мужской
  return 'male';
}

export function DialogSession({
  scenarioId,
  scenarioType,
  clientPersona,
  successCriteria,
  onComplete
}: DialogSessionProps) {
  const [messages, setMessages] = useState<DialogMessage[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const [startTime] = useState(new Date());
  const [speechSupported, setSpeechSupported] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const recognitionRef = useRef<any>(null);
  const ttsRef = useRef<any>(null);

  // Инициализация TTS и проверка микрофона
  useEffect(() => {
    const initializeAudio = async () => {
      console.log('🎵 Initializing audio systems...');

      // Инициализация Text-to-Speech
      const tts = getTextToSpeech();
      console.log('🔊 TTS instance created');

      const ttsSupported = tts.isSupported();
      console.log('🔊 TTS supported:', ttsSupported);

      if (ttsSupported) {
        ttsRef.current = tts;
        console.log('✅ Text-to-Speech initialized and stored');
        console.log('🔊 Available voices:', tts.getVoices().length);

        // Тест TTS
        if (tts.getVoices().length > 0) {
          console.log('✅ Russian voices available:', tts.getVoices().filter(v => v.lang.startsWith('ru')).length);
        } else {
          console.warn('⚠️ No voices loaded yet, will load on first use');
        }
      } else {
        console.warn('⚠️ Text-to-Speech not supported');
        setVoiceEnabled(false);
        alert('Ваш браузер не поддерживает воспроизведение голоса. Пожалуйста, используйте Chrome, Safari или Edge.');
      }

      // Проверка микрофона
      if (typeof window !== 'undefined' && navigator.mediaDevices) {
        try {
          const permissions = await navigator.permissions.query({ name: 'microphone' as PermissionName });
          console.log('Microphone permission state:', permissions.state);

          if (permissions.state === 'denied') {
            console.error('Microphone access denied');
            alert('Доступ к микрофону запрещён. Пожалуйста, разрешите доступ к микрофону в настройках браузера и перезагрузите страницу.');
            return false;
          }
        } catch (error) {
          console.log('Cannot check microphone permissions:', error);
        }

        // @ts-ignore
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
          recognitionRef.current = new SpeechRecognition();
          recognitionRef.current.continuous = false;
          recognitionRef.current.interimResults = true;
          recognitionRef.current.lang = 'ru-RU';

          recognitionRef.current.onresult = (event: any) => {
            const last = event.results.length - 1;
            const currentTranscript = event.results[last][0].transcript;
            setInterimTranscript(currentTranscript);
            setTranscript(currentTranscript);

            if (event.results[last].isFinal) {
              console.log('Final transcript:', currentTranscript);
              handleUserMessage(currentTranscript);
              setTranscript('');
              setInterimTranscript('');
            }
          };

          recognitionRef.current.onerror = (event: any) => {
            console.error('Speech recognition error:', event.error);
            setIsRecording(false);
            setInterimTranscript('');

            if (event.error === 'not-allowed') {
              alert('⚠️ Доступ к микрофону запрещён!\n\nЧтобы включить:\n1. Нажмите на значок замка 🔒 в адресной строке\n2. Разрешите доступ к микрофону\n3. Перезагрузите страницу');
            } else if (event.error === 'no-speech') {
              console.log('Речь не обнаружена, попробуйте снова');
            } else if (event.error === 'network') {
              alert('Ошибка сети при распознавании речи. Проверьте подключение к интернету.');
            } else if (event.error === 'aborted') {
              console.log('Распознавание прервано');
            }
          };

          recognitionRef.current.onend = () => {
            console.log('Speech recognition ended');
            setIsRecording(false);
          };

          recognitionRef.current.onstart = () => {
            console.log('Speech recognition started');
            setIsRecording(true);
          };

          setSpeechSupported(true);
          console.log('✅ Speech recognition initialized successfully');
        } else {
          console.warn('❌ Speech recognition not supported in this browser');
          alert('Распознавание речи не поддерживается в вашем браузере. Пожалуйста, используйте Google Chrome, Safari или Edge.');
        }
      } else {
        console.error('navigator.mediaDevices not available');
      }
    };

    initializeAudio();
  }, []);

  const startRecording = async () => {
    if (!speechSupported) {
      alert('Распознавание речи не поддерживается в вашем браузере. Используйте Chrome, Safari или Edge.');
      return;
    }

    if (!recognitionRef.current) {
      alert('Распознавание речи не инициализировано. Перезагрузите страницу.');
      return;
    }

    try {
      // Явный запрос доступа к микрофону
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log('✅ Микрофон доступ получен');

      // Останавливаем stream сразу после получения разрешения (нам нужны только права)
      stream.getTracks().forEach(track => track.stop());

      // Теперь начинаем распознавание
      setTranscript('');
      setInterimTranscript('');
      recognitionRef.current.start();
      console.log('🎤 Начинаем запись...');
    } catch (error) {
      console.error('❌ Ошибка доступа к микрофону:', error);
      alert('⚠️ Не удалось получить доступ к микрофону!\n\nЧтобы включить:\n1. Нажмите на значок 🔒 или ⚠️ в адресной строке\n2. Разрешите доступ к микрофону\n3. Перезагрузите страницу\n\nИли используйте текстовый ввод ниже.');
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleUserMessage = async (text: string) => {
    const userMessage: DialogMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      // Вызов API для получения ответа AI
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioType,
          messages: [...messages, userMessage],
          clientPersona
        })
      });

      const data = await response.json();

      const assistantMessage: DialogMessage = {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        analysis: data.analysis
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Озвучиваем ответ AI с правильным голосом по полу клиента
      console.log('🔊 Voice check - enabled:', voiceEnabled, 'TTS available:', ttsRef.current !== null);
      console.log('📝 AI response message:', data.message);

      if (voiceEnabled && ttsRef.current && data.message) {
        try {
          setIsSpeaking(true);
          console.log('🔊 Starting TTS for message:', data.message.substring(0, 50) + '...');

          // Определяем пол клиента для правильного голоса (локальная функция)
          const clientGender = determineGender(clientPersona);
          console.log('👤 Client gender:', clientGender);

          await ttsRef.current.speak(data.message, undefined, 0.95, 1.0, clientGender);
          console.log('✅ TTS Speech completed successfully');
        } catch (error) {
          console.error('❌ TTS Error during speech:', error);
          alert('Ошибка воспроизведения голоса. Проверьте консоль для деталей.');
        } finally {
          setIsSpeaking(false);
        }
      } else {
        if (!voiceEnabled) {
          console.warn('⚠️ Voice is disabled by user');
        }
        if (!ttsRef.current) {
          console.error('❌ TTS not initialized');
        }
        if (!data.message) {
          console.error('❌ No message to speak');
        }
      }

    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = () => {
    if (transcript.trim()) {
      handleUserMessage(transcript);
      setTranscript('');
    }
  };

  const handleComplete = async () => {
    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioType,
          messages,
          successCriteria
        })
      });

      const result = await response.json();
      onComplete(result);
    } catch (error) {
      console.error('Error evaluating session:', error);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">
                {clientPersona.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold">{clientPersona.name}</h3>
              <p className="text-sm text-blue-100">
                {clientPersona.role}, {clientPersona.company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Кнопка управления звуком */}
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`p-2 rounded-lg transition-colors ${
                voiceEnabled
                  ? 'bg-green-500/30 text-white hover:bg-green-500/50'
                  : 'bg-gray-500/30 text-gray-300 hover:bg-gray-500/50'
              }`}
              title={voiceEnabled ? 'Выключить звук' : 'Включить звук'}
            >
              {isSpeaking ? (
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-3 bg-green-400 animate-pulse"></div>
                    <div className="w-0.5 h-4 bg-green-400 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-0.5 h-2 bg-green-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              ) : voiceEnabled ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </button>
            <button
              onClick={handleComplete}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              Завершить и получить оценку
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-lg mb-2">Начните диалог!</p>
            <p className="text-sm">
              Нажмите на кнопку микрофона и поздоровайтесь с клиентом, или введите текст вручную
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs opacity-70">
                  {msg.role === 'user' ? 'Вы' : clientPersona.name}
                </span>
                <span className="text-xs opacity-50">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              {msg.analysis && msg.analysis.techniques && msg.analysis.techniques.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {msg.analysis.techniques.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/20 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {transcript && (
          <div className="flex justify-end">
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              isRecording
                ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-dashed border-blue-400 dark:border-blue-600 animate-pulse'
                : 'bg-blue-100 dark:bg-blue-900/30 border-2 border-dashed border-blue-300 dark:border-blue-700'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                {isRecording && (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <span className="text-xs text-red-600 dark:text-red-400 font-medium">Запись...</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{transcript}</p>
              {!isRecording && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Нажмите ➤ чтобы отправить</p>
              )}
            </div>
          </div>
        )}

        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isProcessing}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isRecording ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            )}
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder={isRecording ? 'Говорите...' : 'Введите сообщение или нажмите микрофон...'}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              disabled={isProcessing}
            />
            {isRecording && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Запись...</span>
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!transcript.trim() || isProcessing}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-xl flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>

        {!speechSupported && (
          <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2 text-center font-medium">
            ⚠️ Голосовой ввод не поддерживается. Используйте текстовый ввод или откройте в Chrome/Safari.
          </p>
        )}

        {speechSupported && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            💡 Нажмите микрофон и говорите. Или введите текст вручную.
          </p>
        )}
      </div>
    </div>
  );
}
