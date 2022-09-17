import _ from 'lodash'
const file1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
};

const file2 = {
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
};

const genDiff = (oldFile, newFile) => {
    const oldFileEntries = Object.entries(file1);
    const newFileEntries = Object.entries(file2);
    const diff = {};
    newFileEntries.map(([newKey, newValue]) => oldFileEntries.map(([oldKey, oldValue]) => {
        if (newKey === oldKey && newValue === oldValue) {
            return diff[`  ${newKey}`] =  newValue; 
        } else if (!Object.hasOwn(newFile, oldKey)) {
            return diff[`- ${oldKey}`] = oldValue;
        } else if (newKey === oldKey && newValue !== oldValue) {
            return diff[`- ${oldKey}`] = oldValue, diff[`+ ${newKey}`] = newValue;
        } else if (!Object.hasOwn(oldFile, newKey)) {
            return diff[`+ ${newKey}`] = newValue;
        }
    }))
    
    return diff;
};

console.log(genDiff(file1, file2));
