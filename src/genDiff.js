import _ from 'lodash';

export const genDiff = (oldFile, newFile) => {
  const oldFileKeys = Object.keys(oldFile);
  const newFileKeys = Object.keys(newFile);
  const diff = _.sortBy(_.union(oldFileKeys, newFileKeys))
    .map((key) => {
      if (_.isObject(newFile[key])) {
        if (Object.hasOwn(oldFile, key) && Object.hasOwn(newFile, key)) {
          return { name: key, status: '~', value: genDiff(oldFile[key], newFile[key]) };
        }
      }
      if (!Object.hasOwn(newFile, key)) {
        return { name: key, status: '-', value: oldFile[key] };
      }
      if (Object.hasOwn(oldFile, key) && Object.hasOwn(newFile, key)) {
        if (oldFile[key] === newFile[key]) {
          return { name: key, status: '~', value: newFile[key] };
        }
        if (oldFile[key] !== newFile[key]) {
          return { name: key, status: 'changed', value: [{ name: key, status: '-', value: oldFile[key] }, { name: key, status: '+', value: newFile[key] }] };
        }
      }
      return { name: key, status: '+', value: newFile[key] };
    });
  return diff;
};
