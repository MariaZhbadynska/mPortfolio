const { execSync } = require('child_process');
const fs = require('fs');

// Build client
console.log('Building client...');
execSync('cd client && npm install && npm run build', { stdio: 'inherit' });

// Move build to server/public
console.log('Moving client build to server...');
if (fs.existsSync('./server/public')) {
  fs.rmSync('./server/public', { recursive: true, force: true });
}
fs.renameSync('./client/build', './server/public');
console.log('Client build moved successfully.');
