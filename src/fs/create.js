import fs from 'node:fs';
import path from 'node:path';

const create = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    const filePath = path.join(dirPath, 'fresh.txt');
    const fileContent = 'I am fresh and young';

    fs.mkdir(dirPath, { recursive: true }, (error) => {
        if (error) {
            console.error('Error creating directory:', error.message);
            return;
        }

        fs.access(filePath, fs.constants.F_OK, (error) => {
            if (error) {
                fs.writeFile(filePath, fileContent, (error) => {
                    if (error) {
                        console.error('Error writing file:', error.message);
                    } else {
                        console.log('File created successfully at', filePath);
                    }
                });
            } else {
                console.error('FS operation failed');
            }
        });
    });
}

await create();