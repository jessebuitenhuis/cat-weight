import { Component } from '@angular/core';
import { TabItems } from '../ui/tab.items';
import { ICatStore } from './ICatStore';
import { NgForOf } from '@angular/common';
import { ICat } from './ICat';

@Component({
  selector: 'app-cat-nav',
  standalone: true,
  imports: [TabItems, NgForOf],
  template: `
    <app-tabs>
      <app-tab *ngFor="let cat of cats()" class="group flex"
        ><div class="grow">{{ cat.name }}</div>
        <button class="hidden group-hover:block" (click)="removeCat(cat)">
          X
        </button></app-tab
      >
      <app-tab [grow]="false" (click)="addCat()">+</app-tab>
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
