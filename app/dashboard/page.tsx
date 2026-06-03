import Link from 'next/link';

export default function DashboardPage() {
  // В реальном приложении эти данные будут приходить из API
  const mockData = {
    overview: {
      totalSessions: 12,
      totalHours: 3.5,
      averageScore: 76,
      improvementRate: 15
    },
    recentSessions: [
      {
        id: '1',
        scenarioTitle: 'Первая встреча с клиентом',
        date: new Date('2024-06-01'),
        duration: 15,
        score: 82,
        status: 'completed'
      },
      {
        id: '2',
        scenarioTitle: 'Работа с ценовым возражением',
        date: new Date('2024-05-30'),
        duration: 10,
        score: 71,
        status: 'completed'
      },
      {
        id: '3',
        scenarioTitle: 'Финальные переговоры',
        date: new Date('2024-05-28'),
        duration: 20,
        score: 68,
        status: 'completed'
      }
    ],
    skillBreakdown: [
      { skill: 'Установление контакта', rating: 85, trend: 'improving', lastAssessed: new Date('2024-06-01') },
      { skill: 'Активное слушание', rating: 72, trend: 'stable', lastAssessed: new Date('2024-06-01') },
      { skill: 'Презентация решения', rating: 78, trend: 'improving', lastAssessed: new Date('2024-05-30') },
      { skill: 'Работа с возражениями', rating: 65, trend: 'improving', lastAssessed: new Date('2024-05-30') },
      { skill: 'Закрытие сделки', rating: 70, trend: 'stable', lastAssessed: new Date('2024-05-28') }
    ],
    comparison: {
      userScore: 76,
      averageScore: 68,
      topScore: 92,
      userRank: 15,
      totalUsers: 50,
      percentile: 70
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving':
        return <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>;
      case 'declining':
        return <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>;
      default:
        return <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
        </svg>;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-blue-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer">
                  <span className="text-white font-bold text-xl">IT</span>
                </div>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">ITSM365</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Дашборд прогресса</p>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Сценарии
              </Link>
              <Link href="/history" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                История
              </Link>
              <Link href="/profile" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Профиль
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Ваш прогресс</h2>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Всего тренировок</h3>
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{mockData.overview.totalSessions}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Часов тренировок</h3>
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{mockData.overview.totalHours}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Средний балл</h3>
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <p className={`text-3xl font-bold ${getScoreColor(mockData.overview.averageScore)}`}>
              {mockData.overview.averageScore}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Улучшение</h3>
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              +{mockData.overview.improvementRate}%
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Sessions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Последние тренировки</h3>
            <div className="space-y-4">
              {mockData.recentSessions.map((session) => (
                <Link key={session.id} href={`/scenarios/${session.id}`}>
                  <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white mb-1">{session.scenarioTitle}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {session.date.toLocaleDateString('ru-RU')} • {session.duration} мин
                      </p>
                    </div>
                    <div className={`text-2xl font-bold ${getScoreColor(session.score)}`}>
                      {session.score}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Навыки</h3>
            <div className="space-y-4">
              {mockData.skillBreakdown.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.skill}</span>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(skill.trend)}
                        <span className={`font-bold ${getScoreColor(skill.rating)}`}>{skill.rating}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          skill.rating >= 80 ? 'bg-green-500' :
                          skill.rating >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${skill.rating}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison with others */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Ваш рейтинг среди менеджеров</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-blue-100 text-sm mb-1">Ваш балл</p>
              <p className="text-3xl font-bold">{mockData.comparison.userScore}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">Средний балл</p>
              <p className="text-3xl font-bold">{mockData.comparison.averageScore}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">Лучший балл</p>
              <p className="text-3xl font-bold">{mockData.comparison.topScore}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">Рейтинг</p>
              <p className="text-3xl font-bold">
                {mockData.comparison.userRank}/{mockData.comparison.totalUsers}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-100">Вы лучше, чем {mockData.comparison.percentile}% менеджеров</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all"
                style={{ width: `${mockData.comparison.percentile}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95">
              🚀 Продолжить тренировку
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
