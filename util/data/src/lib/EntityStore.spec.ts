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
  id: string;
  name: string;
}

const itemA: IItem = { id: 'a', name: 'name-a' };
const itemB: IItem = { id: 'b', name: 'name-b' };
const itemC: IItem = { id: 'c', name: 'name-c' };

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

describe('Find', () => {
  it('should find a single entity by compareFn and keep it up to date', () => {
    const store = TestBed.inject(MockStore);
    store.add(itemA);
    store.add(itemB);

    const result = store.find((item) => item.id === 'b');
    expect(result()).toEqual(itemB);

    const updatedB = { ...itemB, name: 'updated' };

    store.set([itemA, updatedB]);
    expect(result()).toEqual(updatedB);
  });
});

describe('Remove', () => {
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

    store.remove((item) => item.id === 'a');
    expect(store.value()).toEqual([itemB]);
  });
});
