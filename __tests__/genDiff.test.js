import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import { genDiff } from '../src/genDiff.js';
import parse from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const file1 = parse(getFixturePath('deepJson1.json'));
const file2 = parse(getFixturePath('deepJson2.json'));
const file3 = [{ name: 'common', status: '~', value: [{ value: [{ name: 'setting3', status: '-', value: true }, { name: 'setting3', status: '+', value: null }] },
{ name: 'setting4', status: '+', value: 'blah blah' },
{ name: 'setting5', status: '+', value: { key5: 'value5' } }]}];

test('test 1', () => {
  const actual = genDiff({}, {});
  expect(actual).toEqual([]);
});

test('test 2', () => {
  const actual = genDiff({ firstName: 'Valeriy', secondName: 'Orlov', profession: 'PelmensKiller' }, { firstName: 'Valeriy', secondName: 'Pelmenev' });
  const expected = [{ name: 'firstName', value: 'Valeriy', status: '~' },
    { name: 'profession', status: '-', value: 'PelmensKiller' },
    { name: 'secondName', status: 'changed', value: [{ name: 'secondName', status: '-', value: 'Orlov' }, { name: 'secondName', status: '+', value: 'Pelmenev' }] }];
  expect(actual).toEqual(expected);
});

test('test 3', () => {
  const actual = genDiff(
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
    status: '~',
    value: [
      { name: 'follow', status: '+', value: false },
      { name: 'setting1', status: '~', value: 'Value1' },
      { name: 'setting2', status: '-', value: 200 },
      { name: 'setting3', status: 'changed', value: [{ name: 'setting3', status: '-', value: true }, { name: 'setting3', status: '+', value: null }] },
      { name: 'setting4', status: '+', value: 'blah blah' },
      { name: 'setting5', status: '+', value: { key5: 'value5' } },
      {
        name: 'setting6',
        status: '~',
        value: [
          { name: 'doge', status: '~', value: [{ name: 'wow', status: 'changed', value: [{ name: 'wow', status: '-', value: '' }, { name: 'wow', status: '+', value: 'so much' }] }] },
          { name: 'key', status: '~', value: 'value' }, { name: 'ops', status: '+', value: 'vops' }],
      }],
  }];
  expect(actual).toEqual(expected);
});
/*
test('test5', () => {
  const actual = plain(file3);
  const expected = "Property 'common.setting3' was updated. From true to null\nProperty 'common.setting4' was added with value: 'blah blah'\nProperty 'common.setting5' was added with value: [complex value]";
  expect(actual).toEqual(expected);
});


  it('test 2', () => {
    const actual = genDiff({ one: 'eon' }, { two: 'own' });
    const expected = {
      one: 'deleted',
      two: 'added',
    };
    expect(actual).toEqual(expected);
  });

  it('test 3', () => {
    const actual = genDiff({ one: 'eon', two: 'two' }, { two: 'own', one: 'one' });
    const expected = {
      one: 'changed',
      two: 'changed',
    };
    expect(actual).toEqual(expected);
  });

  it('test 4', () => {
    const actual = genDiff({}, { two: 'own' });
    const expected = {
      two: 'added',
    };
    expect(actual).toEqual(expected);
  });

  it('test 5', () => {
    const actual = genDiff({ one: 'eon' }, {});
    const expected = {
      one: 'deleted',
    };
    expect(actual).toEqual(expected);
  });

  it('test 6', () => {
    const actual = genDiff({ unchanged: 'item' }, { unchanged: 'item' });
    expect(actual).toEqual({ unchanged: 'unchanged' });
  });
});
*/
