import { ClassProvider, Injectable } from '@angular/core';
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

export const CAT_ENTITY_STORE_ADAPTER_PROVIDER: ClassProvider = {
  provide: ICatEntityStore,
  useClass: CatEntityStoreAdapter,
};
