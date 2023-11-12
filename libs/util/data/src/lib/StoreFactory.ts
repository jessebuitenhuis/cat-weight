import { IStore } from './IStore';
import { IStoreConfig } from './IStoreConfig';
import { IStoreFactory } from './IStoreFactory';
import { LocalStorageStore } from './LocalStorageStore';

export class StoreFactory implements IStoreFactory {
  create<T>(initialValue: T, config: IStoreConfig): IStore<T> {
    return new LocalStorageStore(initialValue, config);
  }
}
