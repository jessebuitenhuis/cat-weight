import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatNavComponent } from './cat-nav.component';

@Component({
  selector: 'app-cat-page',
  standalone: true,
  imports: [CatNavComponent, RouterOutlet],
  template: `
    <app-cat-nav></app-cat-nav>
    <router-outlet></router-outlet>
  `,
})
export class CatPageComponent {}
