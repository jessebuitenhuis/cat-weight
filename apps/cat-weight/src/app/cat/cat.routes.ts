import { Routes } from '@angular/router';
import { CatPageComponent } from './cat-page.component';
import { CatComponent } from './cat.component';
import { provideCat } from './provideCat';

export const CatRoutes: Routes = [
  {
    path: '',
    component: CatPageComponent,
    providers: [provideCat()],

    children: [
      {
        path: ':id',
        component: CatComponent,
      },
    ],
  },
];
