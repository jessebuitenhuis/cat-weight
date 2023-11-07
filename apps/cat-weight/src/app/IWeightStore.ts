import { Injectable, Signal } from '@angular/core';
import { IWeightEntry } from './IWeightEntry';

@Injectable()
export abstract class IWeightStore {
  abstract add(weight: number): void;
  abstract readonly entries: Signal<IWeightEntry[]>;
}
