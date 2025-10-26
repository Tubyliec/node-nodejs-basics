import * as fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    const filePath = path.join(dirPath, 'fileToRead.txt');

    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        console.log(fileData);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(error);
        }
    }
};

await read();