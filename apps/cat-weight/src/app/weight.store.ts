import { IWeightEntry } from './IWeightEntry';
import { IWeightStore } from './IWeightStore';
import { Store } from './data/Store';

export class WeightStore extends Store<IWeightEntry[]> implements IWeightStore {
  readonly entries = this.value;

  constructor() {
    super([], { name: 'weight' });
  }

  add(weight: number): void {
    const entry = { weight, date: new Date() };
    this.set([...this.value(), entry]);
  }
}
