import { EntityStore } from '@cat-weight/util/data';
import { ICat } from './ICat';
import { ICatStore } from './ICatStore';

export class CatStore extends EntityStore<ICat> implements ICatStore {
  cats = this.value;

  constructor() {
    super([], { name: 'cat' });
  }

  addByName(name: string) {
    this.add({ name });
  }
}
