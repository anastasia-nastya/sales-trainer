// Типы для пользовательских сценариев

export interface CustomScenario {
  id: string;
  title: string;
  description: string;
  type: ScenarioType;
  difficulty: DifficultyLevel;
  duration: number;
  objectives: string[];
  clientPersona: CustomClientPersona;
  talkingPoints: string[];
  commonObjections: string[];
  successCriteria: SuccessCriteria[];
  isCustom: true;
  createdAt: Date;
  updatedAt: Date;
}

export type ScenarioType = 'meeting' | 'objection' | 'negotiation';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface CustomClientPersona {
  name: string;
  role: string;
  company: string;
  companyIndustry?: string;
  companySize?: string;
  personality: string;
  painPoints: string[];
  budget?: string;
  timeline?: string;
  decisionMaker: boolean;
  communicationStyle?: 'formal' | 'friendly' | 'aggressive' | 'diplomatic';
}

export interface SuccessCriteria {
  skill: string;
  description: string;
  weight: number;
}

// Работа с localStorage
const STORAGE_KEY = 'custom-scenarios';

export function getCustomScenarios(): CustomScenario[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const scenarios = JSON.parse(stored);
    return scenarios.map((s: any) => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    }));
  } catch (error) {
    console.error('Error loading custom scenarios:', error);
    return [];
  }
}

export function saveCustomScenario(scenario: CustomScenario): void {
  if (typeof window === 'undefined') return;

  try {
    const scenarios = getCustomScenarios();

    // Если сценарий с таким ID нет, создаём новый
    if (!scenarios.find(s => s.id === scenario.id)) {
      scenario.createdAt = new Date();
    }

    scenario.updatedAt = new Date();

    // Заменяем или добавляем сценарий
    const index = scenarios.findIndex(s => s.id === scenario.id);
    if (index >= 0) {
      scenarios[index] = scenario;
    } else {
      scenarios.push(scenario);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios));
  } catch (error) {
    console.error('Error saving custom scenario:', error);
    throw new Error('Не удалось сохранить сценарий');
  }
}

export function deleteCustomScenario(id: string): void {
  if (typeof window === 'undefined') return;

  try {
    const scenarios = getCustomScenarios();
    const filtered = scenarios.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting custom scenario:', error);
    throw new Error('Не удалось удалить сценарий');
  }
}

export function getCustomScenarioById(id: string): CustomScenario | undefined {
  const scenarios = getCustomScenarios();
  return scenarios.find(s => s.id === id);
}

// Генератор уникального ID
export function generateScenarioId(): string {
  return `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
