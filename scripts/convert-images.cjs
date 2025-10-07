const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const glob = require("glob");
const sharp = require("sharp");

const SRC_DIRS = ["public/images", "src/assets", "public"];
const QUALITY = 82;
const DELETE_ORIGINAL = true;

async function ensureDir(p) {
  await fsp.mkdir(path.dirname(p), { recursive: true });
}

async function toWebp(inputFile) {
  const out = inputFile.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  await ensureDir(out);
  await sharp(inputFile).webp({ quality: QUALITY }).toFile(out);
  console.log("→", out);

  if (DELETE_ORIGINAL) {
    try {
      fs.unlinkSync(inputFile);
      console.log("🗑️ deleted:", inputFile);
    } catch (err) {
      console.warn("삭제 실패:", inputFile, err.message);
    }
  }
}

async function main() {
  for (const dir of SRC_DIRS) {
    if (!fs.existsSync(dir)) continue;

    const files = glob.sync(
      path.join(dir, "**/*.{png,jpg,jpeg}").replace(/\\/g, "/"),
      { nodir: true }
    );
    for (const file of files) {
      await toWebp(file);
    }
  }

  const TARGETS = [
    "index.html",
    "src/**/*.tsx",
    "src/**/*.ts",
    "src/**/*.jsx",
    "src/**/*.js",
  ];
  for (const pattern of TARGETS) {
    const targets = glob.sync(pattern.replace(/\\/g, "/"), { nodir: true });
    for (const file of targets) {
      const before = fs.readFileSync(file, "utf8");
      const after = before
        .replace(/(\bimages\/[^"'?]+)\.png\b/g, "$1.webp")
        .replace(/(\bassets\/[^"'?]+)\.png\b/g, "$1.webp");
      if (before !== after) {
        fs.writeFileSync(file, after, "utf8");
        console.log("ref updated:", file);
      }
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
