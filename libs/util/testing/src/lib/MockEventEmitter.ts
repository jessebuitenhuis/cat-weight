import { EventEmitter } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MockEventEmitter<T = any>() {
  const emit = jest.fn() as (value?: T) => void;
  return {
    emit,
  } as EventEmitter<T>;
}
