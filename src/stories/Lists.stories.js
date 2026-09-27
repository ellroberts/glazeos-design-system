import { I, row } from './_helpers.js';

const TOWNS = ['Leeds', 'Harrogate', 'Wetherby', 'Otley', 'Ilkley', 'Wakefield'];

export default {
  title: 'Components/Tick & link lists',
  render: ({ variant, cols }) => `<ul class="gos-ticklist gos-ticklist--${variant} gos-ticklist--${cols}" style="max-width:520px">${TOWNS.map((t) =>
    variant === 'links' ? `<li><a href="#"><span class="gos-ticklist__icon">${I.tick}</span>${t}</a></li>` : `<li><span class="gos-ticklist__icon">${I.tick}</span>Fitted in ${t}</li>`).join('')}</ul>`,
  argTypes: {
    variant: { control: 'inline-radio', options: ['links', 'plain'] },
    cols: { control: 'inline-radio', options: ['cols-1', 'cols-2'] },
  },
  args: { variant: 'links', cols: 'cols-2' },
};

export const LinkList = {};
export const PlainChecklist = { args: { variant: 'plain', cols: 'cols-1' } };

export const TrustRow = {
  render: () => `<div style="padding:28px;border-radius:var(--r);background:linear-gradient(90deg,var(--secondary),var(--primary))">
    <div class="gos-trust"><a href="#"><span class="gos-stars gos-stars--sm">${I.star.repeat(5)}</span>5.0 · 21 Google reviews</a><span><span class="gos-trust__icon">${I.shield}</span>FENSA registered</span><span><span class="gos-trust__icon">${I.badge}</span>10-year guarantee</span></div></div>`,
};
