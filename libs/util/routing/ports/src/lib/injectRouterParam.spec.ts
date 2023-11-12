import { Injectable, Signal, computed, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IRouterParams } from './IRouterParams';
import { injectRouterParam, injectRouterQueryParam } from './injectRouterParam';

const PARAM_NAME = 'p';
const QUERY_PARAM_NAME = 'qp';

@Injectable({
  providedIn: 'root',
})
class RouterParamsMock implements IRouterParams {
  params = signal<Record<string, string | null>>({ [PARAM_NAME]: 'one' });
  queryParams = signal<Record<string, string | null>>({
    [QUERY_PARAM_NAME]: 'query-one',
  });

  getParam(name: string): Signal<string | null> {
    return computed(() => this.params()[name]);
  }
  getQueryParam(name: string): Signal<string | null> {
    return computed(() => this.queryParams()[name]);
  }
}

@Injectable({
  providedIn: 'root',
})
class MockService {
  param = injectRouterParam(PARAM_NAME);
  queryParam = injectRouterQueryParam(QUERY_PARAM_NAME);
}

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [{ provide: IRouterParams, useExisting: RouterParamsMock }],
  })
);

it('should inject a param from the route and keep it synced', async () => {
  const sut = TestBed.inject(MockService);
  const routerParamsMock = TestBed.inject(RouterParamsMock);

  expect(sut.param()).toEqual('one');

  routerParamsMock.params.set({ [PARAM_NAME]: 'two' });

  expect(sut.param()).toEqual('two');
});

it('should inject a queryparam from the route and keep it synced', () => {
  const sut = TestBed.inject(MockService);
  const routerParamsMock = TestBed.inject(RouterParamsMock);

  expect(sut.queryParam()).toEqual('query-one');

  routerParamsMock.queryParams.set({ [QUERY_PARAM_NAME]: 'query-two' });

  expect(sut.queryParam()).toEqual('query-two');
});
