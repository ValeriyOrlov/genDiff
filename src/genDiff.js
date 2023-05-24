import formatConfig from '../formatters/index.js';
import builder from './builder.js';
import getDataAndType from './getDataAndType.js';
import parser from '../parsers/parser.js';

export default (path1, path2, format = 'stylish') => {
  const [rawData1, type1] = getDataAndType(path1);
  const [rawData2, type2] = getDataAndType(path2);
  const data1 = parser(rawData1, type1);
  const data2 = parser(rawData2, type2);
  const diff = builder(data1, data2);
  const formattedDiff = formatConfig(diff, format);
  return formattedDiff;
};
