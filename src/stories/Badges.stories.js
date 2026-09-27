import { I, dark, row } from './_helpers.js';

const badge = ({ variant = 'logo', size = 'lg', label = 'FENSA' }) =>
  variant === 'text'
    ? `<span class="gos-badge gos-badge--text"><span class="gos-badge__tick">${I.tick}</span>${label} registered</span>`
    : `<span class="gos-badge gos-badge--${variant} gos-badge--${size}">${label}</span>`;

export default {
  title: 'Components/Accreditation badges',
  render: (args) => (args.variant === 'plain' ? dark(badge(args)) : badge(args)),
  argTypes: {
    variant: { control: 'inline-radio', options: ['logo', 'plain', 'text'] },
    size: { control: 'inline-radio', options: ['sm', 'lg'] },
    label: { control: 'text' },
  },
  args: { variant: 'logo', size: 'lg', label: 'FENSA' },
};

export const Playground = {};

export const AllVariants = {
  render: () => `
    ${row('--logo --lg', `<div class="gos-badges">${['FENSA', 'Certass', 'Which? Trusted'].map((l) => badge({ label: l })).join('')}</div>`)}
    ${row('--logo --sm', `<div class="gos-badges">${['FENSA', 'Certass'].map((l) => badge({ size: 'sm', label: l })).join('')}</div>`)}
    ${row('--text', badge({ variant: 'text' }))}
    ${dark(row('--plain --sm', `<div class="gos-badges">${['FENSA', 'Certass'].map((l) => badge({ variant: 'plain', size: 'sm', label: l })).join('')}</div>`), '24px')}`,
};
