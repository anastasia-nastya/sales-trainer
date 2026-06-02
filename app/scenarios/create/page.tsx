'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  CustomScenario,
  ScenarioType,
  DifficultyLevel,
  generateScenarioId,
  saveCustomScenario
} from '@/types/custom-scenarios';

export default function CreateScenarioPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [saving, setSaving] = useState(false);

  // Базовые поля
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<ScenarioType>('meeting');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('intermediate');
  const [duration, setDuration] = useState(15);

  // Цели
  const [objectives, setObjectives] = useState<string[]>(['']);
  const [newObjective, setNewObjective] = useState('');

  // Персона клиента
  const [clientName, setClientName] = useState('');
  const [clientRole, setClientRole] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientCompanyIndustry, setClientCompanyIndustry] = useState('');
  const [clientCompanySize, setClientCompanySize] = useState('');
  const [clientPersonality, setClientPersonality] = useState('');
  const [clientDecisionMaker, setClientDecisionMaker] = useState(true);

  // Болевые точки
  const [painPoints, setPainPoints] = useState<string[]>(['']);
  const [newPainPoint, setNewPainPoint] = useState('');

  // Бюджет и таймлайн
  const [clientBudget, setClientBudget] = useState('');
  const [clientTimeline, setClientTimeline] = useState('');

  // Talking points
  const [talkingPoints, setTalkingPoints] = useState<string[]>(['']);
  const [newTalkingPoint, setNewTalkingPoint] = useState('');

  // Common objections (для типа objection)
  const [commonObjections, setCommonObjections] = useState<string[]>([]);

  // Success criteria
  const [successCriteria, setSuccessCriteria] = useState([
    { skill: 'Установление контакта', description: 'Создана доверительная атмосфера', weight: 25 },
    { skill: 'Активное слушание', description: 'Выявлены ключевые потребности', weight: 25 },
    { skill: 'Презентация решения', description: 'Чётко представлена ценность', weight: 25 },
    { skill: 'Закрытие на следующий шаг', description: 'Согласовано дальнейшее действие', weight: 25 }
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addObjective = () => {
    if (newObjective.trim()) {
      setObjectives([...objectives, newObjective.trim()]);
      setNewObjective('');
    }
  };

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const addPainPoint = () => {
    if (newPainPoint.trim()) {
      setPainPoints([...painPoints, newPainPoint.trim()]);
      setNewPainPoint('');
    }
  };

  const removePainPoint = (index: number) => {
    setPainPoints(painPoints.filter((_, i) => i !== index));
  };

  const addTalkingPoint = () => {
    if (newTalkingPoint.trim()) {
      setTalkingPoints([...talkingPoints, newTalkingPoint.trim()]);
      setNewTalkingPoint('');
    }
  };

  const removeTalkingPoint = (index: number) => {
    setTalkingPoints(talkingPoints.filter((_, i) => i !== index));
  };

  const addCriterion = () => {
    setSuccessCriteria([
      ...successCriteria,
      { skill: 'Новый навык', description: 'Описание критерия', weight: 20 }
    ]);
  };

  const removeCriterion = (index: number) => {
    setSuccessCriteria(successCriteria.filter((_, i) => i !== index));
  };

  const updateCriterion = (index: number, field: string, value: string | number) => {
    const updated = [...successCriteria];
    (updated[index] as any)[field] = value;
    setSuccessCriteria(updated);
  };

  const handleSave = async () => {
    if (!title.trim() || !description.trim()) {
      alert('Пожалуйста, заполните название и описание');
      return;
    }

    if (!clientName.trim() || !clientRole.trim() || !clientCompany.trim()) {
      alert('Пожалуйста, заполните информацию о клиенте');
      return;
    }

    if (objectives.filter(o => o.trim()).length === 0) {
      alert('Добавьте хотя бы одну цель');
      return;
    }

    setSaving(true);

    try {
      const scenario: CustomScenario = {
        id: generateScenarioId(),
        title: title.trim(),
        description: description.trim(),
        type,
        difficulty,
        duration,
        objectives: objectives.filter(o => o.trim()),
        clientPersona: {
          name: clientName.trim(),
          role: clientRole.trim(),
          company: clientCompany.trim(),
          companyIndustry: clientCompanyIndustry.trim(),
          companySize: clientCompanySize.trim(),
          personality: clientPersonality.trim(),
          painPoints: painPoints.filter(p => p.trim()),
          budget: clientBudget.trim(),
          timeline: clientTimeline.trim(),
          decisionMaker: clientDecisionMaker
        },
        talkingPoints: talkingPoints.filter(t => t.trim()),
        commonObjections: commonObjections.filter(o => o.trim()),
        successCriteria,
        isCustom: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      saveCustomScenario(scenario);

      alert('Сценарий успешно сохранён!');
      router.push('/');
    } catch (error) {
      console.error('Error saving scenario:', error);
      alert('Не удалось сохранить сценарий. Попробуйте снова.');
    } finally {
      setSaving(false);
    }
  };

  if (!mounted) {
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Создание сценария</p>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                К сценариям
              </Link>
              <Link href="/scenarios/my" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Мои сценарии
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Создать свой сценарий</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Создайте персонализированный сценарий для тренировки вашей команды
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-8">
          {/* Базовая информация */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Основная информация</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Название сценария *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Например: Продажи в ритейле"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Тип сценария
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as ScenarioType)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="meeting">Встреча и презентация</option>
                  <option value="objection">Работа с возражениями</option>
                  <option value="negotiation">Переговоры и закрытие</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Сложность
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="beginner">Начальный</option>
                  <option value="intermediate">Средний</option>
                  <option value="advanced">Продвинутый</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Длительность (минут)
                </label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  min="5"
                  max="60"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Описание *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Опишите сценарий тренировки..."
                required
              />
            </div>
          </div>

          {/* Цели тренировки */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Цели тренировки</h2>

            <div className="space-y-2 mb-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeObjective(index)}
                    className="text-red-600 hover:text-red-800 dark:text-red-400"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value={newObjective}
                onChange={(e) => setNewObjective(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addObjective()}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Новая цель..."
              />
              <button
                type="button"
                onClick={addObjective}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                + Добавить
              </button>
            </div>
          </div>

          {/* Персона клиента */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Персона клиента</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Александр"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Должность *
                </label>
                <input
                  type="text"
                  value={clientRole}
                  onChange={(e) => setClientRole(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="CIO"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Компания *
                </label>
                <input
                  type="text"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Компания"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Отрасль
                </label>
                <input
                  type="text"
                  value={clientCompanyIndustry}
                  onChange={(e) => setClientCompanyIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Например: Ритейл, Финансы, IT"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Размер компании
                </label>
                <input
                  type="text"
                  value={clientCompanySize}
                  onChange={(e) => setClientCompanySize(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Например: 100-500 сотрудников"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Тип личности
              </label>
              <input
                type="text"
                value={clientPersonality}
                onChange={(e) => setClientPersonality(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Например: Дружелюбный, С осторожностью, Деловой"
                required
              />
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="decisionMaker"
                checked={clientDecisionMaker}
                onChange={(e) => setClientDecisionMaker(e.target.checked)}
                className="w-4 h-4 text-blue-600"
              />
              <label htmlFor="decisionMaker" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                LPR (Лицо, Принимающее Решения)
              </label>
            </div>

            {/* Болевые точки */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Болевые точки клиента
              </label>
              <div className="space-y-2 mb-4">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removePainPoint(index)}
                      className="text-red-600 hover:text-red-800 dark:text-red-400"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={newPainPoint}
                  onChange={(e) => setNewPainPoint(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addPainPoint()}
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Боль клиента..."
                />
                <button
                  type="button"
                  onClick={addPainPoint}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  + Добавить
                </button>
              </div>
            </div>

            {/* Бюджет и таймлайн */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Бюджет
                </label>
                <input
                  type="text"
                  value={clientBudget}
                  onChange={(e) => setClientBudget(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Например: 5-10 млн рублей"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Таймлайн
                </label>
                <input
                  type="text"
                  value={clientTimeline}
                  onChange={(e) => setClientTimeline(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Например: 3-6 месяцев"
                />
              </div>
            </div>
          </div>

          {/* Talking Points */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Темы для обсуждения</h2>

            <div className="space-y-2 mb-4">
              {talkingPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeTalkingPoint(index)}
                    className="text-red-600 hover:text-red-800 dark:text-red-400"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value={newTalkingPoint}
                onChange={(e) => setNewTalkingPoint(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTalkingPoint()}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Тема для обсуждения..."
              />
              <button
                type="button"
                onClick={addTalkingPoint}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                + Добавить
              </button>
            </div>
          </div>

          {/* Success Criteria */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Критерии успеха</h2>

            <div className="space-y-3">
              {successCriteria.map((criterion, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="grid md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Навык</label>
                      <input
                        type="text"
                        value={criterion.skill}
                        onChange={(e) => updateCriterion(index, 'skill', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Описание</label>
                      <input
                        type="text"
                        value={criterion.description}
                        onChange={(e) => updateCriterion(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Вес</label>
                      <input
                        type="number"
                        value={criterion.weight}
                        onChange={(e) => updateCriterion(index, 'weight', parseInt(e.target.value))}
                        min="0"
                        max="100"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        onClick={() => removeCriterion(index)}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 text-sm"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addCriterion}
              className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400"
            >
              + Добавить критерий
            </button>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 pt-8">
            <Link
              href="/"
              className="px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl transition-colors"
            >
              Отмена
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors"
            >
              {saving ? 'Сохранение...' : 'Сохранить сценарий'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
