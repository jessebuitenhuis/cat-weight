import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVBAR_LINK_PROVIDER, UiNavbar } from '@cat-weight/ui/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [UiNavbar, RouterLink, RouterLinkActive],
  providers: [NAVBAR_LINK_PROVIDER],
  template: `<ui-navbar>
    <ui-navbar-title [routerLink]="''">Cat Weight</ui-navbar-title>
    <ui-navbar-link [routerLink]="'/cat'">Cats</ui-navbar-link>
  </ui-navbar>`,
})
export class AppNavbarComponent {}
