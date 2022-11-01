import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import readFileAndFormat from '../src/readFileAndFormat.js';
import builder from '../src/builder.js';
import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';
import parse from '../src/parsers.js';
import json from '../formatters/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const [data1, format1] = readFileAndFormat(getFixturePath('deepJson1.json'));
const [data2, format2] = readFileAndFormat(getFixturePath('deepYml2.yml'));
const file1 = parse(data1, format1);
const file2 = parse(data2, format2);

test('parser fail', () => {
  const actual = parse(file1, '.random');
  expect(actual).toEqual('format not supported');
});

test('builder test 1: to be empty', () => {
  const actual = builder({}, {});
  expect(actual).toEqual([]);
});

test('builder full test', () => {
  const actual = builder(
    {
      common: {
        setting1: 'Value1', setting2: 200, setting3: true, setting6: { key: 'value', doge: { wow: '' } },
      },
    },
    {
      common: {
        follow: false, setting1: 'Value1', setting3: null, setting4: 'blah blah', setting5: { key5: 'value5' }, setting6: { key: 'value', ops: 'vops', doge: { wow: 'so much' } },
      },
    },
  );
  const expected = [{
    name: 'common',
    status: ' ',
    value: [
      { name: 'follow', status: '+', value: false },
      { name: 'setting1', status: ' ', value: 'Value1' },
      { name: 'setting2', status: '-', value: 200 },
      { name: 'setting3', status: 'changed', value: [{ name: 'setting3', status: '-', value: true }, { name: 'setting3', status: '+', value: null }] },
      { name: 'setting4', status: '+', value: 'blah blah' },
      { name: 'setting5', status: '+', value: { key5: 'value5' } },
      {
        name: 'setting6',
        status: ' ',
        value: [
          { name: 'doge', status: ' ', value: [{ name: 'wow', status: 'changed', value: [{ name: 'wow', status: '-', value: '' }, { name: 'wow', status: '+', value: 'so much' }] }] },
          { name: 'key', status: ' ', value: 'value' }, { name: 'ops', status: '+', value: 'vops' }],
      }],
  }];
  expect(actual).toEqual(expected);
});

test('stylish test', () => {
  const actual = stylish(builder(file1, file2));
  const expected = [
    ['{\n    common: {\n      + follow: false\n        setting1: Value 1\n      - setting2: 200\n      - setting3: true\n      + setting3: null\n      + setting4: blah blah\n      + setting5: {\n            key5: value5\n        }\n        setting6: {\n            doge: {\n              - wow: \n              + wow: so much\n            }\n            key: value\n          + ops: vops\n        }\n    }\n    group1: {\n      - baz: bas\n      + baz: bars\n        foo: bar\n      - nest: {\n            key: value\n        }\n      + nest: str\n    }\n  - group2: {\n        abc: 12345\n        deep: {\n            id: 45\n        }\n    }\n  + group3: {\n        deep: {\n            id: {\n                number: 45\n            }\n        }\n        fee: 100500\n    }\n}',
    ]].join(' ');
  expect(actual).toEqual(expected);
});

test('plain test', () => {
  const actual = plain(builder(file1, file2));
  const expected = [
    ['Property \'common.follow\' was added with value: false\n'],
    ['Property \'common.setting2\' was removed\n'],
    ['Property \'common.setting3\' was updated. From true to null\n'],
    ['Property \'common.setting4\' was added with value: \'blah blah\'\n'],
    ['Property \'common.setting5\' was added with value: [complex value]\n'],
    ['Property \'common.setting6.doge.wow\' was updated. From \'\' to \'so much\'\n'],
    ['Property \'common.setting6.ops\' was added with value: \'vops\'\n'],
    ['Property \'group1.baz\' was updated. From \'bas\' to \'bars\'\n'],
    ['Property \'group1.nest\' was updated. From [complex value] to \'str\'\n'],
    ['Property \'group2\' was removed\n'],
    ['Property \'group3\' was added with value: [complex value]'],
  ].join('');
  expect(actual).toEqual(expected);
});

test('json test', () => {
  const actual = json(builder(file1, file2));
  const expected = JSON.stringify(builder(file1, file2));
  expect(actual).toEqual(expected);
});
