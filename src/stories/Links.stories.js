import { dark, row } from './_helpers.js';

const link = ({ variant = 'track', gold = false, label = 'Find out more' }) => `<a class="gos-link gos-link--${variant}${gold ? ' gos-link--gold' : ''}" href="#">${label}</a>`;

export default {
  title: 'Components/Text links',
  render: link,
  argTypes: {
    variant: { control: 'inline-radio', options: ['track', 'draw'] },
    gold: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { variant: 'track', gold: false, label: 'Find out more' },
};

export const Playground = {};

/** Move the mouse over each link. --track: a faint gold line at rest, the solid line sweeps across it. --draw: no line at rest, it draws in from the left and leaves to the right. --gold (dark backgrounds): gold text; with --track it is the hero "Liam" link. Tab to a link: keyboard focus shows the full line. */
export const AllVariants = {
  render: () => `
    ${row('--track', link({}))}
    ${row('--draw', link({ variant: 'draw', label: 'Double glazing repair' }))}
    ${dark(row('--track on dark', link({ label: 'Liam' })) + row('--draw on dark', link({ variant: 'draw', label: 'Composite doors' })) + row('--track --gold', link({ gold: true, label: 'Liam' })) + row('--draw --gold', link({ variant: 'draw', gold: true, label: 'Composite doors' })), '24px')}`,
};

/** The line follows the words when a long link wraps onto a second line. */
export const Wrapping = {
  render: () => `<p style="max-width:220px;font-size:var(--text-sm)">${link({ label: 'A longer link that wraps across two lines in a narrow column' })}</p>`,
};
