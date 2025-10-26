import { createReadStream } from 'fs';
import path from 'node:path';
import { createHash } from 'crypto';

const calculateHash = async () => {
    return new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const dirPath = path.join('src', 'hash', 'files');
        const filePath = path.join(dirPath, 'fileToCalculateHashFor.txt');
        const stream = createReadStream(filePath);

        stream.on('data', (chunk) => {
            hash.update(chunk);
        });

        stream.on('end', () => {
            const result = hash.digest('hex');
            console.log(result);
            resolve(result);
        });

        stream.on('error', (error) => {
            console.error(error);
            reject(error);
        });
    });
};

await calculateHash();