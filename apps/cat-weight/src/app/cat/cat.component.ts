import { AsyncPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { WeightInputComponent, WeightListComponent } from '../weight';
import { IWeightStore } from '../weight/IWeightStore';
import { injectRouterParam } from './injectRouterParam';

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
    if (!catId) return;

    this._weightStore.addWeight(catId, weight);
  }
}
