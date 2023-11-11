import { ClassProvider } from '@angular/core';
import { ICatStore } from '@cat-weight/feature/cat';
import { CatStore } from './cat.store';

export function provideCatStore(): ClassProvider {
  return { provide: ICatStore, useClass: CatStore };
}
