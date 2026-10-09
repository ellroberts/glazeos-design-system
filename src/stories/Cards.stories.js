import { I, stars } from './_helpers.js';
import { icon } from '../../dist/icons.mjs';
// Local stand-in photos (Storybook only, not shipped). Each has a dashed red edge and a circle, so cropping or stretching shows.
import house from './assets/house-4x3.svg';
import doorTall from './assets/door-tall.svg';
import windowWide from './assets/window-wide.svg';
import logoWide from './assets/logo-wide.svg';

const card = ({ variant = 'default', size = 'md' }) => {
  const el = variant === 'link' ? 'a href="#"' : 'div';
  return `<${el} class="gos-card gos-card--${variant} gos-card--${size}" style="max-width:320px"><span class="gos-card__meta">Day 1</span><h3 class="gos-card__title">Free survey</h3><p class="gos-card__body">We measure every opening and talk you through the options. No hard sell.</p></${el.split(' ')[0]}>`;
};

export default {
  title: 'Components/Cards',
  render: card,
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'surface', 'dark', 'link'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { variant: 'default', size: 'md' },
};

export const Playground = {};

export const AllVariants = {
  render: () => `<div class="gos-grid gos-grid--3">${['default', 'surface', 'dark', 'link'].map((v) => card({ variant: v })).join('')}</div>`,
};

/** Image link tiles. Hover one: the arrow disc fills gold and nudges right, the photo zooms in slightly, and the title's gold line draws in (gos-link-host on the tile, gos-link--draw on the title). */
export const Tiles = {
  render: () => `<div style="display:grid;grid-template-columns:1.64fr 1fr;gap:var(--gap-md)">
    <a href="#" class="gos-tile gos-tile--lg gos-link-host"><span class="gos-tag gos-tag--gold">Most popular</span><span class="gos-tile__in"><span><b class="gos-tile__title"><span class="gos-link gos-link--draw">Whole house</span></b><span class="gos-tile__body">Every window and door, one fixed price.</span></span><span class="gos-disc gos-disc--light gos-disc--lg">${icon('arrow-right', { size: 'lg' })}</span></span></a>
    <a href="#" class="gos-tile gos-tile--md gos-link-host"><span class="gos-tile__in"><span><b class="gos-tile__title"><span class="gos-link gos-link--draw">Windows</span></b><span class="gos-tile__body">uPVC, aluminium, sash.</span></span><span class="gos-disc gos-disc--light">${icon('arrow-right', { size: 'md' })}</span></span></a>
    <div class="gos-tile gos-tile--dark gos-tile--md"><div><b class="gos-tile__title">Not sure which?</b><p>Send a photo of the opening and we'll tell you what it needs.</p></div><a href="#" class="gos-btn gos-btn--primary gos-btn--md">Send a photo ${I.arrow}</a></div>
  </div>`,
};

/** gos-zoom: the same slight zoom as the tile, for any clickable image. Hover each: only the ones inside a link zoom (mouse only, none with reduced motion on). */
export const Zoom = {
  render: () => {
    const frame = (inner) => `<div class="gos-zoom" style="width:280px;aspect-ratio:4/3;border-radius:var(--r)">${inner.replace('<img', '<img style="display:block;width:100%;height:100%;object-fit:cover"')}</div>`;
    const lbl = (text, inner) => `<div style="display:flex;flex-direction:column;gap:8px"><code style="font-size:12px;color:var(--mute)">${text}</code>${inner}</div>`;
    return `<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start">
    ${lbl('inside a link: zooms', `<a href="#" style="display:block">${frame(`<img src="${house}" alt="A finished house front" width="1200" height="900">`)}</a>`)}
    ${lbl('no link: does not zoom', frame(`<img src="${house}" alt="A finished house front" width="1200" height="900">`))}
    ${lbl('gos-tile, for comparison', `<a href="#" class="gos-tile gos-tile--md" style="width:280px"><img src="${house}" alt="" width="1200" height="900"><span class="gos-tile__in"><span><b class="gos-tile__title">Windows</b></span><span class="gos-disc gos-disc--light">${icon('arrow-right', { size: 'md' })}</span></span></a>`)}
  </div>`;
  },
};

export const JobCards = {
  render: () => `<div style="display:grid;grid-template-columns:1.62fr 1fr;gap:var(--gap-md);align-items:stretch">
    <article class="gos-job gos-job--feature"><div class="gos-job__photo">${I.camera}<span class="gos-tag gos-tag--light"><i class="gos-tag__dot"></i>Leeds</span></div>
      <div class="gos-job__text"><div style="display:flex;justify-content:space-between;width:100%"><span class="gos-job__meta">Whole house · March 2026</span>${stars()}</div><blockquote class="gos-job__quote">“Fitted in two days, tidied up after, and the price didn't move.”</blockquote><div class="gos-job__by"><span class="gos-disc gos-disc--glass">SK</span><span><b>Sarah K.</b> · Verified Google review</span></div></div></article>
    <article class="gos-job gos-job--side"><div class="gos-job__photo">${I.camera}</div><div class="gos-job__text"><span class="gos-job__meta">Composite door</span>${stars('sm')}<blockquote class="gos-job__quote">“Looks brilliant.”</blockquote><div class="gos-job__by"><span class="gos-disc gos-disc--surface">MR</span><span><b>Mark R.</b></span></div></div></article>
  </div>`,
};

