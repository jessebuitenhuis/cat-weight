import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatNavComponent } from './cat';
import { WeightInputComponent, WeightListComponent } from './weight';

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
