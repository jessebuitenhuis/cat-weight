import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideWeights } from './provideWeights';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideWeights(),
  ],
};
