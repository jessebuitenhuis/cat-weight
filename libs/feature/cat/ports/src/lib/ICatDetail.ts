import { Signal } from '@angular/core';
import { ICat } from './ICat';

export abstract class ICatDetail {
  abstract findCat(catId: Signal<string | null>): Signal<ICat | undefined>;
}
