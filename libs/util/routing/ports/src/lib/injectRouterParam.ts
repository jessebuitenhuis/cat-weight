import { Signal, inject } from '@angular/core';
import { IRouterParams } from './IRouterParams';

export function injectRouterParam(name: string): Signal<string | null> {
  const routerParams = inject(IRouterParams);
  console.log(routerParams);
  const param = routerParams.getParam(name);

  console.log(param());
  return param;
}

export function injectRouterQueryParam(name: string): Signal<string | null> {
  const routerParams = inject(IRouterParams);
  return routerParams.getQueryParam(name);
}
