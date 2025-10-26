import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const fileName = fileURLToPath(import.meta.url);

const compress = async () => {
    const filePath = join(dirname(fileName), 'files/fileToCompress.txt');
    const streamRead = createReadStream(filePath);
    const archivePath = join(dirname(fileName), 'files/archive.gz');
    const streamWrite = createWriteStream(archivePath);
    const gzip = createGzip();
    await pipeline(streamRead, gzip, streamWrite);
};

await compress();