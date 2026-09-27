import { I } from './_helpers.js';

const nav = (variant, size, announce) => `<div class="gos-head">
  ${announce ? '<div class="gos-announce"><span class="gos-announce__dot"></span>Booking surveys for October — 3 slots left this week</div>' : ''}
  <div class="gos-navbar gos-navbar--${variant}"><nav class="gos-wrap gos-nav gos-nav--${size}" aria-label="Main">
    <a class="gos-brand" href="#"><span><b class="gos-brand__name">Miller Glazing</b><small class="gos-brand__place">Leeds</small></span></a>
    <ul class="gos-links">
      <li><a href="#">Home</a></li><li><a href="#">About</a></li>
      <li><a href="#">Windows ${I.chev}</a><ul class="gos-sub"><li><a href="#">uPVC windows</a></li><li><a href="#">Sash windows</a></li></ul></li>
      <li><a href="#">Doors ${I.chev}</a><ul class="gos-sub"><li><a href="#">Composite doors</a></li><li><a href="#">Bifold doors</a></li></ul></li>
      <li><a href="#">Areas</a></li><li><a href="#">Showcase</a></li><li><a href="#">Contact</a></li>
    </ul>
    <div class="gos-navright">
      <a class="gos-call gos-call--on-dark gos-call--sm" href="#"><span class="gos-call__icon">${I.phone}</span><span><b class="gos-call__number">01234 567890</b></span></a>
      <a class="gos-btn gos-btn--primary gos-btn--sm" href="#">Get a quote</a>
      <details class="gos-burger"><summary aria-label="Menu">Menu ${I.chev}</summary><div class="gos-menu"><a href="#">Home</a><a href="#">About</a><div class="gos-menu__group">Services</div><a href="#">uPVC windows</a><a href="#">Composite doors</a><a href="#">Contact</a></div></details>
    </div>
  </nav></div>
</div>`;

export default {
  title: 'Components/Header & nav',
  parameters: { layout: 'fullscreen' },
  render: ({ variant, size, announce }) =>
    variant === 'overlay'
      ? `<div style="background:linear-gradient(160deg,var(--primary),var(--secondary));min-height:320px">${nav(variant, size, announce)}</div>`
      : `<div style="min-height:320px">${nav(variant, size, announce)}</div>`,
  argTypes: {
    variant: { control: 'inline-radio', options: ['overlay', 'solid'] },
    size: { control: 'inline-radio', options: ['md', 'sm'] },
    announce: { control: 'boolean' },
  },
  args: { variant: 'overlay', size: 'md', announce: true },
};

export const OverHero = {};
export const SolidBar = { args: { variant: 'solid', announce: false } };
