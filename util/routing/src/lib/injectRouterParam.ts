import { Signal, inject } from '@angular/core';
import { IRouterParams } from './IRouterParams';

export function injectRouterParam(name: string): Signal<string | null> {
  const routerParams = inject(IRouterParams);
  return routerParams.getParam(name);
}

export function injectRouterQueryParam(name: string): Signal<string | null> {
  const routerParams = inject(IRouterParams);
  return routerParams.getQueryParam(name);
}
