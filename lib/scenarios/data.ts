import { Scenario } from '@/types/scenarios';

export const scenarios: Scenario[] = [
  // ========================================
  // СУЩЕСТВУЮЩИЕ СЦЕНАРИИ
  // ========================================

  // Сценарии встреч и презентаций
  {
    id: 'meeting-1',
    title: 'Первая встреча с потенциальным клиентом',
    description: 'Проведение первой встречи с представителем крупной компании для презентации ITSM365',
    type: 'meeting',
    difficulty: 'beginner',
    duration: 15,
    objectives: [
      'Установить контакт с клиентом',
      'Выявить потребности компании',
      'Провести краткую презентацию ITSM365',
      'Запланировать следующий шаг'
    ],
    clientPersona: {
      name: 'Александр Петров',
      role: 'CIO',
      company: 'ТехноПром',
      personality: 'Профессиональный, деловой, заинтересован в эффективности',
      painPoints: [
        'Отсутствие единой системы управления ИТ-услугами',
        'Превышение бюджета на ИТ-проекты',
        'Низкая удовлетворённость пользователей ИТ-поддержкой'
      ],
      budget: '5-10 млн рублей',
      timeline: '3-6 месяцев',
      decisionMaker: true
    },
    talkingPoints: [
      'Актуальные проблемы в ИТ-инфраструктуре',
      'Ожидания от новой системы',
      'Опыт использования подобных решений',
      'Критерии выбора'
    ],
    successCriteria: [
      { skill: 'Установление контакта', description: 'Создана доверительная атмосфера', weight: 20 },
      { skill: 'Активное слушание', description: 'Выявлены ключевые потребности', weight: 25 },
      { skill: 'Презентация решения', description: 'Чётко представлена ценность ITSM365', weight: 30 },
      { skill: 'Закрытие на следующий шаг', description: 'Согласована дальнейшая встреча/действие', weight: 25 }
    ]
  },

  // ========================================
  // НОВЫЕ СЦЕНАРИИ (РЕАЛИСТИЧНЫЕ)
  // ========================================

  // Сценарий для ритейла (кофейни)
  {
    id: 'retail-meeting-1',
    title: 'Презентация ITSM365 для сети кофеен',
    description: 'Встреча с IT-директором сети кофеен по всей России. Клиент озабочен поддержкой касс, wi-fi, кофемашин и рекламных вывесок.',
    type: 'meeting',
    difficulty: 'intermediate',
    duration: 20,
    objectives: [
      'Понять специфику бизнеса (сотни точек, география)',
      'Продемонстрировать возможности SaaS модели',
      'Показать быстрый запуск и масштабируемость',
      'Обсудить интеграции (API для десктопных приложений)'
    ],
    clientPersona: {
      name: 'Елена Волкова',
      role: 'IT Director',
      company: 'КофейнаяРост (сеть кофеен, 300+ точек)',
      personality: 'Прагматичная, технически подкованная, sceptical',
      painPoints: [
        'Сложно поддерживать hundreds of точек в реальном времени',
        'Нужно оперативно решать проблемы: кассы, wi-fi, холодильники',
        'Требуется самостоятельное развитие и подключение новых сервисов',
        'Географически распределённая инфраструктура'
      ],
      budget: '8-12 млн рублей',
      timeline: '6-12 месяцев',
      decisionMaker: true
    },
    talkingPoints: [
      'SaaS vs On-Premise для масштабируемости',
      'Интеграции через API с существующими системами',
      'Мобильное приложение для оперативной поддержки',
      'Удалённый контроль всех точек'
    ],
    successCriteria: [
      { skill: 'Понимание бизнеса', description: 'Демонстрация знания специфики ритейла', weight: 25 },
      { skill: 'Техническая экспертиза', description: 'Уверенные ответы на технические вопросы', weight: 30 },
      { skill: 'SaaS преимущества', description: 'Чёткое объяснение выгод облачной модели', weight: 25 },
      { skill: 'Визуализация ROI', description: 'Показ реальных кейсов (кофейни)', weight: 20 }
    ]
  },

  // Сценарий для агропрома
  {
    id: 'agro-meeting-1',
    title: 'Автоматизация для агропромышленного комплекса',
    description: 'Встреча с руководителем ИТ-отдела агрокомпании, занимающейся поставками запчастей в Сибирь.',
    type: 'meeting',
    difficulty: 'intermediate',
    duration: 18,
    objectives: [
      'Понять высокую сложность сервиса (широкий охват)',
      'Показать возможности low-code платформы',
      'Обсудить простое десктопное приложение для скриншотов',
      'Демонстрировать гибкость настроек'
    ],
    clientPersona: {
      name: 'Игорь Семенов',
      role: 'IT Manager',
      company: 'СибАгроПром (поставка запчастей для сельхозтехники)',
      personality: 'Консервативный, ориентирован на практичность, ROI',
      painPoints: [
        'Высокие стандарты сервиса для персонала и клиентов',
        'Нужна система, работающая в отдалённых филиалах',
        'Интеграция с телематикой Wialon для мониторинга',
        'Ограниченный бюджет, нужны быстрые результаты'
      ],
      budget: '3-5 млн рублей',
      timeline: '3-6 месяцев',
      decisionMaker: false
    },
    talkingPoints: [
      'Учет оборудования по филиалам',
      'Интеграция с Wialon',
      'API для создания простых приложений',
      'Справочники провайдеров для филиалов'
    ],
    successCriteria: [
      { skill: 'Адаптация к бизнесу', description: 'Понимание специфики агропрома', weight: 30 },
      { skill: 'Практичность', description: 'Акцент на быстрых результатах', weight: 25 },
      { skill: 'Технические решения', description: 'API и low-code возможности', weight: 25 },
      { skill: 'ROI', description: 'Демонстрация экономии на ФОТ', weight: 20 }
    ]
  },

  // Сценарий для IT-аутсорсинга
  {
    id: 'its-outsourcing-meeting',
    title: 'ITSM365.Outsource для аутсорсинговой компании',
    description: 'Презентация для IT-аутсорсинга: автоматизация работы выездных инженеров и поддержка клиентов.',
    type: 'meeting',
    difficulty: 'advanced',
    duration: 20,
    objectives: [
      'Показать возможности для внешней поддержки',
      'Демонстрировать мобильное приложение',
      'Обсудить разграничение прав сотрудников',
      'Работа с разными коммуникационными каналами'
    ],
    clientPersona: {
      name: 'Михаил Громов',
      role: 'CTO',
      company: 'ТехноСервис (IT-аутсорсинг, 50+ инженеров)',
      personality: 'Технический, требовательный, знает рынок',
      painPoints: [
        'Контроль работы сотрудников вне офиса',
        'Управление заявками разных клиентов',
        'Мобильное приложение для инженеров',
        'Удобное назначение заявок на группы'
      ],
      budget: '6-8 млн рублей',
      timeline: '6-9 месяцев',
      decisionMaker: true
    },
    talkingPoints: [
      'Мобильное приложение для специалистов',
      'Личный кабинет vs представителя (разграничение прав)',
      'Работа с почтой и комментариями в заявках',
      'Управление группами инженеров'
    ],
    successCriteria: [
      { skill: 'Продуктовое знание', description: 'Глубокое знание ITSM365.Outsource', weight: 30 },
      { skill: 'Техническое решение', description: 'Мобильная архитектура', weight: 25 },
      { skill: 'Адаптация к бизнесу', description: 'Понимание аутсорсинга', weight: 25 },
      { skill: 'Конкурентные преимущества', description: 'Отличие от других решений', weight: 20 }
    ]
  },

  // Сценарий для HR
  {
    id: 'hr-meeting',
    title: 'HR-automation для управляющей компании',
    description: 'Встреча с HR-директором крупной управляющей компании по автоматизации подбора персонала.',
    type: 'meeting',
    difficulty: 'intermediate',
    duration: 15,
    objectives: [
      'Понять потребности в автоматизации HR',
      'Показать возможности PRODUCT.HR',
      'Обсудить быстрый старт и обучение',
      'Демонстрировать экономию времени на подбор'
    ],
    clientPersona: {
      name: 'Ольга Соколова',
      role: 'HR Director',
      company: 'ПрофиИнвест (управляющая компания, 500+ сотрудников)',
      personality: 'Людский, ориентирована на процессы, экономия времени',
      painPoints: [
        'Большое количество кандидатов и резюме',
        'Рутинные процессы согласования',
        'Нужно закрывать вакансии быстрее',
        'Бюджетные ограничения'
      ],
      budget: '2-3 млн рублей',
      timeline: '3 месяца',
      decisionMaker: false
    },
    talkingPoints: [
      'База соискателей и резюме',
      'Согласование кандидатов',
      'Выход на работу',
      'Аналитика и отчетность'
    ],
    successCriteria: [
      { skill: 'HR-экспертиза', description: 'Понимание HR процессов', weight: 30 },
      { skill: 'Экономия времени', description: 'Акцент на скорости закрытия вакансий', weight: 25 },
      { skill: 'Простота внедрения', description: 'Быстрый старт без ИТ-специалистов', weight: 25 },
      { skill: 'Работа с бюджетом', description: 'Демонстрация ROI в HR', weight: 20 }
    ]
  },

  // ========================================
  // НОВЫЕ СЦЕНАРИИ РАБОТЫ С ВОЗРАЖЕНИЯМИ
  // ========================================

  // Сценарий: "Дорого" с реальными данными
  {
    id: 'price-objection-1',
    title: 'Возражение: "Дорого, конкуренты дешевле" (реальные бюджеты)',
    description: 'Работа с ценовым возражением с использованием реальных данных о бюджете и ROI.',
    type: 'objection',
    difficulty: 'intermediate',
    duration: 12,
    objectives: [
      'Не оправдываться за цену',
      'Перевести фокус на ценность и ROI',
      'Продемонстрировать реальные цифры экономии',
      'Сохранить позитивный тон'
    ],
    clientPersona: {
      name: 'Виктор Тихонов',
      role: 'Финансовый директор',
      company: 'ЛогистикПро',
      personality: 'Ценовой, ориентирован на цифры, sceptical',
      painPoints: [
        'Ограниченный бюджет',
        'Давление со стороны собственников на оптимизацию',
        'Нужно обосновать инвестиции',
        'Есть более дешёвые альтернативы'
      ],
      budget: '2-4 млн рублей',
      timeline: 'Не определён',
      decisionMaker: true
    },
    commonObjections: [
      'Дорого по сравнению с конкурентами',
      'У нас нет бюджета',
      'Нужно согласовать с финансовым отделом',
      'Можете сделать скидку?'
    ],
    talkingPoints: [
      'Сравнение с competitors: ROI vs цена',
      'Реальные цифры: -80% обращений по телефону',
      '1.5x рост производительности (реальный кейс)',
      'Экономия на ФОТ: -30% расходов на оплату труда'
    ],
    successCriteria: [
      { skill: 'Ценность vs цена', description: 'Убедительное обоснование ROI', weight: 35 },
      { skill: 'Реальные кейсы', description: 'Использование реальных данных', weight: 30 },
      { skill: 'Эмпатия', description: 'Признание финансовых ограничений', weight: 20 },
      { skill: 'Аргументация', description: 'Логическое сравнение альтернатив', weight: 15 }
    ]
  },

  // Сценарий: "У конкурентов работает, зачем менять?"
  {
    id: 'competitor-objection',
    title: 'Возражение: "Мы удовлетворены текущим решением"',
    description: 'Работа с клиентом, который использует решение конкурента и не видит причин переходить.',
    type: 'objection',
    difficulty: 'advanced',
    duration: 15,
    objectives: [
      'Не критиковать конкурента',
      'Выявить dissatisfaction с текущим решением',
      'Показать уникальные преимущества ITSM365',
      'Создать интерес к рассмотрению'
    ],
    clientPersona: {
      name: 'Анна Белова',
      role: 'CIO',
      company: 'ФинТех (финтех компания, 200+ сотрудников)',
      personality: 'Лояльна текущему поставщику, но открыта к диалогу',
      painPoints: [
        'Текущее решение "нормально работает"',
        'Нет явных проблем для перехода',
        'Сложности с миграцией',
        'Долгосрочный контракт с конкурентом'
      ],
      budget: '5-8 млн рублей',
      timeline: '12 месяцев',
      decisionMaker: true
    },
    commonObjections: [
      'Мы довольны текущим решением',
      'Переход будет сложным и дорогим',
      'Зачем что-то менять?',
      'У нас есть долгосрочный контракт'
    ],
    talkingPoints: [
      'Выявление скрытых проблем ("узких мест")',
      'Низкие капитальные затраты vs альтернативы',
      'Low-code платформа для развития без разработчиков',
      'Быстрый запуск (сравните с timelines внедрения конкурентов)'
    ],
    successCriteria: [
      { skill: 'Уважение к текущему решению', description: 'Не критика, а понимание', weight: 20 },
      { skill: 'Выявление проблем', description: 'Находка скрытых "болей"', weight: 30 },
      { skill: 'Дифференциация', description: 'Яркие преимущества ITSM365', weight: 30 },
      { skill: 'Создание интереса', description: 'Клиент открыт к продолжению', weight: 20 }
    ]
  },

  // Сценарий: "Нам нужно облако, а вы On-Premise"
  {
    id: 'cloud-objection',
    title: 'Возражение: "Нам требуется On-Premise решение"',
    description: 'Работа с клиентом, который требует On-Premise, а ITSM365 облачный.',
    type: 'objection',
    difficulty: 'advanced',
    duration: 12,
    objectives: [
      'Понять требования к безопасности',
      'Объяснить преимущества SaaS',
      'Договориться о гибридном решении',
      'Сохранить позитивную позицию'
    ],
    clientPersona: {
      name: 'Дмитрий Козлов',
      role: 'CISO',
      company: 'ГосТех (государственная организация)',
      personality: 'Консервативный, ориентирован на безопасность, бюрократ',
      painPoints: [
        'Требования законодательства (On-Premise)',
        'Опасности безопасности в облаке',
        'Внутренние процедуры согласования',
        'Опыт работы с On-Premise решениями'
      ],
      budget: '15-25 млн рублей',
      timeline: '12-18 месяцев',
      decisionMaker: false
    },
    commonObjections: [
      'Мы не можем использовать облачные решения',
      'Требуется On-Premise установка',
      'Вопросы безопасности данных',
      'Нужно согласовать с Information Security'
    ],
    talkingPoints: [
      'SaaS как стандарт в индустрии',
      'Безопасность на уровне enterprise',
      'Гибридные сценарии',
      'Быстрый старт vs длительное внедрение On-Premise'
    ],
    successCriteria: [
      { skill: 'Безопасность', description: 'Уверенные ответы по security', weight: 30 },
      { skill: 'Понимание бизнеса', description: 'Знание гос. сектора', weight: 25 },
      { skill: 'Адаптивность', description: 'Предложение гибридных решений', weight: 25 },
      { skill: 'Навыки переговоров', description: 'Работа с ограничениями', weight: 20 }
    ]
  },

  // ========================================
  // НОВЫЕ СЦЕНАРИИ ПЕРЕГОВОРОВ
  // ========================================

  // Сценарий: Финальные переговоры (реалистичный)
  {
    id: 'negotiation-realistic',
    title: 'Финальные переговоры: условия контракта',
    description: 'Сложные переговоры с procurement-менеджером крупной компании по условиям контракта ITSM365.',
    type: 'negotiation',
    difficulty: 'advanced',
    duration: 25,
    objectives: [
      'Урегулировать последние вопросы по условиям',
      'Согласовать параметры SLA и поддержки',
      'Преодолеть финальные возражения',
      'Закрыть сделку на выгодных условиях'
    ],
    clientPersona: {
      name: 'Мария Иванова',
      role: 'Procurement Manager',
      company: 'ТрансЛогистик (логистический холдинг, 1000+ сотрудников)',
      personality: 'Жёсткая, focused on price и условиях, опытный переговорщик',
      painPoints: [
        'Давление со стороны фин. директора на снижение затрат',
        'НеобходимостьApproval по внутренним процедурам',
        'Стандартные условия компании',
        'Требования к гарантиям и штрафным санкциям'
      ],
      budget: '10-15 млн рублей',
      timeline: 'Немедленно',
      decisionMaker: false
    },
    talkingPoints: [
      'Условия оплаты (предоплата vs постоплата)',
      'SLA и гарантии реагирования',
      'Штрафные санкции за просрочки',
      'Условия расторжения контракта',
      'Обучение и включённая техподдержка'
    ],
    successCriteria: [
      { skill: 'Подготовка', description: 'Знание всех деталей контракта', weight: 20 },
      { skill: 'Работа с возражениями', description: 'Финальные вопросы по условиям', weight: 25 },
      { skill: 'Торговые уступки', description: 'Умение торговаться без потерь', weight: 30 },
      { skill: 'Закрытие', description: 'Согласование следующего шага/подписания', weight: 25 }
    ]
  },

  // Сценарий: Переговоры с technical director
  {
    id: 'technical-negotiation',
    title: 'Переговоры с CTO: технические требования',
    description: 'Сложные переговоры с техническим директором по техническим требованиям и интеграциям.',
    type: 'negotiation',
    difficulty: 'advanced',
    duration: 20,
    objectives: [
      'Согласовать технические требования',
      'Обсудить интеграции с существующими системами',
      'Преодолеть технические возражения',
      'Согласовать POC (Proof of Concept)'
    ],
    clientPersona: {
      name: 'Алексей Смирнов',
      role: 'CTO',
      company: 'Банковские Технологии (финтех, 300+ сотрудников)',
      personality: 'Технический, требовательный, знает альтернативы',
      painPoints: [
        'Сложная интеграционная среда',
        'Множественные legacy-системы',
        'Требования к производительности и масштабируемости',
        'Опыт работы с другими решениями'
      ],
      budget: '12-18 млн рублей',
      timeline: '6-12 месяцев',
      decisionMaker: true
    },
    talkingPoints: [
      'API возможности и ограничения',
      'Производительность и SLA',
      'Интеграции с банковскими системами',
      'Security и compliance (PCI DSS)',
      'POC пилотный проект'
    ],
    successCriteria: [
      { skill: 'Техническая экспертиза', description: 'Глубокое знание продукта', weight: 35 },
      { skill: 'Работа с альтернативами', description: 'Дифференциация от конкурентов', weight: 25 },
      { skill: 'Техническое решение', description: 'Предложение POC', weight: 25 },
      { skill: 'Консенсус', description: 'Согласование технических критериев', weight: 15 }
    ]
  },

  // ========================================
  // СПЕЦИАЛЬНЫЕ СЦЕНАРИИ (разные уровни сложности)
  // ========================================

  // Сценарий для разных уровней LPR
  {
    id: 'mid-level-manager',
    title: 'Презентация для IT Manager (средний уровень)',
    description: 'Работа с IT Manager, который не является LPR, но влияет на решение.',
    type: 'meeting',
    difficulty: 'beginner',
    duration: 15,
    objectives: [
      'Понять роль и влияние менеджера',
      'Дать простую и понятную презентацию',
      'Получить champion внутри организации',
      'Создать путь к LPR'
    ],
    clientPersona: {
      name: 'Сергей Новиков',
      role: 'IT Manager',
      company: 'СтройСервис (строительная компания, 150 сотрудников)',
      personality: 'Практичный, устал от проблем, хочет простое решение',
      painPoints: [
        'Слишком много ручной работы',
        'Потеря заявок в Excel',
        'Нет прозрачности по нагрузке сотрудников',
        'Бюджет ограничен, нужен быстрый результат'
      ],
      budget: '1-2 млн рублей',
      timeline: '1-3 месяца',
      decisionMaker: false
    },
    talkingPoints: [
      'Быстрый старт и обучение',
      'Простота использования без программистов',
      'Визуализация нагрузки сотрудников',
      'Экономия времени на рутинных операциях'
    ],
    successCriteria: [
      { skill: 'Упрощение', description: 'Простые объяснения для не-технаря', weight: 30 },
      { skill: 'Пользы', description: 'Акцент на быстрый результат', weight: 30 },
      { skill: 'Champion', description: 'Создание союзника внутри', weight: 20 },
      { skill: 'Путь к LPR', description: 'Следующий шаг к Директору', weight: 20 }
    ]
  },

  // Сценарий для Enterprise (крупный бюджет)
  {
    id: 'enterprise-deal',
    title: 'Enterprise-сделка: холдинг с десятками компаний',
    description: 'Сложная сделка с управляющей компанией на предмет внедрения ITSM365 во все дочерние предприятия.',
    type: 'meeting',
    difficulty: 'advanced',
    duration: 25,
    objectives: [
      'Понять структуру холдинга и дочерних компаний',
      'Предложить централизованную и децентрализованную модели',
      'Обсудить корпоративные стандарты и security',
      'Согласовать pilot-проект в одной компании'
    ],
    clientPersona: {
      name: 'Владимир Кузнецов',
      role: 'CEO',
      company: 'ИнвестХолдинг (управляющая компания, 5 subsidiaries)',
      personality: 'Стратегический, думает долгосрочно, осторожный',
      painPoints: [
        'Разные процессы в разных компаниях',
        'Нужна стандартизация и единая платформа',
        'Сложности масштабирования на все компании',
        'Корпоративная безопасность и compliance',
        'ROI инвестиций на внедрение'
      ],
      budget: '25-40 млн рублей',
      timeline: '18-24 месяца',
      decisionMaker: true
    },
    talkingPoints: [
      'Централизация vs автономия дочерних компаний',
      'Корпоративные стандарты и best practices',
      'Поэтапный rollout: pilot → 3 компании → все',
      'ROI и экономия на уровне холдинга'
    ],
    successCriteria: [
      { skill: 'Стратегия', description: 'Понимание сложной структуры', weight: 30 },
      { skill: 'Enterprise-экспертиза', description: 'Знание корпоративных требований', weight: 25 },
      { skill: 'Долгосрочное видение', description: 'ROI на 3-5 лет', weight: 25 },
      { skill: 'Масштабирование', description: 'План поэтапного внедрения', weight: 20 }
    ]
  },

  // Сценарий для малого бизнеса (ограниченный бюджет)
  {
    id: 'smb-deal',
    title: 'Малый бизнес: автоматизация для агентства недвижимости',
    description: 'Работа с владельцем небольшого агентства недвижимости с ограниченным бюджетом.',
    type: 'meeting',
    difficulty: 'beginner',
    duration: 12,
    objectives: [
      'Понять ограничения малого бизнеса',
      'Предложить SaaS модель (без кап. затрат)',
      'Показать быстрый старт и ROI',
      'Адаптировать презентацию под бюджет'
    ],
    clientPersona: {
      name: 'Наталья Морозова',
      role: 'Owner',
      company: 'ДомМечты (агентство недвижимости, 15 сотрудников)',
      personality: 'Предприимчивая, считает деньги, ориентирована на результат',
      painPoints: [
        'Маленький бюджет на автоматизацию',
        'Нужен быстрый результат (нет времени на длительное внедрение)',
        'Сложно выделять специалиста на ИТ',
        'Нужна простая система без программистов'
      ],
      budget: '300-500 тыс. рублей',
      timeline: '1 месяц',
      decisionMaker: true
    },
    talkingPoints: [
      'Единое рабочее пространство: CRM и техподдержка',
      'SaaS модель: нет кап. затрат',
      'Low-code: настройка без программистов',
      'Быстрый старт: 1-2 недели'
    ],
    successCriteria: [
      { skill: 'Адаптация к бюджету', description: 'Простое решение для малого бизнеса', weight: 30 },
      { skill: 'Скорость результата', description: 'Быстрый старт и ROI', weight: 30 },
      { skill: 'Простота', description: 'Никаких программистов', weight: 25 },
      { skill: 'Закрытие', description: 'Подходит под бюджет', weight: 15 }
    ]
  }
];

