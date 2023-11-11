import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@cat-weight/util/data';
import { CatStore } from './cat.store';

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [provideMockStore(), CatStore],
  })
);

it('should add a cat', () => {
  const store = TestBed.inject(CatStore);
  store.addByName('Fluffy');
  expect(store.value()).toEqual([{ id: expect.any(String), name: 'Fluffy' }]);
});

it('should remove a cat', () => {
  const store = TestBed.inject(CatStore);
  store.addByName('Fluffy');
  store.addByName('Mittens');
  store.remove((x) => x.name === 'Fluffy');
  expect(store.value()).toEqual([{ id: expect.any(String), name: 'Mittens' }]);
});
