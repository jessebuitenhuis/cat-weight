import { Injectable, Signal } from '@angular/core';
import { ICatWeightEntry, ICatWeightStore } from '@cat-weight/feature/cat';
import { IWeightStore } from '@cat-weight/feature/weight';

@Injectable()
export class CatWeightStoreAdapter implements ICatWeightStore {
  constructor(private _weightStore: IWeightStore) {}

  add(catId: string, weight: number): void {
    return this._weightStore.add(catId, weight);
  }
  findByCatId(catId: string): Signal<ICatWeightEntry[]> {
    return this._weightStore.findByCatId(catId);
  }
}
