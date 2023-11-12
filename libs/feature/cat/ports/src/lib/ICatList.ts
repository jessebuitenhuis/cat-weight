import { Signal } from '@angular/core';
import { ICat } from './ICat';

export abstract class ICatList {
  abstract readonly cats: Signal<ICat[]>;
}
