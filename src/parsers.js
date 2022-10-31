import yaml from 'js-yaml';

export default (file, format) => {
  if (format === '.json') {
    return JSON.parse(file);
  }
  if (format === '.yml' || format === 'yaml') {
    return yaml.load(file);
  }
  return 'format not supported';
};
