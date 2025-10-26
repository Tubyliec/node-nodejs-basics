import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const performCalculations = async () => {
    const dirName = import.meta.dirname;
    const results = await Promise.all(
        cpus().map((_, index) => new Promise((resolve) => {
            const worker = new Worker(join(dirName, 'worker.js'), {
                workerData: 10 + index
            });
            worker.on('message', resolve);
            worker.on('error', () => resolve({ status: 'error', data: null }));
        }))
    );
    console.log(results);
};

await performCalculations();