import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-navbar',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class NavbarComponent {
  @HostBinding('class') class =
    'flex bg-blue-500 w-screen px-3 py-2 text-white gap-2 items-center';
}
