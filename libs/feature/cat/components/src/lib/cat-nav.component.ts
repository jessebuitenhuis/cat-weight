import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICat, ICatStore } from '@cat-weight/feature/cat';
import { TabItems } from '@cat-weight/ui/core';

@Component({
  selector: 'app-cat-nav',
  standalone: true,
  imports: [TabItems, NgForOf, RouterLink],
  template: `
    <ui-tabs>
      <a
        appTab
        [routerLink]="cat.id"
        *ngFor="let cat of cats()"
        class="group flex"
      >
        <div class="grow">{{ cat.name }}</div>
        <button
          class="opacity-0 group-hover:opacity-100"
          (click)="removeCat(cat)"
        >
          X
        </button>
      </a>
      <button uiTab [grow]="false" (click)="addCat()">+</button>
    </ui-tabs>
  `,
})
export class CatNavComponent {
  readonly cats = this._catStore.cats;

  constructor(private _catStore: ICatStore) {}

  addCat() {
    const name = prompt('Name...');
    if (name) {
      this._catStore.addByName(name);
    }
  }

  removeCat(cat: ICat) {
    this._catStore.remove(cat);
  }
}
