import { Provider } from '@angular/core';
import { IRouterParamsFactory } from './IRouterParamsFactory';
import { RouterParamsFactory } from './RouterParamsFactory';

export function provideRouterParams(): Provider[] {
  return [
    {
      provide: IRouterParamsFactory,
      useClass: RouterParamsFactory,
    },
  ];
}
