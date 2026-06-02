import Link from 'next/link';

// Данные о ресурсах
const presentationResources = [
  {
    id: 'pres-1',
    title: 'ITSM 365 для ритейла',
    description: 'Презентация для сетевых магазинов, ресторанов, кофеен. Ключевые боли и решения.',
    type: 'PDF',
    size: '2.4 MB',
    industry: 'retail',
    url: '/resources/files/itsm365-retail.pdf'
  },
  {
    id: 'pres-2',
    title: 'ITSM 365 для производственных предприятий',
    description: 'Специфика производственных компаний, интеграции, кейсы внедрения.',
    type: 'PDF',
    size: '3.1 MB',
    industry: 'manufacturing',
    url: '/resources/files/itsm365-manufacturing.pdf'
  },
  {
    id: 'pres-3',
    title: 'ITSM 365 для IT-аутсорсинга',
    description: 'Решение для аутсорсинговых компаний: управление клиентами, инженерами, SLA.',
    type: 'PDF',
    size: '2.8 MB',
    industry: 'it-outsourcing',
    url: '/resources/files/itsm365-outsourcing.pdf'
  },
  {
    id: 'pres-4',
    title: 'ITSM 365. Общая презентация',
    description: 'Обзор экосистемы продуктов: SUPPORT, OUTSOURCE, PROJECTS, HR.',
    type: 'PDF',
    size: '4.5 MB',
    industry: 'general',
    url: '/resources/files/itsm365-overview.pdf'
  }
];

const salesScripts = [
  {
    id: 'script-1',
    title: 'Холодный звонок: Первый контакт',
    description: 'Скрипт для первого холодного звонка потенциальному клиенту.',
    category: 'cold-call',
    content: `
# Холодный звонок: Первый контакт

## Открытие
- "Здравствуйте, это [Имя] из компании ITSM 365. Удобно ли вам говорить пару минут?"
- "Хотим поделиться, как другие компании в вашей отрасли автоматизируют IT-поддержку"

## Квалификация
- "Скажите, как сейчас организована работа техподдержки в вашей компании?"
- "Сколько сотрудников в IT-отделе?"
- "Есть ли система для управления заявками?"

## Презентация ценности
- "ITSM 365 — это российская облачная платформа для управления IT-услугами"
- "Наши клиенты сокращают время обработки заявок в 5 раз и снижают ФОТ на 30%"
- "Внедрение занимает от 2 недель до 2 месяцев в зависимости от масштаба"

## Закрытие на следующий шаг
- "Давайте договоримся о демо на следующей неделе?"
- "Могу я выслать вам презентацию и кейсы похожих компаний?"
    `
  },
  {
    id: 'script-2',
    title: 'Встреча с CIO: Структура',
    description: 'Структура первой встречи с CIO/IT директором.',
    category: 'meeting',
    content: `
# Встреча с CIO: Структура

## 1. Establishing Rapport (5 минут)
- Small talk: отрасли, тренды, новости
- "Какие у вас планы по цифровизации в этом году?"
- "С какими вызовами сталкиваетесь?"

## 2. Разведка (10 минут)
- "Расскажите о текущей IT-инфраструктуре"
- "Как организована работа техподдержки?"
- "Что работает хорошо? Что не работает?"
- "Сколько заявок в месяц? Какие SLA?"

## 3. Презентация решения (15 минут)
- Кратко о ITSM 365 (2-3 слайда)
- Кейсы похожих компаний
- Ключевые преимущества: low-code, SaaS, российская поддержка

## 4. Закрытие на следующий шаг (5 минут)
- "Какой следующий шаг имеет смысл?"
- "Хотите демо с обсуждением ваших требований?"
    `
  },
  {
    id: 'script-3',
    title: 'Работа с возражением "Дорого"',
    description: 'Скрипт для отработки ценового возражения.',
    category: 'objection',
    content: `
# Работа с возражением "Дорого"

## Схема:

### 1. Признание и эмпатия
- "Понимаю, цена — важный фактор"
- "Конечно, бюджет нужно оптимизировать"

### 2. Уточнение
- "По сравнению с кем дорого?"
- "Что входит в ваше текущее решение?"
- "Какие расходы вы сейчас несете на ITSM?"

### 3. Ценность vs цена
- "Давайте посчитаем: 1 менеджер стоит 80 тыс/мес = 960 тыс/год"
- "ITSM 365 экономит 30% ФОТ = 288 тыс/год экономии"
- "При бюджете 500 тыс/год, окупаемость — 1.7 года"

### 4. ROI и бизнес-кейс
- "Наши клиенты видят результат в первые 3 месяца"
- "Могу показать кейс [Компания] — они сэкономили X млн"

### 5. Закрытие
- "Давайте обсудим варианты оплаты?"
- "Можем рассмотреть рассрочку?"
    `
  },
  {
    id: 'script-4',
    title: 'Переговоры: Скидка и условия',
    description: 'Скрипт для финальных переговоров.',
    category: 'negotiation',
    content: `
# Переговоры: Скидка и условия

## Стратегия:

### 1. Понимание бюджетного процесса
- "Расскажите о вашем процессе утверждения бюджета"
- "Кто принимает финальное решение?"
- "Какие сроки рассмотрения?"

### 2. Альтернативы вместо скидки
- Вместо скидки 15%:
  - Бесплатное обучение (стоимость 50 тыс)
  - 3 месяца бесплатной поддержки
  - Дополнительные пользователи

### 3. Условия оплаты
- "Предоплата 50% / 50% после внедрения"
- "Постплата с банковской гарантией"
- "Рассрочка на 6 месяцев"

### 4. Добавление ценности
- "При оплате за год — скидка 20%"
- "При заключении на 2 продукта — скидка 15%"
- "При бюджете выше X — персональные условия"

### 5. Закрытие
- "Предлагаю: [условия]. Согласны?"
- "Когда можем подписать?"
    `
  }
];

