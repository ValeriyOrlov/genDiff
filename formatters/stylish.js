import _ from 'lodash';

export const stylish = (tree) => {
  const isFile = (val) => !_.isObject(val);
  const isArray = (val) => Array.isArray(val);
  if (isArray(tree)) {
      return tree.map(({ status, name, value }) => {
          if (isFile(value)) {
              return `${status} ${name}: ${value}\n`;
          }
          return status === 'changed' ? stylish(value) : `${status} ${name}:\n${stylish(value)}`
      }).join('')
  }
  const entries = Object.entries(tree);
  return entries.map(([name, value]) => isFile(value) ? `${name}: ${value}\n` : `${name}:\n${stylish(value)}`).join('');
}
