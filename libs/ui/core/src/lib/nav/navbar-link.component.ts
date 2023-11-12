import { Component, HostBinding, Input } from '@angular/core';
import { INavbarLink } from './INavbarLink';

@Component({
  selector: 'ui-navbar-link',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class NavbarLinkComponent {
  @Input() routerLink?: unknown[] | string | null | undefined;

  @HostBinding('class') get className() {
    const standard = 'rounded-full py-1 px-2 hover:bg-white/25 cursor-pointer';
    const active = this.active ? 'bg-white/20' : '';

    return [standard, active].join(' ');
  }

  get active() {
    return this._navbarLink.isActive(this.routerLink);
  }

  constructor(private _navbarLink: INavbarLink) {}
}
