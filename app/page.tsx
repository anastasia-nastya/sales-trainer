import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  // Базовые сценарии
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-white">
      {/* Header - стиль ITSM365 */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IT</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">ITSM 365</h1>
                  <p className="text-xs text-gray-500">Экосистема продуктов</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-1 ml-6">
                <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded">SUPPORT</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">OUTSOURCE</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">PROJECTS</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">HR</span>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/scenarios" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Сценарии
              </Link>
              <Link href="/resources" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Ресурсы
              </Link>
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Дашборд
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - стиль ITSM365 */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Тренажёр менеджеров по продажам ITSM 365
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях.
              Отработка встреч, работа с возражениями, переговоры — всё в одном тренажёре.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/scenarios"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Начать тренировку
              </Link>
              <Link
                href="/resources"
                className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Материалы для менеджеров
              </Link>
            </div>
          </div>

          {/* Статистика - стиль ITSM365 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">400+</div>
              <div className="text-sm text-gray-600">Компаний доверяют</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5x</div>
              <div className="text-sm text-gray-600">Быстрее обработка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">-30%</div>
              <div className="text-sm text-gray-600">Расходы на ФОТ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-600">Удовлетворённость</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Сценарии */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Scenarios Sections */}
        <div className="space-y-12">
          {/* Meetings Section */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Встречи и презентации</h3>
                <p className="text-gray-600">Тренировка проведения встреч с CIO и IT директорами</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {meetings.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </section>

          {/* Objections Section */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Работа с возражениями</h3>
                <p className="text-gray-600">Отработка типовых возражений клиентов</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {objections.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </section>

          {/* Negotiations Section */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Переговоры и закрытие</h3>
                <p className="text-gray-600">Финальный этап переговоров и закрытие сделок</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {negotiations.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Resources Section - Полезные материалы */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Полезные материалы для менеджеров
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Презентации, скрипты продаж, чек-листы и кейсы — всё для успешных продаж ITSM 365
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Презентации */}
            <Link
              href="/resources/presentations"
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Презентации</h4>
              <p className="text-gray-600 text-sm">Презентации ITSM 365 для разных типов клиентов и отраслей</p>
            </Link>

            {/* Скрипты продаж */}
            <Link
              href="/resources/scripts"
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Скрипты продаж</h4>
              <p className="text-gray-600 text-sm">Проверенные фразы и сценарии для разных этапов продаж</p>
            </Link>

            {/* Кейсы */}
            <Link
              href="/resources/cases"
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Кейсы клиентов</h4>
              <p className="text-gray-600 text-sm">Реальные истории успеха ITSM 365 в разных отраслях</p>
            </Link>

            {/* Чек-листы */}
            <Link
              href="/resources/checklists"
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Чек-листы</h4>
              <p className="text-gray-600 text-sm">Проверочные списки для встреч, звонков и презентаций</p>
            </Link>

            {/* Конкурентный анализ */}
            <Link
              href="/resources/competitors"
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Конкурентный анализ</h4>
              <p className="text-gray-600 text-sm">Сравнение с конкурентами: ServiceNow, Jira, SD и другие</p>
            </Link>

            {/* Калькулятор ROI */}
            <Link
              href="/resources/roi"
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ROI калькулятор</h4>
              <p className="text-gray-600 text-sm">Рассчитайте возврат инвестиций для клиента</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IT</span>
                </div>
                <div>
                  <h4 className="font-bold">ITSM 365</h4>
                  <p className="text-xs text-gray-400">Экосистема продуктов</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Тренажёр для обучения менеджеров по продажам
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Сценарии</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/scenarios?type=meeting" className="hover:text-white transition-colors">Встречи</Link></li>
                <li><Link href="/scenarios?type=objection" className="hover:text-white transition-colors">Возражения</Link></li>
                <li><Link href="/scenarios?type=negotiation" className="hover:text-white transition-colors">Переговоры</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Ресурсы</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/resources/presentations" className="hover:text-white transition-colors">Презентации</Link></li>
                <li><Link href="/resources/scripts" className="hover:text-white transition-colors">Скрипты</Link></li>
                <li><Link href="/resources/cases" className="hover:text-white transition-colors">Кейсы</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Дашборд</Link></li>
                <li><Link href="/history" className="hover:text-white transition-colors">История</Link></li>
                <li><Link href="/profile" className="hover:text-white transition-colors">Профиль</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ITSM 365. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Scenario Card Component - обновленный стиль
function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyColors: Record<string, string> = {
    beginner: 'bg-green-50 text-green-700 border-green-200',
    intermediate: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    advanced: 'bg-red-50 text-red-700 border-red-200'
  };

  const difficultyLabels: Record<string, string> = {
    beginner: 'Начальный',
    intermediate: 'Средний',
    advanced: 'Продвинутый'
  };

  // Определяем продукт по типу сценария
  const getProductIcon = () => {
    if (scenario.type === 'meeting') {
      return (
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <Link href={`/scenarios/${scenario.id}`}>
      <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer h-full">
        <div className="flex items-start justify-between mb-4">
          {getProductIcon()}
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${difficultyColors[scenario.difficulty]}`}>
            {difficultyLabels[scenario.difficulty]}
          </span>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">{scenario.title}</h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{scenario.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.duration} мин
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.objectives?.length} критериев
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold text-sm">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{scenario.clientPersona.name}</p>
              <p className="text-xs text-gray-500">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
            Начать тренировку
          </button>
        </div>
      </div>
    </Link>
  );
}