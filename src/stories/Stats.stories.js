import { dark, row, stars } from './_helpers.js';

const stat = (value, label, size = 'md', variant = '') => `<div class="gos-stat gos-stat--${size}${variant ? ` gos-stat--${variant}` : ''}"><b class="gos-stat__value">${value}</b><span class="gos-stat__label">${label}</span></div>`;

export default {
  title: 'Components/Stat displays',
  render: ({ container }) => `<div class="gos-stats gos-stats--${container}"><div class="gos-stats__nums">${stat('17 yrs', 'fitting in Leeds')}<span class="gos-stats__sep"></span>${stat('1,200+', 'homes done')}<span class="gos-stats__sep"></span>${stat('5.0', 'on Google')}</div><div class="gos-badges"><span class="gos-badge gos-badge--lg">FENSA</span><span class="gos-badge gos-badge--lg">Certass</span></div></div>`,
  argTypes: { container: { control: 'inline-radio', options: ['floating', 'strip'] } },
  args: { container: 'floating' },
};

export const Floating = {};
export const Strip = { args: { container: 'strip' } };

export const StatSizes = {
  render: () => `${row('--sm', stat('17 yrs', 'label', 'sm'))}${row('--md', stat('1,200+', 'label', 'md'))}${row('--lg', stat('10', 'years of cover', 'lg'))}${dark(row('--xl --on-dark', stat('91%', 'fitted within two weeks', 'xl', 'on-dark')), '24px')}`,
};

export const Rating = {
  render: () => `${row('.gos-rating', `<a href="#" class="gos-rating"><b class="gos-rating__value">5.0</b>${stars()}<span class="gos-rating__text">from <strong>21 Google reviews</strong></span></a>`)}${dark(row('--on-dark', `<a href="#" class="gos-rating gos-rating--on-dark">${stars('sm')}<span class="gos-rating__text"><b>5.0</b> · 21 Google reviews</span></a>`), '24px')}`,
};
