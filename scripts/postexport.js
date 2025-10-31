const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'out');
const portfolioDir = path.join(outDir, 'portfolio');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    // ensure dest dir exists
    const d = path.dirname(dest);
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

try {
  if (!fs.existsSync(outDir)) {
    console.error('out/ not found. Run the production build first.');
    process.exit(1);
  }

  // Ensure portfolio dir exists
  if (!fs.existsSync(portfolioDir)) fs.mkdirSync(portfolioDir);

  // Copy top-level static files (images, favicon, etc.) into out/portfolio
  const topLevel = fs.readdirSync(outDir, { withFileTypes: true });
  for (const entry of topLevel) {
    if (entry.name === 'portfolio') continue; // skip the folder itself
    if (entry.name === '_next') continue; // we'll copy _next separately
    if (entry.isFile()) {
      copyRecursive(path.join(outDir, entry.name), path.join(portfolioDir, entry.name));
    }
  }

  // Copy the generated _next static assets into out/portfolio/_next
  const srcNext = path.join(outDir, '_next');
  const destNext = path.join(portfolioDir, '_next');
  copyRecursive(srcNext, destNext);

  console.log('Copied static assets into out/portfolio so GitHub Pages will serve /portfolio/_next and static files.');
} catch (err) {
  console.error('postexport failed:', err);
  process.exit(1);
}
