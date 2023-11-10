import { AsyncPipe } from '@angular/common';
import { Component, Inject, computed } from '@angular/core';
import { WeightInputComponent, WeightListComponent } from '../weight';
import { IWeightStore } from '../weight/IWeightStore';
import {
  injectRouterParam,
  provideRouterParams,
} from '@cat-weight/util/routing';
import { IRouterParams } from 'util/routing/src/lib/IRouterParams';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteAlias } from '../app.config';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [AsyncPipe, WeightInputComponent, WeightListComponent],
  providers: [provideRouterParams()],
  template: `
    <app-weight-input (add)="addWeight($event)"></app-weight-input>
    <app-weight-list [weights]="weights()"></app-weight-list>
  `,
})
export class CatComponent {
  id = injectRouterParam('id');
  weights = computed(() => this._weightStore.findByCatId(this.id())());

  constructor(
    private _weightStore: IWeightStore,
    private _activatedRoute: ActivatedRoute,
    @Inject(ActivatedRouteAlias) private _activatedRouteAlias: ActivatedRoute
  ) {}

  addWeight(weight: number) {
    const catId = this.id();
    if (!catId) throw new Error('No cat id found');

    this._weightStore.addWeight(catId, weight);
  }
}
