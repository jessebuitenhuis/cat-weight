import { MockEventEmitter } from '@cat-weight/util/testing';
import { render } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import { WeightInputComponent } from './weight-input.component';

it('should add an entry', async () => {
  const addSpy = jest.fn();

  const fixture = await render(WeightInputComponent, {
    componentOutputs: {
      add: MockEventEmitter(addSpy),
    },
  });

  const input = fixture.getByRole('spinbutton') as HTMLInputElement;

  const button = fixture.getByRole('button');

  await userEvent.type(input, '10');
  await userEvent.click(button);

  expect(addSpy).toHaveBeenCalledWith(10);
});
