import { Provider } from '@angular/core';
import { IStoreFactory } from './IStoreFactory';
import { StoreFactory } from './StoreFactory';

export function provideStore(): Provider[] {
  return [{ provide: IStoreFactory, useClass: StoreFactory }];
}
