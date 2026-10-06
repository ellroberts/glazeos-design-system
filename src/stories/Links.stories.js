import { dark, row } from './_helpers.js';

/** colour: 'inherit' | 'gold' (dark backgrounds) | 'gold-deep' (light backgrounds) */
const link = ({ variant = 'track', colour = 'inherit', label = 'Find out more' }) => `<a class="gos-link gos-link--${variant}${colour !== 'inherit' ? ` gos-link--${colour}` : ''}" href="#">${label}</a>`;

export default {
  title: 'Components/Text links',
  render: link,
  argTypes: {
    variant: { control: 'inline-radio', options: ['track', 'draw'] },
    colour: { control: 'inline-radio', options: ['inherit', 'gold', 'gold-deep'] },
    label: { control: 'text' },
  },
  args: { variant: 'track', colour: 'inherit', label: 'Find out more' },
};

export const Playground = {};

/** Move the mouse over each link. --track: a faint gold line at rest, the solid line sweeps across it. --draw: no line at rest, it draws in from the left and leaves to the right. --gold (dark backgrounds): gold text; with --track it is the hero "Liam" link. --gold-deep (light backgrounds): the darker --gold-text. Tab to a link: keyboard focus shows the full line. */
export const AllVariants = {
  render: () => `
    ${row('--track', link({}))}
    ${row('--draw', link({ variant: 'draw', label: 'Double glazing repair' }))}
    ${row('--track --gold-deep', link({ colour: 'gold-deep' }))}
    ${row('--draw --gold-deep', link({ variant: 'draw', colour: 'gold-deep', label: 'Double glazing repair' }))}
    <div style="background:var(--surface);padding:16px 0 4px;border-radius:var(--r)">${row('--gold-deep on --surface', link({ colour: 'gold-deep' }))}</div>
    ${dark(row('--track on dark', link({ label: 'Liam' })) + row('--draw on dark', link({ variant: 'draw', label: 'Composite doors' })) + row('--track --gold', link({ colour: 'gold', label: 'Liam' })) + row('--draw --gold', link({ variant: 'draw', colour: 'gold', label: 'Composite doors' })), '24px')}`,
};

/** The line follows the words when a long link wraps onto a second line. */
export const Wrapping = {
  render: () => `<p style="max-width:220px;font-size:var(--text-sm)">${link({ label: 'A longer link that wraps across two lines in a narrow column' })}</p>`,
};
