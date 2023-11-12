import { ApplicationConfig } from '@angular/core';
import { withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideStore } from '@cat-weight/util/data';
import { provideRouter } from '@cat-weight/util/routing/adapters';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideStore(),
  ],
};
