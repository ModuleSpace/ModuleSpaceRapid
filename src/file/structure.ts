import * as fs from 'fs';

export function makeDirIfNotExists(path: string) {
    if (fs.existsSync(path))
        return;
    fs.mkdirSync(path, { recursive: true });
};
