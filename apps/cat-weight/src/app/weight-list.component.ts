import { Component } from '@angular/core';
import { IWeightStore } from './IWeightStore';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { IWeightEntry } from './IWeightEntry';

@Component({
  selector: 'app-weight-list',
  standalone: true,
  imports: [NgFor, DatePipe, CommonModule],
  template: `
    <h1>Weight List</h1>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weight</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let entry of entries()">
          <td>{{ entry.date | date }}</td>
          <td>{{ entry.weight }}</td>
          <td>
            <button (click)="remove(entry)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class WeightListComponent {
  entries = this._weightStore.value;

  constructor(private _weightStore: IWeightStore) {}

  remove(entry: IWeightEntry) {
    this._weightStore.remove(entry);
  }
}
