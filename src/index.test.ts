import { createStorage } from 'unstorage';
import { expect, test } from 'vitest';
import blackHoleStorage from './index';

test('nothing is stored', async () => {
  const storage = createStorage({
    driver: blackHoleStorage(),
  });

  storage.setItem('foo', 'bar');

  expect(await storage.getItem('foo')).toEqual(null);
});

test('storage is empty', async () => {
  const storage = createStorage({
    driver: blackHoleStorage(),
  });

  storage.setItem('foo', 'bar');

  expect(await storage.getKeys()).toEqual([]);
});
