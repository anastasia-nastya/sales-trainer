import Link from 'next/link';

export default function HistoryPage() {
  // Mock данных для истории
  const mockHistory = [
    {
      id: 'session-1',
      scenarioId: 'meeting-1',
      scenarioTitle: 'Первая встреча с потенциальным клиентом',
      date: new Date('2024-06-01T14:30:00'),
      duration: 925, // в секундах
      score: 82,
      status: 'completed',
      type: 'meeting'
    },
    {
      id: 'session-2',
      scenarioId: 'objection-1',
      scenarioTitle: '"Дорого" - работа с ценовым возражением',
      date: new Date('2024-05-30T10:15:00'),
      duration: 612,
      score: 71,
      status: 'completed',
      type: 'objection'
    },
    {
      id: 'session-3',
      scenarioId: 'negotiation-1',
      scenarioTitle: 'Финальные переговоры и закрытие сделки',
      date: new Date('2024-05-28T16:45:00'),
      duration: 1187,
      score: 68,
      status: 'completed',
      type: 'negotiation'
    },
    {
      id: 'session-4',
      scenarioId: 'meeting-2',
      scenarioTitle: 'Презентация техническому директору',
      date: new Date('2024-05-25T11:00:00'),
      duration: 1045,
      score: 75,
      status: 'completed',
      type: 'meeting'
    },
    {
      id: 'session-5',
      scenarioId: 'objection-2',
      scenarioTitle: '"Мы уже работаем с вашим конкурентом"',
      date: new Date('2024-05-22T15:30:00'),
      duration: 723,
      score: 79,
      status: 'completed',
      type: 'objection'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
    return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'meeting': return 'Встреча';
      case 'objection': return 'Возражение';
      case 'negotiation': return 'Переговоры';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'objection': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      case 'negotiation': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}м ${secs}с`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
                <p className="text-sm text-gray-500 dark:text-gray-400">История тренировок</p>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Сценарии
              </Link>
              <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Дашборд
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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">История тренировок</h2>
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
              <option value="all">Все типы</option>
              <option value="meeting">Встречи</option>
              <option value="objection">Возражения</option>
              <option value="negotiation">Переговоры</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
              <option value="date-desc">По дате (сначала новые)</option>
              <option value="date-asc">По дате (сначала старые)</option>
              <option value="score-desc">По баллу (высокий → низкий)</option>
              <option value="score-asc">По баллу (низкий → высокий)</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Всего тренировок</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{mockHistory.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Средний балл</p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {Math.round(mockHistory.reduce((acc, s) => acc + s.score, 0) / mockHistory.length)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Лучший результат</p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {Math.max(...mockHistory.map(s => s.score))}
            </p>
          </div>
        </div>

        {/* History List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Сценарий
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Тип
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Дата и время
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Длительность
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Результат
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {mockHistory.map((session) => (
                  <tr key={session.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900 dark:text-white">{session.scenarioTitle}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(session.type)}`}>
                        {getTypeLabel(session.type)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {formatDate(session.date)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {formatDuration(session.duration)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-lg text-sm font-bold ${getScoreColor(session.score)}`}>
                        {session.score}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                          Подробнее
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State (если нет тренировок) */}
        {mockHistory.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center">
            <svg className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Пока нет тренировок</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Начните тренировку, чтобы увидеть результаты здесь</p>
            <Link href="/">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Перейти к сценариям</span>
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
