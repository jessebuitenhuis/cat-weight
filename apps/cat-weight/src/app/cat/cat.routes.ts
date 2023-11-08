import { Routes } from '@angular/router';
import { CatComponent } from './cat.component';

export const CatRoutes: Routes = [
  {
    path: ':id',
    component: CatComponent,
  },
];
