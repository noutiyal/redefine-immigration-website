const fs = require('fs');
for (const file of ['index.html', 'styles.css']) {
  if (!fs.existsSync(file)) throw new Error(`${file} is missing`);
}
const html = fs.readFileSync('index.html', 'utf8');
for (const text of ['Your Immigration Journey, Redefined.', 'Study Visa', 'Work Visa', 'Express Entry', 'Permanent Residency', '+1 (604) 594-8232']) {
  if (!html.includes(text)) throw new Error(`Missing required content: ${text}`);
}
console.log('Static demo content check passed.');
