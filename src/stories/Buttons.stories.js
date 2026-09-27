import { I, dark, row } from './_helpers.js';

const btn = ({ variant = 'primary', size = 'md', block = false, label = 'Get my fixed price', icon = false }) =>
  `<a href="#" class="gos-btn gos-btn--${variant} gos-btn--${size}${block ? ' gos-btn--block' : ''}">${label}${icon ? I.arrow : ''}</a>`;

export default {
  title: 'Components/Buttons',
  render: (args) => (['ghost', 'light'].includes(args.variant) ? dark(btn(args)) : btn(args)),
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary', 'ghost', 'light'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    block: { control: 'boolean' },
    icon: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { variant: 'primary', size: 'md', block: false, icon: true, label: 'Get my fixed price' },
};

export const Playground = {};

export const AllVariants = {
  render: () => `
    ${row('--primary', btn({ variant: 'primary', icon: true }))}
    ${row('--secondary', btn({ variant: 'secondary', label: 'Call Dan on 01234 567890' }))}
    ${row('--tertiary', btn({ variant: 'tertiary', label: 'Read the reviews' }))}
    ${dark(row('--ghost', btn({ variant: 'ghost', label: 'See recent jobs' })) + row('--light', btn({ variant: 'light', label: 'White on dark' })), '24px')}`,
};

export const AllSizes = {
  render: () => ['sm', 'md', 'lg'].map((s) => row(`--${s}`, btn({ variant: 'primary', size: s }) + btn({ variant: 'tertiary', size: s, label: 'Tertiary' }))).join(''),
};

export const Block = {
  render: () => `<div style="max-width:420px">${btn({ variant: 'primary', size: 'lg', block: true })}</div>`,
};
