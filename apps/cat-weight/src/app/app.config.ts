import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideWeights } from './provideWeights';
import { provideStore } from './data/provideStore';
import { provideCat } from './cat/provideCat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideWeights(),
    provideStore(),
    provideCat(),
  ],
};
