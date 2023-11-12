import { TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ParamMap,
  Params,
  convertToParamMap,
} from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

interface ActivatedRouteMockOptions {
  params?: Params;
  queryParams?: Params;
}
class ActivatedRouteMock implements Partial<ActivatedRoute> {
  private _params = new BehaviorSubject<Params>(this.opts.params || {});
  private _queryParams = new BehaviorSubject<Params>(
    this.opts.queryParams || {}
  );
  private _paramMap = new BehaviorSubject<ParamMap>(
    convertToParamMap(this._params.value)
  );
  private _queryParamMap = new BehaviorSubject<ParamMap>(
    convertToParamMap(this._queryParams.value)
  );

  readonly params = this._params.asObservable();
  readonly queryParams = this._queryParams.asObservable();
  readonly paramMap = this._paramMap.asObservable();
  readonly queryParamMap = this._queryParamMap.asObservable();

  get snapshot(): ActivatedRouteSnapshot {
    return {
      paramMap: this._paramMap.value,
      params: this._params.value,
      queryParamMap: this._queryParamMap.value,
      queryParams: this._queryParams.value,
    } as ActivatedRouteSnapshot;
  }

  constructor(public opts: ActivatedRouteMockOptions) {}

  update({ params, queryParams }: ActivatedRouteMockOptions): void {
    if (params) this._updateParams(params);
    if (queryParams) this._updateQueryParams(queryParams);
  }

  private _updateParams(params: Params): void {
    const paramMap = convertToParamMap(params);

    this._params.next(params);
    this._paramMap.next(paramMap);
  }

  private _updateQueryParams(queryParams: Params): void {
    const paramMap = convertToParamMap(queryParams);

    this._queryParams.next(queryParams);
    this._queryParamMap.next(paramMap);
  }
}
export function MockActivatedRoute(opts: ActivatedRouteMockOptions) {
  const mock = new ActivatedRouteMock(opts);
  return [
    MockProvider(ActivatedRoute, mock),
    { provide: ActivatedRouteMock, useValue: mock },
  ];
}
export function updateActivatedRoute(options: ActivatedRouteMockOptions): void {
  const activatedRoute = TestBed.inject(ActivatedRouteMock);
  activatedRoute.update(options);
}
