import { Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IRouterParams } from '@cat-weight/util/routing';
import {
  MockActivatedRoute,
  updateActivatedRoute,
} from '@cat-weight/util/routing/testing';
import { ROUTER_PARAMS_ADAPTER_PROVIDER } from './RouterParamsAdapter';

const PARAM_NAME = 'p';
const QUERY_PARAM_NAME = 'qp';

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [
      ROUTER_PARAMS_ADAPTER_PROVIDER,
      MockActivatedRoute({
        params: { [PARAM_NAME]: 'param-one' },
        queryParams: { [QUERY_PARAM_NAME]: 'query-one' },
      }),
    ],
  })
);

it('should get the params from the activated route and sync them', () => {
  const sut = TestBed.inject(IRouterParams);
  const injector = TestBed.inject(Injector);

  runInInjectionContext(injector, () => {
    expect(sut.getParam(PARAM_NAME)()).toEqual('param-one');
    expect(sut.getQueryParam(QUERY_PARAM_NAME)()).toEqual('query-one');

    updateActivatedRoute({
      params: { [PARAM_NAME]: 'param-two' },
      queryParams: { [QUERY_PARAM_NAME]: 'query-two' },
    });

    expect(sut.getParam(PARAM_NAME)()).toEqual('param-two');
    expect(sut.getQueryParam(QUERY_PARAM_NAME)()).toEqual('query-two');
  });
});
