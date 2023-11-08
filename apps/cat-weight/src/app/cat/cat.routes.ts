import { Routes } from '@angular/router';
import { CatComponent } from './cat.component';
import { provideCat } from './provideCat';
import { CatPageComponent } from './cat-page.component';

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
