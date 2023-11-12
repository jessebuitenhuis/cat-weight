import { LocalStorageStore } from './LocalStorageStore';

const STORE_NAME = 'test';
const TEST_DATA = 'item';
const INITIAL_VALUE = 'initial';

function createMockStore() {
  return new LocalStorageStore<string>(INITIAL_VALUE, { name: STORE_NAME });
}

it('should save a value to the store and sync it to storage', () => {
  const store = createMockStore();
  store.set(TEST_DATA);
  expect(store.value()).toEqual(TEST_DATA);

  const storedValue = localStorage.getItem(STORE_NAME);
  const parsed = storedValue && JSON.parse(storedValue);
  expect(parsed).toEqual(TEST_DATA);
});

it('should restore the value from the local storage on init', () => {
  localStorage.setItem(STORE_NAME, JSON.stringify(TEST_DATA));
  const store = createMockStore();
  expect(store.value()).toEqual(TEST_DATA);
});

it('should set the initial value on init when no data is in local storage', () => {
  localStorage.removeItem(STORE_NAME);
  const store = createMockStore();
  expect(store.value()).toEqual(INITIAL_VALUE);
});
