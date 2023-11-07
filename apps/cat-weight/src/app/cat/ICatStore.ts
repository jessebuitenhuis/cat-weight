import { Injectable, Signal } from '@angular/core';
import { ICat } from './ICat';

@Injectable()
export abstract class ICatStore {
  abstract addByName(name: string): void;
  abstract remove(cat: ICat): void;
  abstract cats: Signal<ICat[]>;
}