/* ---- media: optional photo slot at the top of a card ---- */
const PHOTO = {
  house: `<img src="${house}" alt="A finished house front" width="1200" height="900">`,
  door: `<img src="${doorTall}" alt="A new composite front door" width="600" height="1000">`,
  wide: `<img src="${windowWide}" alt="A new bay window" width="1200" height="500">`,
};
/** Same text as the card above, with a media slot first. shape: fixed | natural; photo: '' for an empty slot. */
const mediaCard = ({ variant = 'default', size = 'md', shape = 'fixed', photo = 'house', body = 'We measure every opening and talk you through the options. No hard sell.', width = '320px' } = {}) => {
  const el = variant === 'link' ? 'a href="#"' : 'div';
  return `<${el} class="gos-card gos-card--${variant} gos-card--${size}"${width ? ` style="max-width:${width}"` : ''}><div class="gos-card__media gos-card__media--${shape}">${PHOTO[photo] ?? photo}</div><span class="gos-card__meta">Leeds</span><h3 class="gos-card__title">Whole house in Leeds</h3><p class="gos-card__body">${body}</p></${el.split(' ')[0]}>`;
};
const label = (text, inner) => `<div style="display:flex;flex-direction:column;gap:8px"><code style="font-size:12px;color:var(--mute)">${text}</code>${inner}</div>`;
const wrapRow = (...parts) => `<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start">${parts.join('')}</div>`;

/** Fixed shape (3:2): the photo fills the slot and is cropped to it, so the card's size never depends on the photo. */
export const MediaFixed = {
  render: () => mediaCard({ shape: 'fixed', photo: 'house' }),
};

/** Fixed shape with no photo yet: the slot keeps its 3:2 size and shows the neutral placeholder. Any child fills it, e.g. the site's own "photo goes here" frame. */
export const MediaEmpty = {
  render: () => wrapRow(
    label('empty slot', mediaCard({ photo: '' })),
    label('any child fills the slot', mediaCard({ photo: `<div style="display:flex;align-items:center;justify-content:center;color:var(--mute)">${I.camera}</div>` })),
  ),
};

/** Natural shape: a tall door photo at full width, its own proportions, nothing cropped. */
export const MediaNaturalTall = {
  render: () => mediaCard({ shape: 'natural', photo: 'door' }),
};

/** Natural shape: a wide photo at full width, its own proportions, nothing cropped. */
export const MediaNaturalWide = {
  render: () => mediaCard({ shape: 'natural', photo: 'wide' }),
};

/** Link variant with media: the whole card lifts on hover, photo included. */
export const MediaLink = {
  render: () => wrapRow(
    label('link + fixed', mediaCard({ variant: 'link', shape: 'fixed', photo: 'house' })),
    label('link + natural', mediaCard({ variant: 'link', shape: 'natural', photo: 'door' })),
  ),
};

/** Every variant and size with a fixed-shape photo. */
export const MediaVariantsAndSizes = {
  render: () => `<div style="display:flex;flex-direction:column;gap:24px">
    ${wrapRow(...['default', 'surface', 'dark', 'link'].map((v) => label(`--${v}`, mediaCard({ variant: v, width: '260px' }))))}
    ${wrapRow(...['sm', 'md', 'lg'].map((s) => label(`--${s}`, mediaCard({ size: s, width: '260px' }))))}
  </div>`,
};

/** A row of three in a grid with align-items:start: each card hugs its own content instead of stretching to the tallest. */
export const MediaRowHugging = {
  render: () => `<div class="gos-grid gos-grid--3" style="align-items:start">
    ${mediaCard({ shape: 'fixed', photo: 'house', width: '', body: 'Short one.' })}
    ${mediaCard({ shape: 'fixed', photo: '', width: '', body: 'No photo yet, so the slot shows the placeholder at the same size. This card has a longer description, so it runs to a few more lines than the others.' })}
    ${mediaCard({ shape: 'natural', photo: 'door', width: '', body: 'A tall door photo, not cropped.' })}
  </div>`,
};

