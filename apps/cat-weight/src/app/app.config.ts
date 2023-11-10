import { ApplicationConfig, InjectionToken } from '@angular/core';
import {
  ActivatedRoute,
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideStore } from '@cat-weight/util/data';
import { appRoutes } from './app.routes';
import { provideWeights } from './weight';
import { provideRouterParams } from '@cat-weight/util/routing';

export const ActivatedRouteAlias = new InjectionToken('ActivatedRouteAlias');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideWeights(),
    provideStore(),
    provideRouterParams(),
    { provide: ActivatedRouteAlias, useExisting: ActivatedRoute },
  ],
};
