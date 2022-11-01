# genDiff


[![Actions Status](https://github.com/ValeriyOrlov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ValeriyOrlov/frontend-project-lvl2/actions)
[![NodeCI](https://github.com/ValeriyOrlov/frontend-project-lvl2/workflows/NodeCI/badge.svg)](https://github.com/ValeriyOrlov/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dec7d33c4beac9df8c3a/maintainability)](https://codeclimate.com/github/ValeriyOrlov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dec7d33c4beac9df8c3a/test_coverage)](https://codeclimate.com/github/ValeriyOrlov/frontend-project-lvl2/test_coverage)

### Description:

genDiff is a program that determines the difference between two data structures.

Utility features:

     Support for different input formats: yaml, json
     Report generation in the form of plain text, stylish and json

Usage example:

[![asciicast](https://asciinema.org/a/DlWTuOrcZO8SXvp3dPk3FvyiP.svg)](https://asciinema.org/a/DlWTuOrcZO8SXvp3dPk3FvyiP)
___

### How to install:

There are two use cases:

### Program setup and usage:
```sh
git@github.com:ValeriyOrlov/frontend-project-lvl2.git
cd frontend-project-lvl2
make install
sudo npm link
```
Program help output:
```sh
gendiff -h
```

Output default(stylish) format:
```sh
gendiff file1.json file2.json
```

Output other formats:
```sh
gendiff file1.json file2.json -f plain
```
or

```sh
gendiff file1.json file2.json -f json
```

### Package setup and usage:
```sh
npm install Femalopper/frontend-project-46
```

```sh
import genDiff from '@hexlet/code';
```