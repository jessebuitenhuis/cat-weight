import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tabs',
  template: `
    <div class="flex bg-slate-100 rounded-full p-2 gap-2 justify-stretch">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabsComponent {}
