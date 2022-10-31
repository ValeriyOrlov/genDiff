import formatSelector from '../formatters/index.js';
import builder from './builder.js';
import readFileAndFormat from './readFileAndFormat.js';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const [data1, format1] = readFileAndFormat(filepath1);
  const [data2, format2] = readFileAndFormat(filepath2);
  const file1 = parse(data1, format1);
  const file2 = parse(data2, format2);

  return formatSelector(builder(file1, file2), formatName);
};

export default genDiff;
