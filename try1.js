import { readFileSync } from 'node:fs'
import path from 'node:path'

export const getFile = (currentPath) => {
    const getPath = path.resolve(process.cwd(), currentPath);
    return JSON.parse(readFileSync(getPath, 'utf8'));
}
