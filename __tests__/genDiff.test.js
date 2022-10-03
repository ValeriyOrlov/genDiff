import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import getFile from '../src/getFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expAfterFlatComp = {
  '- timeout': 50,
  '+ timeout': 20,
  '- proxy': '123.234.53.22',
  '- follow': false,
  '+ verbose': true,
  '  host': 'hexlet.io',
};

const file1 = getFile(getFixturePath('file1.json'));
const file2 = getFile(getFixturePath('file2.json'));

test('flat comparison testing', () => {
  expect(expAfterFlatComp['- timeout']).toEqual(file1.timeout);
  expect(expAfterFlatComp['+ timeout']).toEqual(file2.timeout);
  expect(expAfterFlatComp['- proxy']).toEqual(file1.proxy);
  expect(expAfterFlatComp['- follow']).toEqual(file1.follow);
  expect(expAfterFlatComp['+ verbose']).toEqual(file2.verbose);
  expect(expAfterFlatComp['  host']).toEqual(file2.host);
});
