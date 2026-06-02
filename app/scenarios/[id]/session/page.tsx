'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { getScenarioById } from '@/lib/scenarios/data';
import { DialogSession } from '@/components/DialogSession';
import { SessionResult } from '@/components/SessionResult';
import { DialogSession as DialogSessionType, SessionFeedback } from '@/types/dialog';
import Link from 'next/link';

export default function SessionPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionData, setSessionData] = useState<DialogSessionType | null>(null);
  const [feedback, setFeedback] = useState<SessionFeedback | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setLoading(false);
  }, []);

  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Загрузка сценария...</p>
        </div>
      </div>
    );
  }

  const scenarioId = typeof params.id === 'string' ? params.id : params.id?.[0];
  if (!scenarioId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Некорректный ID сценария</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Вернуться к списку сценариев
          </Link>
        </div>
      </div>
    );
  }

  const scenario = getScenarioById(scenarioId);

  if (!scenario) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Сценарий не найден</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Вернуться к списку сценариев
          </Link>
        </div>
      </div>
    );
  }

  const handleSessionComplete = async (result: any) => {
    // Создаём объект сессии
    const session: DialogSessionType = {
      id: `session-${Date.now()}`,
      scenarioId: scenario.id,
      userId: 'user-1', // В реальном приложении будет из auth
      startTime: new Date(),
      endTime: new Date(),
      status: 'completed',
      messages: [], // Заполним в реальном приложении
      metrics: {
        duration: 0,
        messageCount: 0,
        userMessageCount: 0,
        assistantMessageCount: 0,
        averageResponseTime: 0,
        completionRate: 100
      }
    };

    setSessionData(session);
    setFeedback(result);
    setSessionCompleted(true);
  };

  const handleRestart = () => {
    setSessionCompleted(false);
    setSessionData(null);
    setFeedback(null);
  };

  const handleBack = () => {
    window.location.href = '/';
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
            <div className="flex items-center gap-4">
              <Link href={`/scenarios/${scenario.id}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                ← Назад к сценарию
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-73px)]">
        {!sessionCompleted ? (
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{scenario.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">Тренировка с AI-клиентом</p>
            </div>
            <div className="flex-1 overflow-hidden">
              <DialogSession
                scenarioId={scenario.id}
                scenarioType={scenario.type}
                clientPersona={scenario.clientPersona}
                successCriteria={scenario.successCriteria || []}
                onComplete={handleSessionComplete}
              />
            </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto">
            <SessionResult
              session={sessionData!}
              feedback={feedback!}
              onRestart={handleRestart}
              onBack={handleBack}
            />
          </div>
        )}
      </main>
    </div>
  );
}
