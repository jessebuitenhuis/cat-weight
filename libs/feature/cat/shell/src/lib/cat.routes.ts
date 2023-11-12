import { Routes } from '@angular/router';
import {
  CatPageComponent,
  CatRoutes,
} from '@cat-weight/feature/cat/components';
import { provideCatFeature } from './provideCatFeature';

export const CatShellRoutes: Routes = [
  {
    path: '',
    component: CatPageComponent,
    providers: [provideCatFeature()],
    children: CatRoutes,
  },
];
