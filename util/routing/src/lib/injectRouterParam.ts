import { Signal, inject } from '@angular/core';
import { IRouterParams } from './IRouterParams';
import { IRouterParamsFactory } from './IRouterParamsFactory';

function injectRouterParamService(): IRouterParams {
  const factory = inject(IRouterParamsFactory);
  return factory.getRouterParams();
}

export function injectRouterParam(name: string): Signal<string | null> {
  const routerParams = injectRouterParamService();
  return routerParams.getParam(name);
}

export function injectRouterQueryParam(name: string): Signal<string | null> {
  const routerParams = injectRouterParamService();
  return routerParams.getQueryParam(name);
}
