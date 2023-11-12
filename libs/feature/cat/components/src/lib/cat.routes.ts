import { Routes } from '@angular/router';
import { CatDetailComponent } from './cat-detail.component';
import { CatListComponent } from './cat-list.component';

export const CatRoutes: Routes = [
  { path: '', component: CatListComponent },
  { path: ':id', component: CatDetailComponent },
];
