import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@cat-weight/util/data';
import { IWeightEntry } from './IWeightEntry';
import { WeightStore } from './weight.store';

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [provideMockStore(), WeightStore],
  })
);

it('should add an entry', () => {
  const service = TestBed.inject(WeightStore);
  const entry: IWeightEntry = { catId: 'cat-1', date: new Date(), weight: 5 };
  const entry2: IWeightEntry = { catId: 'cat-2', date: new Date(), weight: 6 };

  service.add(entry);
  service.add(entry2);

  expect(service.value()).toEqual([entry, entry2]);
});

it('should find weights by catId', () => {
  const service = TestBed.inject(WeightStore);
  const entry1a: IWeightEntry = { catId: 'cat-1', date: new Date(), weight: 5 };
  const entry1b: IWeightEntry = { catId: 'cat-1', date: new Date(), weight: 6 };
  const entry2a: IWeightEntry = { catId: 'cat-2', date: new Date(), weight: 7 };
  const entry2b: IWeightEntry = { catId: 'cat-2', date: new Date(), weight: 7 };

  service.add(entry1a);
  service.add(entry1b);
  service.add(entry2a);
  service.add(entry2b);

  expect(service.findByCatId('cat-1')()).toEqual([entry1a, entry1b]);
});
