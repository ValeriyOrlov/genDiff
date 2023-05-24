import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const mapping = {
  stylish: (data) => stylish(data),
  plain: (data) => plain(data),
  json: (data) => json(data),
};

export default (data, formatName) => {
  try {
    const format = mapping[formatName];
    const formattedData = format(data);
    return formattedData;
  } catch (e) {
    throw new Error('unknown format');
  }
};
