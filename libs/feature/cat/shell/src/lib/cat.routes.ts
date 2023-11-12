import { Routes } from '@angular/router';
import {
  CatComponent,
  CatPageComponent,
} from '@cat-weight/feature/cat/components';
import { provideCatFeature } from './provideCatFeature';

export const CatRoutes: Routes = [
  {
    path: '',
    component: CatPageComponent,
    providers: [provideCatFeature()],
    children: [
      {
        path: ':id',
        component: CatComponent,
      },
    ],
  },
];
