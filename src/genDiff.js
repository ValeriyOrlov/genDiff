export default (oldFile, newFile) => {
    const oldFileEntries = Object.entries(oldFile);
    const newFileEntries = Object.entries(newFile);
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
    }));
    
    return diff;
};