const customerCases = [
  {
    id: 'case-1',
    title: 'Сеть кофеен: 300+ точек',
    company: 'КофейнаяРост (сеть кофеен)',
    industry: 'Ритейл',
    challenge: 'Поддержка сотен точек в реальном времени: кассы, wi-fi, оборудование',
    solution: 'ITSM 365.Outsource, SaaS модель, API интеграции',
    results: [
      'Омниканальная поддержка: телефон, email, мобильное приложение',
      'Самостоятельное развитие новых сервисов',
      'Удалённый контроль всех точек',
      'Снижение времени реакции на 40%'
    ],
    quote: 'ITSM 365 позволил всесторонне автоматизировать поддержку наших кофеен'
  },
  {
    id: 'case-2',
    title: 'Агропромышленный комплекс',
    company: 'СибАгроПром (поставка запчастей)',
    industry: 'Сельское хозяйство',
    challenge: 'Высокие стандарты сервиса для персонала и клиентов, ограниченный бюджет',
    solution: 'ITSM 365.SUPPORT, API для простых приложений, интеграция с Wialon',
    results: [
      'Простое десктопное приложение для скриншотов',
      'Интеграция с телематикой Wialon',
      'Справочники провайдеров для филиалов',
      'Быстрый старт без ИТ-специалистов'
    ],
    quote: 'Наиболее гибким и функциональным инструментом автоматизации'
  },
  {
    id: 'case-3',
    title: 'IT-аутсорсинг: 50+ инженеров',
    company: 'ТехноСервис (IT-аутсорсинг)',
    industry: 'IT-аутсорсинг',
    challenge: 'Контроль работы сотрудников вне офиса, управление заявками разных клиентов',
    solution: 'ITSM 365.Outsource, мобильное приложение, разграничение прав',
    results: [
      'Мобильное приложение для инженеров',
      'Личный кабинет представителя клиента',
      'Удобное назначение на группы',
      'Понравилось: можно разграничить права сотрудников клиента'
    ],
    quote: 'Удобно и функционально — отличный выбор за свои деньги'
  }
];

