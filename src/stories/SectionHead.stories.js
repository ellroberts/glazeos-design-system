import { dark } from './_helpers.js';

export default {
  title: 'Components/Section heading',
  render: ({ layout }) => `<div class="gos-sechead gos-sechead--${layout}">
    <div class="gos-sechead__main"><p class="gos-kicker">Where to start</p><h2 class="gos-h2">Tell us what the job is and we'll price <em>that job</em>.</h2></div>
    <p class="gos-sechead__aside">Four different quotes. Pick the one nearest yours — you're not committing to anything.</p>
  </div>`,
  argTypes: { layout: { control: 'inline-radio', options: ['stack', 'split'] } },
  args: { layout: 'split' },
};

export const Split = {};
export const Stack = { args: { layout: 'stack' } };

export const Headings = {
  render: () => `<h1 class="gos-h1">Windows and doors, <em>fitted properly</em>, across West Yorkshire.</h1>
    <div style="height:24px"></div><h2 class="gos-h2">Recent jobs, and what the customer said.</h2>
    <div style="height:16px"></div><p class="gos-lede">A lede paragraph sits under a heading and sets up the section in a sentence or two.</p>
    <div style="height:24px"></div>${dark('<h2 class="gos-h2" style="color:#fff">Our <em>six-point</em> guarantee</h2><p class="gos-lede gos-lede--on-dark" style="margin-top:12px">On dark backgrounds use --on-dark.</p>')}`,
};
