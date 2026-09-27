import { I, dark, row } from './_helpers.js';

const chip = ({ variant = 'static', size = 'sm', label = 'FENSA registered', icon = true }) => {
  const tagName = variant === 'static' ? 'span' : 'a href="#"';
  return `<${tagName} class="gos-chip gos-chip--${variant} gos-chip--${size}">${icon ? `<span class="gos-chip__icon">${I.tick}</span>` : ''}${label}</${tagName.split(' ')[0]}>`;
};

export default {
  title: 'Components/Chips',
  render: (args) => (args.variant === 'on-dark' ? dark(chip(args)) : chip(args)),
  argTypes: {
    variant: { control: 'inline-radio', options: ['static', 'link', 'on-dark'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    label: { control: 'text' },
    icon: { control: 'boolean' },
  },
  args: { variant: 'static', size: 'sm', label: 'FENSA registered', icon: true },
};

export const Playground = {};

export const AllVariants = {
  render: () => `
    ${row('--static', `<div class="gos-chips">${chip({})}${chip({ label: 'Certass' })}${chip({ label: '10-year guarantee' })}</div>`)}
    ${row('--link', `<div class="gos-chips">${['Leeds', 'Harrogate', 'Wetherby'].map((t) => chip({ variant: 'link', label: t, icon: false })).join('')}</div>`)}
    ${row('sizes', chip({ size: 'sm', label: 'Small' }) + chip({ size: 'md', label: 'Medium' }))}
    ${dark(row('--on-dark', `<div class="gos-chips">${['Windows in Leeds', 'Doors in York'].map((t) => chip({ variant: 'on-dark', size: 'md', label: t, icon: false })).join('')}</div>`), '24px')}`,
};

export const ChoiceChips = {
  render: () => `<fieldset class="gos-field"><legend>What's the job</legend><div class="gos-choices">
    ${['Windows', 'A door', 'Whole house', 'Conservatory'].map((o, i) => `<label class="gos-choice"><input type="radio" name="job"${i === 0 ? ' checked' : ''}><span>${o}</span></label>`).join('')}
  </div></fieldset>`,
};
