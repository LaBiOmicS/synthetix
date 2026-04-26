export interface Lesson {
  id: string;
  title: string;
  module: string;
  phase: string;
  concept: string;
  badge?: string;
  theory: string;
  initialCode: string;
  testCode: string;
  xp: number;
  dependencies: string[];
}