// Получить сценарии по типу
export function getScenariosByType(type: 'meeting' | 'objection' | 'negotiation'): Scenario[] {
  return scenarios.filter(s => s.type === type);
}

// Получить сценарий по уровню сложности
export function getScenariosByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Scenario[] {
  return scenarios.filter(s => s.difficulty === difficulty);
}

// Получить сценарий по бюджету
export function getScenariosByBudget(maxBudget: number): Scenario[] {
  return scenarios.filter(s => {
    if (!s.clientPersona.budget) return true;
    const budgetNum = parseInt(s.clientPersona.budget.replace(/[^0-9]/g, ''));
    return budgetNum <= maxBudget;
  });
}

// Получить сценарий по роли LPR
export function getScenariosByRole(role: string): Scenario[] {
  const roleKeywords: Record<string, string[]> = {
    'CIO': ['CIO', 'IT Director', 'CTO'],
    'CEO': ['CEO', 'Owner', 'President'],
    'CFO': ['CFO', 'Финансовый'],
    'HR': ['HR', 'HRD'],
    'Procurement': ['Procurement', 'Закупки']
  };

  return scenarios.filter(s => {
    const keywords = roleKeywords[role] || [];
    return keywords.some(keyword =>
      s.clientPersona.role.includes(keyword) ||
      s.clientPersona.company.includes(keyword)
    );
  });
}

