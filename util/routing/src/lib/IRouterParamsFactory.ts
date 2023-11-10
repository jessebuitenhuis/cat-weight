import { IRouterParams } from './IRouterParams';

export abstract class IRouterParamsFactory {
  abstract getRouterParams(): IRouterParams;
}
