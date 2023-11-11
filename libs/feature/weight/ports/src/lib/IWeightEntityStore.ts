import { Signal } from '@angular/core';
import { IWeightEntry } from './IWeightEntry';

export abstract class IWeightEntityStore {
  abstract readonly value: Signal<IWeightEntry[]>;
  abstract add(entity: IWeightEntry): void;
  abstract remove(entity: IWeightEntry): void;
}
