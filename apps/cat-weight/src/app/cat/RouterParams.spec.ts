import { TestBed } from '@angular/core/testing';
import { RouterParams } from './RouterParams';
import { MockActivatedRoute, updateActivatedRoute } from './MockActivatedRoute';
import { Injector, runInInjectionContext } from '@angular/core';

const PARAM_NAME = 'p';
const QUERY_PARAM_NAME = 'qp';

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [
      RouterParams,
      MockActivatedRoute({
        params: { [PARAM_NAME]: 'param-one' },
        queryParams: { [QUERY_PARAM_NAME]: 'query-one' },
      }),
    ],
  })
);

it('should get the params from the activated route and sync them', () => {
  const sut = TestBed.inject(RouterParams);
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
