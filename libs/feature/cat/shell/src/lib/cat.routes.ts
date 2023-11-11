import { Routes } from '@angular/router';
import { provideCatEntityStore } from '@cat-weight/feature/cat/adapters';
import {
  CatComponent,
  CatPageComponent,
} from '@cat-weight/feature/cat/components';
import { provideCatStore } from '@cat-weight/feature/cat/internal';
import { provideWeights } from '@cat-weight/feature/weight/adapters';

export const CatRoutes: Routes = [
  {
    path: '',
    component: CatPageComponent,
    providers: [provideCatStore(), provideCatEntityStore(), provideWeights()],

    children: [
      {
        path: ':id',
        component: CatComponent,
      },
    ],
  },
];
