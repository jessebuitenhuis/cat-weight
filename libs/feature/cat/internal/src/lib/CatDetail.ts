import { Injectable, Signal, computed } from '@angular/core';
import { ICatDetail, ICatStore } from '@cat-weight/feature/cat';

@Injectable()
class CatDetail implements ICatDetail {
  findCat(catId: Signal<string | null>) {
    return computed(() => this._catStore.findById(catId())());
  }

  constructor(private _catStore: ICatStore) {}
}

export const CAT_DETAIL_PROVIDER = {
  provide: ICatDetail,
  useClass: CatDetail,
};
