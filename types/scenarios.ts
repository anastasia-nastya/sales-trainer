// Типы для сценариев обучения

export type ScenarioType = 'meeting' | 'objection' | 'negotiation';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Scenario {
  id: string;
  title: string;
  description: string;
  type: ScenarioType;
  difficulty: DifficultyLevel;
  duration: number; // в минутах
  objectives: string[];
  clientPersona: ClientPersona;
  talkingPoints?: string[];
  commonObjections?: string[];
  successCriteria: SuccessCriteria[];
}

export interface ClientPersona {
  name: string;
  role: string;
  company: string;
  personality: string;
  painPoints: string[];
  budget?: string;
  timeline?: string;
  decisionMaker: boolean;
}

export interface SuccessCriteria {
  skill: string;
  description: string;
  weight: number; // вес критерия для общей оценки
}

export interface ScenarioProgress {
  scenarioId: string;
  completed: boolean;
  score?: number;
  attempts: number;
  lastAttempt?: Date;
  bestScore?: number;
}
