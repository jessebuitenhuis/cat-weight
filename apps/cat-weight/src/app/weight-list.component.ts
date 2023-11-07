import { Component } from '@angular/core';
import { IWeightStore } from './IWeightStore';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-weight-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <h1>Weight List</h1>
    <p *ngFor="let entry of entries()">Weight: {{ entry.weight }}</p>
  `,
})
export class WeightListComponent {
  entries = this._weightStore.entries;

  constructor(private _weightStore: IWeightStore) {}
}
