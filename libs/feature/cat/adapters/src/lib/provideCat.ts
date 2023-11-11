import { Injectable, Provider } from '@angular/core';
import { ICat, ICatEntityStore } from '@cat-weight/feature/cat';
import { EntityStore } from '@cat-weight/util/data';

@Injectable()
class CatEntityStoreAdapter
  extends EntityStore<ICat>
  implements ICatEntityStore
{
  constructor() {
    super([], { name: 'cat' });
  }
}

export function provideCatEntityStore(): Provider[] {
  return [{ provide: ICatEntityStore, useClass: CatEntityStoreAdapter }];
}
