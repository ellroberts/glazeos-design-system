import { I, dark, row } from './_helpers.js';

const disc = (variant, inner = '1', size = 'md') => `<span class="gos-disc gos-disc--${variant} gos-disc--${size}">${inner}</span>`;

export default {
  title: 'Components/Icon disc',
  render: ({ variant, size }) => (['glass', 'gold-outline', 'light'].includes(variant) ? dark(disc(variant, I.shield, size)) : disc(variant, I.shield, size)),
  argTypes: {
    variant: { control: 'inline-radio', options: ['gold', 'gold-outline', 'glass', 'surface', 'light', 'primary'] },
    size: { control: 'inline-radio', options: ['md', 'lg'] },
  },
  args: { variant: 'gold', size: 'md' },
};

export const Playground = {};

export const AllVariants = {
  render: () => `
    ${row('--gold', disc('gold') + disc('gold', I.tick))}
    ${row('--surface', disc('surface', '+'))}
    ${row('--primary', disc('primary', '−'))}
    ${dark(row('--gold-outline', disc('gold-outline', I.shield)) + row('--glass', disc('glass', '2') + disc('glass', 'SK')) + row('--light', disc('light', I.arrow)), '24px')}
    ${row('--md / --lg', disc('gold', I.arrow, 'md') + disc('gold', I.arrow, 'lg'))}
    <p style="font-size:13px;color:var(--mute)">--md (32px) covers every small-icon job; --lg (52px) is the big tile's arrow.</p>`,
};
