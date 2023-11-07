import { Injectable } from '@angular/core';

@Injectable()
export abstract class ICatStore {
  abstract addByName(name: string): void;
  abstract removeByName(name: string): void;
}
