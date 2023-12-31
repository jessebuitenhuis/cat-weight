import { IWeightEntry } from '@cat-weight/feature/weight';
import { MockEventEmitter } from '@cat-weight/util/testing';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { WeightListComponent } from './weight-list.component';

const entry1: IWeightEntry = {
  catId: 'cat-1',
  date: new Date(),
  weight: 10,
};

const entry2: IWeightEntry = {
  catId: 'cat-1',
  date: new Date(),
  weight: 11,
};

const entry3: IWeightEntry = {
  catId: 'cat-1',
  date: new Date(),
  weight: 12,
};

const removeMock = MockEventEmitter();

const renderComp = () =>
  render(WeightListComponent, {
    componentInputs: {
      weights: [entry1, entry2, entry3],
    },
    componentOutputs: {
      remove: removeMock,
    },
  });

it('should show a list of weights', async () => {
  await renderComp();

  expect(screen.getByText('10'));
  expect(screen.getByText('11'));
  expect(screen.getByText('12'));
});

it('should remove a weight', async () => {
  await renderComp();
  const deleteButton = screen.queryAllByRole('button')[0];
  await userEvent.click(deleteButton);

  expect(removeMock.emit).toHaveBeenCalledWith(entry1);
});
