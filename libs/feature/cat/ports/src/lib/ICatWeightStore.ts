import { Signal } from '@angular/core';
import { ICatWeightEntry } from './ICatWeightEntry';

export abstract class ICatWeightStore {
  abstract add(catId: string, weight: number): void;
  abstract findByCatId(catId: string | null): Signal<ICatWeightEntry[]>;
}
