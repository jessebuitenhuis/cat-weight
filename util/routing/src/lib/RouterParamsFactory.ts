import { IRouterParams } from './IRouterParams';
import { IRouterParamsFactory } from './IRouterParamsFactory';
import { RouterParams } from './RouterParams';

export class RouterParamsFactory implements IRouterParamsFactory {
  getRouterParams(): IRouterParams {
    return new RouterParams();
  }
}
