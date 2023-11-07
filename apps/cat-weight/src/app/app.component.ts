import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeightInputComponent } from './weight-input.component';
import { WeightListComponent } from './weight-list.component';
import { CatNavComponent } from './cat/cat-nav.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    WeightInputComponent,
    WeightListComponent,
    CatNavComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cat-weight';
}
