import { Injectable } from '@angular/core';
import { ICat, ICatEntityStore, ICatStore } from '@cat-weight/feature/cat';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CatStore implements ICatStore {
  cats = this._entityStore.value;

  constructor(private _entityStore: ICatEntityStore) {}

  addByName(name: string) {
    const id = uuid();
    this._entityStore.add({ id, name });
  }

  findById(id: string | null) {
    return this._entityStore.find((cat) => cat.id === id);
  }

  remove(cat: ICat): void {
    this._entityStore.remove(cat);
  }
}
