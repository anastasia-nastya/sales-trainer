import Link from 'next/link';

// Полезные материалы для менеджеров по продажам ITSM365
const materials = [
  // Презентации
  {
    id: 'pres-1',
    title: 'ITSM 365. Полная презентация',
    description: 'Коммерческая презентация ITSM365 для встреч с клиентами. Все продукты, преимущества, кейсы.',
    type: 'presentation',
    category: 'overview',
    fileSize: '4.2 MB',
    format: 'PDF',
    downloadUrl: '/materials/presentations/itsm365-full.pdf',
    icon: '📊'
  },
  {
    id: 'pres-2',
    title: 'ITSM 365. Для ритейла',
    description: 'Презентация для сетевых магазинов, ресторанов, кофеен. Кейсы, интеграции, ROI.',
    type: 'presentation',
    category: 'industry',
    fileSize: '2.8 MB',
    format: 'PDF',
    downloadUrl: '/materials/presentations/itsm365-retail.pdf',
    icon: '🛍️'
  },
  {
    id: 'pres-3',
    title: 'ITSM 365. Для аутсорсинга',
    description: 'Презентация для IT-аутсорсинговых компаний. Управление клиентами, инженерами, SLA.',
    type: 'presentation',
    category: 'industry',
    fileSize: '3.1 MB',
    format: 'PDF',
    downloadUrl: '/materials/presentations/itsm365-outsourcing.pdf',
    icon: '🎯'
  },
  {
    id: 'pres-4',
    title: 'ITSM 365. Для HR',
    description: 'Презентация PRODUCT.HR для подбора персонала. Автоматизация HR процессов.',
    type: 'presentation',
    category: 'industry',
    fileSize: '2.5 MB',
    format: 'PDF',
    downloadUrl: '/materials/presentations/itsm365-hr.pdf',
    icon: '👥'
  },

  // Скрипты продаж
  {
    id: 'script-1',
    title: 'Скрипт: Холодный звонок',
    description: 'Пошаговый скрипт для холодного звонка потенциальному клиенту. Открытие, квалификация, презентация ценности.',
    type: 'script',
    category: 'sales-scripts',
    pages: 4,
    content: 'cold-call-script'
  },
  {
    id: 'script-2',
    title: 'Скрипт: Первая встреча с CIO',
    description: 'Структура первой встречи с CIO/IT директором. Establishing rapport, разведка, презентация, закрытие.',
    type: 'script',
    category: 'sales-scripts',
    pages: 6,
    content: 'cio-meeting-script'
  },
  {
    id: 'script-3',
    title: 'Скрипт: Работа с возражением "Дорого"',
    description: 'Отработка ценового возражения. ROI, сравнение с конкурентами, альтернативные выгоды.',
    type: 'script',
    category: 'sales-scripts',
    pages: 5,
    content: 'price-objection-script'
  },
  {
    id: 'script-4',
    title: 'Скрипт: Финальные переговоры',
    description: 'Структура финальных переговоров. Условия контракта, SLA, скидки, закрытие сделки.',
    type: 'script',
    category: 'sales-scripts',
    pages: 4,
    content: 'negotiation-script'
  },

  // Кейсы клиентов
  {
    id: 'case-1',
    title: 'Кейс: Сеть кофеен (300+ точек)',
    company: 'КофейнаяРост',
    industry: 'Ритейл',
    challenge: 'Поддержка сотен точек в реальном времени: кассы, wi-fi, оборудование',
    solution: 'ITSM 365.Outsource, SaaS модель, API интеграции',
    results: ['Омниканальная поддержка', 'Самостоятельное развитие', 'Удалённый контроль'],
    roi: 'Снижение времени реакции на 40%',
    type: 'case-study',
    icon: '☕'
  },
  {
    id: 'case-2',
    title: 'Кейс: Агропромышленный комплекс',
    company: 'СибАгроПром',
    industry: 'Сельское хозяйство',
    challenge: 'Поддержка сотрудников в филиалах, интеграция с Wialon',
    solution: 'ITSM 365.SUPPORT + API, простые приложения, справочники',
    results: ['Простые приложения для сотрудников', 'Интеграция с Wialon', 'Быстрый старт'],
    roi: 'Экономия времени техподдержки',
    type: 'case-study',
    icon: '🌾'
  },
  {
    id: 'case-3',
    title: 'Кейс: IT-аутсорсинг (50+ инженеров)',
    company: 'ТехноСервис',
    industry: 'IT-аутсорсинг',
    challenge: 'Управление инженерами, работа с клиентами, мобильное приложение',
    solution: 'ITSM 365.Outsource, мобильное приложение, разграничение прав',
    results: ['Контроль инженеров', 'Личный кабинет клиента', 'Удобное назначение'],
    roi: 'Эффективность +30%',
    type: 'case-study',
    icon: '💻'
  },

  // Сравнительные таблицы
  {
    id: 'comparison-1',
    title: 'ITSM365 vs ServiceNow',
    type: 'comparison',
    competitor: 'ServiceNow',
    focus: 'Цена, скорость, русификация',
    icon: '🆚'
  },
  {
    id: 'comparison-2',
    title: 'ITSM365 vs Jira Service Management',
    type: 'comparison',
    competitor: 'Jira SM',
    focus: 'Простота, поддержка, экосистема',
    icon: '📊'
  },

  // Карточки для встреч
  {
    id: 'card-1',
    title: 'Карточка: Первая встреча',
    description: 'Quick reference карточка для первой встречи с клиентом. Ключевые вопросы, структура, тайминг.',
    type: 'reference-card',
    category: 'meeting',
    format: 'PDF',
    icon: '📝'
  },
  {
    id: 'card-2',
    title: 'Карточка: Возражения',
    description: 'Карточка с типовыми возражениями и ответами. Цена, конкуренты, сроки, интеграции.',
    type: 'reference-card',
    category: 'objection',
    format: 'PDF',
    icon: '📋'
  },
  {
    id: 'card-3',
    title: 'Карточка: Переговоры',
    description: 'Карточка для финальных переговоров. Условия, SLA, скидки, закрытие.',
    type: 'reference-card',
    category: 'negotiation',
    format: 'PDF',
    icon: '🎯'
  },

  // FAQ по возражениям
  {
    id: 'faq-1',
    title: 'FAQ: Возражение "Дорого"',
    question: 'Как отвечать на "Дорого?"',
    answers: [
      'Покажите ROI: экономия 30% ФОТ, 5x быстрее обработка',
      'Сравните с стоимостью текущего решения',
      'Предложите рассрочку или поэтапное внедрение'
    ],
    type: 'faq',
    category: 'objection',
    icon: '💬'
  },
  {
    id: 'faq-2',
    title: 'FAQ: Возражение "У конкурентов всё работает"',
    question: 'Как работать с лояльностью к текущему решению?',
    answers: [
      'Уважайте текущий выбор клиента',
      'Найдите скрытые проблемы и боли',
      'Покажите низкие капитальные затраты vs SaaS',
      'Предложите пилот на одном отделе'
    ],
    type: 'faq',
    category: 'objection',
    icon: '💬'
  }
];

