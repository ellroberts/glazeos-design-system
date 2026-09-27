import { I, row } from './_helpers.js';

const field = ({ size = 'md', label = 'Postcode', placeholder = 'LS1 4AP', optional = false, id = 'f1' }) =>
  `<div class="gos-field gos-field--${size}"><label class="gos-field__label" for="${id}">${label}${optional ? ' <span class="gos-field__opt">(optional)</span>' : ''}</label><input class="gos-field__input" id="${id}" placeholder="${placeholder}"></div>`;

export default {
  title: 'Components/Form fields',
  render: (args) => `<div style="max-width:420px">${field(args)}</div>`,
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    optional: { control: 'boolean' },
  },
  args: { size: 'md', label: 'Postcode', placeholder: 'LS1 4AP', optional: false },
};

export const Playground = {};

export const Sizes = {
  render: () => `<div style="max-width:520px">${row('--sm (48px)', field({ size: 'sm', id: 's1' }))}${row('--md (52px)', field({ size: 'md', id: 's2' }))}</div>`,
};

export const Controls = {
  render: () => `<form class="gos-form" style="max-width:480px">
    ${field({ label: "What's the job", placeholder: 'e.g. 6 windows and a back door', id: 'c1' })}
    <div class="gos-row">${field({ label: 'Postcode', id: 'c2' })}${field({ label: 'Phone', placeholder: '07…', id: 'c3' })}</div>
    <div class="gos-field"><label class="gos-field__label" for="c4">What do you need?</label><select class="gos-field__input" id="c4"><option>Choose one…</option><option>Windows</option></select></div>
    <div class="gos-field"><label class="gos-field__label" for="c5">Anything we should know <span class="gos-field__opt">(optional)</span></label><textarea class="gos-field__input" id="c5" rows="3"></textarea></div>
    <button class="gos-btn gos-btn--primary gos-btn--lg gos-btn--block" type="button">Get my fixed price</button>
    <div class="gos-person"><img src="https://placehold.co/64x64/0f4c81/ffffff?text=D" alt="" width="32" height="32"><span>Dan will call you back personally, 8am–6pm.</span></div>
    <div class="gos-reassure"><span><span class="gos-reassure__icon">${I.tick}</span>No obligation</span><span><span class="gos-reassure__icon">${I.tick}</span>No call centre</span></div>
  </form>`,
};

export const InlineForm = {
  render: () => `<form class="gos-inline-form" style="max-width:420px"><label class="gos-visually-hidden" for="pc">Your postcode</label><input class="gos-field__input" id="pc" placeholder="Enter your postcode"><button class="gos-btn gos-btn--primary gos-btn--sm" type="button">Check</button></form>`,
};
