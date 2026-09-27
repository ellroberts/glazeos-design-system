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
