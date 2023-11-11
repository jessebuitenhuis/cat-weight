import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockRouterParams, updateRouterParams } from './MockRouterParams';
import { injectRouterParam, injectRouterQueryParam } from './injectRouterParam';

const PARAM_NAME = 'p';
const QUERY_PARAM_NAME = 'qp';

@Injectable({
  providedIn: 'root',
})
class MockService {
  param = injectRouterParam(PARAM_NAME);
  queryParam = injectRouterQueryParam(QUERY_PARAM_NAME);
}

beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [
      MockRouterParams({
        params: { [PARAM_NAME]: 'one' },
        queryParams: { [QUERY_PARAM_NAME]: 'query-one' },
      }),
    ],
  })
);

it('should inject a param from the route and keep it synced', () => {
  const mockService = TestBed.inject(MockService);
  expect(mockService.param()).toEqual('one');

  updateRouterParams({ params: { [PARAM_NAME]: 'two' } });

  expect(mockService.param()).toEqual('two');
});

it('should inject a queryparam from the route and keep it synced', () => {
  const mockService = TestBed.inject(MockService);
  expect(mockService.queryParam()).toEqual('query-one');

  updateRouterParams({ queryParams: { [QUERY_PARAM_NAME]: 'query-two' } });

  expect(mockService.queryParam()).toEqual('query-two');
});
