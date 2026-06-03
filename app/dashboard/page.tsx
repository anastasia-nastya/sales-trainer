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
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">ITSM 365</h1>
                <p className="text-xs text-gray-500">Дашборд прогресса</p>
              </div>
            </Link>
            <nav className="flex items-center gap-3">
              <Link href="/" className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                Сценарии
              </Link>
              <Link href="/history" className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                История
              </Link>
              <Link href="/resources" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg">
                Ресурсы
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Ваш прогресс</h2>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Всего тренировок"
            value={mockData.overview.totalSessions.toString()}
            icon="📋"
            color="blue"
          />
          <StatCard
            title="Часов тренировок"
            value={mockData.overview.totalHours.toString()}
            icon="⏱️"
            color="purple"
          />
          <StatCard
            title="Средний балл"
            value={mockData.overview.averageScore.toString()}
            icon="⭐"
            color="green"
            score={mockData.overview.averageScore}
          />
          <StatCard
            title="Улучшение"
            value={`+${mockData.overview.improvementRate}%`}
            icon="📈"
            color="orange"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Sessions */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Последние тренировки</h3>
            <div className="space-y-4">
              {mockData.recentSessions.map((session) => (
                <Link key={session.id} href={`/scenarios/${session.id}`}>
                  <div className="flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{session.scenarioTitle}</p>
                      <p className="text-sm text-gray-500">
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
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Навыки</h3>
            <div className="space-y-4">
              {mockData.skillBreakdown.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 text-sm">{skill.skill}</span>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(skill.trend)}
                        <span className={`font-bold ${getScoreColor(skill.rating)}`}>{skill.rating}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
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
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Ваш рейтинг среди менеджеров</h3>
          <div className="grid md:grid-cols-4 gap-6 mb-6">
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
          <div>
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
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95">
              🚀 Продолжить тренировку
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon, color, score }: {
  title: string;
  value: string;
  icon: string;
  color: string;
  score?: number;
}) {
  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600' },
  };

  const classes = colorClasses[color as keyof typeof colorClasses];
  const scoreColor = score ? (score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600') : classes.text;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-gray-100 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${classes.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <p className={`text-3xl font-bold ${scoreColor} mb-1`}>{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}