const competitiveData = [
  {
    competitor: 'ServiceNow',
    strengths: ['Мощная платформа', 'Международный бренд', 'Большое комьюнити'],
    weaknesses: ['Дорогое внедрение', 'Сложная настройка', 'Долгий timeline', 'Англоязычный интерфейс'],
    itsm365Advantages: [
      'В 5-10 раз дешевле внедрение',
      'Русскоязычный интерфейс и поддержка',
      'Быстрый старт (2-8 недель)',
      'Low-code без разработчиков',
      'Российская техподдержка 24/7'
    ]
  },
  {
    competitor: 'Jira Service Management',
    strengths: ['Популярность', 'Интеграция с Atlassian', ' гибкие настройки'],
    weaknesses: ['Сложная для бизнеса', 'Требует администратора', 'Ориентирована на IT'],
    itsm365Advantages: [
      'Простой интерфейс для бизнес-пользователей',
      'Встроенные шаблоны процессов',
      'Не требует администратора',
      'Работает из коробки',
      'Низкая стоимость владения'
    ]
  },
  {
    competitor: 'Наши临床 решения (SD, HelpDesk)',
    strengths: ['Российские решения', 'Низкая цена'],
    weaknesses: ['Ограниченный функционал', 'Слабая масштабируемость', 'Редкие обновления'],
    itsm365Advantages: [
      'Экосистема 4 продуктов',
      'Low-code платформа',
      'Активная разработка',
      '400+ клиентов',
      'Регулярные релизы'
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ITSM 365</h1>
                <p className="text-xs text-gray-500">Тренажёр продаж</p>
              </div>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/scenarios" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Сценарии
              </Link>
              <Link href="/resources" className="text-sm text-blue-600 font-medium">
                Ресурсы
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Полезные материалы для менеджеров
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Презентации, скрипты продаж, чек-листы и кейсы клиентов — всё для успешных продаж ITSM 365
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs Navigation */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          <button className="pb-4 px-1 text-blue-600 font-medium border-b-2 border-blue-600">
            Презентации
          </button>
          <button className="pb-4 px-1 text-gray-500 hover:text-gray-700">
            Скрипты
          </button>
          <button className="pb-4 px-1 text-gray-500 hover:text-gray-700">
            Кейсы
          </button>
          <button className="pb-4 px-1 text-gray-500 hover:text-gray-700">
            Конкуренты
          </button>
        </div>

        {/* Презентации */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Презентации</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {presentationResources.map((resource) => (
              <div key={resource.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{resource.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{resource.size}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Скачать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Скрипты продаж */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Скрипты продаж</h2>
          <div className="space-y-6">
            {salesScripts.map((script) => (
              <div key={script.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{script.title}</h3>
                      <p className="text-gray-600 text-sm">{script.description}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-green-50 text-green-700 px-2 py-1 rounded capitalize">
                      {script.category}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Просмотреть скрипт
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Кейсы клиентов */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Кейсы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {customerCases.map((case_) => (
              <div key={case_.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{case_.title}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-4">{case_.company}</p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-700 mb-1">Вызов:</p>
                    <p className="text-sm text-gray-600">{case_.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-700 mb-1">Решение:</p>
                    <p className="text-sm text-gray-600">{case_.solution}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-700 mb-2">Результаты:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {case_.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-4 border-blue-500 pl-3 italic text-gray-700 text-sm">
                    "{case_.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Конкурентный анализ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Конкурентный анализ</h2>
          <div className="space-y-6">
            {competitiveData.map((comp, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ITSM 365 vs {comp.competitor}</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Сильные стороны {comp.competitor}:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {comp.strengths.map((s, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Слабые стороны {comp.competitor}:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {comp.weaknesses.map((w, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="text-sm font-medium text-blue-900 mb-2">Преимущества ITSM 365:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      {comp.itsm365Advantages.map((a, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h4 className="font-bold">ITSM 365</h4>
                <p className="text-xs text-gray-400">Тренажёр продаж</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">© 2024 ITSM 365. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}