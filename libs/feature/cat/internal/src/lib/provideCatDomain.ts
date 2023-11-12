import { Provider } from '@angular/core';
import { CAT_DETAIL_PROVIDER } from './CatDetail';
import { CAT_DISPLAYER_PROVIDER } from './CatDisplayer';
import { CAT_LIST_PROVIDER } from './CatList';
import { CAT_STORE_PROVIDER } from './cat.store';

export function provideCatDomain(): Provider[] {
  return [
    CAT_DISPLAYER_PROVIDER,
    CAT_STORE_PROVIDER,
    CAT_DETAIL_PROVIDER,
    CAT_LIST_PROVIDER,
  ];
}