// Получить сценарий по типу клиента
export function getScenariosByIndustry(industry: string): Scenario[] {
  const industryKeywords: Record<string, string[]> = {
    'retail': ['кофе', 'ритейл', 'магазин'],
    'agro': ['агро', 'сельхоз', 'фермер'],
    'logistics': ['логист', 'транс', 'груз'],
    'finance': ['банк', 'финтех', 'страх'],
    'government': ['гос', 'муницип', 'администрац'],
    'it': ['аутсорс', 'консалтинг', 'it-', 'програм']
  };

  return scenarios.filter(s => {
    const keywords = industryKeywords[industry] || [];
    return keywords.some(keyword =>
      s.clientPersona.company.toLowerCase().includes(keyword) ||
      s.description.toLowerCase().includes(keyword)
    );
  });
}

// Получить сценарий с реальными кейсами (для сложных уровней)
export function getRealWorldScenarios(): Scenario[] {
  return scenarios.filter(s =>
    s.difficulty === 'advanced' && s.talkingPoints && s.talkingPoints.length > 0
  );
}

// Получить все сценарии
export function getAllScenarios(): Scenario[] {
  return scenarios;
}

// Получить сценарий для быстрого старта (beginner + intermediate)
export function getQuickStartScenarios(): Scenario[] {
  return scenarios.filter(s =>
    s.difficulty === 'beginner' || s.difficulty === 'intermediate'
  );
}

