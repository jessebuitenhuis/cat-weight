import { Signal, computed } from '@angular/core';
import { EntityStore } from '@cat-weight/util/data';
import { IWeightEntry } from './IWeightEntry';
import { IWeightStore } from './IWeightStore';

export class WeightStore
  extends EntityStore<IWeightEntry>
  implements IWeightStore
{
  constructor() {
    super([], { name: 'weight' });
  }

  addWeight(catId: string, weight: number): void {
    const entry = { catId, weight, date: new Date() };
    this.add(entry);
  }

  findByCatId(catId: string | null): Signal<IWeightEntry[]> {
    return computed(() =>
      this.value().filter((entry) => entry.catId === catId)
    );
  }
}
