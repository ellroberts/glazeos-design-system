import { stars, row, dark } from './_helpers.js';

export default {
  title: 'Components/Star rating',
  render: ({ size }) => stars(size),
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md'] } },
  args: { size: 'md' },
};

export const Playground = {};

export const Sizes = {
  render: () => `${row('--sm', stars('sm'))}${row('--md', stars('md'))}${dark(row('on dark', stars('md')), '24px')}`,
};

/** --google: Google's own star yellow (--google-gold), the same on every client, for Google ratings. Beside the client's gold for comparison. */
export const Google = {
  render: () => `${row('client gold', stars('md'))}${row('--google', stars('md').replace('gos-stars ', 'gos-stars gos-stars--google '))}${dark(row('--google on dark', `<b style="font-size:32px;color:var(--google-gold)">5.0</b>${stars('md').replace('gos-stars ', 'gos-stars gos-stars--google ')}`), '24px')}`,
};
