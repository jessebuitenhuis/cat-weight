import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeightInputComponent } from './weight-input.component';
import { WeightListComponent } from './weight-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, WeightInputComponent, WeightListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cat-weight';
}
