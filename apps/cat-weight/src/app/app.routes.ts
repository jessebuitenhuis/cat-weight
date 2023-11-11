import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cat',
    loadChildren: () =>
      import('@cat-weight/feature/cat/shell').then((x) => x.CatRoutes),
  },
  {
    path: '**',
    redirectTo: 'cat',
  },
];
