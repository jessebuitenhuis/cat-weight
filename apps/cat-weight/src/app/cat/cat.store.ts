import { EntityStore } from '@cat-weight/util/data';
import { ICat } from './ICat';
import { ICatStore } from './ICatStore';
import { v4 as uuid } from 'uuid';

export class CatStore extends EntityStore<ICat> implements ICatStore {
  cats = this.value;

  constructor() {
    super([], { name: 'cat' });
  }

  addByName(name: string) {
    const id = uuid();
    this.add({ id, name });
  }

  findById(id: string) {
    return this.find((cat) => cat.id === id);
  }
}
