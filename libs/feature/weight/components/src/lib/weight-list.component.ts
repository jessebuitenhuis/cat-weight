import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWeightEntry } from '@cat-weight/feature/weight';

@Component({
  selector: 'app-weight-list',
  standalone: true,
  imports: [NgFor, DatePipe, CommonModule],
  template: `
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weight</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let entry of weights">
          <td>{{ entry.date | date }}</td>
          <td>{{ entry.weight }}</td>
          <td>
            <button (click)="remove.emit(entry)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class WeightListComponent {
  @Input() weights: IWeightEntry[] = [];
  @Output() remove = new EventEmitter<IWeightEntry>();
}
