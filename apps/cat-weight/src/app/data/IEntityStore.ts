import { IStore } from './IStore';

export abstract class IEntityStore<T> extends IStore<T[]> {
  abstract add(entity: T): void;
  abstract remove(entity: T): void;
}
