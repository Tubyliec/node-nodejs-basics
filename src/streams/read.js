import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';

const fileName = fileURLToPath(import.meta.url);

const read = async () => {
    const path = join(dirname(fileName), 'files/fileToRead.txt');
    const stream = createReadStream(path, { encoding: 'utf8' });

    stream.pipe(process.stdout);
    stream.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();