import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import reverse from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('reverse with long text', () => {
  // TODO: здесь будет чтение файла и запись его содержимого в константу
  // const text = 'длинная строка...';
  // const result = '...';
  const text = readFixtureFile('data.txt').trim();
  const expected = readFixtureFile('result.txt').trim();

  expect(reverse(text)).toEqual(expected);
});
