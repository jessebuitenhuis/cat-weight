import { inject } from '@angular/core';
import { IStoreFactory } from './IStoreFactory';
import { IStoreConfig } from './IStoreConfig';
import { IStore } from './IStore';

export abstract class Store<T> implements IStore<T> {
  private _storeFactory = inject(IStoreFactory);
  private _store = this._storeFactory.create<T>(
    this._initialValue,
    this._config
  );

  value = this._store.value;

  constructor(private _initialValue: T, private _config: IStoreConfig) {}

  set(data: T): void {
    this._store.set(data);
  }
}
