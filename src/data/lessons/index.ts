import type { Lesson } from '../types';
import { level1 } from './lvl1';
import { level2 } from './lvl2';
import { level3 } from './lvl3';
import { level4 } from './lvl4';
import { level5 } from './lvl5';
import { level6 } from './lvl6';

export const lessons: Lesson[] = [
  ...level1,
  ...level2,
  ...level3,
  ...level4,
  ...level5,
  ...level6
];
