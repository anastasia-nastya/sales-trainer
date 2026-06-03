import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-[#F0F7FF]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">IT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">ITSM 365</h1>
                <p className="text-xs text-gray-500">Тренажёр менеджеров по продажам</p>
              </div>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/dashboard" className="text-gray-600 hover:text-[#2563EB]">Дашборд</Link>
              <Link href="/history" className="text-gray-600 hover:text-[#2563EB]">История</Link>
              <Link href="/profile" className="text-gray-600 hover:text-[#2563EB]">Профиль</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Добро пожаловать в тренажёр продаж
        </h1>
        <p className="text-sm text-gray-600 mb-10">
          Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях
        </p>

        {/* Meetings */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#2563EB] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">Встречи и презентации</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {meetings.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        {/* Objections */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#2563EB] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">Работа с возражениями</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {objections.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        {/* Negotiations */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#2563EB] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">Переговоры и закрытие</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {negotiations.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E7EB] py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-500">© 2024 ITSM 365. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyConfig = {
    beginner: { label: 'Начальный', color: 'bg-green-500', text: 'text-green-700' },
    intermediate: { label: 'Средний', color: 'bg-amber-500', text: 'text-amber-700' },
    advanced: { label: 'Продвинутый', color: 'bg-red-500', text: 'text-red-700' },
  };
  const difficulty = difficultyConfig[scenario.difficulty as keyof typeof difficultyConfig];

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block">
      <div className="bg-white rounded-lg p-5 border border-[#E5E7EB] hover:border-[#2563EB] hover:shadow-sm transition-all">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 bg-[#2563EB] rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-6 9H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${difficulty.color}`}>
            {difficulty.label}
          </span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
          {scenario.title}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {scenario.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.duration} мин
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.objectives?.length} критерия
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] pt-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#EFF6FF] rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-[#2563EB]">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900">{scenario.clientPersona.name}</p>
              <p className="text-xs text-gray-500">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95 text-sm flex items-center justify-center gap-2">
          <span>Начать тренировку</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </Link>
  );
}
