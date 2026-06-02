// Text-to-Speech для озвучивания ответов AI-клиента

export class TextToSpeech {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    console.log('🔊 TTS Constructor called');
    if (typeof window !== 'undefined') {
      this.synth = window.speechSynthesis;

      if (!this.synth) {
        console.error('❌ Speech synthesis not supported');
        return;
      }

      console.log('✅ Speech synthesis available');

      // Загружаем голоса сразу и при изменении
      // Загружаем голоса сразу
      this.voices = this.synth.getVoices();
      console.log('🔊 Initial voices:', this.voices.length);

      // Также загружаем при изменении (для некоторых браузеров)
      this.synth.onvoiceschanged = () => {
        this.voices = this.synth!.getVoices();
        console.log('🔊 Voices loaded:', this.voices.length);
        console.log('🔊 Available voices:', this.voices.map(v => `${v.name} (${v.lang})`).join(', '));
      };

      // Пробуем загрузить голоса асинхронно
      if (this.voices.length === 0) {
        // В Safari голоса могут загружаться асинхронно
        setTimeout(() => {
          this.voices = this.synth!.getVoices();
          console.log('🔊 Voices after timeout:', this.voices.length);
        }, 100);
      }
    } else {
      console.log('⚠️ Not in browser environment');
    }
  }

  speak(text: string, voice?: string, rate: number = 0.95, pitch: number = 1.0, gender?: 'male' | 'female'): Promise<void> {
    console.log('🔊 speak() called with text:', text, 'gender:', gender);

    return new Promise((resolve, reject) => {
      if (!this.synth) {
        console.error('❌ Speech synthesis not supported');
        reject(new Error('Speech synthesis не поддерживается'));
        return;
      }

      console.log('✅ Speech synthesis OK, voices:', this.voices.length);

      // Выбираем подходящий голос по полу
      const selectedVoice = this.selectVoiceByGender(gender);

      // Разбиваем текст на предложения для естественности
      const sentences = this.splitIntoSentences(text);

      if (sentences.length <= 1) {
        // Одно предложение — говорим сразу
        this.speakSingle(text, selectedVoice || voice, rate, pitch, resolve, reject);
      } else {
        // Несколько предложений — говорим по очереди с паузами
        this.speakMultiple(sentences, selectedVoice || voice, rate, pitch, resolve, reject);
      }
    });
  }

  // Выбор голоса по полу
  private selectVoiceByGender(gender?: 'male' | 'female'): string | undefined {
    const russianVoices = this.voices.filter(v =>
      v.lang.startsWith('ru') || v.lang.includes('Russian')
    );

    if (russianVoices.length === 0) {
      console.warn('⚠️ No Russian voices found');
      return undefined;
    }

    console.log('🔊 Available Russian voices:', russianVoices.map(v => v.name).join(', '));

    // Пытаемся найти мужские/женские голоса по имени
    const maleKeywords = ['male', 'alexandre', 'maxim', 'nikolai', 'sergei', 'dmitry', 'andrey', 'mikhail', 'yuri'];
    const femaleKeywords = ['female', 'alexandra', 'anna', 'elena', 'olga', 'maria', 'ekaterina', 'natalia', 'tatyana', 'irina', 'julia'];

    if (gender === 'male') {
      // Ищем мужской голос
      for (const keyword of maleKeywords) {
        const voice = russianVoices.find(v => v.name.toLowerCase().includes(keyword));
        if (voice) {
          console.log('🔊 Selected male voice:', voice.name);
          return voice.name;
        }
      }
      // Если не нашли, берём первый мужской по умолчанию (обычно первый в списке)
      console.log('🔊 Using first Russian voice as male:', russianVoices[0].name);
      return russianVoices[0].name;
    }

    if (gender === 'female') {
      // Ищем женский голос
      for (const keyword of femaleKeywords) {
        const voice = russianVoices.find(v => v.name.toLowerCase().includes(keyword));
        if (voice) {
          console.log('🔊 Selected female voice:', voice.name);
          return voice.name;
        }
      }
      // Если не нашли, берём последний (часто женский)
      if (russianVoices.length > 1) {
        console.log('🔊 Using last Russian voice as female:', russianVoices[russianVoices.length - 1].name);
        return russianVoices[russianVoices.length - 1].name;
      }
    }

    // По умолчанию
    console.log('🔊 Using default Russian voice:', russianVoices[0].name);
    return russianVoices[0].name;
  }

  private speakSingle(text: string, voice: string | undefined, rate: number, pitch: number, resolve: () => void, reject: (error: Error) => void) {
    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;

    // Выбираем голос по имени
    if (voice) {
      const selectedVoice = this.voices.find(v => v.name === voice);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log('🔊 Using selected voice:', selectedVoice.name);
      } else {
        // Fallback на русский голос
        const russianVoice = this.voices.find(v =>
          v.lang.startsWith('ru') || v.lang.includes('Russian')
        );
        if (russianVoice) {
          utterance.voice = russianVoice;
          console.log('🔊 Using Russian voice:', russianVoice.name);
        }
      }
    } else {
      // Выбираем русский голос
      const russianVoice = this.voices.find(v =>
        v.lang.startsWith('ru') || v.lang.includes('Russian')
      );

      if (russianVoice) {
        utterance.voice = russianVoice;
        console.log('🔊 Using Russian voice:', russianVoice.name);
      } else if (this.voices.length > 0) {
        utterance.voice = this.voices[0];
      }
    }

    // Улучшенные параметры для естественности
    utterance.rate = rate + (Math.random() * 0.15 - 0.075);  // Более вариативная скорость
    utterance.pitch = pitch + (Math.random() * 0.2 - 0.1);   // Более вариативный тон
    utterance.volume = 1.0;
    utterance.lang = 'ru-RU';

    // Добавляем естественные интонации через разметку
    // Добавляем акценты на важные словах
    const textWithEmphasis = this.addNaturalEmphasis(text);
    utterance.text = textWithEmphasis;

    utterance.onstart = () => {
      console.log('🔊 Speech started');
    };

    utterance.onend = () => {
      console.log('✅ Speech completed');
      resolve();
    };

    utterance.onerror = (event) => {
      console.error('❌ Speech error:', event);
      reject(new Error('Ошибка синтеза речи'));
    };

    console.log('🔊 Speaking utterance...');
    if (this.synth) {
      this.synth.speak(utterance);
    }
  }

  // Добавляем естественные акценты в текст для выразительности
  private addNaturalEmphasis(text: string): string {
    // Определяем слова-маркеры для акцентов
    const emphasisWords = ['очень', 'действительно', 'конечно', 'хорошо', 'отлично', 'именно', 'просто', 'реально'];

    let processedText = text;
    emphasisWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      processedText = processedText.replace(regex, `<strong>${word}</strong>`);
    });

    return processedText;
  }

  private speakMultiple(sentences: string[], voice: string | undefined, rate: number, pitch: number, resolve: () => void, reject: (error: Error) => void) {
    let index = 0;

    const speakNext = () => {
      if (index >= sentences.length) {
        console.log('✅ All sentences completed');
        resolve();
        return;
      }

      const sentence = sentences[index];
      console.log(`🔊 Speaking sentence ${index + 1}/${sentences.length}:`, sentence);

      const utterance = new SpeechSynthesisUtterance(sentence);
      this.currentUtterance = utterance;

      // Выбираем голос по имени
      if (voice) {
        const selectedVoice = this.voices.find(v => v.name === voice);
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
      }

      // Естественные вариации для каждого предложения - как в живой речи
      // Первые предложения более медленные, последующие быстрее
      const isFirstOrLast = index === 0 || index === sentences.length - 1;
      utterance.rate = isFirstOrLast
        ? rate + (Math.random() * 0.1 - 0.05)  // Более медленно в начале/конце
        : rate + (Math.random() * 0.2 - 0.1); // Более вариативно в середине

      // Интонация зависит от номера предложения (эмоциональная кривая)
      utterance.pitch = pitch + (Math.random() * 0.25 - 0.125);
      utterance.volume = 1.0;
      utterance.lang = 'ru-RU';

      // Добавляем естественные акценты
      utterance.text = this.addNaturalEmphasis(sentence);

      utterance.onend = () => {
        console.log(`✅ Sentence ${index + 1} completed`);
        index++;

        // Естественные паузы между предложениями
        // Вопросительные предложения - длинная пауза
        // Первые/последние - средняя пауза
        const isQuestion = sentence.trim().endsWith('?');
        let pause: number;

        if (isQuestion) {
          pause = 600 + Math.random() * 500; // 600-1100ms после вопроса
        } else if (isFirstOrLast) {
          pause = 400 + Math.random() * 300; // 400-700ms в начале/конце
        } else {
          pause = 250 + Math.random() * 350; // 250-600ms между обычными
        }

        console.log(`⏸️ Pausing for ${Math.round(pause)}ms`);

        if (index < sentences.length) {
          setTimeout(speakNext, pause);
        } else {
          resolve();
        }
      };

      utterance.onerror = (event) => {
        console.error('❌ Speech error at sentence', index, ':', event);
        reject(new Error('Ошибка синтеза речи'));
      };

      if (this.synth) {
        this.synth.speak(utterance);
      }
    };

    speakNext();
  }

  private splitIntoSentences(text: string): string[] {
    // Разбиваем текст на предложения
    return text
      .replace(/([.!?])\s+/g, '$1\n') // Добавляем перенос после .!?
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }

  stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  pause(): void {
    if (this.synth) {
      this.synth.pause();
    }
  }

  resume(): void {
    if (this.synth) {
      this.synth.resume();
    }
  }

  isSpeaking(): boolean {
    return this.synth?.speaking || false;
  }

  getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  isSupported(): boolean {
    const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    console.log('🔊 TTS support check:', supported);
    if (supported) {
      console.log('🔊 speechSynthesis available');
    } else {
      console.log('❌ speechSynthesis NOT available');
    }
    return supported;
  }
}

// Создаём singleton для использования во всем приложении
let textToSpeechInstance: TextToSpeech | null = null;

export function getTextToSpeech(): TextToSpeech {
  if (!textToSpeechInstance) {
    textToSpeechInstance = new TextToSpeech();
  }
  return textToSpeechInstance;
}
