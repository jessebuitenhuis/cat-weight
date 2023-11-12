import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import {
  RouterFeatures,
  Routes,
  provideRouter as ngProvideRouter,
} from '@angular/router';
import { ROUTER_PARAMS_ADAPTER_PROVIDER } from './RouterParamsAdapter';

export function provideRouter(
  routes: Routes,
  ...features: RouterFeatures[]
): EnvironmentProviders {
  return makeEnvironmentProviders([
    ngProvideRouter(routes, ...features),
    ROUTER_PARAMS_ADAPTER_PROVIDER,
  ]);
}
