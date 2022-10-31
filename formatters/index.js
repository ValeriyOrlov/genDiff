import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (file, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(file);
    case 'plain':
      return plain(file);
    case 'json':
      return json(file);
    default:
      return console.log('Format not supported');
  }
};
