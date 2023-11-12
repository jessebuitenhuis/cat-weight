import { signal } from '@angular/core';
import { IStore } from './IStore';
import { IStoreConfig } from './IStoreConfig';

export class LocalStorageStore<T> implements IStore<T> {
  value = signal(this._getInitialValue());

  constructor(private _initialValue: T, private _config: IStoreConfig) {}

  set(value: T) {
    this.value.set(value);
    localStorage.setItem(this._config.name, JSON.stringify(value));
  }

  private _readFromStorage(): T | null {
    const storedValue = localStorage.getItem(this._config.name);
    return storedValue !== null ? (JSON.parse(storedValue) as T) : null;
  }

  private _getInitialValue() {
    const storedValue = this._readFromStorage();
    return storedValue !== null ? storedValue : this._initialValue;
  }
}
