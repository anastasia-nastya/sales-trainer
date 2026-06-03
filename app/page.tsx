import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">ITSM 365</h1>
                <p className="text-xs text-gray-500">Тренажёр менеджеров по продажам</p>
              </div>
            </Link>
            <nav className="flex items-center gap-3">
              <Link href="/dashboard" className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                📊 Дашборд
              </Link>
              <Link href="/history" className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                📜 История
              </Link>
              <Link href="/resources" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg">
                📚 Ресурсы
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-xl">🎯</span>
              <span className="text-sm font-semibold">AI-тренажёр B2B продаж</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Мастер продаж<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">начинается здесь</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях.
              Отработка встреч, работа с возражениями, переговоры — всё в одном тренажёре.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#scenarios"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <span>Начать тренировку</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Материалы</span>
              </Link>
            </div>
          </div>

          {/* Stats Widget */}
          <div className="grid grid-cols-2 gap-4">
            <StatWidget icon="📊" label="Сценариев" value="12+" color="blue" />
            <StatWidget icon="⏱️" label="Среднее время" value="15 мин" color="green" />
            <StatWidget icon="🎯" label="Навыков" value="25+" color="purple" />
            <StatWidget icon="💼" label="Ролей клиентов" value="10+" color="orange" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🎯 Преимущества платформы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🚀"
              title="Быстрый старт"
              description="Начните тренировку за 2 минуты. Никакой сложной настройки."
              color="blue"
            />
            <FeatureCard
              icon="🤖"
              title="AI-клиенты"
              description="Реалистичные сценарии с разными типами клиентов и возражений."
              color="purple"
            />
            <FeatureCard
              icon="📈"
              title="Аналитика"
              description="Детальный анализ ваших навыков и рекомендации по улучшению."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section id="scenarios" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Сценарии тренировок</h2>
          <p className="text-lg text-gray-600">Выберите свой путь и практикуйтесь в реалистичных B2B сценариях</p>
        </div>

        {/* Meetings */}
        <ScenarioSection
          icon="🤝"
          title="Встречи и презентации"
          description="Тренировка проведения встреч с CIO и IT директорами"
          scenarios={meetings}
          color="blue"
        />

        {/* Objections */}
        <ScenarioSection
          icon="💪"
          title="Работа с возражениями"
          description="Отработка типовых возражений клиентов"
          scenarios={objections}
          color="purple"
        />

        {/* Negotiations */}
        <ScenarioSection
          icon="🤝"
          title="Переговоры и закрытие"
          description="Финальный этап переговоров и закрытие сделок"
          scenarios={negotiations}
          color="green"
        />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Готовы улучшить свои навыки продаж?</h2>
          <p className="text-xl text-blue-100 mb-8">Начните тренировку сегодня и станьте экспертом B2B продаж</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#scenarios"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>🚀 Начать сейчас</span>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border-2 border-white/30 hover:bg-white/10"
            >
              <span>📊 Посмотреть дашборд</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">ITSM 365</h3>
              <p className="text-gray-400 text-sm">Тренажёр менеджеров по продажам для обучения B2B навыкам</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">SUPPORT</Link></li>
                <li><Link href="#" className="hover:text-white">OUTSOURCE</Link></li>
                <li><Link href="#" className="hover:text-white">PROJECTS</Link></li>
                <li><Link href="#" className="hover:text-white">HR</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/resources" className="hover:text-white">Материалы</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Дашборд</Link></li>
                <li><Link href="/history" className="hover:text-white">История</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Помощь</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/profile" className="hover:text-white">Профиль</Link></li>
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white">Поддержка</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ITSM 365. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatWidget({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: string; title: string; description: string; color: string }) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
  };

  return (
    <div className="group p-6 rounded-xl hover:shadow-xl transition-all hover:scale-105 border border-gray-100 bg-white">
      <div className={`w-14 h-14 ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function ScenarioSection({ icon, title, description, scenarios, color }: {
  icon: string;
  title: string;
  description: string;
  scenarios: any[];
  color: string;
}) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
  };

  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>
    </section>
  );
}

function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyConfig = {
    beginner: { label: 'Начальный', color: 'bg-green-500', icon: '🌱' },
    intermediate: { label: 'Средний', color: 'bg-amber-500', icon: '⚡' },
    advanced: { label: 'Продвинутый', color: 'bg-red-500', icon: '🔥' },
  };
  const difficulty = difficultyConfig[scenario.difficulty as keyof typeof difficultyConfig];

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block group">
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-6 9H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span className={`px-3 py-1.5 text-xs font-bold text-white rounded-full ${difficulty.color} shadow-md flex items-center gap-1`}>
            <span>{difficulty.icon}</span>
            <span>{difficulty.label}</span>
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {scenario.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {scenario.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs">
          <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{scenario.duration} мин</span>
          </div>
          <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-lg">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{scenario.objectives?.length} критериев</span>
          </div>
        </div>

        {/* Client */}
        <div className="border-t border-gray-100 pt-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-sm font-bold text-blue-700">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">{scenario.clientPersona.name}</p>
              <p className="text-xs text-gray-500 truncate">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95 text-sm flex items-center justify-center gap-2 mt-auto">
          <span>Начать тренировку</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </Link>
  );
}
