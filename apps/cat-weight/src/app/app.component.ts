import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeightInputComponent, WeightListComponent } from './weight';
import { CatNavComponent } from './cat';

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
