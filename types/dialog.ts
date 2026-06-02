// Типы для диалоговых сессий

export interface DialogMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  audioUrl?: string;
  analysis?: MessageAnalysis;
}

export interface MessageAnalysis {
  sentiment: 'positive' | 'neutral' | 'negative';
  confidence: number;
  keyTopics: string[];
  techniques: string[];
  improvements?: string[];
}

export interface DialogSession {
  id: string;
  scenarioId: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  status: 'active' | 'completed' | 'abandoned';
  messages: DialogMessage[];
  metrics?: SessionMetrics;
  feedback?: SessionFeedback;
}

export interface SessionMetrics {
  duration: number; // в секундах
  messageCount: number;
  userMessageCount: number;
  assistantMessageCount: number;
  averageResponseTime: number; // в секундах
  audioQuality?: number;
  completionRate: number;
}

export interface SessionFeedback {
  overallScore: number; // 0-100
  skillScores: SkillScore[];
  strengths: string[];
  improvements: string[];
  recommendations: string[];
  nextSteps: string[];
}

export interface SkillScore {
  skill: string;
  score: number; // 0-100
  feedback: string;
}
