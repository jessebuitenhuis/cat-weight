import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
    <button (click)="addWeight()">Add</button>
  `,
})
export class WeightInputComponent {
  @Output() add = new EventEmitter<number>();

  weightCtrl = new FormControl(0, { nonNullable: true });

  addWeight(): void {
    this.add.emit(this.weightCtrl.value);
  }
}
