import { defineDriver } from 'unstorage';

export default defineDriver((_: void) => ({
  name: 'black-hole',
  hasItem: () => false,
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  getKeys: () => [],
  clear: () => {},
}));
