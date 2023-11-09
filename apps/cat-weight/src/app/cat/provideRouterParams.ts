import { ClassProvider } from '@angular/core';
import { IRouterParams } from './IRouterParams';
import { RouterParams } from './RouterParams';

export function provideRouterParams(): ClassProvider {
  return { provide: IRouterParams, useClass: RouterParams };
}
