import { spawn } from 'child_process';
import { networkInterfaces } from 'os';
import qrcode from 'qrcode-terminal';

const PORT = 5174;

function getLocalIP() {
    const nets = networkInterfaces();
    for (const iface of Object.values(nets)) {
        for (const net of iface) {
            if (net.family === 'IPv4' && !net.internal) return net.address;
        }
    }
    return 'localhost';
}

function printQR(url, label) {
    console.log('\n\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m');
    console.log(`\x1b[32m  📱 ${label}\x1b[0m`);
    console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');
    qrcode.generate(url, { small: true });
    console.log(`\n  \x1b[33m🔗 ${url}\x1b[0m`);
    console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');
}

// QR code local immédiat (même Wi-Fi uniquement)
const localUrl = `http://${getLocalIP()}:${PORT}`;
printQR(localUrl, 'Réseau local — même Wi-Fi uniquement');
console.log('\x1b[90m  ⏳ Connexion ngrok en cours... (accès tout réseau)\x1b[0m\n');

// Start ngrok
const ngrok = spawn('ngrok', ['http', '5174', '--log=stdout'], { stdio: ['ignore', 'pipe', 'inherit'] });

let urlFound = false;

ngrok.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write('[ngrok] ' + output);
    if (!urlFound) {
        const match = output.match(/url=(https:\/\/[^\s]+)/);
        if (match) {
            urlFound = true;
            const url = match[1].trim();
            printQR(url, 'ngrok — fonctionne depuis n\'importe quel réseau ✓');
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
