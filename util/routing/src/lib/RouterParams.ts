import { Signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { IRouterParams } from './IRouterParams';
import { toSignal } from '@cat-weight/util/core';

export class RouterParams implements IRouterParams {
  getParam(name: string): Signal<string | null> {
    return this._getParam$('paramMap', name);
  }

  getQueryParam(name: string): Signal<string | null> {
    return this._getParam$('queryParamMap', name);
  }

  private _getParam$(
    mapName: 'paramMap' | 'queryParamMap',
    name: string
  ): Signal<string | null> {
    const activatedRoute = inject(ActivatedRoute);

    const value$ = activatedRoute[mapName].pipe(
      map((paramMap) => paramMap.get(name))
    );
    return toSignal(value$);
  }
}
