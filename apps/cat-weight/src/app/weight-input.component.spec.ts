import { render, waitFor } from '@testing-library/angular';
import { IWeightStore } from './IWeightStore';
import { WeightInputComponent } from './weight-input.component';
import { MockProvider } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { userEvent } from '@testing-library/user-event';

it('should add an entry', async () => {
  const fixture = await render(WeightInputComponent, {
    providers: [
      MockProvider(IWeightStore, {
        add: jest.fn(),
      }),
    ],
  });

  const store = TestBed.inject(IWeightStore);

  const input = fixture.getByRole('spinbutton') as HTMLInputElement;
  const button = fixture.getByRole('button');

  await userEvent.type(input, '10');
  await userEvent.click(button);

  expect(store.add).toHaveBeenCalledWith(10);
});
