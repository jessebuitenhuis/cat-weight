import { Provider, signal } from '@angular/core';
import { IStore } from './IStore';
import { IStoreConfig } from './IStoreConfig';
import { IStoreFactory } from './IStoreFactory';

class MockStore<T> implements IStore<T> {
  value = signal(this._initialValue);

  constructor(private _initialValue: T, private _config: IStoreConfig) {}

  set(value: T): void {
    this.value.set(value);
  }
}

class MockStoreFactory implements IStoreFactory {
  create<T>(initialValue: T, config: IStoreConfig): IStore<T> {
    return new MockStore(initialValue, config);
  }
}

export function provideMockStore(): Provider[] {
  return [{ provide: IStoreFactory, useClass: MockStoreFactory }];
}
