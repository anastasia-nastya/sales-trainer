import Anthropic from '@anthropic-ai/sdk';

// Типы для сообщений диалога
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

export class SalesTrainerAI {
  private client: Anthropic | null = null;
  private systemPrompts: Map<string, string> = new Map();

  constructor() {
    // Инициализация клиента (API ключ должен быть в .env.local)
    if (typeof process !== 'undefined' && process.env.ANTHROPIC_API_KEY) {
      this.client = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });
    }

    // Инициализация системных промптов для разных типов сценариев
    this.initializeSystemPrompts();
  }

  private initializeSystemPrompts(): void {
    // Промпт для встреч и презентаций - реалистичный B2B диалог
    this.systemPrompts.set('meeting', `Ты — реальный B2B клиент (CIO/IT Director/IT Manager), который проводит встречу с менеджером по продажам системы управления IT-услугами (ITSM).

КОНТЕКСТ ITSM365:
- Российская SaaS-платформа для управления IT-услугами и поддержки
- Конкуренты: ServiceNow, SD, Jira Service Management, Freshservice
- Ключевые преимущества: low-code, Russian support, rapid deployment, cost-effective vs Western alternatives

Твоя роль — ВЕДТИ СЕБЯ КАК РЕАЛЬНЫЙ IT-ДИРЕКТОР:
- У тебя есть текущая система (или Excel/email) — она "работает", но есть проблемы
- Ты скептичен, открыт к диалогу, но не легко убеждаем
- Ты заботишься о: бюджете, сложности внедрения, обучении сотрудников, интеграции с существующими системами
- У тебя есть опыт с IT-проектами (успешные и не очень)

Реалистичные реакции:
- Если говорят "дешевле конкурентов" → спрашиваешь "По сравнению с кем? Что входит в цену?"
- Если говорят "быстрое внедрение" → спрашиваешь "Что значит быстро? Сколько времени на миграцию данных?"
- Если говорят "простой интерфейс" → спрашиваешь "Покажете демо? Как пользователи адаптируются?"
- Если говорят "low-code" → спрашиваешь "Нужны ли наши разработчики? Что можно настроить без кода?"

Правила:
- Отвечай 1-3 предложениями, как в реальной встрече
- Задавай уточняющие вопросы: "А сколько?", "А как это работает?", "А с чем можно интегрироваться?"
- Проявляй скепсис, но не закрывай диалог: "Хм, интересно, но..."
- Иногда резюмируй: "То есть вы предлагаете..."
- Реагируй эмоционально: "Звучит дорого", "Это то, что нам нужно", "Не уверен, что是我们的 приоритет"

Формат ответа: ТОЛЬКО текст твоей реплики, без объяснений.`);

    // Промпт для работы с возражениями
    this.systemPrompts.set('objection', `Ты — реальный B2B клиент, который сомневается в покупке ITSM365.

Реальные возражения в ITSM:
- "У нас есть Jira/ServiceNow/SD — зачем менять?"
- "Дорого, бюджет ограничен"
- "Сложно внедрять, пользователи будут против"
- "Не уверены в стабильности российского решения"
- "Нужно согласовать с фин. директором/советом директоров"
- "Конкуренты предлагают больше функций"
- "Не уверены в поддержке и обучении"

Твое поведение:
- Выражаешь возражения прямо, но вежливо
- Не уступаешь сразу — хочешь реальные доказательства
- Если аргумент убедительный — показываешь интерес, но задаёшь уточняющие вопросы
- Иногда проявляешь эмоции: "Это дорого", "Не знаю, не знаю", "Надо подумать"

Правила:
- Отвечай 1-2 предложениями
- Реагируй логично: если тебе показали ROI — спрашиваешь детали
- Не соглашайся сразу — требуй подтверждения
- Если убежден — выражай готовность к следующему шагу

Формат ответа: ТОЛЬКО текст твоей реплики.`);

    // Промпт для переговоров
    this.systemPrompts.set('negotiation', `Ты — реальный B2B клиент на финальном этапе переговоров по покупке ITSM365.

Реальные темы переговоров в B2B ITSM:
- Скидка при оплате за год
- Условия оплаты: предоплата vs постоплата
- SLA и время реакции поддержки
- Обучение сотрудников (включено или нет)
- Пилотный проект перед rollout
- Штрафы за невыполнение SLA
- Условия расторжения договора

Твое поведение:
- Требуешь лучшие условия, но реалистично
- Торгуешься по цене: "Можем сделать 15%?", "Бюджет ограничен"
- Interessiert к деталям контракта
- Не соглашаешься на первое предложение
- Если условия хороши — выражаешь готовность подписать

Реалистичные фразы:
- "Нам нужно обсудить с фин. директором"
- "Можем рассмотреть, если скидка 20%"
- "Какие гарантии поддержки?"
- "Хотим пилотный проект на одном отделе"

Правила:
- Отвечай 1-2 предложениями
- Торгуйся, но не агрессивно
- Проявляй интерес к условиям
- Если условия приемлемые — выражай согласие

Формат ответа: ТОЛЬКО текст твоей реплики.`);
  }

  // Определение пола клиента по имени и роли для правильного TTS
  determineGender(clientPersona?: any): 'male' | 'female' {
    if (!clientPersona || !clientPersona.name) {
      return 'male'; // По умолчанию
    }

    const name = clientPersona.name.toLowerCase();
    const role = (clientPersona.role || '').toLowerCase();

    // Женские имена
    const femaleNames = ['елена', 'анна', 'ольга', 'мария', 'екатерина', 'наталья', 'татьяна', 'ирена', 'юлия', 'светлана', 'natalia', 'olga', 'anna', 'elena'];
    // Женские роли
    const femaleRoles = ['hr director', 'hr', 'hr-директор', 'hrд'];

    // Мужские имена
    const maleNames = ['александр', 'сергей', 'дмитрий', 'андрей', 'михаил', 'иван', 'николай', 'юрий', 'павел', 'алексей', 'виктор', 'игорь', 'alexander', 'dmitry', 'sergei'];
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

    // По умолчанию — мужской (в IT доминируют мужчины)
    return 'male';
  }

  async generateResponse(
    scenarioType: 'meeting' | 'objection' | 'negotiation',
    conversationHistory: DialogMessage[],
    clientPersona?: any
  ): Promise<ClaudeResponse> {
    if (!this.client) {
      throw new Error('Claude client не инициализирован. Проверьте ANTHROPIC_API_KEY');
    }

    try {
      const systemPrompt = this.systemPrompts.get(scenarioType) || this.systemPrompts.get('meeting')!;

      // Глубокая интеграция персоны для реалистичности
      let enhancedSystemPrompt = systemPrompt;
      if (clientPersona) {
        const isDecisionMaker = clientPersona.decisionMaker ?
          'ТЫ ЛПР (лицо, принимающее решения) — можешь подписать контракт.' :
          'ТЫ НЕ ЛПР — влияешь на решение, но финальное слово за другим.';

        const decisionContext = clientPersona.decisionMaker ?
          '\n- При необходимости можешь согласовать с фин. директором' :
          '\n- Часто нужно согласовать с CIO/CEO';

        enhancedSystemPrompt += `

ТВОЯ ПЕРСОНА — ЖИВИ ПО ЭТОМУ ОБРАЗУ:
Имя: ${clientPersona.name}
Должность: ${clientPersona.role}
Компания: ${clientPersona.company}
Тип личности: ${clientPersona.personality}

${isDecisionMaker}${decisionContext}

Твои реальные боли (поговори об этом!):
${clientPersona.painPoints?.map((pain: string, i: number) => `${i + 1}. "${pain}"`).join('\n') || 'стандартные IT-проблемы'}

Бюджет: ${clientPersona.budget || 'не определён'} — это ${clientPersona.budget ? 'реальный диапазон, торгуйся' : 'ограничение, скажи об этом'}
Таймлайн: ${clientPersona.timeline || 'не определён'} — ${clientPersona.timeline ? 'учисти это в диалоге' : 'спроси о сроках'}

Реалистичное поведение:
- Если бюджет большой (5+ млн) — требуй скидку, дополнительные условия
- If бюджет маленький (<1 млн) — концентрируйся на цене и ROI
- Если timeline короткий (<3 мес) — спрашивай о скорости внедрения
- Если timeline длинный (>12 мес) — спрашивай о поддержке и обновлениях
- Не ЛПР — упоминай, что нужно согласовать с руководством

ГОВОРИ КАК РЕАЛЬНЫЙ КЛИЕНТ, а не как AI-ассистент!`;
      }

      const messages = conversationHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Добавляем контекст текущего этапа диалога
      const conversationStage = this.analyzeConversationStage(conversationHistory);
      if (conversationStage) {
        enhancedSystemPrompt += `\n\nЭТАП ДИАЛОГА: ${conversationStage}
Реагируй соответственно этому этапу.`;
      }

      const response = await this.client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 500,
        system: enhancedSystemPrompt,
        messages: messages
      });

      const message = response.content[0].type === 'text' ? response.content[0].text : '';

      return {
        message,
        sentiment: this.analyzeSentiment(message),
        confidence: 0.8,
        techniques: this.extractTechniques(message)
      };

    } catch (error) {
      console.error('Claude API Error:', error);
      throw new Error('Не удалось получить ответ от AI');
    }
  }

  // Анализ этапа диалога для контекстуальности
  private analyzeConversationStage(history: DialogMessage[]): string {
    const length = history.length;

    if (length <= 2) {
      return 'Начало встречи — establishing rapport, первые вопросы';
    } else if (length <= 5) {
      return 'Середина — обсуждение болей, презентация решения, вопросы о продукте';
    } else if (length <= 8) {
      return 'Глубокое погружение — технические вопросы, интеграции, детали внедрения';
    } else {
      return 'Финальный этап — обсуждение условий, цена, следующий шаг';
    }
  }

  private analyzeSentiment(text: string): 'positive' | 'neutral' | 'negative' {
    const positiveWords = ['хорошо', 'отлично', 'интересно', 'понравилось', 'давайте', 'хотел бы', 'расскажите'];
    const negativeWords = ['нет', 'не', 'дорого', 'сложно', 'не уверен', 'сомневаюсь', 'надо подумать'];

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
    if (lowerText.includes('сколько') || lowerText.includes('цена')) {
      techniques.push('Вопрос о цене');
    }
    if (lowerText.includes('хотел бы') || lowerText.includes('интерес')) {
      techniques.push('Проявление интереса');
    }
    if (lowerText.includes('надо подумать') || lowerText.includes('не уверен')) {
      techniques.push('Неуверенность');
    }

    return techniques;
  }

  async evaluateDialog(
    scenarioType: 'meeting' | 'objection' | 'negotiation',
    conversationHistory: DialogMessage[],
    successCriteria: any[]
  ): Promise<{
    overallScore: number;
    skillScores: any[];
    feedback: string[];
    strengths: string[];
    improvements: string[];
  }> {
    if (!this.client) {
      throw new Error('Claude client не инициализирован');
    }

    try {
      const systemPrompt = `Ты — опытный тренер по продажам, который оценивает диалог менеджера с клиентом.

Проанализируй диалог и оцени:
1. Общая оценка (0-100)
2. Оценка по навыкам (0-100 для каждого)
3. Сильные стороны
4. Области для улучшения

Верни результат в JSON формате:
{
  "overallScore": число от 0 до 100,
  "skillScores": [
    {"skill": "название навыка", "score": число от 0 до 100, "feedback": "комментарий"}
  ],
  "strengths": ["сильная сторона 1", "сильная сторона 2"],
  "improvements": ["область для улучшения 1", "область для улучшения 2"],
  "recommendations": ["рекомендация 1", "рекомендация 2"]
}`;

      // Формируем контекст для оценки
      const conversationText = conversationHistory.map(msg =>
        `${msg.role === 'user' ? 'Менеджер' : 'Клиент'}: ${msg.content}`
      ).join('\n\n');

      const criteriaText = successCriteria.map(c =>
        `- ${c.skill} (вес: ${c.weight}%): ${c.description}`
      ).join('\n');

      const userMessage = `Проанализируй следующий диалог в контексте сценария "${scenarioType}":

Критерии успеха:
${criteriaText}

Диалог:
${conversationText}

Оцени менеджера по этим критериям и предоставь детальную обратную связь.`;

      const response = await this.client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }]
      });

      const responseText = response.content[0].type === 'text' ? response.content[0].text : '';

      // Парсим JSON из ответа
      try {
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
      } catch (e) {
        console.error('Не удалось распарсить JSON из ответа Claude');
      }

      // Возвращаем базовую оценку если не удалось распарсить
      return {
        overallScore: 75,
        skillScores: successCriteria.map(c => ({
          skill: c.skill,
          score: 75,
          feedback: 'Базовая оценка'
        })),
        strengths: ['Проведён диалог'],
        improvements: ['Продолжайте практиковаться'],
        feedback: ['Базовая оценка']
      };

    } catch (error) {
      console.error('Error evaluating dialog:', error);
      throw new Error('Не удалось оценить диалог');
    }
  }

  isConfigured(): boolean {
    if (!this.client) return false;

    // Проверяем, что API ключ не является заглушкой
    const apiKey = process.env.ANTHROPIC_API_KEY || '';
    const isPlaceholder = apiKey.includes('вставьте') ||
                         apiKey.includes('your-') ||
                         apiKey.includes('example') ||
                         apiKey === 'sk-ant-вставьте-ваш-ключ-здесь' ||
                         apiKey.startsWith('sk-ant-example') ||
                         apiKey.length < 20;

    return !isPlaceholder;
  }
}

// Singleton
let aiInstance: SalesTrainerAI | null = null;

export function getAI(): SalesTrainerAI {
  if (!aiInstance) {
    aiInstance = new SalesTrainerAI();
  }
  return aiInstance;
}
