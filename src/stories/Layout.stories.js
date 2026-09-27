export default {
  title: 'Components/Layout',
  parameters: { layout: 'fullscreen' },
  render: ({ variant, tight }) => `<section class="gos-section gos-section--${variant}${tight ? ' gos-section--tight' : ''}"><div class="gos-wrap">
    <p class="gos-kicker">.gos-section--${variant}${tight ? ' --tight' : ''}</p>
    <h2 class="gos-h2" style="margin-top:12px">Content sits inside .gos-wrap (max ${'var(--maxw)'}).</h2>
    <div class="gos-grid gos-grid--3" style="margin-top:var(--head-offset)">${[1, 2, 3].map((n) => `<div class="gos-card"><h3 class="gos-card__title">Column ${n}</h3><p class="gos-card__body">.gos-grid--3</p></div>`).join('')}</div>
  </div></section>`,
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'surface', 'dark', 'gradient'] },
    tight: { control: 'boolean' },
  },
  args: { variant: 'default', tight: false },
};

export const Default = {};
export const Surface = { args: { variant: 'surface' } };
export const Dark = { args: { variant: 'dark' } };
export const Gradient = { args: { variant: 'gradient' } };
export const Tight = { args: { tight: true } };
