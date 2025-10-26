import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const fileName = fileURLToPath(import.meta.url);

const decompress = async () => {
    const filePath = join(dirname(fileName), 'files/fileToCompress.txt');
    const streamWrite = createWriteStream(filePath);
    const archivePath = join(dirname(fileName), 'files/archive.gz');
    const streamRead = createReadStream(archivePath);

    const unzip = createUnzip();
    await pipeline(streamRead, unzip, streamWrite);
};

await decompress();