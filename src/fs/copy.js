import * as fs from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const copy = async () => {
    const sourceDir = path.join(dirName, 'files');
    const targetDir = path.join(dirName, 'files_copy');

    try {
        await fs.access(sourceDir, constants.F_OK);
        try {
            await fs.access(targetDir, constants.F_OK);
            throw new Error('FS operation failed');
        } catch {

        }
        await fs.cp(sourceDir, targetDir, { recursive: true });
        console.log('Copy complete!');
    } catch (error) {
        console.error(error.message);
    }
};

await copy();