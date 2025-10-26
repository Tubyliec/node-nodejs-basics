import * as fs from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    const oldFilename = path.join(dirPath, 'wrongFilename.txt');
    const newFilename = path.join(dirPath, 'properFilename.md');

    try {
        await fs.access(oldFilename);
        try {
            await fs.access(newFilename);
            throw new Error(console.error('FS operation failed'));

        } catch {

        }
        await fs.rename(oldFilename, newFilename);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(error.message);
        }
    }
};

await rename();