import { I } from './_helpers.js';

export default {
  title: 'Components/Owner portrait & letter',
  render: ({ variant }) => `<div style="display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:var(--gap-md);align-items:start">
    <div class="gos-portrait gos-portrait--${variant}"><span class="gos-portrait__placeholder"><span>Photo of Dan · 3:4</span><span>with the van, or on a job</span></span>
      <div class="gos-portrait__caption"><b>Dan Miller</b><span>Owner · surveys and fits every job</span></div></div>
    <div class="gos-letter"><h2 class="gos-h2">Hi, I'm Dan.</h2>
      <p class="is-lead">I've fitted windows round here for seventeen years, and I still survey every job myself.</p>
      <p>You get one person from the first visit to the last screw: no sales team, no call centre.</p>
      <div class="gos-signature"><span class="gos-signature__name">Dan Miller</span><span class="gos-signature__sep"></span><a href="#" class="gos-btn gos-btn--secondary gos-btn--md">${I.phone} Call Dan</a></div></div>
  </div>`,
  argTypes: { variant: { control: 'inline-radio', options: ['caption', 'plain'] } },
  args: { variant: 'caption' },
};

export const WithCaption = {};
export const Plain = { args: { variant: 'plain' } };
