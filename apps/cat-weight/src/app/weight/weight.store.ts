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

  addWeight(weight: number): void {
    const entry = { weight, date: new Date() };
    this.add(entry);
  }
}
