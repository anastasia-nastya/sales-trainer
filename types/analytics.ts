// Типы для аналитики и отчётности

export interface UserAnalytics {
  userId: string;
  totalSessions: number;
  totalDuration: number; // в минутах
  averageScore: number;
  skillRatings: SkillRating[];
  progressHistory: ProgressPoint[];
  strengths: string[];
  weaknesses: string[];
  rank?: number;
  percentile?: number;
}

export interface SkillRating {
  skill: string;
  rating: number; // 0-100
  trend: 'improving' | 'stable' | 'declining';
  lastAssessed: Date;
}

export interface ProgressPoint {
  date: Date;
  score: number;
  scenarioType: string;
}

export interface ComparisonMetrics {
  userScore: number;
  averageScore: number;
  topScore: number;
  userRank: number;
  totalUsers: number;
  percentile: number;
}

export interface AnalyticsDashboard {
  overview: {
    totalSessions: number;
    totalHours: number;
    averageScore: number;
    improvementRate: number;
  };
  recentSessions: SessionSummary[];
  skillBreakdown: SkillRating[];
  comparison: ComparisonMetrics;
  recommendations: Recommendation[];
}

export interface SessionSummary {
  sessionId: string;
  scenarioTitle: string;
  date: Date;
  duration: number;
  score: number;
  status: string;
}

export interface Recommendation {
  type: 'scenario' | 'skill' | 'resource';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedImpact: string;
}
