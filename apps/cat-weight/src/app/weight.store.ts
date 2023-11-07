import { IWeightEntry } from './IWeightEntry';
import { IWeightStore } from './IWeightStore';
import { EntityStore } from './data/EntityStore';

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
