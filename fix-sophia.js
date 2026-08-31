const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const https = require('https');

const doctorsDir = path.join(__dirname, 'public', 'doctors');

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

async function fixSophia() {
  const rawPath = path.join(doctorsDir, 'sophia-turner-raw.jpg');
  const outPath = path.join(doctorsDir, 'sophia-turner.webp');

  const url = 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&auto=format&fit=crop&q=90';
  console.log('Downloading Sophia...');
  await download(url, rawPath);

  const image = sharp(rawPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    const brightness = (r + g + b) / 3;

    if (brightness > 220 && maxDiff < 25) {
      data[i + 3] = 0;
    } else if (brightness > 195 && maxDiff < 22) {
      const alpha = Math.max(0, Math.min(255, Math.round((220 - brightness) * 10)));
      data[i + 3] = alpha;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .webp({ quality: 90, alphaQuality: 95 })
    .toFile(outPath);

  if (fs.existsSync(rawPath)) fs.unlinkSync(rawPath);
  console.log('✓ Processed sophia-turner.webp');
}

fixSophia().catch(console.error);
