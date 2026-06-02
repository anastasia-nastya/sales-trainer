import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#F0F7FF'}}>
      <header style={{backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div style={{width: '40px', height: '40px', backgroundColor: '#2563EB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px'}}>IT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-black">ITSM 365</h1>
                <p className="text-xs text-[#6B7280]">Тренажёр менеджеров по продажам</p>
              </div>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/dashboard" className="text-sm font-medium text-[#6B7280]">Дашборд</Link>
              <Link href="/history" className="text-sm font-medium text-[#6B7280]">История</Link>
              <Link href="/profile" className="text-sm font-medium text-[#6B7280]">Профиль</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-black mb-4">
          Добро пожаловать в тренажёр продаж
        </h1>
        <p className="text-base text-[#6B7280] mb-12 max-w-lg">
          Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях.
          Отработка встреч, работа с возражениями, переговоры — всё в одном тренажёре.
        </p>

        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div style={{width: '48px', height: '48px', backgroundColor: '#2563EB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '24px', height: '24px', color: '#FFFFFF'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">Встречи и презентации</h2>
              <p className="text-sm text-[#6B7280]">Тренировка проведения встреч с CIO и IT директорами</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {meetings.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div style={{width: '48px', height: '48px', backgroundColor: '#2563EB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '24px', height: '24px', color: '#FFFFFF'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">Работа с возражениями</h2>
              <p className="text-sm text-[#6B7280]">Отработка типовых возражений клиентов</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-6">
            <div style={{width: '48px', height: '48px', backgroundColor: '#2563EB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '24px', height: '24px', color: '#FFFFFF'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">Переговоры и закрытие</h2>
              <p className="text-sm text-[#6B7280]">Финальный этап переговоров и закрытие сделок</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {negotiations.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>
      </main>

      <footer style={{backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', padding: '32px 16px', marginTop: '48px'}}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[#6B7280]">© 2024 ITSM 365. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyConfig = {
    beginner: { label: 'Начальный', color: '#10B981' },
    intermediate: { label: 'Средний', color: '#F59E0B' },
    advanced: { label: 'Продвинутый', color: '#EF4444' },
  };
  const difficulty = difficultyConfig[scenario.difficulty as keyof typeof difficultyConfig];

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block">
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        padding: '24px',
        transition: 'box-shadow 0.2s',
        cursor: 'pointer'
      }}
      className="hover:shadow-md"
      >
        <div className="flex items-start justify-between mb-4">
          <div style={{width: '48px', height: '48px', backgroundColor: '#2563EB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <svg style={{width: '24px', height: '24px', color: '#FFFFFF'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-6 9H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span style={{
            padding: '4px 12px',
            backgroundColor: difficulty.color,
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: '600',
            borderRadius: '9999px'
          }}>
            {difficulty.label}
          </span>
        </div>

        <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
          {scenario.title}
        </h3>

        <p className="text-sm text-[#6B7280] mb-4 line-clamp-3">
          {scenario.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-[#6B7280]">
          <div className="flex items-center gap-1">
            <svg style={{width: '16px', height: '16px', color: '#2563EB'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.duration} мин
          </div>
          <div className="flex items-center gap-1">
            <svg style={{width: '16px', height: '16px', color: '#10B981'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.objectives?.length} критерия успеха
          </div>
        </div>

        <div style={{borderTop: '1px solid #E5E7EB', paddingTop: '16px', marginBottom: '16px'}}>
          <div className="flex items-center gap-3">
            <div style={{width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{fontSize: '14px', fontWeight: '600', color: '#2563EB'}}>
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-black">{scenario.clientPersona.name}</p>
              <p className="text-xs text-[#6B7280]">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        <button style={{
          width: '100%',
          padding: '12px 16px',
          backgroundColor: '#2563EB',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: '600',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'backgroundColor 0.2s'
        }}
        className="hover:bg-[#1D4ED8]"
        >
          Начать тренировку
        </button>
      </div>
    </Link>
  );
}
