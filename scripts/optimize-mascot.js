const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'assets/images/mascot');
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

async function optimize() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.png$/, '.webp');
    const outputPath = path.join(inputDir, outputName);

    await sharp(inputPath)
      .resize(256, 342, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 85 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`${file} -> ${outputName}: ${(originalSize/1024).toFixed(0)}KB -> ${(optimizedSize/1024).toFixed(0)}KB (${savings}% smaller)`);
  }
}

optimize().catch(console.error);
