import { getScenarioById } from '@/lib/scenarios/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ScenarioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const scenario = getScenarioById(id);

  if (!scenario) {
    notFound();
  }

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  const difficultyLabels = {
    beginner: 'Начальный',
    intermediate: 'Средний',
    advanced: 'Продвинутый'
  };

  const typeLabels = {
    meeting: 'Встреча и презентация',
    objection: 'Работа с возражениями',
    negotiation: 'Переговоры и закрытие'
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Тренажёр менеджеров по продажам</p>
              </div>
            </div>
            <Link href="/">
              <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                ← Назад к сценариям
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Scenario Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[scenario.difficulty]}`}>
                  {difficultyLabels[scenario.difficulty]}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {typeLabels[scenario.type]}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{scenario.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{scenario.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mt-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {scenario.duration} минут
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {scenario.successCriteria?.length} критериев оценки
            </div>
          </div>
        </div>

        {/* Client Persona */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ваш клиент</h3>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 dark:text-blue-300 font-bold text-2xl">
                {scenario.clientPersona.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{scenario.clientPersona.name}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{scenario.clientPersona.role} в {scenario.clientPersona.company}</p>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Тип личности:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{scenario.clientPersona.personality}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Болевые точки:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {scenario.clientPersona.painPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {(scenario.clientPersona.budget || scenario.clientPersona.timeline) && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {scenario.clientPersona.budget && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Бюджет</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{scenario.clientPersona.budget}</p>
                    </div>
                  )}
                  {scenario.clientPersona.timeline && (
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Таймлайн</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{scenario.clientPersona.timeline}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Цели тренировки</h3>
          <ul className="space-y-3">
            {scenario.objectives.map((objective, idx) => (
              <li key={idx} className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Success Criteria */}
        {scenario.successCriteria && scenario.successCriteria.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Критерии успеха</h3>
            <div className="space-y-3">
              {scenario.successCriteria.map((criteria, idx) => (
                <div key={idx} className="flex items-start justify-between pb-3 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{criteria.skill}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{criteria.description}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{criteria.weight}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Talking Points / Objections */}
        {(scenario.talkingPoints || scenario.commonObjections) && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {scenario.talkingPoints ? 'Рекомендуемые темы для обсуждения' : 'Типовые возражения'}
            </h3>
            <ul className="space-y-2">
              {(scenario.talkingPoints || scenario.commonObjections)?.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Start Training Button */}
        <div className="flex justify-center">
          <Link href={`/scenarios/${scenario.id}/session`} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Начать тренировку с AI-клиентом
          </Link>
        </div>
      </main>
    </div>
  );
}

// Generate static params for all scenarios
export function generateStaticParams() {
  return [
    // Original scenarios
    { id: 'meeting-1' },
    { id: 'meeting-2' },
    { id: 'objection-1' },
    { id: 'objection-2' },
    { id: 'negotiation-1' },
    { id: 'negotiation-2' },

    // New realistic scenarios
    { id: 'retail-meeting-1' },
    { id: 'agro-meeting-1' },
    { id: 'its-outsourcing-meeting' },
    { id: 'hr-meeting' },
    { id: 'price-objection-1' },
    { id: 'competitor-objection' },
    { id: 'cloud-objection' },
    { id: 'negotiation-realistic' },
    { id: 'technical-negotiation' },
    { id: 'mid-level-manager' },
    { id: 'enterprise-deal' },
    { id: 'smb-deal' }
  ];
}
