import { ClassProvider, FactoryProvider } from '@angular/core';
import { IRouterParams } from './IRouterParams';
import { RouterParams } from './RouterParams';
import { ActivatedRoute } from '@angular/router';

export function provideRouterParams(): FactoryProvider {
  return {
    provide: IRouterParams,
    useFactory: (activatedRoute: ActivatedRoute) => {
      console.log('factory');
      return new RouterParams(activatedRoute);
    },
    deps: [ActivatedRoute],
  };
}