/* ---- action link + logo fit: the full card, in the order the sites write it ---- */
const LOGO = `<img src="${logoWide}" alt="Example Trade Body" width="900" height="300">`;
/** media: 'photo' | 'logo' | 'none'; action: true adds the bottom link. */
const fullCard = ({ media = 'photo', action = true, body = 'Every installer on the register is checked each year.', width = '300px' } = {}) => {
  const slot = {
    photo: `<div class="gos-card__media gos-card__media--fixed">${PHOTO.house}</div>`,
    logo: `<div class="gos-card__media gos-card__media--fixed gos-card__media--contain">${LOGO}</div>`,
    none: '',
  }[media];
  return `<article class="gos-card gos-card--default gos-card--md gos-card--hover"${width ? ` style="max-width:${width}"` : ''}>${slot}<h2 class="gos-card__title">Example Trade Body</h2><p class="gos-card__body">${body}</p><p class="gos-card__meta">Member since 2014</p>${action ? '<p class="gos-card__action"><a class="gos-link gos-link--track" href="#">Verify on their register</a></p>' : ''}</article>`;
};

/** Photo, logo and no image, each with and without the bottom link. Move the mouse over a card: its border changes colour (gos-card--hover, mouse only). Over the link: the gold underline sweeps across (gos-link--track). */
export const ActionAndLogo = {
  render: () => `<div style="display:flex;flex-direction:column;gap:24px">
    ${wrapRow(...['photo', 'logo', 'none'].map((m) => label(`${m} + action`, fullCard({ media: m }))))}
    ${wrapRow(...['photo', 'logo', 'none'].map((m) => label(`${m}, no action`, fullCard({ media: m, action: false }))))}
  </div>`,
};

/** Photo card with the bottom link. */
export const PhotoWithAction = { render: () => fullCard({ media: 'photo' }) };
/** Photo card without the link. */
export const PhotoNoAction = { render: () => fullCard({ media: 'photo', action: false }) };
/** Logo card (gos-card__media--contain): the whole logo on white, padded, never cropped. With the link. */
export const LogoWithAction = { render: () => fullCard({ media: 'logo' }) };
/** Logo card without the link. */
export const LogoNoAction = { render: () => fullCard({ media: 'logo', action: false }) };
/** No image, with the link. */
export const NoImageWithAction = { render: () => fullCard({ media: 'none' }) };
/** No image, no link. */
export const NoImageNoAction = { render: () => fullCard({ media: 'none', action: false }) };

/** A row of logo cards in a grid (default stretch, not align-items:start): the bodies differ in length, the links still line up along the bottom. */
export const ActionRowAligned = {
  render: () => `<div class="gos-grid gos-grid--3">
    ${fullCard({ media: 'logo', width: '', body: 'Short one.' })}
    ${fullCard({ media: 'logo', width: '', body: 'A longer description that runs over several lines, so this card has more text than its neighbours and would push its link lower if it were not pinned to the bottom.' })}
    ${fullCard({ media: 'logo', width: '', body: 'Medium length, about two lines of text here.' })}
  </div>`,
};

/* ---- icon media and the side layout ---- */
const iconSlot = (name) => `<div class="gos-card__media gos-card__media--fixed gos-card__media--icon">${icon(name, { size: 'lg' })}</div>`;
const photoSlot = `<div class="gos-card__media gos-card__media--fixed">${PHOTO.house}</div>`;
const promise = ({ media, side = false, width = '780px' }) => `<article class="gos-card gos-card--default gos-card--md${side ? ' gos-card--side' : ''}"${width ? ` style="max-width:${width}"` : ''}>${media}${side ? '<div class="gos-card__main">' : ''}<h3 class="gos-card__title">Measured by the fitter</h3><p class="gos-card__body gos-card__body--lead">The person who measures is the person who fits.</p><p class="gos-card__body gos-card__body--foot">Sizes do not get lost between a salesman and a subcontractor.</p>${side ? '</div>' : ''}</article>`;

/** gos-card--side: the media beside the text, for one wide card at a time (the promise carousel). Icon by default, a real photo when there is one. Narrow the window: under 40rem it stacks, media on top. */
export const SideWithIcon = { render: () => promise({ media: iconSlot('ruler'), side: true }) };
/** The same card with a photo in place of the icon. */
export const SideWithPhoto = { render: () => promise({ media: photoSlot, side: true }) };
/** gos-card__media--icon in ordinary stacked cards, e.g. an accreditation with no logo yet. */
export const IconMedia = {
  render: () => `<div class="gos-grid gos-grid--3">${['shield-check', 'badge-check', 'search-check'].map((n) => promise({ media: iconSlot(n), width: '' })).join('')}</div>`,
};

/** gos-card__badge: an icon disc in the media's bottom-right corner, over the photo. */
export const PhotoWithBadge = {
  render: () => promise({ media: `<div class="gos-card__media gos-card__media--fixed">${PHOTO.house}<span class="gos-card__badge gos-disc gos-disc--light">${icon('ruler', { size: 'md' })}</span></div>`, width: '360px' }),
};
