import { dark, row } from './_helpers.js';

const kicker = ({ variant = 'muted', line = 'line-start', label = 'Where to start' }) =>
  `<p class="gos-kicker gos-kicker--${variant} gos-kicker--${line}">${label}</p>`;

export default {
  title: 'Components/Kickers & labels',
  render: kicker,
  argTypes: {
    variant: { control: 'inline-radio', options: ['muted', 'gold', 'primary'] },
    line: { control: 'inline-radio', options: ['line-start', 'line-both', 'line-none'] },
    label: { control: 'text' },
  },
  args: { variant: 'muted', line: 'line-start', label: 'Where to start' },
};

export const Playground = {};

export const AllVariants = {
  render: () => `
    ${row('--muted', kicker({}))}
    ${row('--primary', kicker({ variant: 'primary', label: 'Common questions' }))}
    ${dark(row('--gold --line-both', kicker({ variant: 'gold', line: 'line-both', label: 'Our promise' })) + row('--gold --line-none', kicker({ variant: 'gold', line: 'line-none', label: 'Ready when you are' })), '24px')}`,
};

export const MicroLabel = {
  render: () => `${row('.gos-label', '<span class="gos-label">What that means for you</span>')}${dark(row('--on-dark', '<span class="gos-label gos-label--on-dark">Opening hours</span>'), '24px')}`,
};
