import formatSelector from '../formatters/index.js';
import builder from './builder.js';

export default (file1, file2, formatName) => formatSelector(builder(file1, file2), formatName);
