import { Signal } from '@angular/core';
import { ICatWeightEntry } from './ICatWeightEntry';

export abstract class ICatDisplayer {
  abstract addWeight(catId: string | null, weight: number): void;
  abstract getWeights(catId: Signal<string | null>): Signal<ICatWeightEntry[]>;
}
