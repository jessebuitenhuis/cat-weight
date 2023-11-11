import { Provider } from '@angular/core';
import { IWeightEntityStore, IWeightStore } from '@cat-weight/feature/weight';
import { WeightStore } from '@cat-weight/feature/weight/internal';
import { WeightEntityStoreAdapter } from './WeightEntityStoreAdapter';

export function provideWeights(): Provider[] {
  return [
    { provide: IWeightStore, useClass: WeightStore },
    { provide: IWeightEntityStore, useClass: WeightEntityStoreAdapter },
  ];
}
