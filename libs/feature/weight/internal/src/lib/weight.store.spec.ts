import { Injectable, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IWeightEntityStore } from '@cat-weight/feature/weight';
import { WeightStore } from './weight.store';

@Injectable({ providedIn: 'root' })
class WeightEntityStoreMock implements IWeightEntityStore {
  value = signal([]);
  add = jest.fn();
  remove = jest.fn();
}

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [
      WeightStore,
      { provide: IWeightEntityStore, useExisting: WeightEntityStoreMock },
    ],
  })
);

it('should add an entry', () => {
  const service = TestBed.inject(WeightStore);
  const entityStore = TestBed.inject(IWeightEntityStore);

  service.add('cat-1', 5);
  service.add('cat-2', 6);

  expect(entityStore.add).toHaveBeenCalledWith({
    catId: 'cat-1',
    weight: 5,
    date: expect.any(Date),
  });

  expect(entityStore.add).toHaveBeenCalledWith({
    catId: 'cat-2',
    weight: 6,
    date: expect.any(Date),
  });
});

it('should find weights by catId', () => {
  const service = TestBed.inject(WeightStore);
  const entityStoreMock = TestBed.inject(WeightEntityStoreMock);

  entityStoreMock.value.set([
    { catId: 'cat-1', weight: 5, date: expect.any(Date) },
    { catId: 'cat-1', weight: 6, date: expect.any(Date) },
    { catId: 'cat-2', weight: 7, date: expect.any(Date) },
    { catId: 'cat-2', weight: 8, date: expect.any(Date) },
  ]);

  expect(service.findByCatId('cat-1')()).toEqual([
    { catId: 'cat-1', weight: 5, date: expect.any(Date) },
    { catId: 'cat-1', weight: 6, date: expect.any(Date) },
  ]);
});
