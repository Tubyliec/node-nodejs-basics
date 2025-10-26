import * as fs from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    try {
        const files = await fs.readdir(dirPath);
        console.log(files);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await list();