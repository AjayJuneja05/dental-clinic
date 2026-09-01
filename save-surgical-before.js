const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return https.get(response.headers.location, (res2) => {
          const file = fs.createWriteStream(dest);
          res2.pipe(file);
          file.on('finish', () => file.close(resolve));
        });
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function main() {
  const surgicalBeforeUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_3HXeOHyW4FXxxiu5U37QhV5P7It/hf_20260901_074048_da53f8f2-857d-4695-baa6-6f7f8f74736f.png';
  const rawPath = path.join(__dirname, 'public', 'surgical-before-raw.png');
  await download(surgicalBeforeUrl, rawPath);
  await sharp(rawPath).resize({ width: 1000 }).webp({ quality: 90 }).toFile(path.join(__dirname, 'public', 'surgical-before.webp'));
  console.log('✓ Created public/surgical-before.webp');
}

main().catch(console.error);
