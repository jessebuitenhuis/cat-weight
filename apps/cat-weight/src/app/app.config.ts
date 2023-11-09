import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideStore } from '@cat-weight/util/data';
import { appRoutes } from './app.routes';
import { provideWeights } from './weight';
import { provideRouterParams } from './cat/provideRouterParams';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideWeights(),
    provideStore(),
    provideRouterParams(),
  ],
};
