import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideWeights } from './weight';
import { provideCat } from './cat';
import { provideStore } from '@cat-weight/util/data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideWeights(),
    provideStore(),
    provideCat(),
  ],
};
