import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-itsm-bg">
      {/* Header */}
      <header className="bg-white border-b border-itsm-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-itsm-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-black">ITSM 365</h1>
                <p className="text-xs text-itsm-gray">Тренажёр менеджеров по продажам</p>
              </div>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/dashboard" className="text-sm font-medium text-itsm-gray">Дашборд</Link>
              <Link href="/history" className="text-sm font-medium text-itsm-gray">История</Link>
              <Link href="/profile" className="text-sm font-medium text-itsm-gray">Профиль</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-black mb-4">
          Добро пожаловать в тренажёр продаж
        </h1>
        <p className="text-base text-itsm-gray mb-12 max-w-lg">
          Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях.
          Отработка встреч, работа с возражениями, переговоры — всё в одном тренажёре.
        </p>

        {/* Meetings */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-itsm-blue rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">Встречи и презентации</h2>
              <p className="text-sm text-itsm-gray">Тренировка проведения встреч с CIO и IT директорами</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {meetings.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        {/* Objections */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-itsm-blue rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">Работа с возражениями</h2>
              <p className="text-sm text-itsm-gray">Отработка типовых возражений клиентов</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        {/* Negotiations */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-itsm-blue rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">Переговоры и закрытие</h2>
              <p className="text-sm text-itsm-gray">Финальный этап переговоров и закрытие сделок</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {negotiations.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-itsm-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-itsm-gray">© 2024 ITSM 365. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyConfig = {
    beginner: { label: 'Начальный', color: 'bg-itsm-green' },
    intermediate: { label: 'Средний', color: 'bg-itsm-amber' },
    advanced: { label: 'Продвинутый', color: 'bg-itsm-red' },
  };
  const difficulty = difficultyConfig[scenario.difficulty as keyof typeof difficultyConfig];

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block">
      <div className="bg-white rounded-lg p-6 border border-itsm-border hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-itsm-blue rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-6 9H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${difficulty.color}`}>
            {difficulty.label}
          </span>
        </div>

        <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
          {scenario.title}
        </h3>

        <p className="text-sm text-itsm-gray mb-4 line-clamp-3">
          {scenario.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-itsm-gray">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-itsm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.duration} мин
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-itsm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.objectives?.length} критерия успеха
          </div>
        </div>

        <div className="border-t border-itsm-border pt-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-itsm-blue-light rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-itsm-blue">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-black">{scenario.clientPersona.name}</p>
              <p className="text-xs text-itsm-gray">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-itsm-blue hover:bg-itsm-blue-dark text-white font-semibold rounded-lg transition-colors">
          Начать тренировку
        </button>
      </div>
    </Link>
  );
}
