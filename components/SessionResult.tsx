'use client';

import { DialogSession } from '@/types/dialog';

interface SessionResultProps {
  session: DialogSession;
  feedback: any;
  onRestart: () => void;
  onBack: () => void;
}

export function SessionResult({ session, feedback, onRestart, onBack }: SessionResultProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-green-100 dark:bg-green-900/30';
    if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900/30';
    return 'bg-red-100 dark:bg-red-900/30';
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}м ${secs}с`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Тренировка завершена!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Вот результаты вашей сессии
          </p>
        </div>

        {/* Overall Score */}
        <div className={`flex items-center justify-center gap-8 mb-8`}>
          <div className={`${getScoreBackground(feedback.overallScore)} rounded-2xl p-8 text-center`}>
            <div className="text-6xl font-bold mb-2">{feedback.overallScore}</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
              Общий балл
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-24 text-right text-sm text-gray-600 dark:text-gray-400">Длительность:</div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {session.metrics ? formatDuration(session.metrics.duration) : '—'}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 text-right text-sm text-gray-600 dark:text-gray-400">Сообщений:</div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {session.metrics?.messageCount || session.messages.length}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 text-right text-sm text-gray-600 dark:text-gray-400">Завершение:</div>
              <div className="font-semibold text-green-600 dark:text-green-400">
                Успешно
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Scores */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Оценка по навыкам</h3>
        <div className="space-y-4">
          {feedback.skillScores.map((skillScore: any, idx: number) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900 dark:text-white">{skillScore.skill}</span>
                  <span className={`font-bold ${getScoreColor(skillScore.score)}`}>{skillScore.score}/100</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      skillScore.score >= 80 ? 'bg-green-500' :
                      skillScore.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${skillScore.score}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skillScore.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths and Improvements */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Strengths */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Сильные стороны
          </h3>
          <ul className="space-y-2">
            {feedback.strengths.map((strength: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Области для улучшения
          </h3>
          <ul className="space-y-2">
            {feedback.improvements.map((improvement: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                {improvement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recommendations */}
      {feedback.recommendations && feedback.recommendations.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl shadow-lg p-6 mb-6 border border-blue-200 dark:border-blue-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Рекомендации
          </h3>
          <ul className="space-y-2">
            {feedback.recommendations.map((recommendation: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {idx + 1}
                </div>
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Попробовать снова</span>
        </button>
        <button
          onClick={onBack}
          className="bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Вернуться к сценариям</span>
        </button>
      </div>
    </div>
  );
}
