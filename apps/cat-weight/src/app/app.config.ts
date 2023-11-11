import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideWeights } from '@cat-weight/feature/weight/adapters';
import { provideStore } from '@cat-weight/util/data';
import { provideRouterParams } from '@cat-weight/util/routing';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideWeights(),
    provideStore(),
    provideRouterParams(),
  ],
};
