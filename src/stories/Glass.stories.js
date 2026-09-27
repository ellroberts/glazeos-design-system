import { I, dark, stars } from './_helpers.js';

export default {
  title: 'Components/Glass cards (dark sections)',
  render: ({ variant, size }) => dark(`<div class="gos-glass gos-glass--${variant} gos-glass--${size}" style="max-width:420px"><div class="gos-promise__head"><span class="gos-disc gos-disc--gold-outline">${I.shield}</span><h3 class="gos-promise__title">Fully insured</h3></div><div class="gos-promise"><p>Public liability and an insurance-backed guarantee on every job.</p><p class="is-dim">Transferable if you sell the house.</p></div></div>`),
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'gold'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
  },
  args: { variant: 'default', size: 'md' },
};

export const Playground = {};

export const Review = {
  render: () => dark(`<article class="gos-glass gos-review" style="max-width:380px">${stars('sm')}<blockquote class="gos-review__quote">“Turned up when they said, finished when they said. Would use again.”</blockquote><cite class="gos-review__cite"><b>Jo P.</b> · Google</cite></article>`),
};

export const ScoreBox = {
  render: () => dark(`<div class="gos-glass gos-score" style="max-width:280px"><b class="gos-score__value">5.0</b><div class="gos-score__meta">${stars('sm')}<span>21 Google reviews</span></div></div>`),
};

export const BarChart = {
  render: () => dark(`<div class="gos-glass gos-bars" style="max-width:460px"><div class="gos-bars__head"><b class="gos-bars__title">Survey to fitting</b><span class="gos-bars__sub">last 12 months</span></div>
    <ul>
      <li><span class="gos-bars__label">1 week</span><span class="gos-bars__track"><i style="--w:40%"></i></span><span class="gos-bars__pct">31%</span></li>
      <li class="is-high"><span class="gos-bars__label">2 weeks</span><span class="gos-bars__track"><i style="--w:89%"></i></span><span class="gos-bars__pct">60%</span></li>
      <li class="is-late"><span class="gos-bars__label">Later</span><span class="gos-bars__track"><i style="--w:12%"></i></span><span class="gos-bars__pct">9%</span></li>
    </ul><p class="gos-bars__foot">Measured from our own job sheets.</p></div>`),
};

export const GoldCover = { args: { variant: 'gold' } };
