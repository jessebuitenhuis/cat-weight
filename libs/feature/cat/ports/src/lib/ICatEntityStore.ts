import { Signal } from '@angular/core';
import { ICat } from './ICat';

export abstract class ICatEntityStore {
  abstract add(entity: ICat): void;
  abstract find(predicate: (cat: ICat) => boolean): Signal<ICat | undefined>;
  abstract readonly value: Signal<ICat[]>;
  abstract remove(cat: ICat): void;
}
