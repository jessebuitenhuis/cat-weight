import { Signal } from '@angular/core';

export abstract class IRouterParams {
  abstract getParam(name: string): Signal<string | null>;
  abstract getQueryParam(name: string): Signal<string | null>;
}
