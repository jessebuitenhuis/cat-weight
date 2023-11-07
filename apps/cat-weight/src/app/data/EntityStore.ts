import { IEntityStore } from './IEntityStore';
import { Store } from './Store';

export abstract class EntityStore<T>
  extends Store<T[]>
  implements IEntityStore<T>
{
  add(entity: T): void {
    this.set([...this.value(), entity]);
  }

  remove(entity: T): void {
    this.set(this.value().filter((e) => e !== entity));
  }
}
