import { readFileSync } from 'node:fs'
import path from 'node:path'

export default (currentPath) => {
    const getPath = path.resolve(process.cwd(), currentPath);
    return JSON.parse(readFileSync(getPath, 'utf8'));
};