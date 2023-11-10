import { Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { toSignal } from './toSignal';

it('should convert an observable to a signal and start with null', () => {
  const source$ = new Subject<string>();
  const injector = TestBed.inject(Injector);

  runInInjectionContext(injector, () => {
    const output = toSignal(source$);
    expect(output()).toEqual(null);

    source$.next('one');
    expect(output()).toEqual('one');
  });
});

it('should convert an observable to a signal and start with initialValue', () => {
  const source$ = new Subject<string>();
  const injector = TestBed.inject(Injector);

  runInInjectionContext(injector, () => {
    const output = toSignal(source$, 'initial');
    expect(output()).toEqual('initial');

    source$.next('one');
    expect(output()).toEqual('one');
  });
});

it('should convert an observable to a signal and start with initialValue of a different type', () => {
  const source$ = new Subject<string>();
  const injector = TestBed.inject(Injector);

  runInInjectionContext(injector, () => {
    const output = toSignal(source$, 1);
    expect(output()).toEqual('initial');

    source$.next('one');
    expect(output()).toEqual('one');
  });
});
