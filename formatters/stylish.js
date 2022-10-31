import _ from 'lodash';

const isFile = (val) => !_.isObject(val);
const isArray = (val) => Array.isArray(val);
const space = (string, count) => `${string.repeat(count)}`;

const objBuilder = (obj, indent) => {
  const entries = Object.entries(obj);
  return entries.map(([name, value]) => (isFile(value) ? `${space(' ', indent + 2)}${name}: ${value}\n` : `${space(' ', indent + 2)}${name}: {\n${objBuilder(value, indent + 4)}${space(' ', indent + 2)}}\n`)).join('');
};

const treeBuilder = (tree, indent = 2) => {
  if (isArray(tree)) {
    return tree.map(({ status, name, value }) => {
      if (isFile(value)) {
        return `${space(' ', indent)}${status} ${name}: ${value}\n`;
      }
      if (status === 'changed') {
        return treeBuilder(value, indent);
      }
      if (isArray(value)) {
        return `${space(' ', indent)}${status} ${name}: {\n${treeBuilder(value, indent + 4)}${space(' ', indent)}  }\n`;
      }
      return `${space(' ', indent)}${status} ${name}: {\n${objBuilder(value, indent + 4)}${space(' ', indent)}  }\n`;
    }).join('');
  }
  return '';
};

export default (file) => `{\n${treeBuilder(file)}}`;
