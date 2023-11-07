import { Injectable } from '@angular/core';
import { IStore } from './IStore';
import { IStoreConfig } from './IStoreConfig';

@Injectable()
export abstract class IStoreFactory {
  abstract create<T>(initialValue: T, config: IStoreConfig): IStore<T>;
}
