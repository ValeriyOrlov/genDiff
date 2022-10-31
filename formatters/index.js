import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (file, formatName) => {
  switch (formatName) {
    case 'stylish':
      return console.log(stylish(file));
    case 'plain':
      return console.log(plain(file));
    case 'json':
      return console.log(json(file));
    default:
      return console.log('Format not supported');
  }
};
