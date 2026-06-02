import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">ITSM 365</h1>
                <p className="text-xs text-gray-500">Экосистема решений</p>
              </div>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/scenarios" className="text-sm text-gray-600 hover:text-blue-600">Сценарии</Link>
              <Link href="/resources" className="text-sm text-gray-600 hover:text-blue-600">Ресурсы</Link>
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-blue-600">Дашборд</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Тренажёр менеджеров по продажам
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/scenarios"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Начать тренировку
            </Link>
            <Link
              href="/resources"
              className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
            >
              Материалы
            </Link>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Сценарии тренировок
          </h2>

          {/* Meetings */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Встречи и презентации</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetings.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </div>

          {/* Objections */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Работа с возражениями</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {objections.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </div>

          {/* Negotiations */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Переговоры и закрытие</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {negotiations.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 ITSM 365. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyColors: Record<string, string> = {
    beginner: 'bg-green-500',
    intermediate: 'bg-amber-500',
    advanced: 'bg-red-500'
  };

  const difficultyLabels: Record<string, string> = {
    beginner: 'Начальный',
    intermediate: 'Средний',
    advanced: 'Продвинутый'
  };

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block">
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-6 9H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span className={`px-2 py-1 text-xs font-medium text-white rounded ${difficultyColors[scenario.difficulty]}`}>
            {difficultyLabels[scenario.difficulty]}
          </span>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {scenario.title}
        </h4>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {scenario.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>{scenario.duration} мин</span>
          <span>{scenario.objectives?.length} критериев</span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm font-medium text-gray-900">{scenario.clientPersona.name}</p>
          <p className="text-xs text-gray-500">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
        </div>
      </div>
    </Link>
  );
}
