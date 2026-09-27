// Shared bits for the HTML stories: icons (same SVGs the Master Template uses) and small layout helpers.
const svg = (d, w = 15, extra = '') => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;

export const I = {
  arrow: svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>', 19),
  phone: svg('<path d="M4 5c0 8.3 6.7 15 15 15l1.5-3.4-4.3-1.8-1.9 2A12 12 0 0 1 8.2 9.7l2-1.9L8.4 3.5z"/>'),
  tick: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  cross: svg('<path d="M6 6l12 12M18 6L6 18"/>', 13),
  shield: svg('<path d="M12 3l7 3v5c0 4.6-3 8.6-7 10-4-1.4-7-5.4-7-10V6z"/><path d="M9 12l2 2 4-4"/>'),
  badge: svg('<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  chev: svg('<path d="M6 9l6 6 6-6"/>', 11),
  camera: svg('<path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7l1.3-2h6l1.3 2h1.7A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z"/><circle cx="11.9" cy="12.5" r="3.4"/>', 30),
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
};

export const stars = (size = 'md') => `<span class="gos-stars gos-stars--${size}" aria-label="5 out of 5">${I.star.repeat(5)}</span>`;

/** A dark panel to show on-dark components against. */
export const dark = (inner, pad = '32px') => `<div style="background:linear-gradient(180deg,var(--secondary),var(--primary));padding:${pad};border-radius:var(--r);color:#fff">${inner}</div>`;

/** Label + row, for side-by-side variant grids. */
export const row = (label, inner) => `<div style="display:grid;grid-template-columns:140px 1fr;gap:16px;align-items:center;margin-bottom:16px"><code style="font-size:12px;color:var(--mute)">${label}</code><div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">${inner}</div></div>`;

export const stack = (...parts) => `<div style="display:flex;flex-direction:column;gap:24px">${parts.join('')}</div>`;
