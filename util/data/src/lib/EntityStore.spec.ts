import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EntityStore } from './EntityStore';
import { provideMockStore } from './provideMockStore';

@Injectable({
  providedIn: 'root',
})
class MockStore extends EntityStore<IItem> {
  constructor() {
    super([], { name: 'test' });
  }
}

interface IItem {
  name: string;
}

const itemA: IItem = { name: 'a' };
const itemB: IItem = { name: 'b' };
const itemC: IItem = { name: 'c' };

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [provideMockStore()],
  })
);

it('should add entities', () => {
  const store = TestBed.inject(MockStore);
  store.add(itemA);
  store.add(itemB);
  store.add(itemC);
  expect(store.value()).toEqual([itemA, itemB, itemC]);
});

it('should remove an entity by reference', () => {
  const store = TestBed.inject(MockStore);
  store.add(itemA);
  store.add(itemB);
  store.add(itemC);

  store.remove(itemB);
  expect(store.value()).toEqual([itemA, itemC]);
});

it('should remove an entity by compareFn', () => {
  const store = TestBed.inject(MockStore);
  store.add(itemA);
  store.add(itemB);

  store.remove((item) => item.name === 'a');
  expect(store.value()).toEqual([itemB]);
});
