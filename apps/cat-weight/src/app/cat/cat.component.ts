import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ICatStore } from './ICatStore';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [AsyncPipe],
  template: ` CAT {{ (cat$ | async)?.()?.name }} `,
})
export class CatComponent {
  @Input() id$ = this._activatedRoute.paramMap.pipe(map((x) => x.get('id')));

  cat$ = this.id$.pipe(
    map((id) => (id ? this._catStore.findById(id) : undefined))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _catStore: ICatStore
  ) {}
}
