import { Provider } from '@angular/core';
import { IRouterParams } from './IRouterParams';
import { RouterParams } from './RouterParams';

export function provideRouterParams(): Provider[] {
  return [
    {
      provide: IRouterParams,
      useClass: RouterParams,
    },
  ];
}
