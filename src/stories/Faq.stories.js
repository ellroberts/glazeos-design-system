const QS = [
  ['How long does fitting take?', 'Most houses are done in one or two days. We tell you the exact dates at survey.'],
  ['Do you take a deposit?', 'No. You pay when the job is finished and you are happy with it.'],
  ['Is the guarantee insurance-backed?', 'Yes, and it transfers to the new owner if you sell.'],
  ['Do you tidy up afterwards?', 'Every day, and we take the old frames away.'],
];

export default {
  title: 'Components/FAQ accordion',
  render: ({ layout }) => `<div class="gos-faq gos-faq--${layout}">${QS.map(([q, a], i) => `<details class="gos-faq__item"${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
    <p class="gos-faq-ask">Something else? Call Dan on <a href="#">01234 567890</a></p>`,
  argTypes: { layout: { control: 'inline-radio', options: ['cols-1', 'cols-2'] } },
  args: { layout: 'cols-2' },
};

export const TwoColumns = {};
export const OneColumn = { args: { layout: 'cols-1' } };
