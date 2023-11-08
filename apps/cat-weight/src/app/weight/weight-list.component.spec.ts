import { render, screen } from '@testing-library/angular';
import { WeightListComponent } from './weight-list.component';
import { MockProvider } from 'ng-mocks';
import { IWeightStore } from './IWeightStore';
import { IWeightEntry } from './IWeightEntry';
import { signal } from '@angular/core';
import userEvent from '@testing-library/user-event';
import { TestBed } from '@angular/core/testing';

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

const renderComp = () =>
  render(WeightListComponent, {
    providers: [
      MockProvider(IWeightStore, {
        value: signal([entry1, entry2, entry3]),
        remove: jest.fn(),
      }),
    ],
  });

it('should show a list of weights', async () => {
  await renderComp();

  expect(screen.getByText(/10/));
  expect(screen.getByText(/11/));
  expect(screen.getByText(/12/));
});

it('should remove a weight', async () => {
  await renderComp();
  const store = TestBed.inject(IWeightStore);

  const deleteButton = screen.queryAllByRole('button')[0];
  await userEvent.click(deleteButton);

  expect(store.remove).toHaveBeenCalledWith(entry1);
});
