import { IWeightEntityStore, IWeightEntry } from '@cat-weight/feature/weight';
import { EntityStore } from '@cat-weight/util/data';

export class WeightEntityStoreAdapter
  extends EntityStore<IWeightEntry>
  implements IWeightEntityStore
{
  constructor() {
    super([], { name: 'weight' });
  }
}
