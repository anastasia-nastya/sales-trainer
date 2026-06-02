'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  CustomScenario,
  getCustomScenarios,
  deleteCustomScenario
} from '@/types/custom-scenarios';

export default function MyScenariosPage() {
  const [mounted, setMounted] = useState(false);
  const [scenarios, setScenarios] = useState<CustomScenario[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    loadScenarios();
  }, []);

  const loadScenarios = () => {
    setLoading(true);
    try {
      const customScenarios = getCustomScenarios();
      setScenarios(customScenarios);
    } catch (error) {
      console.error('Error loading scenarios:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string, title: string) => {
    if (!confirm(`Удалить сценарий "${title}"?`)) {
      return;
    }

    try {
      deleteCustomScenario(id);
      loadScenarios();
    } catch (error) {
      console.error('Error deleting scenario:', error);
      alert('Не удалось удалить сценарий');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Начальный';
      case 'intermediate': return 'Средний';
      case 'advanced': return 'Продвинутый';
      default: return difficulty;
    }
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
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Загрузка...</p>
        </div>
      </div>
    );
  }

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
                <p className="text-sm text-gray-500 dark:text-gray-400">Мои сценарии</p>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Базовые сценарии
              </Link>
              <Link href="/scenarios/create" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                + Создать
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Мои сценарии</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {scenarios.length === 0
              ? 'У вас пока нет своих сценариев. Создайте первый!'
              : `Всего сценариев: ${scenarios.length}`
            }
          </p>
        </div>

        {/* Empty State */}
        {scenarios.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
            <svg className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0h6m2 2h6m-6 0v6m0-6c-6.627 0-12 5.373-12 12s5.373 12 12 12zm0 0a9 9 0 1 18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 01-9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Пока нет сценариев</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Создайте свой первый персонализированный сценарий для тренировки
            </p>
            <Link
              href="/scenarios/create"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              + Создать сценарий
            </Link>
          </div>
        )}

        {/* Scenarios List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {scenario.isCustom && (
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002 2v-5a2 2 0 00-2-2V9a2 2 0 00-2-2h-2m2-2v11a2 2 0 002-2h2m-6-6h12" />
                      </svg>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{scenario.title}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {scenario.description}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(scenario.type)}`}>
                  {getTypeLabel(scenario.type)}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(scenario.difficulty)}`}>
                  {getDifficultyLabel(scenario.difficulty)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {scenario.duration} мин
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 font-semibold text-sm">
                      {scenario.clientPersona.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{scenario.clientPersona.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{scenario.clientPersona.role}, {scenario.clientPersona.company}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Цели:</p>
                <div className="space-y-1">
                  {scenario.objectives.slice(0, 2).map((objective, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{objective}</span>
                    </div>
                  ))}
                  {scenario.objectives.length > 2 && (
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      +{scenario.objectives.length - 2} ещё
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date(scenario.createdAt).toLocaleDateString('ru-RU')}
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/scenarios/${scenario.id}`}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Начать
                  </Link>
                  <button
                    onClick={() => handleDelete(scenario.id, scenario.title)}
                    className="text-red-600 hover:text-red-800 dark:text-red-400 text-sm font-medium"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {scenarios.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/scenarios/create"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              + Создать ещё сценарий
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
