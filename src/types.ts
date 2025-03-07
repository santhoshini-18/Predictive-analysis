export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: string;
}

export interface PredictiveData {
  date: string;
  actual: number;
  predicted: number;
}

export interface RiskMetric {
  category: string;
  value: number;
  status: 'low' | 'medium' | 'high';
}

export interface CostCategory {
  name: string;
  currentCost: number;
  previousCost: number;
  predictedReduction: number;
  efficiency: number;
}

export interface CostRecommendation {
  category: string;
  impact: 'high' | 'medium' | 'high';
  potentialSavings: number;
  description: string;
  actionItems: string[];
}

export interface FlipCard {
  title: string;
  frontContent: string;
  backContent: string;
  icon: string;
}

export type NavSection = 'dashboard' | 'analytics' | 'predictions' | 'settings';
export type PredictionType = 'risk' | 'revenue' | 'market' | 'pricing' | 'expansion';