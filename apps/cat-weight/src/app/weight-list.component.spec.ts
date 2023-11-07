import { render, screen } from '@testing-library/angular';
import { WeightListComponent } from './weight-list.component';
import { MockProvider } from 'ng-mocks';
import { IWeightStore } from './IWeightStore';
import { IWeightEntry } from './IWeightEntry';
import { signal } from '@angular/core';

const entry1: IWeightEntry = {
  date: new Date(),
  weight: 10,
};

const entry2: IWeightEntry = {
  date: new Date(),
  weight: 11,
};

const entry3: IWeightEntry = {
  date: new Date(),
  weight: 12,
};

it('should show a list of weights', async () => {
  await render(WeightListComponent, {
    providers: [
      MockProvider(IWeightStore, {
        value: signal([entry1, entry2, entry3]),
      }),
    ],
  });

  expect(screen.getByText(/10/));
  expect(screen.getByText(/11/));
  expect(screen.getByText(/12/));
});
