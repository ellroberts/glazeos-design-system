// Reads tokens.css itself (Vite ?raw import), so these pages can never drift from the real values.
import tokensCss from '../styles/tokens.css?raw';

/** Parse tokens.css into { section: [{ name, value, comment }] } using its "===== SECTION =====" headings. */
function parseTokens(css) {
  const out = {};
  let section = 'OTHER';
  for (const line of css.split('\n')) {
    const h = line.match(/=====\s*(.+?)\s*=====/);
    if (h) { section = h[1]; out[section] = out[section] || []; continue; }
    const m = line.match(/^\s*(--[\w-]+):\s*(.+?);\s*(?:\/\*\s*(.*?)\s*\*\/)?\s*$/);
    if (m) (out[section] = out[section] || []).push({ name: m[1], value: m[2], comment: m[3] || '' });
  }
  return out;
}
const T = parseTokens(tokensCss);

const CLIENT_VARS = ['--primary', '--secondary', '--gold', '--brand', '--brand-dark', '--accent', '--accent-ink', '--cta', '--cta-dark', '--cta-ink', '--ink', '--muted', '--surface'];

const label = (name, value, comment) => `<div style="font-size:12px;line-height:1.35;margin-top:8px"><code style="font-weight:700;color:var(--ink)">${name}</code><br><code style="color:var(--mute)">${value}</code>${comment ? `<br><span style="color:var(--faint)">${comment}</span>` : ''}</div>`;
const grid = (items, min = 160) => `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(${min}px,1fr));gap:20px">${items}</div>`;
const h = (t, sub = '') => `<h2 style="font-size:20px;margin:40px 0 4px">${t}</h2>${sub ? `<p style="margin:0 0 16px;color:var(--body);font-size:14px">${sub}</p>` : ''}`;

const swatch = ({ name, value, comment }, darkBg = false) => `<div>
  <div style="height:72px;border-radius:12px;border:1px solid var(--line);background:${darkBg ? 'linear-gradient(var(--secondary),var(--secondary))' : 'repeating-conic-gradient(#eef1f4 0 25%, #fff 0 50%) 0 0/16px 16px'};overflow:hidden">
    <div style="height:100%;background:var(${name})"></div></div>${label(name, value, comment)}</div>`;

export default {
  title: 'Foundations/Tokens',
  parameters: { layout: 'padded' },
};

export const Colours = {
  render: () => {
    const colours = T['COLOURS'] || [];
    const isOnDark = (t) => t.name.startsWith('--on-dark') || t.name === '--ft-line';
    const isMix = (t) => t.value.includes('var(') || t.value.includes('gradient');
    const fixed = colours.filter((t) => !isOnDark(t) && !isMix(t));
    const onDark = colours.filter(isOnDark);
    const mixes = colours.filter((t) => isMix(t) && !isOnDark(t));
    return `
      ${h('Client colours', 'Not defined in tokens.css. Each client site injects these; switch client in the toolbar to see them change.')}
      ${grid(CLIENT_VARS.map((n) => swatch({ name: n, value: 'from the client', comment: '' })).join(''))}
      ${h('Fixed neutrals, text greys, status and scrims')}
      ${grid(fixed.map((t) => swatch(t)).join(''))}
      ${h('White overlays for dark sections', 'Shown on the client’s --secondary.')}
      ${grid(onDark.map((t) => swatch(t, true)).join(''))}
      ${h('Mixes derived from client colours')}
      ${grid(mixes.map((t) => swatch(t)).join(''))}`;
  },
};

export const Spacing = {
  render: () => {
    const sp = T['SPACING'] || [];
    const bar = ({ name, value, comment }) => `<div style="display:grid;grid-template-columns:200px 1fr;gap:16px;align-items:center;margin-bottom:10px">
      ${label(name, value, comment)}
      <div style="height:20px;width:min(var(${name}), 100%);background:var(--primary);border-radius:4px;min-width:1px"></div></div>`;
    const scale = sp.filter((t) => /^--space-/.test(t.name));
    const rest = sp.filter((t) => !/^--space-/.test(t.name) && !/clamp|min\(/.test(t.value));
    return `${h('Base scale (4px grid)')}${scale.map(bar).join('')}${h('Semantic spacing, control sizes and layout')}${rest.map(bar).join('')}
      ${h('Fluid values')}${sp.filter((t) => /clamp/.test(t.value)).map((t) => label(t.name, t.value, t.comment)).join('')}`;
  },
};

export const Radii = {
  render: () => {
    const radii = (T['BORDERS & RADII'] || []).filter((t) => /radius|^--r$|^--pill$/.test(t.name));
    return `${h('Radius scale')}${grid(radii.map(({ name, value, comment }) => `<div>
      <div style="height:88px;background:var(--surface);border:2px solid var(--primary);border-radius:var(${name})"></div>${label(name, value, comment)}</div>`).join(''), 150)}`;
  },
};

export const Shadows = {
  render: () => {
    const sh = (T['SHADOWS'] || []).filter((t) => t.name !== '--shadow-tint' && t.name !== '--text-shadow');
    return `${h('Shadow tiers', 'Every shadow is tinted from --shadow-tint (the client’s --brand).')}
      ${grid(sh.map(({ name, value, comment }) => `<div><div style="height:96px;margin:24px 8px 32px;background:#fff;border-radius:16px;box-shadow:var(${name})"></div>${label(name, value.replace(/color-mix\(in srgb, /, 'mix(').slice(0, 70), comment)}</div>`).join(''), 220)}
      ${h('Text shadow')}<p style="font-size:24px;font-weight:700;color:#fff;background:var(--placeholder);padding:24px;border-radius:12px;text-shadow:var(--text-shadow)">Text on a photo</p>`;
  },
};
