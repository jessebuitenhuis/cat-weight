import { Signal } from '@angular/core';

export abstract class IStore<T> {
  abstract readonly value: Signal<T>;
  abstract set(data: T): void;
}
