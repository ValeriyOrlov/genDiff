# genDiff

[![NodeCI](https://github.com/ValeriyOrlov/frontend-project-lvl2/workflows/NodeCI/badge.svg)](https://github.com/ValeriyOrlov/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dec7d33c4beac9df8c3a/maintainability)](https://codeclimate.com/github/ValeriyOrlov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dec7d33c4beac9df8c3a/test_coverage)](https://codeclimate.com/github/ValeriyOrlov/frontend-project-lvl2/test_coverage)

### Description:

genDiff is a program that determines the difference between two data structures.

Utility features:

     Support for different input formats: yaml, json
     Report generation in the form of plain text, stylish and json

Usage example:

[![asciicast](https://asciinema.org/a/587114.svg)](https://asciinema.org/a/587114)

### How to install:

There are two use cases:

### Program setup and usage:
```sh
git@github.com:ValeriyOrlov/frontend-project-lvl2.git

make install
sudo npm link
```
Program help output:
```sh
gendiff -h

Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference

Options:
  -V, --version        output the version number
  -f, --format <type>  output type (default: "stylish")
  -h, --help           display help for command
```

### Package setup and usage:
```sh
npm install <package path>

import genDiff from '@hexlet/code';
```