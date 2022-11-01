import _ from 'lodash';

const isFile = (val) => !_.isObject(val);
const isArray = (val) => Array.isArray(val);
const addQuotes = (val) => (typeof val !== 'string' ? `${val}` : `'${val}'`);
const changedValues = (changedValue) => changedValue.map(({ value }) => (_.isObject(value) ? '[complex value]' : addQuotes(value))).join(' to ');

const switcher = (path, name, status, value) => {
  const basicOrComplexValue = _.isObject(value) ? '[complex value]' : `${value}`;
  switch (status) {
    case '+':
      return `Property '${path}${name}' was added with value: ${basicOrComplexValue}`;
    case '-':
      return `Property '${path}${name}' was removed`;
    case 'changed':
      return `Property '${path}${name}' was updated. From ${basicOrComplexValue}`;
    default:
      return 'do not print';
  }
};

const plain = (tree, path = '') => {
  if (isArray(tree)) {
    return tree.map(({ status, name, value }) => {
      if (isFile(value)) {
        return `${switcher(path, name, status, addQuotes(value))}\n`;
      }
      if (status === 'changed') {
        return `${switcher(path, name, status, changedValues(value))}\n`;
      }
      return isArray(value) ? plain(value, `${path}${name}.`) : `${switcher(path, name, status, value)}\n`;
    })
      .filter((value) => value !== 'do not print\n')
      .join('');
  }
  return '';
};
export default (file) => plain(file).trim();
