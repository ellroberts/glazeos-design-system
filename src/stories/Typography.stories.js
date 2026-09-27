// Every font size × weight in the token set, rendered as text samples. Reads tokens.css so it stays in sync.
import tokensCss from '../styles/tokens.css?raw';

const tokens = [...tokensCss.matchAll(/^\s*(--[\w-]+):\s*(.+?);\s*(?:\/\*\s*(.*?)\s*\*\/)?\s*$/gm)].map((m) => ({ name: m[1], value: m[2], comment: m[3] || '' }));
const sizes = tokens.filter((t) => t.name.startsWith('--text-') && t.name !== '--text-shadow');
const weights = tokens.filter((t) => t.name.startsWith('--weight-'));

const SAMPLE = 'Windows & doors, fitted properly';

export default {
  title: 'Foundations/Typography',
  parameters: { layout: 'padded' },
};

export const Families = {
  render: () => `
    <div style="margin-bottom:28px"><code style="font-size:12px;color:var(--mute)">--font-heading (client) · Outfit</code><p style="font-family:var(--font-heading);font-size:40px;font-weight:700;margin:4px 0 0;letter-spacing:-.03em">${SAMPLE}</p></div>
    <div style="margin-bottom:28px"><code style="font-size:12px;color:var(--mute)">--font-body (client) · Plus Jakarta Sans</code><p style="font-family:var(--font-body);font-size:20px;margin:4px 0 0">${SAMPLE}. Body copy reads in the body face.</p></div>
    <div><code style="font-size:12px;color:var(--mute)">--fs · Caveat (signature only)</code><p style="font-family:var(--fs);font-size:var(--text-signature);margin:4px 0 0">Dan Miller</p></div>`,
};

export const SizeScale = {
  render: () => sizes.map(({ name, value, comment }) => `<div style="display:grid;grid-template-columns:240px 1fr;gap:16px;align-items:baseline;padding:14px 0;border-bottom:1px solid var(--line)">
      <div style="font-size:12px;line-height:1.4"><code style="font-weight:700">${name}</code><br><code style="color:var(--mute)">${value}</code>${comment ? `<br><span style="color:var(--faint)">${comment}</span>` : ''}</div>
      <p style="margin:0;font-family:${/h1|h2|title|display|xl|quote|lg/.test(name) ? 'var(--font-heading)' : 'var(--font-body)'};font-size:var(${name});${name === '--text-signature' ? 'font-family:var(--fs);' : ''}line-height:1.15;overflow-wrap:anywhere">${SAMPLE}</p></div>`).join(''),
};

export const SizeByWeight = {
  render: () => `<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%">
    <thead><tr><th style="text-align:left;font-size:12px;padding:8px;color:var(--mute)">size \\ weight</th>${weights.map((w) => `<th style="text-align:left;font-size:12px;padding:8px;color:var(--mute)"><code>${w.name}</code> (${w.value})</th>`).join('')}</tr></thead>
    <tbody>${sizes.filter((s) => !/display|signature/.test(s.name)).map((s) => `<tr style="border-top:1px solid var(--line)"><td style="padding:10px 8px;font-size:12px;white-space:nowrap"><code>${s.name}</code></td>${weights.map((w) => `<td style="padding:10px 8px;font-family:var(--font-heading);font-size:var(${s.name});font-weight:var(${w.name});line-height:1.15">Aa Glaze</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>
  <p style="font-size:13px;color:var(--mute);margin-top:16px">Headings use --weight-bold (700) everywhere. 800 is retired.</p>`,
};

export const Headings = {
  render: () => `<h1 style="font-size:var(--text-h1)">H1 — Windows and doors across West Yorkshire</h1>
    <h2 style="font-size:var(--text-h2);margin-top:24px">H2 — Recent jobs, and what the customer said</h2>
    <h3 style="font-size:var(--text-title);margin-top:24px">H3 — Card title</h3>
    <h4 style="font-size:var(--text-lg);margin-top:24px">H4 — Small heading</h4>
    <p style="font-size:var(--text-sm);max-width:60ch;margin-top:16px;color:var(--body)">Body text at --text-sm. All four heading levels render at weight 700 through the base layer.</p>`,
};
