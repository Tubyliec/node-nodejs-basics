import * as fs from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    const filePath = path.join(dirPath, 'fileToRemove.txt');

    try {
        await fs.unlink(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(error);
        }
    }
};

await remove();