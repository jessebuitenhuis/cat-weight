import { Signal, computed, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { IRouterParams } from './IRouterParams';

interface RouterParamsMockOptions {
  params?: Params;
  queryParams?: Params;
}

class RouterParamsMock implements IRouterParams {
  private _params = signal<Params>(this._defaults.params || {});
  private _queryParams = signal<Params>(this._defaults.queryParams || {});

  constructor(private _defaults: RouterParamsMockOptions) {}

  getParam(name: string): Signal<string | null> {
    return computed(() => this._params()[name]);
  }

  getQueryParam(name: string): Signal<string | null> {
    return computed(() => this._queryParams()[name]);
  }

  update({ params, queryParams }: RouterParamsMockOptions) {
    if (params) this._params.set(params);
    if (queryParams) this._queryParams.set(queryParams);
  }
}

export function MockRouterParams(opts: RouterParamsMockOptions) {
  const mock = new RouterParamsMock(opts);

  return [
    MockProvider(IRouterParams, mock),
    MockProvider(RouterParamsMock, mock),
  ];
}

export function updateRouterParams(opts: RouterParamsMockOptions) {
  const routerParamsMock = TestBed.inject(RouterParamsMock);
  routerParamsMock.update(opts);
}
