import { Component } from '@angular/core';
import { ICatStore } from './ICatStore';
import { NgForOf } from '@angular/common';
import { ICat } from './ICat';
import { TabItems } from '@cat-weight/ui/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cat-nav',
  standalone: true,
  imports: [TabItems, NgForOf, RouterLink],
  template: `
    <app-tabs>
      <a
        appTab
        [routerLink]="['cat', cat.id]"
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
      <button appTab [grow]="false" (click)="addCat()">+</button>
    </app-tabs>
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
