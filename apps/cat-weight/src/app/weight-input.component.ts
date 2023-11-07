import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IWeightStore } from './IWeightStore';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-weight-input',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <input
      type="number"
      placeholder="Enter weight in kg"
      [formControl]="weightCtrl"
    />
    <button (click)="add()">Add</button>
  `,
})
export class WeightInputComponent {
  weightCtrl = new FormControl(0, { nonNullable: true });

  constructor(private _weightStore: IWeightStore) {}

  add(): void {
    console.log(this.weightCtrl.value);
    this._weightStore.add(this.weightCtrl.value);
  }
}
