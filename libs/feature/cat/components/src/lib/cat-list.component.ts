import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ICatList } from '@cat-weight/feature/cat';

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <h1>Cats</h1>
    <ul>
      <li *ngFor="let cat of cats()">{{ cat.name }}</li>
    </ul>
  `,
})
export class CatListComponent {
  readonly cats = this._catList.cats;

  constructor(private _catList: ICatList) {}
}
