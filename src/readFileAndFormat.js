import { readFileSync } from 'node:fs';
import path from 'node:path';

export default (filepath) => {
   const absolutePath = path.resolve(process.cwd(), filepath);
   const format = path.extname(filepath);
   return [readFileSync(absolutePath, 'utf8'), format];
};