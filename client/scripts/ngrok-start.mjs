import { spawn } from 'child_process';
import qrcode from 'qrcode-terminal';

// Start ngrok
const ngrok = spawn('ngrok', ['http', '5174', '--log=stdout'], { stdio: ['ignore', 'pipe', 'inherit'] });

let urlFound = false;

ngrok.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write('[ngrok] ' + output);
    if (!urlFound) {
        const match = output.match(/url=(https:\/\/[a-z0-9-]+\.ngrok[a-z-]*\.(?:app|io)[^\s]*)/);
        if (match) {
            urlFound = true;
            const url = match[1].trim();
            console.log('\n\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m');
            console.log(`\x1b[32m  📱 Scanne ce QR code depuis ton téléphone\x1b[0m`);
            console.log(`\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n`);
            qrcode.generate(url, { small: true });
            console.log(`\n  \x1b[33m🔗 ${url}\x1b[0m`);
            console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');
        }
    }
});

// Start Vite
const vite = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

ngrok.on('close', (code) => { if (code !== 0) console.error(`ngrok exited with code ${code}`); });
vite.on('close', (code) => { process.exit(code); });

process.on('SIGINT', () => {
    ngrok.kill();
    vite.kill();
    process.exit(0);
});
