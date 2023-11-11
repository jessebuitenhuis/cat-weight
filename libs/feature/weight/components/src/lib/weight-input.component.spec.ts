import { MockEventEmitter } from '@cat-weight/util/testing';
import { render, screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import { WeightInputComponent } from './weight-input.component';

it('should add an entry', async () => {
  const { fixture } = await render(WeightInputComponent, {
    componentOutputs: {
      add: MockEventEmitter(),
    },
  });

  const input = screen.getByRole('spinbutton') as HTMLInputElement;
  const button = screen.getByRole('button');

  await userEvent.type(input, '10');
  await userEvent.click(button);

  expect(fixture.componentInstance.add.emit).toHaveBeenCalledWith(10);
});
