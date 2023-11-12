import { Component, effect } from '@angular/core';
import { ICatDisplayer } from '@cat-weight/feature/cat';
import {
  WeightInputComponent,
  WeightListComponent,
} from '@cat-weight/feature/weight/components';
import { injectRouterParam } from '@cat-weight/util/routing';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [WeightInputComponent, WeightListComponent],
  template: `
    <app-weight-input (add)="addWeight($event)"></app-weight-input>
    <app-weight-list [weights]="weights()"></app-weight-list>
  `,
})
export class CatComponent {
  private _id = injectRouterParam('id');

  weights = this._catDisplayer.getWeights(this._id);

  constructor(private _catDisplayer: ICatDisplayer) {
    effect(() => console.log(this.weights()));
  }

  addWeight(weight: number) {
    this._catDisplayer.addWeight(this._id(), weight);
  }
}
