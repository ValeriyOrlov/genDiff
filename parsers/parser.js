import jsonParser from './jsonParser.js';
import yamlParser from './yamlParser.js';

const mapping = {
  json: (data) => jsonParser(data),
  yaml: (data) => yamlParser(data),
  yml: (data) => yamlParser(data),
};

export default (rawData, type) => {
  const parser = mapping[type];
  const data = parser(rawData);
  return data;
};
