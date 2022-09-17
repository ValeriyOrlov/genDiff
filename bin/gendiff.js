#!/usr/bin/env node
import { program } from "commander";
import getFile from '../src/getFile.js'
import genDiff from "../src/genDiff.js";

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('0.1.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const file1 = getFile(filepath1);
    const file2 = getFile(filepath2);
    console.log(genDiff(file1, file2));
  })
program.parse();