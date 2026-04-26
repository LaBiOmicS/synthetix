import type { Lesson } from '../types';
import { level1 } from './lvl1';
import { level2 } from './lvl2';
import { level3 } from './lvl3';
import { level4 } from './lvl4';
import { level5 } from './lvl5';
import { level6 } from './lvl6';
import { level7 } from './lvl7';
import { level8 } from './lvl8';
import { level9 } from './lvl9';

export const lessons: Lesson[] = [
  ...level1,
  ...level2,
  ...level3,
  ...level4,
  ...level5,
  ...level6,
  ...level7,
  ...level8,
  ...level9
];
