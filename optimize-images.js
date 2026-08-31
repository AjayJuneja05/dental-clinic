const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const filesToOptimize = [
  { name: 'service-aesthetic.png', out: 'service-aesthetic.webp', width: 800 },
  { name: 'service-ortho.png', out: 'service-ortho.webp', width: 800 },
  { name: 'service-implant.png', out: 'service-implant.webp', width: 800 },
  { name: 'service-whitening.png', out: 'service-whitening.webp', width: 800 },
  { name: 'service-surgical.png', out: 'service-surgical.webp', width: 800 },
  { name: 'transparent-tooth.png', out: 'transparent-tooth.webp', width: 1200 },
  { name: 'clinic-bg.png', out: 'clinic-bg.webp', width: 1920 },
];

async function run() {
  for (const item of filesToOptimize) {
    const inputPath = path.join(publicDir, item.name);
    const outputPath = path.join(publicDir, item.out);

    if (fs.existsSync(inputPath)) {
      const statsBefore = fs.statSync(inputPath);
      await sharp(inputPath)
        .resize({ width: item.width, withoutEnlargement: true })
        .webp({ quality: 85, effort: 4 })
        .toFile(outputPath);
      const statsAfter = fs.statSync(outputPath);
      console.log(`✓ ${item.name} (${(statsBefore.size / 1024 / 1024).toFixed(2)} MB) -> ${item.out} (${(statsAfter.size / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }
  console.log('Optimization complete!');
}

run().catch(console.error);
