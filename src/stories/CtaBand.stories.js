import { I, stars } from './_helpers.js';

export default {
  title: 'Components/CTA band',
  parameters: { layout: 'fullscreen' },
  render: ({ variant }) => `<div class="gos-cta gos-cta--${variant}"><div class="gos-wrap gos-cta__in">
    <div><p class="gos-kicker gos-kicker--gold gos-kicker--line-none">Ready when you are</p><h2 class="gos-cta__title">Ready for your fixed price?</h2><p class="gos-cta__lede">Tell us the job and your postcode. We'll come back with a fixed price, not a range.</p></div>
    <div class="gos-cta__actions"><a href="#" class="gos-btn gos-btn--primary gos-btn--lg">Get my fixed price ${I.arrow}</a><a href="#" class="gos-call gos-call--on-dark gos-call--lg"><span class="gos-call__icon">${I.phone}</span><span><small class="gos-call__note">Speak to Dan</small><b class="gos-call__number">01234 567890</b></span></a></div>
    <div class="gos-cta__trust"><a href="#" class="gos-rating gos-rating--on-dark">${stars('sm')}<span class="gos-rating__text"><b>5.0</b> · 21 Google reviews</span></a><span class="gos-trust"><span><span class="gos-trust__icon">${I.shield}</span>10-year insurance-backed guarantee</span></span><span class="gos-badges" style="margin-left:auto"><span class="gos-badge gos-badge--plain gos-badge--sm">FENSA</span><span class="gos-badge gos-badge--plain gos-badge--sm">Certass</span></span></div>
  </div></div>`,
  argTypes: { variant: { control: 'inline-radio', options: ['gradient', 'flat'] } },
  args: { variant: 'gradient' },
};

export const Gradient = {};
export const Flat = { args: { variant: 'flat' } };
