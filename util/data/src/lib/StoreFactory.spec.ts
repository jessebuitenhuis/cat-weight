import { LocalStorageStore } from './LocalStorageStore';
import { StoreFactory } from './StoreFactory';

const INITIAL_VALUE = 'initial';
const STORE_NAME = 'test';

it('should create a new store', () => {
  const factory = new StoreFactory();
  const store = factory.create(INITIAL_VALUE, { name: STORE_NAME });

  expect(store).toBeInstanceOf(LocalStorageStore);
  expect((store as LocalStorageStore<string>)['_config'].name).toEqual(
    STORE_NAME
  );
});
