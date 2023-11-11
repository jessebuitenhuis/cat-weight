import { Injectable, Signal } from '@angular/core';
import { IWeightEntry } from './IWeightEntry';

@Injectable()
export abstract class IWeightStore {
  abstract add(catId: string, weight: number): void;
  abstract remove(weight: IWeightEntry): void;
  abstract readonly value: Signal<IWeightEntry[]>;
  abstract findByCatId(catId: string | null): Signal<IWeightEntry[]>;
}