const categories = [
  { id: 'all', name: 'Все материалы', icon: '📚' },
  { id: 'presentations', name: 'Презентации', icon: '📊' },
  { id: 'sales-scripts', name: 'Скрипты продаж', icon: '🎯' },
  { id: 'case-studies', name: 'Кейсы клиентов', icon: '🏆' },
  { id: 'comparisons', name: 'Сравнения', icon: '⚖️' },
  { id: 'reference-cards', name: 'Карточки', icon: '📝' },
  { id: 'faq', name: 'FAQ', icon: '💬' }
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1F2937]">ITSM 365</h1>
                <p className="text-xs text-[#6B7280]">Тренажёр продаж</p>
              </div>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/scenarios" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">
                Сценарии
              </Link>
              <Link href="/resources" className="text-sm text-[#2563EB] font-medium">
                Материалы
              </Link>
              <Link href="/dashboard" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">
                Дашборд
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-[#1F2937] mb-4">
              Материалы для менеджеров по продажам ITSM 365
            </h1>
            <p className="text-xl text-[#6B7280] mb-8">
              Презентации, скрипты, кейсы и инструменты для успешных продаж
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-full">
                📊 Презентации
              </span>
              <span className="px-4 py-2 bg-[#10B981] text-white text-sm font-medium rounded-full">
                🎯 Скрипты
              </span>
              <span className="px-4 py-2 bg-[#8B5CF6] text-white text-sm font-medium rounded-full">
                🏆 Кейсы
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  cat.id === 'all'
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-gray-100 text-[#4B5563] hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#9CA3AF]">© 2024 ITSM 365. Все права защищены.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-[#9CA3AF]">🔗 https://salestrainer-itsm.netlify.app</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MaterialCard({ material }: { material: any }) {
  const getCategoryInfo = () => {
    switch (material.type) {
      case 'presentation':
        return {
          color: 'from-blue-500 to-blue-600',
          bgColor: 'bg-blue-50',
          icon: '📊'
        };
      case 'script':
        return {
          color: 'from-green-500 to-green-600',
          bgColor: 'bg-green-50',
          icon: '🎯'
        };
      case 'case-study':
        return {
          color: 'from-purple-500 to-purple-600',
          bgColor: 'bg-purple-50',
          icon: '🏆'
        };
      case 'comparison':
        return {
          color: 'from-orange-500 to-orange-600',
          bgColor: 'bg-orange-50',
          icon: '⚖️'
        };
      case 'reference-card':
        return {
          color: 'from-pink-500 to-pink-600',
          bgColor: 'bg-pink-50',
          icon: '📝'
        };
      case 'faq':
        return {
          color: 'from-teal-500 to-teal-600',
          bgColor: 'bg-teal-50',
          icon: '💬'
        };
      default:
        return {
          color: 'from-gray-500 to-gray-600',
          bgColor: 'bg-gray-50',
          icon: '📄'
        };
    }
  };

  const info = getCategoryInfo();

  return (
    <Link href={`/materials/${material.id}`} className="block">
      <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#2563EB] hover:shadow-xl transition-all cursor-pointer group h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-gradient-to-br {info.color} rounded-xl flex items-center justify-center text-2xl mb-2">
            {material.icon || info.icon}
          </div>
          {material.fileSize && (
            <span className="text-xs text-[#6B7280] bg-gray-100 px-2 py-1 rounded">
              {material.fileSize}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#2563EB] transition-colors">
          {material.title}
        </h3>
        <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">
          {material.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-[#6B7280]">
            {material.type === 'presentation' && 'PDF'}
            {material.type === 'script' && `${material.pages} страницы`}
            {material.type === 'case-study' && 'Кейс'}
            {material.type === 'comparison' && 'Сравнение'}
          </span>
          <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}