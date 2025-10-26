import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream } from 'node:fs';

const fileName = fileURLToPath(import.meta.url);

const write = async () => {
    const path = join(dirname(fileName), 'files/fileToWrite.txt');
    const stream = createWriteStream(path, { encoding: 'utf8' });

    process.stdin.pipe(stream);
};

await write();