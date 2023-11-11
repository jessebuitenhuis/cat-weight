import { Injectable, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ICat, ICatEntityStore } from '@cat-weight/feature/cat';
import { CatStore } from './cat.store';

@Injectable({ providedIn: 'root' })
class CatEntityStoreMock implements ICatEntityStore {
  readonly value = signal<ICat[]>([]);
  add = jest.fn();
  remove = jest.fn();
  find = jest.fn();
}

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [
      CatStore,
      { provide: ICatEntityStore, useExisting: CatEntityStoreMock },
    ],
  })
);

it('should add a cat', () => {
  const store = TestBed.inject(CatStore);
  const entityStore = TestBed.inject(ICatEntityStore);

  store.addByName('Fluffy');
  expect(entityStore.add).toHaveBeenCalledWith({
    id: expect.any(String),
    name: 'Fluffy',
  });
});

it('should remove a cat', () => {
  const store = TestBed.inject(CatStore);
  const entityStore = TestBed.inject(CatEntityStoreMock);

  const fluffy = { id: '1', name: 'Fluffy' };
  const mittens = { id: '2', name: 'Mittens' };

  entityStore.value.set([fluffy, mittens]);

  store.remove(fluffy);
  expect(entityStore.remove).toHaveBeenCalledWith(fluffy);
});
