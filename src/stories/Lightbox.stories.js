import house from './assets/house-4x3.svg';
import doorTall from './assets/door-tall.svg';
import { icon } from '../../dist/icons.mjs';

// The lightbox is CSS only; a site adds the behaviour. These stories show it open, inside a frame (a transformed box
// holds the fixed layer, so it doesn't cover the Storybook page).
const frame = (inner, h = 560) => `<div style="position:relative;height:${h}px;transform:translateZ(0);overflow:hidden;border-radius:var(--r)">${inner}</div>`;
const btn = (cls, label, name) => `<button type="button" class="gos-lightbox__btn gos-lightbox__${cls}" aria-label="${label}">${icon(name, { size: 'lg' })}</button>`;
const lightbox = ({ src = house, caption = 'Four-leaf bifold, living room to kitchen', count = '2 of 6', single = false } = {}) => `
<div class="gos-lightbox${single ? ' gos-lightbox--single' : ''}" role="dialog" aria-modal="true" aria-label="Photo viewer">
  <div class="gos-lightbox__bar"><p class="gos-lightbox__caption">${caption}</p><p class="gos-lightbox__count">${count}</p>${btn('close', 'Close photo viewer', 'x')}</div>
  <div class="gos-lightbox__stage">${btn('prev', 'Previous photo', 'chevron-left')}<img class="gos-lightbox__img" src="${src}" alt="">${btn('next', 'Next photo', 'chevron-right')}</div>
  <div class="gos-lightbox__bar gos-lightbox__nav">${btn('prev', 'Previous photo', 'chevron-left')}${btn('next', 'Next photo', 'chevron-right')}</div>
</div>`;

export default {
  title: 'Components/Lightbox',
  render: (args) => frame(lightbox(args)),
  argTypes: { caption: { control: 'text' }, count: { control: 'text' }, single: { control: 'boolean' } },
  args: { caption: 'Four-leaf bifold, living room to kitchen', count: '2 of 6', single: false },
};

/** Open on a wide photo: title and count above, previous / next over the edges (under the photo on phones). */
export const Playground = {};

/** A tall photo keeps its shape and fits the height. */
export const TallPhoto = { render: () => frame(lightbox({ src: doorTall, caption: 'Composite front door', count: '5 of 6' })) };

/** One photo: no previous / next (--single). */
export const Single = { render: () => frame(lightbox({ count: '1 of 1', single: true })) };

/** The thumbnails that open it: each a gos-lightbox-trigger link to the full-size file (here with gos-zoom, inside a card's media slot). */
export const Triggers = {
  render: () => `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(17rem,1fr));gap:24px;max-width:900px">${[house, doorTall, house]
    .map((src, i) => `<article class="gos-card gos-card--default gos-card--md"><a class="gos-card__media gos-card__media--natural gos-zoom gos-lightbox-trigger" href="${src}" aria-label="View larger photo ${i + 1}"><img src="${src}" alt="" width="1200" height="900"></a><h3 class="gos-card__title">Job ${i + 1}</h3></article>`)
    .join('')}</div>`,
};
