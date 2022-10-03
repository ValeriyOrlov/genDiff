export default (oldFile, newFile) => {
  const oldFileEntries = Object.entries(oldFile);
  const newFileEntries = Object.entries(newFile);
  const diff = {};
  newFileEntries.map(([newKey, newValue]) => oldFileEntries.map(([oldKey, oldValue]) => {
    if (newKey === oldKey && newValue === oldValue) {
      diff[`  ${newKey}`] = newValue;
    } if (!Object.hasOwn(newFile, oldKey)) {
      diff[`- ${oldKey}`] = oldValue;
    } if (newKey === oldKey && newValue !== oldValue) {
      diff[`- ${oldKey}`] = oldValue;
      diff[`+ ${newKey}`] = newValue;
    } if (!Object.hasOwn(oldFile, newKey)) {
      diff[`+ ${newKey}`] = newValue;
    }
    return '';
  }));

  return diff;
};
