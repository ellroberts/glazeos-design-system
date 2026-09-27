import { I, stars } from './_helpers.js';

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

export const Tiles = {
  render: () => `<div style="display:grid;grid-template-columns:1.64fr 1fr;gap:var(--gap-md)">
    <a href="#" class="gos-tile gos-tile--lg"><span class="gos-tag gos-tag--gold">Most popular</span><span class="gos-tile__in"><span><b class="gos-tile__title">Whole house</b><span class="gos-tile__body">Every window and door, one fixed price.</span></span><span class="gos-disc gos-disc--light">${I.arrow}</span></span></a>
    <a href="#" class="gos-tile gos-tile--md"><span class="gos-tile__in"><span><b class="gos-tile__title">Windows</b><span class="gos-tile__body">uPVC, aluminium, sash.</span></span><span class="gos-disc gos-disc--light">${I.arrow}</span></span></a>
    <div class="gos-tile gos-tile--dark gos-tile--md"><div><b class="gos-tile__title">Not sure which?</b><p>Send a photo of the opening and we'll tell you what it needs.</p></div><a href="#" class="gos-btn gos-btn--primary gos-btn--md">Send a photo ${I.arrow}</a></div>
  </div>`,
};

export const JobCards = {
  render: () => `<div style="display:grid;grid-template-columns:1.62fr 1fr;gap:var(--gap-md);align-items:stretch">
    <article class="gos-job gos-job--feature"><div class="gos-job__photo">${I.camera}<span class="gos-tag gos-tag--light"><i class="gos-tag__dot"></i>Leeds</span></div>
      <div class="gos-job__text"><div style="display:flex;justify-content:space-between;width:100%"><span class="gos-job__meta">Whole house · March 2026</span>${stars()}</div><blockquote class="gos-job__quote">“Fitted in two days, tidied up after, and the price didn't move.”</blockquote><div class="gos-job__by"><span class="gos-disc gos-disc--glass">SK</span><span><b>Sarah K.</b> · Verified Google review</span></div></div></article>
    <article class="gos-job gos-job--side"><div class="gos-job__photo">${I.camera}</div><div class="gos-job__text"><span class="gos-job__meta">Composite door</span>${stars('sm')}<blockquote class="gos-job__quote">“Looks brilliant.”</blockquote><div class="gos-job__by"><span class="gos-disc gos-disc--surface">MR</span><span><b>Mark R.</b></span></div></div></article>
  </div>`,
};
