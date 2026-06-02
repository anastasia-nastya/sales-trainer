import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  // Базовые сценарии
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-white">
      {/* Header - стиль ITSM365 с точными цветами */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IT</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#1F2937]">ITSM 365</h1>
                  <p className="text-xs text-[#6B7280]">Экосистема продуктов</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-1 ml-6">
                <span className="px-3 py-1 text-xs font-medium text-[#2563EB] bg-blue-50 rounded">SUPPORT</span>
                <span className="px-3 py-1 text-xs font-medium text-[#1F2937] bg-gray-100 rounded">OUTSOURCE</span>
                <span className="px-3 py-1 text-xs font-medium text-[#1F2937] bg-gray-100 rounded">PROJECTS</span>
                <span className="px-3 py-1 text-xs font-medium text-[#1F2937] bg-gray-100 rounded">HR</span>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/scenarios" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">
                Сценарии
              </Link>
              <Link href="/resources" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">
                Ресурсы
              </Link>
              <Link href="/dashboard" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">
                Дашборд
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - стиль презентации ITSM365 */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-full">
                  Экосистема ITSM 365
                </span>
              </div>
              <h1 className="text-5xl font-bold text-[#1F2937] mb-6 leading-tight">
                Тренажёр менеджеров по продажам
              </h1>
              <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
                Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях.
                Отработка встреч, работа с возражениями, переговоры — всё в одном тренажёре.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/scenarios"
                  className="px-8 py-4 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Начать тренировку →
                </Link>
                <Link
                  href="/resources"
                  className="px-8 py-4 bg-white text-[#1F2937] font-semibold rounded-lg border-2 border-[#2563EB] hover:bg-blue-50 transition-all"
                >
                  Материалы для менеджеров
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex items-center space-x-6 text-sm text-[#6B7280]">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#10B981] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>400+ компаний</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#10B981] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Быстрый старт</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#10B981] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>SaaS модель</span>
                </div>
              </div>
            </div>

            {/* Сторона с иллюстрацией */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#1F2937]">Александр Петров</p>
                        <p className="text-sm text-[#6B7280]">CIO, ТехноПром</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 mr-3"></div>
                        <p className="text-sm text-[#4B5563]">«Звучит интересно. А как это работает с нашей текущей инфраструктурой?»</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-3"></div>
                        <p className="text-sm text-[#4B5563]">«Сколько времени займёт внедрение?»</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 mr-3"></div>
                        <p className="text-sm text-[#4B5563]">«Дорого по сравнению с конкурентами?»</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Плавающие элементы */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#10B981] bg-opacity-20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#2563EB] bg-opacity-10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
              Почему ITSM 365?
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Экосистема продуктов для комплексной автоматизации сервисных процессов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">SaaS модель</h3>
              <p className="text-[#6B7280] mb-4">Быстрый старт без капитальных затрат. Автоматические обновления.</p>
              <div className="flex items-center text-[#10B981] text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                2-8 недель внедрение
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-1.066-2.573c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.15 0 1.35.072 2.245.224 3.108-.592 1.103-1.63 2.43-3.108 2.572zM17.5 19c0-1.35.072-2.245.224-3.108.592 1.103 1.63 2.43 2.37 3.108 2.572M15 16.5c0-1.35.072-2.245.224-3.108.592 1.103 1.63 2.43 2.37 3.108 2.572" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Low-code платформа</h3>
              <p className="text-[#6B7280] mb-4">Настраивайте без разработчиков. Визуальный конструктор процессов.</p>
              <div className="flex items-center text-[#10B981] text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Без программистов
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#8B5CF6] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0l2.15-1.43a2 2 0 001.94-.35L21 8M10 14l-3.75-3.75M19 21l-7.89-5.26a2 2 0 00-2.22 0l-2.15 1.43a2 2 0 01-1.94.35L3 21" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">4 продукта в экосистеме</h3>
              <p className="text-[#6B7280] mb-4">SUPPORT, OUTSOURCE, PROJECTS, HR — бесшовная интеграция.</p>
              <div className="flex items-center text-[#10B981] text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Масштабируемость
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
            Сценарии тренировок
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Выберите сценарий для тренировки навыков B2B продаж
          </p>
        </div>

        <div className="space-y-16">
          {/* Meetings Section */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#1F2937] mb-2">Встречи и презентации</h3>
                <p className="text-[#6B7280]">Тренировка проведения встреч с CIO и IT директорами</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetings.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </section>

          {/* Objections Section */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#1F2937] mb-2">Работа с возражениями</h3>
                <p className="text-[#6B7280]">Отработка типовых возражений клиентов</p>
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
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#1F2937] mb-2">Переговоры и закрытие</h3>
                <p className="text-[#6B7280]">Финальный этап переговоров и закрытие сделок</p>
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

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IT</span>
                </div>
                <div>
                  <h4 className="font-bold">ITSM 365</h4>
                  <p className="text-xs text-[#9CA3AF]">Экосистема продуктов</p>
                </div>
              </div>
              <p className="text-sm text-[#9CA3AF]">
                Тренажёр для обучения менеджеров по продажам
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Продукты</h5>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><Link href="/scenarios?type=meeting" className="hover:text-white transition-colors">SUPPORT</Link></li>
                <li><Link href="/scenarios?type=objection" className="hover:text-white transition-colors">OUTSOURCE</Link></li>
                <li><Link href="/scenarios?type=negotiation" className="hover:text-white transition-colors">PROJECTS</Link></li>
                <li><Link href="/scenarios?type=negotiation" className="hover:text-white transition-colors">HR</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Ресурсы</h5>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><Link href="/resources/presentations" className="hover:text-white transition-colors">Презентации</Link></li>
                <li><Link href="/resources/scripts" className="hover:text-white transition-colors">Скрипты</Link></li>
                <li><Link href="/resources/cases" className="hover:text-white transition-colors">Кейсы</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Дашборд</Link></li>
                <li><Link href="/history" className="hover:text-white transition-colors">История</Link></li>
                <li><Link href="/profile" className="hover:text-white transition-colors">Профиль</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#374151] pt-8 flex flex-col md:flex-row justify-between items-center">
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

// Scenario Card Component в стиле ITSM365
function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyColors: Record<string, string> = {
    beginner: 'bg-[#10B981] text-white',
    intermediate: 'bg-[#F59E0B] text-white',
    advanced: 'bg-[#EF4444] text-white'
  };

  const difficultyLabels: Record<string, string> = {
    beginner: 'Начальный',
    intermediate: 'Средний',
    advanced: 'Продвинутый'
  };

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block">
      <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#2563EB] hover:shadow-xl transition-all cursor-pointer group h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-9 0H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${difficultyColors[scenario.difficulty]}`}>
            {difficultyLabels[scenario.difficulty]}
          </span>
        </div>

        <h4 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#2563EB] transition-colors">
          {scenario.title}
        </h4>
        <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">
          {scenario.description}
        </p>

        <div className="flex items-center justify-between text-xs text-[#6B7280] mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.duration} мин
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.objectives?.length} критериев
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-semibold text-sm">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1F2937]">{scenario.clientPersona.name}</p>
              <p className="text-xs text-[#6B7280]">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#2563EB] text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Начать тренировку →
          </button>
        </div>
      </div>
    </Link>
  );
}