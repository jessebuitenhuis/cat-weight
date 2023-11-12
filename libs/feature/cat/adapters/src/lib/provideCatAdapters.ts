import { Provider } from '@angular/core';
import { CAT_ENTITY_STORE_ADAPTER_PROVIDER } from './CatEntityStoreAdapter';
import { CAT_WEIGHT_STORE_ADAPTER_PROVIDER } from './CatWeightStoreAdapter';

export function provideCatAdapters(): Provider[] {
  return [CAT_WEIGHT_STORE_ADAPTER_PROVIDER, CAT_ENTITY_STORE_ADAPTER_PROVIDER];
}
