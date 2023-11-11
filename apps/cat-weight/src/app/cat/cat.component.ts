import { AsyncPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { injectRouterParam } from '@cat-weight/util/routing';
import { WeightInputComponent, WeightListComponent } from '../weight';
import { IWeightStore } from '../weight/IWeightStore';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [AsyncPipe, WeightInputComponent, WeightListComponent],
  template: `
    <app-weight-input (add)="addWeight($event)"></app-weight-input>
    <app-weight-list [weights]="weights()"></app-weight-list>
  `,
})
export class CatComponent {
  id = injectRouterParam('id');
  weights = computed(() => this._weightStore.findByCatId(this.id())());

  constructor(private _weightStore: IWeightStore) {}

  addWeight(weight: number) {
    const catId = this.id();
    if (!catId) throw new Error('No cat id found');

    this._weightStore.addWeight(catId, weight);
  }
}
