import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cat',
    loadChildren: () => import('./cat/cat.routes').then((x) => x.CatRoutes),
  },
  {
    path: '**',
    redirectTo: 'cat',
  },
];
