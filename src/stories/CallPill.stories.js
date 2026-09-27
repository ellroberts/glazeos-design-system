import { I, dark, row } from './_helpers.js';

const call = ({ variant = 'on-dark', size = 'md', note = 'Speak to Dan' }) =>
  `<a href="#" class="gos-call gos-call--${variant} gos-call--${size}"><span class="gos-call__icon">${I.phone}</span><span>${note ? `<small class="gos-call__note">${note}</small>` : ''}<b class="gos-call__number">01234 567890</b></span></a>`;

export default {
  title: 'Components/Call pill',
  render: (args) => (args.variant === 'on-light' ? call(args) : dark(call(args))),
  argTypes: {
    variant: { control: 'inline-radio', options: ['on-dark', 'on-light', 'card'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    note: { control: 'text' },
  },
  args: { variant: 'on-dark', size: 'md', note: 'Speak to Dan' },
};

export const Playground = {};

export const AllVariantsAndSizes = {
  render: () =>
    dark(['sm', 'md', 'lg'].map((s) => row(`on-dark --${s}`, call({ size: s }))).join('') + row('--card', call({ variant: 'card', note: 'Rather just talk to someone?' })), '24px') +
    '<div style="height:16px"></div>' +
    row('--on-light', call({ variant: 'on-light' })),
};
