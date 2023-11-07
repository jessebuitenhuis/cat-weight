import { signal } from '@angular/core';
import { IWeightEntry } from './IWeightEntry';
import { IWeightStore } from './IWeightStore';

export class WeightStore implements IWeightStore {
  private _data = signal<IWeightEntry[]>([]);

  readonly entries = this._data.asReadonly();

  add(weight: number): void {
    const entry = { weight, date: new Date() };
    this._data.update((data) => [...data, entry]);
  }
}
