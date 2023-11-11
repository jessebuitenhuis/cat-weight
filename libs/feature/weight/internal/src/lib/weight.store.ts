import { Injectable, Signal, computed } from '@angular/core';
import {
  IWeightEntityStore,
  IWeightEntry,
  IWeightStore,
} from '@cat-weight/feature/weight';

@Injectable()
export class WeightStore implements IWeightStore {
  value = this._entityStore.value;

  constructor(private _entityStore: IWeightEntityStore) {}

  add(catId: string, weight: number): void {
    const entry = { catId, weight, date: new Date() };
    this._entityStore.add(entry);
  }

  findByCatId(catId: string | null): Signal<IWeightEntry[]> {
    return computed(() =>
      this._entityStore.value().filter((entry) => entry.catId === catId)
    );
  }

  remove(weight: IWeightEntry): void {
    this._entityStore.remove(weight);
  }
}
