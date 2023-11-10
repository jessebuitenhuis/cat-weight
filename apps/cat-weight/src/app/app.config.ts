import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideStore } from '@cat-weight/util/data';
import { provideRouterParams } from '@cat-weight/util/routing';
import { appRoutes } from './app.routes';
import { provideWeights } from './weight';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideWeights(),
    provideStore(),
    provideRouterParams(),
  ],
};
