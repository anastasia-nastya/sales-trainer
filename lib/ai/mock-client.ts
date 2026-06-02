// Mock AI клиент для тестирования без API ключа

export interface DialogMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ClaudeResponse {
  message: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  confidence?: number;
  techniques?: string[];
}

// Заготовки ответов для разных типов сценариев
const mockResponses = {
  meeting: {
    greeting: [
      "Здравствуйте! Рад встрече. Расскажите, чем могу быть полезен?",
      "Добрый день! Интересно узнать о вашем решении. С чего начнем?",
      "Приветствую! Давайте обсудим вашу систему. Что вы можете предложить?"
    ],
    presentation: [
      "Звучит интересно. А как это работает с нашей текущей инфраструктурой?",
      "Хорошо, но как насчёт интеграции с существующими системами?",
      "Понятно. А какие гарантии вы даёте?"
    ],
    questions: [
      "Сколько это стоит? Нам важна цена.",
      "Сколько времени займёт внедрение?",
      "А кто ваши клиенты из нашей сферы?"
    ]
  },
  objection: {
    expensive: [
      "Понимаю, но для нас цена важна. Можете предложить скидку?",
      "Дорого. Конкуренты дешевле.",
      "Не уверены, что готовы тратить такой бюджет."
    ],
    competitor: [
      "Мы уже работаем с вашим конкурентом. Зачем нам менять?",
      "Нас всё устраивает текущее решение.",
      "Зачем что-то менять, если и так всё работает?"
    ],
    thinking: [
      "Нужно подумать. Обсудим в следующий раз.",
      "Не могу решить сейчас. Давайте я позвоню позже.",
      "Мне время на обдумывание."
    ]
  },
  negotiation: {
    terms: [
      "Условия не совсем подходят. Нужны более выгодные условия оплаты.",
      "Хотим более длительную гарантию.",
      "Нужны дополнительные услуги в эту цену."
    ],
    closing: [
      "Возможно, мы готовы двигаться дальше. Когда можем начать?",
      "Давайте обсудим детали следующего шага.",
      "Интересно. Что дальше?"
    ]
  }
};

export class MockSalesTrainerAI {
  private messageCount = 0;

  async generateResponse(
    scenarioType: 'meeting' | 'objection' | 'negotiation',
    conversationHistory: DialogMessage[],
    clientPersona?: any
  ): Promise<ClaudeResponse> {
    this.messageCount++;

    // Имитация задержки как в реальном API
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Выбираем ответ на основе контекста
    let responses: string[] = [];

    const lastUserMessage = conversationHistory[conversationHistory.length - 1]?.content.toLowerCase() || '';

    // Анализируем контекст и выбираем подходящий ответ
    if (scenarioType === 'meeting') {
      if (this.messageCount === 1 || lastUserMessage.includes('здрав') || lastUserMessage.includes('рад')) {
        responses = mockResponses.meeting.greeting;
      } else if (lastUserMessage.includes('стоим') || lastUserMessage.includes('цен')) {
        responses = mockResponses.meeting.questions;
      } else {
        responses = mockResponses.meeting.presentation;
      }
    } else if (scenarioType === 'objection') {
      if (lastUserMessage.includes('дорог') || lastUserMessage.includes('цен')) {
        responses = mockResponses.objection.expensive;
      } else if (lastUserMessage.includes('конкурент') || lastUserMessage.includes('друг')) {
        responses = mockResponses.objection.competitor;
      } else {
        responses = mockResponses.objection.thinking;
      }
    } else if (scenarioType === 'negotiation') {
      if (lastUserMessage.includes('услови') || lastUserMessage.includes('гаранти')) {
        responses = mockResponses.negotiation.terms;
      } else {
        responses = mockResponses.negotiation.closing;
      }
    }

    // Выбираем случайный ответ
    const message = responses[Math.floor(Math.random() * responses.length)];

    return {
      message,
      sentiment: this.analyzeSentiment(message),
      confidence: 0.8,
      techniques: this.extractTechniques(message)
    };
  }

  private analyzeSentiment(text: string): 'positive' | 'neutral' | 'negative' {
    const positiveWords = ['хорошо', 'интересно', 'понравилось', 'давайте', 'хотел бы', 'готов'];
    const negativeWords = ['нет', 'не', 'дорого', 'сложно'];

    const lowerText = text.toLowerCase();
    const hasPositive = positiveWords.some(word => lowerText.includes(word));
    const hasNegative = negativeWords.some(word => lowerText.includes(word));

    if (hasPositive && !hasNegative) return 'positive';
    if (hasNegative && !hasPositive) return 'negative';
    return 'neutral';
  }

  private extractTechniques(text: string): string[] {
    const techniques = [];
    const lowerText = text.toLowerCase();

    if (lowerText.includes('почему') || lowerText.includes('зачем')) {
      techniques.push('Уточняющий вопрос');
    }
    if (lowerText.includes('сколько') || lowerText.includes('цен')) {
      techniques.push('Вопрос о цене');
    }

    return techniques;
  }

  async evaluateDialog(
    scenarioType: 'meeting' | 'objection' | 'negotiation',
    conversationHistory: DialogMessage[],
    successCriteria: any[]
  ): Promise<any> {
    // Имитация оценки
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      overallScore: 70 + Math.floor(Math.random() * 20),
      skillScores: successCriteria.map(c => ({
        skill: c.skill,
        score: 65 + Math.floor(Math.random() * 25),
        feedback: 'Хороший результат, но есть пространство для роста'
      })),
      strengths: [
        'Активное слушание',
        'Профессиональный подход',
        'Чёткие ответы'
      ],
      improvements: [
        'Можно глубже раскрывать потребности клиента',
        'Работать с возражениями более уверенно'
      ],
      recommendations: [
        'Попрактикуйтесь в работе с ценовыми возражениями',
        'Изучите кейсы успешных сделок'
      ]
    };
  }

  isConfigured(): boolean {
    return true; // Mock клиент всегда "сконфигурирован"
  }
}

let mockInstance: MockSalesTrainerAI | null = null;

export function getMockAI(): MockSalesTrainerAI {
  if (!mockInstance) {
    mockInstance = new MockSalesTrainerAI();
  }
  return mockInstance;
}
