// Compiles the source stylesheets into dist/ by inlining every @import.
// No dependencies: plain Node, so it also runs when the package is installed from GitHub.
//   dist/styles.css      tokens + base            ("glazeos-design-system/styles")
//   dist/components.css  every component family  ("glazeos-design-system/components")
//   dist/glazeos.css     both, in order           ("glazeos-design-system")
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const src = path.join(root, 'src/styles');
const dist = path.join(root, 'dist');
const { version } = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

function inline(file, seen = new Set()) {
  const abs = path.resolve(file);
  if (seen.has(abs)) return '';
  seen.add(abs);
  const css = fs.readFileSync(abs, 'utf8');
  return css.replace(/@import\s+['"]([^'"]+)['"];?/g, (_, rel) => inline(path.join(path.dirname(abs), rel), seen));
}

const banner = (name) => `/*! glazeos-design-system v${version} — ${name} — built ${new Date().toISOString().slice(0, 10)} */\n`;
const styles = inline(path.join(src, 'index.css'));
const components = inline(path.join(src, 'components.css'));

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'styles.css'), banner('tokens + base') + styles);
fs.writeFileSync(path.join(dist, 'components.css'), banner('components') + components);
fs.writeFileSync(path.join(dist, 'glazeos.css'), banner('everything') + styles + '\n' + components);

for (const f of fs.readdirSync(dist)) {
  console.log(`dist/${f}  ${(fs.statSync(path.join(dist, f)).size / 1024).toFixed(1)} KB`);
}
