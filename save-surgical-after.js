const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = 'C:\\Users\\ajayj\\.gemini\\antigravity\\brain\\23c7f494-7fe6-4b6e-ac1e-88ae3e5fb5ee\\surgical_after_1788248527390.jpg';

async function main() {
  await sharp(src)
    .resize({ width: 1000 })
    .webp({ quality: 90 })
    .toFile(path.join(__dirname, 'public', 'surgical-after.webp'));
  console.log('✓ Created public/surgical-after.webp');

  const rawPath = path.join(__dirname, 'public', 'surgical-before-raw.png');
  if (fs.existsSync(rawPath)) fs.unlinkSync(rawPath);
}

main().catch(console.error);
