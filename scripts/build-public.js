const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

for (const file of ['index.html', 'styles.css']) {
  fs.copyFileSync(path.join(process.cwd(), file), path.join(publicDir, file));
}

console.log('Static demo copied to public/.');
