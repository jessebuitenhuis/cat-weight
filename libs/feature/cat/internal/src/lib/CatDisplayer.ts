import { Injectable, Signal, computed } from '@angular/core';
import { ICatDisplayer, ICatWeightStore } from '@cat-weight/feature/cat';

@Injectable()
class CatDisplayer implements ICatDisplayer {
  constructor(private _catWeightStore: ICatWeightStore) {}

  addWeight(catId: string | null, weight: number): void {
    if (!catId) throw new Error('No cat id found');
    this._catWeightStore.add(catId, weight);
  }

  getWeights(catId: Signal<string | null>) {
    return computed(() => this._catWeightStore.findByCatId(catId())());
  }
}

export const CAT_DISPLAYER_PROVIDER = {
  provide: ICatDisplayer,
  useClass: CatDisplayer,
};
