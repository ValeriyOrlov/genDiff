import _ from 'lodash';

const file3 = [{ name: 'common', status: '~', value: [{name: '', status: '', value: [{ name: 'setting3', status: '-', value: true }, { name: 'setting3', status: '+', value: null }] },
{ name: 'setting4', status: '+', value: 'blah blah' },
{ name: 'setting5', status: '+', value: { key5: 'value5' } }]}];

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

export const plain = (tree) => {
  /*const isFile = (val) => !_.isObject(val);
  const isArray = (val) => Array.isArray(val);
  if (isArray(tree)) {
      return tree.map(({ status, name, value }) => {
          if (isFile(value)) {
              return `${status} ${name}: ${value}\n`;
          }
          return status === 'changed' ? monkey(value) : `${status} ${name}:\n${monkey(value)}`
      }).join('')
  }
  const entries = Object.entries(tree);
  return entries.map(([name, value]) => isFile(value) ? `${name}: ${value}\n` : `${name}:\n${monkey(value)}`).join('')*/
  console.log('COMING SOON')
};
