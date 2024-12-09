import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('reverse with log text', () => {
  // TODO: здесь будет чтение файла и запись его содержимого в константу
  // const text = 'длинная строка...';
  // const result = '...';
  const text = readFixtureFile('data.txt').trim();
  const expected = readFixtureFile('result.txt').trim();

  expect(reverse(text)).toEqual(result);
});
