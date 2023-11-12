import { Component, effect } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ICatDetail } from '@cat-weight/feature/cat';
import { injectRouterParam } from '@cat-weight/util/routing';

@Component({
  selector: 'app-cat-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h1>{{ cat()?.name }}</h1>
    Input:
    <input
      type="text"
      placeholder="Cat Name"
      [formControl]="form.controls.name"
    />
  `,
})
export class CatDetailComponent {
  private _id = injectRouterParam('id');

  readonly cat = this._catDetail.findCat(this._id);

  form = this._fb.nonNullable.group({
    name: '',
  });

  constructor(private _catDetail: ICatDetail, private _fb: FormBuilder) {
    this._updateForm();
  }

  private _updateForm() {
    effect(() => {
      const cat = this.cat();
      if (!cat) throw new Error('No cat found');

      this.form.setValue({
        name: cat.name,
      });
    });
  }
}
