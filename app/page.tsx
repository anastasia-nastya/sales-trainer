import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-slate-900 leading-tight">ITSM 365</h1>
                <p className="text-xs text-slate-500">Sales Trainer</p>
              </div>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/scenarios" className="text-sm font-medium text-slate-600 hover:text-blue-600">Сценарии</Link>
              <Link href="/resources" className="text-sm font-medium text-slate-600 hover:text-blue-600">Материалы</Link>
              <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-blue-600">Прогресс</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Экосистема ITSM 365
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Тренажёр менеджеров по продажам
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Отрабатывайте навыки B2B продаж в реалистичных сценариях с AI-клиентами.
              Встречи, возражения, переговоры — всё для достижения лучших результатов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/scenarios"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                Начать тренировку
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Материалы для продаж
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">18</div>
              <div className="text-sm text-slate-600">сценариев</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-slate-600">типа тренировок</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-sm text-slate-600">критерия оценки</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">AI</div>
              <div className="text-sm text-slate-600">клиенты</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Выберите сценарий тренировки</h2>
          <p className="text-slate-600">Практикуйтесь в реалистичных ситуациях с AI-клиентами</p>
        </div>

        <div className="space-y-12">
          {/* Meetings */}
          <ScenarioSection
            title="Встречи и презентации"
            description="Тренировка первых встреч и презентаций с IT-директорами и CIO"
            icon="meeting"
            color="blue"
            scenarios={meetings}
          />

          {/* Objections */}
          <ScenarioSection
            title="Работа с возражениями"
            description="Отработка типовых возражений: цена, конкуренты, сроки"
            icon="objection"
            color="amber"
            scenarios={objections}
          />

          {/* Negotiations */}
          <ScenarioSection
            title="Переговоры и закрытие"
            description="Финальный этап: условия контракта, procurement, закрытие сделки"
            icon="negotiation"
            color="green"
            scenarios={negotiations}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 ITSM 365. Тренажёр менеджеров по продажам.</p>
        </div>
      </footer>
    </div>
  );
}

function ScenarioSection({
  title,
  description,
  icon,
  color,
  scenarios
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
  scenarios: any[];
}) {
  const colors = {
    blue: { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
    green: { bg: 'bg-green-600', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  };
  const c = colors[color as keyof typeof colors];

  const icons = {
    meeting: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    objection: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    negotiation: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return (
    <section>
      <div className={`flex items-center gap-4 p-4 rounded-xl ${c.light} border ${c.border} mb-6`}>
        <div className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          {icons[icon as keyof typeof icons]}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {scenarios.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} color={color} />
        ))}
      </div>
    </section>
  );
}

function ScenarioCard({ scenario, color }: { scenario: any; color: string }) {
  const difficultyConfig = {
    beginner: { label: 'Начальный', color: 'bg-green-500' },
    intermediate: { label: 'Средний', color: 'bg-amber-500' },
    advanced: { label: 'Продвинутый', color: 'bg-red-500' },
  };

  const colors = {
    blue: { primary: 'bg-blue-600', hover: 'hover:bg-blue-700', badge: 'bg-blue-50 text-blue-700' },
    amber: { primary: 'bg-amber-500', hover: 'hover:bg-amber-600', badge: 'bg-amber-50 text-amber-700' },
    green: { primary: 'bg-green-600', hover: 'hover:bg-green-700', badge: 'bg-green-50 text-green-700' },
  };
  const c = colors[color as keyof typeof colors];
  const difficulty = difficultyConfig[scenario.difficulty as keyof typeof difficultyConfig];

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block group">
      <div className="bg-white rounded-xl border border-slate-200 p-5 h-full flex flex-col hover:border-blue-400 hover:shadow-md transition-all">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 ${c.badge} rounded-lg flex items-center justify-center`}>
            <svg className="w-5 h-5" style={{color: color === 'blue' ? '#2563EB' : color === 'amber' ? '#F59E0B' : '#059669'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-6 9H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span className={`px-2.5 py-1 text-xs font-semibold text-white rounded-full ${difficulty.color}`}>
            {difficulty.label}
          </span>
        </div>

        {/* Content */}
        <h4 className="text-base font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {scenario.title}
        </h4>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
          {scenario.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.duration} мин
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.objectives?.length} критерия
          </div>
        </div>

        {/* Client */}
        <div className="border-t border-slate-200 pt-4 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
              <span className="text-sm font-semibold text-slate-600">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-900 truncate">{scenario.clientPersona.name}</p>
              <p className="text-xs text-slate-500 truncate">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className={`w-full py-2.5 ${c.primary} ${c.hover} text-white font-semibold rounded-lg transition-colors text-sm`}>
            Начать тренировку
          </button>
        </div>
      </div>
    </Link>
  );
}
