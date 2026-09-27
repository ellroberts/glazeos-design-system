import { I, dark, row } from './_helpers.js';

const disc = (variant, inner = '1') => `<span class="gos-disc gos-disc--${variant}">${inner}</span>`;

export default {
  title: 'Components/Icon disc',
  render: ({ variant }) => (['glass', 'gold-outline', 'light'].includes(variant) ? dark(disc(variant, I.shield)) : disc(variant, I.shield)),
  argTypes: { variant: { control: 'inline-radio', options: ['gold', 'gold-outline', 'glass', 'surface', 'light', 'primary'] } },
  args: { variant: 'gold' },
};

export const Playground = {};

export const AllVariants = {
  render: () => `
    ${row('--gold', disc('gold') + disc('gold', I.tick))}
    ${row('--surface', disc('surface', '+'))}
    ${row('--primary', disc('primary', '−'))}
    ${dark(row('--gold-outline', disc('gold-outline', I.shield)) + row('--glass', disc('glass', '2') + disc('glass', 'SK')) + row('--light', disc('light', I.arrow)), '24px')}
    <p style="font-size:13px;color:var(--mute)">One size (32px): the audit's eight disc sizes merged to a single value.</p>`,
};
