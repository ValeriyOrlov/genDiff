import fs from 'fs';
import path from 'path';

export default (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const type = path.extname(filepath).slice(1);
  const rawData = fs.readFileSync(absolutePath);
  return [rawData, type];
};
