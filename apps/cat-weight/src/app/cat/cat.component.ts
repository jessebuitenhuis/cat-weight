import { AsyncPipe } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ICatStore } from './ICatStore';
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
  id = signal<string | null>(null);
  cat = computed(() => this._catStore.findById(this.id()));
  weights = computed(() => this._weightStore.findByCatId(this.id())());

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _catStore: ICatStore,
    private _weightStore: IWeightStore
  ) {
    this._syncIdFromParam();
  }

  addWeight(weight: number) {
    const catId = this.id();
    if (!catId) return;

    this._weightStore.addWeight(catId, weight);
  }

  private _syncIdFromParam() {
    this._activatedRoute.paramMap.pipe(takeUntilDestroyed()).subscribe((x) => {
      this.id.set(x.get('id'));
    });
  }
}
