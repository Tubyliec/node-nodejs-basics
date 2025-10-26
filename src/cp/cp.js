import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['src/cp/files/script.js', ...args]);

    process.stdin.on('data', (data) => {
        childProcess.stdin.write(data);
    });

    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        process.exit(0);
    });
};

spawnChildProcess( [1, 2]);