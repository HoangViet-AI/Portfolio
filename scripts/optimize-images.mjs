import sharp from "sharp";
import { mkdir, readdir } from "fs/promises";
import { join, parse } from "path";

const BREAKPOINTS = [640, 1024, 1920];
const QUALITY = 80;
const INPUT_DIR = "src/assets/images";
const OUTPUT_DIR = "public/images";
const SOURCE_EXTENSIONS = /\.(png|jpe?g|tiff?)$/i;

async function optimizeImage(inputPath) {
  const { name } = parse(inputPath);

  await Promise.all(
    BREAKPOINTS.map(async (width) => {
      const outputPath = join(OUTPUT_DIR, `${name}-${width}w.webp`);
      await sharp(inputPath)
        .resize(width)
        .webp({ quality: QUALITY })
        .toFile(outputPath);
      console.log(`Created ${outputPath}`);
    })
  );
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const entries = await readdir(INPUT_DIR);
  const images = entries.filter((entry) => SOURCE_EXTENSIONS.test(entry));

  if (images.length === 0) {
    console.log(`No source images found in ${INPUT_DIR}`);
    return;
  }

  for (const image of images) {
    await optimizeImage(join(INPUT_DIR, image));
  }

  console.log(`Optimized ${images.length} image(s) at ${BREAKPOINTS.length} breakpoints`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
