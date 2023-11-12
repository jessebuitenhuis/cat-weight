import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-navbar-title',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class NavbarTitleComponent {
  @HostBinding('class') class = 'font-semibold';
}