// Получить сценарии для продвинутых пользователей
export function getAdvancedScenarios(): Scenario[] {
  return scenarios.filter(s => s.difficulty === 'advanced');
}

// Получить сценарий для конкретного продукта
export function getScenariosByProduct(product: 'SUPPORT' | 'OUTSOURCE' | 'PROJECTS' | 'HR'): Scenario[] {
  const productKeywords: Record<string, string[]> = {
    'SUPPORT': ['поддержк', 'заявк', 'хелпдеск', 'ит-отдел', 'сервис'],
    'OUTSOURCE': ['аутсорс', 'выездн', 'инженер', 'клиент', 'филиал'],
    'PROJECTS': ['проект', 'команд', 'задач', 'deadline'],
    'HR': ['hr', 'персонал', 'резюме', 'кандидат', 'подбор']
  };

  return scenarios.filter(s => {
    const keywords = productKeywords[product] || [];
    return keywords.some(keyword =>
      s.description.toLowerCase().includes(keyword) ||
      s.talkingPoints?.some(point => point.toLowerCase().includes(keyword)) ||
      s.clientPersona.painPoints.some(point => point.toLowerCase().includes(keyword))
    );
  });
}

// Получить сценарий для специфических болей
export function getScenariosByPainPoint(painPoint: string): Scenario[] {
  return scenarios.filter(s =>
    s.clientPersona.painPoints.some(pain =>
      pain.toLowerCase().includes(painPoint.toLowerCase())
    )
  );
}

// Получить сценарии для LPR
export function getDecisionMakerScenarios(): Scenario[] {
  return scenarios.filter(s => s.clientPersona.decisionMaker === true);
}

// Получить сценарии с коротким timeline (быстрый старт)
export function getFastStartScenarios(maxMonths: number = 3): Scenario[] {
  return scenarios.filter(s => {
    if (!s.clientPersona.timeline) return true;
    const months = parseInt(s.clientPersona.timeline.toLowerCase());
    return months <= maxMonths;
  });
}

// Получить сценарий по ID
export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}
