import { I, dark } from './_helpers.js';

const card = ({ variant = 'floating', size = 'md', pill = true }) => `
<form class="gos-form-card gos-form-card--${variant} gos-form-card--${size}" style="max-width:462px">
  <div class="gos-form-card__head">
    <div><h2 class="gos-form-card__title">Get your fixed price</h2><p class="gos-form-card__lede">Takes about a minute. We'll do the rest.</p></div>
    ${pill ? '<span class="gos-tag gos-tag--success">Free · no deposit</span>' : ''}
  </div>
  <div class="gos-field"><label class="gos-field__label" for="j-${variant}">What's the job</label><input class="gos-field__input" id="j-${variant}" placeholder="e.g. 6 windows and a back door"></div>
  <div class="gos-row">
    <div class="gos-field"><label class="gos-field__label" for="p-${variant}">Postcode</label><input class="gos-field__input" id="p-${variant}"></div>
    <div class="gos-field"><label class="gos-field__label" for="t-${variant}">Phone</label><input class="gos-field__input" id="t-${variant}" placeholder="07…"></div>
  </div>
  <button class="gos-btn gos-btn--primary gos-btn--lg gos-btn--block" type="button">Get my fixed price</button>
  <div class="gos-reassure"><span><span class="gos-reassure__icon">${I.tick}</span>No obligation · No call centre</span></div>
</form>`;

export default {
  title: 'Components/Form card',
  render: (args) => (args.variant === 'floating' ? dark(card(args)) : card(args)),
  argTypes: {
    variant: { control: 'inline-radio', options: ['floating', 'flat'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    pill: { control: 'boolean' },
  },
  args: { variant: 'floating', size: 'md', pill: true },
};

export const Floating = {};
export const Flat = { args: { variant: 'flat', pill: false } };
export const Compact = { args: { variant: 'flat', size: 'sm', pill: false } };
