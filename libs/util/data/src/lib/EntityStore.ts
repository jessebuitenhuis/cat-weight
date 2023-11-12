import { Signal, computed } from '@angular/core';
import { IEntityStore } from './IEntityStore';
import { Store } from './Store';

export abstract class EntityStore<T>
  extends Store<T[]>
  implements IEntityStore<T>
{
  add(entity: T): void {
    this.set([...this.value(), entity]);
  }

  remove(compareFn: (entity: T) => boolean): void;
  remove(entity: T): void;
  remove(entityOrCompareFn: T | ((entity: T) => boolean)): void {
    const compareFn =
      entityOrCompareFn instanceof Function
        ? entityOrCompareFn
        : (e: T) => e === entityOrCompareFn;
    this._removeByCompareFn(compareFn);
  }

  find(compareFn: (entity: T) => boolean): Signal<T | undefined> {
    return computed(() => this.value().find(compareFn));
  }

  private _removeByCompareFn(compareFn: (item: T) => boolean): void {
    this.set(this.value().filter((item) => !compareFn(item)));
  }
}
