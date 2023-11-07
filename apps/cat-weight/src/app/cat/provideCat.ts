import { Provider } from '@angular/core';
import { ICatStore } from './ICatStore';
import { CatStore } from './cat.store';

export function provideCat(): Provider[] {
  return [{ provide: ICatStore, useClass: CatStore }];
}
