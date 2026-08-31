const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const doctorsDir = path.join(__dirname, 'public', 'doctors');
if (!fs.existsSync(doctorsDir)) {
  fs.mkdirSync(doctorsDir, { recursive: true });
}

const DOCTORS = [
  { id: 'david-wilson', url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=90' },
  { id: 'emma-robinson', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=90' },
  { id: 'arthur-sterling', url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=90' },
  { id: 'sophia-turner', url: 'https://images.unsplash.com/photo-1594824813590-78965a3d7d77?w=800&auto=format&fit=crop&q=90' },
  { id: 'michael-chen', url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=90' },
  { id: 'elena-petrova', url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=90' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    function get(u) {
      const proto = u.startsWith('https') ? https : http;
      proto.get(u, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          return get(response.headers.location);
        }
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to download ${u}: status ${response.statusCode}`));
        }
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }
    get(url);
  });
}

async function processDoctors() {
  for (const doc of DOCTORS) {
    const rawPath = path.join(doctorsDir, `${doc.id}-raw.jpg`);
    const outPath = path.join(doctorsDir, `${doc.id}.webp`);

    console.log(`Downloading ${doc.id}...`);
    try {
      await download(doc.url, rawPath);

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
      console.log(`✓ Processed transparent doctor cutout: ${doc.id}.webp`);
    } catch (err) {
      console.error(`Error processing ${doc.id}:`, err);
    }
  }
}

processDoctors().catch(console.error);
