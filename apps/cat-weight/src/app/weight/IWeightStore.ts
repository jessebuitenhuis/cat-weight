import { Injectable, Signal } from '@angular/core';
import { IWeightEntry } from './IWeightEntry';

@Injectable()
export abstract class IWeightStore {
  abstract addWeight(weight: number): void;
  abstract remove(weight: IWeightEntry): void;
  abstract readonly value: Signal<IWeightEntry[]>;
}
