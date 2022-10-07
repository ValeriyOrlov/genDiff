#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/genDiff.js';
import parse from '../src/parsers.js';
import readFileAndFormat from '../src/readFileAndFormat.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('0.1.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const [data1, format1] = readFileAndFormat(filepath1);
    const [data2, format2] = readFileAndFormat(filepath2);
    const file1 = parse(data1, format1);
    const file2 = parse(data2, format2);
    console.log(genDiff(file1, file2));
  });
program.parse();