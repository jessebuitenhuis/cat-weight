import { AsyncPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { ICatWeightStore } from '@cat-weight/feature/cat';
import {
  WeightInputComponent,
  WeightListComponent,
} from '@cat-weight/feature/weight/components';
import { injectRouterParam } from '@cat-weight/util/routing';

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
  weights = computed(() => this._catWeightStore.findByCatId(this.id())());

  constructor(private _catWeightStore: ICatWeightStore) {}

  addWeight(weight: number) {
    const catId = this.id();
    if (!catId) throw new Error('No cat id found');

    this._catWeightStore.add(catId, weight);
  }
}
