import { dark, row } from './_helpers.js';

const tag = ({ variant = 'gold', label = 'Most popular', dot = false }) =>
  `<span class="gos-tag gos-tag--${variant}">${dot ? '<i class="gos-tag__dot"></i>' : ''}${label}</span>`;

export default {
  title: 'Components/Tags & status pills',
  render: (args) => (args.variant === 'glass' ? dark(tag(args)) : tag(args)),
  argTypes: {
    variant: { control: 'inline-radio', options: ['glass', 'gold', 'gold-outline', 'success', 'light', 'outline'] },
    label: { control: 'text' },
    dot: { control: 'boolean' },
  },
  args: { variant: 'gold', label: 'Most popular', dot: false },
};

export const Playground = {};

export const AllVariants = {
  render: () => `
    ${dark(row('--glass', tag({ variant: 'glass', label: 'Family-run since 2009', dot: true })) + row('--gold-outline', tag({ variant: 'gold-outline', label: 'Insurance-backed' })), '24px')}
    <div style="height:16px"></div>
    ${row('--gold', tag({ variant: 'gold', label: 'Most popular' }))}
    ${row('--success', tag({ variant: 'success', label: 'Free · no deposit' }))}
    ${row('--light', `<span style="display:inline-block;padding:16px;background:var(--ground);border-radius:12px">${tag({ variant: 'light', label: 'Leeds, 2026', dot: true })}</span>`)}
    ${row('--outline', tag({ variant: 'outline', label: 'Outline' }))}`,
};
