import { TestBed } from '@angular/core/testing';
import { LocalStorageStore } from './LocalStorageStore';
import { Store } from './Store';
import { IStoreFactory } from './IStoreFactory';
import { StoreFactory } from './StoreFactory';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
class MockStore extends Store<string> {
  constructor() {
    super('initial', { name: 'test' });
  }
}

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [{ provide: IStoreFactory, useClass: StoreFactory }],
  })
);

it('should create a store from a base class', () => {
  const store = TestBed.inject(MockStore);
  expect(store['_store']).toBeInstanceOf(LocalStorageStore);
});
