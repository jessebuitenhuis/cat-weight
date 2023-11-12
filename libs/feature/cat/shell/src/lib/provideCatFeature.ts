import { Provider } from '@angular/core';
import { provideCatAdapters } from '@cat-weight/feature/cat/adapters';
import { provideCatDomain } from '@cat-weight/feature/cat/internal';
import { provideWeights } from '@cat-weight/feature/weight/adapters';

export function provideCatFeature(): Provider[] {
  return [provideCatAdapters(), provideCatDomain(), provideWeights()];
}
