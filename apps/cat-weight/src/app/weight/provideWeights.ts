import { Provider } from '@angular/core';
import { IWeightStore } from './IWeightStore';
import { WeightStore } from './weight.store';

export function provideWeights(): Provider[] {
  return [{ provide: IWeightStore, useClass: WeightStore }];
}
