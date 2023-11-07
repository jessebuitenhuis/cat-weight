import { WeightStore } from './weight.store';

it('should add an entry', () => {
  const service = new WeightStore();
  const entry = { date: new Date(), weight: 5 };
  const entry2 = { date: new Date(), weight: 6 };

  service.add(entry);
  service.add(entry2);

  expect(service.entries()).toEqual([entry, entry2]);
});
