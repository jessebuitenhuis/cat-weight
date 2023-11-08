import { TestBed } from '@angular/core/testing';
import { CatStore } from './cat.store';
import { provideMockStore } from '@cat-weight/util/data';

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [provideMockStore(), CatStore],
  })
);

it('should add a cat', () => {
  const store = TestBed.inject(CatStore);
  store.addByName('Fluffy');
  expect(store.value()).toEqual([{ name: 'Fluffy' }]);
});

it('should remove a cat', () => {
  const store = TestBed.inject(CatStore);
  store.addByName('Fluffy');
  store.addByName('Mittens');
  store.remove((x) => x.name === 'Fluffy');
  expect(store.value()).toEqual([{ name: 'Mittens' }]);
});