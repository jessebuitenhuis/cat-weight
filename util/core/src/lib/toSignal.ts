import { Signal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export function toSignal<T>(source: Observable<T>): Signal<T | null>;
export function toSignal<T, I>(
  source: Observable<T>,
  initialValue: I
): Signal<T | I>;
export function toSignal<T>(
  source: Observable<T>,
  initialValue: T | null = null
): Signal<T | null> {
  const out = signal<T | null>(initialValue);
  source.pipe(takeUntilDestroyed()).subscribe((x) => {
    out.set(x);
  });
  return out;
}
