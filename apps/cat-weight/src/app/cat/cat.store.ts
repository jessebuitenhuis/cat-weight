import { EntityStore } from '../data/EntityStore';
import { ICat } from './ICat';
import { ICatStore } from './ICatStore';

export class CatStore extends EntityStore<ICat> implements ICatStore {
  constructor() {
    super([], { name: 'cat' });
  }

  addByName(name: string) {
    this.add({ name });
  }

  removeByName(name: string) {
    this.remove((x) => x.name === name);
  }
}
