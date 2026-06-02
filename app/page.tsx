import { getScenariosByType } from '@/lib/scenarios/data';
import Link from 'next/link';

export default function Home() {
  // Базовые сценарии
  const meetings = getScenariosByType('meeting');
  const objections = getScenariosByType('objection');
  const negotiations = getScenariosByType('negotiation');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header - минималистичный */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  ITSM 365
                </h1>
                <p className="text-xs text-gray-500">Экосистема решений</p>
              </div>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/scenarios" className="text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Сценарии
              </Link>
              <Link href="/resources" className="text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Ресурсы
              </Link>
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Дашборд
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - минималистичный */}
      <section className="relative overflow-hidden py-20 bg-white">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-purple-600 text-white text-sm font-semibold rounded-full shadow-sm">
                  ✨ Экосистема ITSM 365
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Тренажёр менеджеров
                <br />
                по продажам
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях.
                Отработка встреч, работа с возражениями, переговоры — всё в одном тренажёре.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/scenarios"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors shadow-md"
                >
                  🚀 Начать тренировку →
                </Link>
                <Link
                  href="/resources"
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  📚 Материалы для менеджеров
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">400+ компаний</span>
                </div>
                <div className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-semibold">Быстрый старт</span>
                </div>
                <div className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-semibold">SaaS модель</span>
                </div>
              </div>
            </div>

            {/* Сторона с иллюстрацией */}
            <div className="hidden md:block fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                  {/* Chat interface mock */}
                  <div className="space-y-6">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-white text-2xl font-bold">АП</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-gray-800 text-lg">Александр Петров</p>
                        <p className="text-sm text-gray-500">CIO, ТехноПром</p>
                        <div className="flex items-center mt-1">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                          <span className="text-xs text-green-600 font-medium">Онлайн</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat messages */}
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-400">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800 mb-1">Клиент:</p>
                            <p className="text-sm text-gray-600">«А как это работает с нашей текущей инфраструктурой?»</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800 mb-1">Ваш ответ:</p>
                            <p className="text-sm text-gray-600">«Внедрение займёт 2-8 недель»</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-4">
                      <button className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm">
                        💬 Ответить
                      </button>
                      <button className="flex-1 py-3 bg-slate-100 text-gray-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors text-sm">
                        📋 Подсказка
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-slate-50">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему ITSM 365?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Экосистема продуктов для комплексной автоматизации сервисных процессов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="stagger-in bg-white rounded-2xl p-8 shadow-lg border border-purple-200/50 card-itsm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-bl-2xl opacity-15"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">SaaS модель</h3>
                <p className="text-gray-600 mb-6">Быстрый старт без капитальных затрат. Автоматические обновления.</p>
                <div className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-green-700 font-semibold text-sm">2-8 недель внедрение</span>
                </div>
              </div>
            </div>

            <div className="stagger-in bg-white rounded-2xl p-8 shadow-lg border border-pink-100 card-itsm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-bl-2xl opacity-20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-1.066-2.573c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.15 0 1.35.072 2.245.224 3.108-.592 1.103-1.63 2.43-3.108 2.572zM17.5 19c0-1.35.072-2.245.224-3.108.592 1.103 1.63 2.43 2.37 3.108 2.572M15 16.5c0-1.35.072-2.245.224-3.108.592 1.103 1.63 2.43 2.37 3.108 2.572" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Low-code платформа</h3>
                <p className="text-gray-600 mb-6">Настраивайте без разработчиков. Визуальный конструктор процессов.</p>
                <div className="flex items-center bg-pink-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-pink-700 font-semibold text-sm">Без программистов</span>
                </div>
              </div>
            </div>

            <div className="stagger-in bg-white rounded-xl p-8 shadow-md border border-slate-200 card-itsm">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0l2.15-1.43a2 2 0 001.94-.35L21 8M10 14l-3.75-3.75M19 21l-7.89-5.26a2 2 0 00-2.22 0l-2.15 1.43a2 2 0 01-1.94.35L3 21" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">4 продукта в экосистеме</h3>
                <p className="text-gray-600 mb-6">SUPPORT, OUTSOURCE, PROJECTS, HR — бесшовная интеграция.</p>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-purple-700 font-semibold text-sm">Масштабируемость</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Сценарии тренировок
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Практикуйтесь в реалистичных сценариях B2B продаж с AI-клиентами
          </p>
        </div>

        <div className="space-y-16">
          {/* Meetings Section */}
          <section className="fade-in">
            <div className="flex items-center mb-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-5 shadow-sm">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Встречи и презентации</h3>
                <p className="text-gray-600">Тренировка проведения встреч с CIO и IT директорами</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetings.map((scenario, index) => (
                <div key={scenario.id} className="stagger-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <ScenarioCard scenario={scenario} />
                </div>
              ))}
            </div>
          </section>

          {/* Objections Section */}
          <section className="fade-in">
            <div className="flex items-center mb-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg pulse-glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Работа с возражениями</h3>
                <p className="text-gray-600">Отработка типовых возражений клиентов</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {objections.map((scenario, index) => (
                <div key={scenario.id} className="stagger-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <ScenarioCard scenario={scenario} />
                </div>
              ))}
            </div>
          </section>

          {/* Negotiations Section */}
          <section className="fade-in">
            <div className="flex items-center mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg pulse-glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Переговоры и закрытие</h3>
                <p className="text-gray-600">Финальный этап переговоров и закрытие сделок</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {negotiations.map((scenario, index) => (
                <div key={scenario.id} className="stagger-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <ScenarioCard scenario={scenario} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-xl">IT</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">ITSM 365</h4>
                  <p className="text-xs text-gray-400">Экосистема продуктов</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Тренажёр для обучения менеджеров по продажам
              </p>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">SaaS</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">AI-powered</span>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-purple-300">Продукты</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/scenarios?type=meeting" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>SUPPORT</Link></li>
                <li><Link href="/scenarios?type=objection" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>OUTSOURCE</Link></li>
                <li><Link href="/scenarios?type=negotiation" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>PROJECTS</Link></li>
                <li><Link href="/scenarios?type=negotiation" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>HR</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-purple-300">Ресурсы</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/resources/presentations" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Презентации</Link></li>
                <li><Link href="/resources/scripts" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>Скрипты</Link></li>
                <li><Link href="/resources/cases" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Кейсы</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-purple-300">Помощь</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Дашборд</Link></li>
                <li><Link href="/history" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>История</Link></li>
                <li><Link href="/profile" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Профиль</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 ITSM 365. Все права защищены.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://salestrainer-itsm.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                salestrainer-itsm.netlify.app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Scenario Card Component - минималистичный
function ScenarioCard({ scenario }: { scenario: any }) {
  const difficultyColors: Record<string, string> = {
    beginner: 'bg-emerald-500',
    intermediate: 'bg-amber-500',
    advanced: 'bg-rose-500'
  };

  const difficultyLabels: Record<string, string> = {
    beginner: 'Начальный',
    intermediate: 'Средний',
    advanced: 'Продвинутый'
  };

  return (
    <Link href={`/scenarios/${scenario.id}`} className="block">
      <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:border-purple-400 card-itsm h-full group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-purple-700 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H5m14 0a2 2 0 002 2v-2a2 2 0 00-2-2h-2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-6 9H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-6 9h14a2 2 0 002-2v-2a2 2 0 00-2-2h-2" />
            </svg>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${difficultyColors[scenario.difficulty]}`}>
            {difficultyLabels[scenario.difficulty]}
          </span>
        </div>

        <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
          {scenario.title}
        </h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {scenario.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {scenario.duration} мин
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {scenario.objectives?.length} критериев
            </div>
          </div>

        <div className="border-t border-slate-200 pt-4 mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-purple-700 font-semibold text-sm">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{scenario.clientPersona.name}</p>
              <p className="text-xs text-gray-500">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Начать тренировку →
          </button>
        </div>
      </div>
    </Link>
  );
}
