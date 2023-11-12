import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './app-navbar.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, AppNavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cat-weight';
}
