import { Injectable } from '@angular/core';
import { ICatList, ICatStore } from '@cat-weight/feature/cat';

@Injectable()
class CatList implements ICatList {
  readonly cats = this._catStore.cats;

  constructor(private _catStore: ICatStore) {}
}

export const CAT_LIST_PROVIDER = {
  provide: ICatList,
  useClass: CatList,
};
