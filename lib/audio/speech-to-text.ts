// Speech-to-Text с использованием Web Speech API

export class SpeechToText {
  private recognition: any = null;
  private isListening: boolean = false;
  private onResultCallback: ((transcript: string) => void) | null = null;
  private onErrorCallback: ((error: string) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      // @ts-ignore - Web Speech API не стандартизирован
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'ru-RU';

      this.recognition.onresult = (event: any) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript;

        if (event.results[last].isFinal) {
          if (this.onResultCallback) {
            this.onResultCallback(transcript);
          }
        }
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        if (this.onErrorCallback) {
          this.onErrorCallback(event.error);
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
      };
    } else {
      console.warn('Web Speech API не поддерживается в этом браузере');
    }
  }

  startListening(
    onResult: (transcript: string) => void,
    onError?: (error: string) => void
  ): void {
    if (!this.recognition) {
      throw new Error('Speech recognition не поддерживается');
    }

    this.onResultCallback = onResult;
    this.onErrorCallback = onError || null;

    try {
      this.recognition.start();
      this.isListening = true;
    } catch (error) {
      console.error('Ошибка запуска распознавания:', error);
      throw error;
    }
  }

  stopListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  getIsListening(): boolean {
    return this.isListening;
  }

  isSupported(): boolean {
    return typeof window !== 'undefined' && 'webkitSpeechRecognition' in window;
  }
}

// Создаём singleton для использования во всем приложении
let speechToTextInstance: SpeechToText | null = null;

export function getSpeechToText(): SpeechToText {
  if (!speechToTextInstance) {
    speechToTextInstance = new SpeechToText();
  }
  return speechToTextInstance;
}
