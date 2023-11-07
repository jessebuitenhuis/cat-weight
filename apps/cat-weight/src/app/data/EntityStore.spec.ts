import { Mock } from 'ng-mocks';
import { EntityStore } from './EntityStore';
import { TestBed } from '@angular/core/testing';
import { provideStore } from './provideStore';
import { StoreFactory } from './StoreFactory';
import { IStoreFactory } from './IStoreFactory';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
class MockStore extends EntityStore<string> {
  constructor() {
    super([], { name: 'test' });
  }
}

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [{ provide: IStoreFactory, useClass: StoreFactory }],
  })
);

it('should add entities', () => {
  const store = TestBed.inject(MockStore);
  store.add('itema');
  store.add('itemb');
  store.add('itemc');
  expect(store.value()).toEqual(['itema', 'itemb', 'itemc']);
});

it('should remove entities', () => {
  const store = TestBed.inject(MockStore);
  store.add('itema');
  store.add('itemb');
  store.add('itemc');

  store.remove('itemb');
  expect(store.value()).toEqual(['itema', 'itemc']);
});
