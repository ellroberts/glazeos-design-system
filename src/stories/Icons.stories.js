import { ICON_NAMES, icon } from '../../dist/icons.mjs';
import { dark } from './_helpers.js';

const cell = (name) => `<figure style="margin:0;display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 8px;border:1px solid var(--line);border-radius:var(--r)">
  <div style="display:flex;align-items:center;gap:16px;color:var(--ink)">${['sm', 'md', 'lg'].map((s) => icon(name, { size: s })).join('')}</div>
  <figcaption style="font-size:12px;color:var(--mute)"><code>${name}</code></figcaption></figure>`;

export default {
  title: 'Foundations/Icons',
  render: ({ name, size }) => `<div style="color:var(--ink)">${icon(name, { size })}</div>`,
  argTypes: {
    name: { control: 'select', options: ICON_NAMES },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { name: ICON_NAMES[0], size: 'md' },
};

export const Playground = {};

/** Every approved icon at sm (12px), md (14px) and lg (20px). The line weight steps down as the size grows (2.5 / 2 / 1.75), so they read the same weight. Add an icon: put its Lucide name in src/icons/icons.json and run npm run build. */
export const AllIcons = {
  render: () => `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px">${ICON_NAMES.map(cell).join('')}</div>`,
};

/** Icons take the text colour, so they work on dark backgrounds with no extra class. */
export const OnDark = {
  render: () => dark(`<div style="display:flex;gap:20px;align-items:center">${ICON_NAMES.flatMap((n) => ['sm', 'md', 'lg'].map((s) => icon(n, { size: s }))).join('')}</div>`, '24px'),
};
