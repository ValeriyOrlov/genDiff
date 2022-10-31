import _ from 'lodash';

const builder = (file1, file2) => {
  const file1Keys = Object.keys(file1);
  const file2Keys = Object.keys(file2);
  const diff = _.sortBy(_.union(file1Keys, file2Keys))
    .map((key) => {
      if (_.isObject(file2[key])) {
        if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
          return { name: key, status: ' ', value: builder(file1[key], file2[key]) };
        }
      }
      if (!Object.hasOwn(file2, key)) {
        return { name: key, status: '-', value: file1[key] };
      }
      if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
        if (file1[key] === file2[key]) {
          return { name: key, status: ' ', value: file2[key] };
        }
        if (file1[key] !== file2[key]) {
          return { name: key, status: 'changed', value: [{ name: key, status: '-', value: file1[key] }, { name: key, status: '+', value: file2[key] }] };
        }
      }
      return { name: key, status: '+', value: file2[key] };
    });
  return diff;
};

export default builder;
