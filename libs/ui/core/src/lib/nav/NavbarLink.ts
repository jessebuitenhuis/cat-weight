import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarLink } from './INavbarLink';

@Injectable()
export class NavbarLink implements INavbarLink {
  constructor(private _router: Router) {}

  isActive(link: unknown[] | string | null | undefined): boolean {
    if (!link) return false;

    const commands = Array.isArray(link) ? link : [link];
    const urlTree = this._router.createUrlTree(commands);

    return this._router.isActive(urlTree, {
      paths: 'subset',
      matrixParams: 'ignored',
      queryParams: 'ignored',
      fragment: 'ignored',
    });
  }
}
export const NAVBAR_LINK_PROVIDER: Provider = {
  provide: INavbarLink,
  useClass: NavbarLink,
};
