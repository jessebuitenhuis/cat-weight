import { Signal, signal } from '@angular/core';
import { MockRouterParams, updateRouterParams } from '@cat-weight/util/routing';
import { render, screen } from '@testing-library/angular';
import { IWeightEntry } from '../weight/IWeightEntry';
import { IWeightStore } from '../weight/IWeightStore';
import { CatComponent } from './cat.component';

class WeightStoreMock implements Partial<IWeightStore> {
  private _weightA: IWeightEntry = {
    catId: 'cat1',
    weight: 1,
    date: new Date(),
  };

  private _weightB: IWeightEntry = {
    catId: 'cat1',
    weight: 2,
    date: new Date(),
  };

  private _weightC: IWeightEntry = {
    catId: 'cat2',
    weight: 3,
    date: new Date(),
  };

  private _weightD: IWeightEntry = {
    catId: 'cat2',
    weight: 4,
    date: new Date(),
  };

  private _mockWeights: Record<string, IWeightEntry[]> = {
    cat1: [this._weightA, this._weightB],
    cat2: [this._weightC, this._weightD],
  };

  findByCatId(catId: string): Signal<IWeightEntry[]> {
    return signal(this._mockWeights[catId]);
  }
}

it('should show the weights of the selected cat', async () => {
  const { detectChanges } = await render(CatComponent, {
    providers: [
      { provide: IWeightStore, useClass: WeightStoreMock },
      MockRouterParams({
        params: { id: 'cat1' },
      }),
    ],
  });

  expect(screen.queryByText('1')).not.toBeNull();
  expect(screen.queryByText('2')).not.toBeNull();
  expect(screen.queryByText('3')).toBeNull();
  expect(screen.queryByText('4')).toBeNull();

  updateRouterParams({
    params: { id: 'cat2' },
  });

  detectChanges();

  expect(screen.queryByText('1')).toBeNull();
  expect(screen.queryByText('2')).toBeNull();
  expect(screen.queryByText('3')).not.toBeNull();
  expect(screen.queryByText('4')).not.toBeNull();
});
