import { Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ui-tab, [uiTab]',
  template: ` <ng-content></ng-content> `,
})
export class TabComponent {
  @HostBinding('class') class =
    'bg-white rounded-full px-3 py-1 text-center hover:bg-slate-200';

  @Input() @HostBinding('class.grow') grow = true;
}
