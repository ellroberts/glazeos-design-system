import { I } from './_helpers.js';

const ROWS = [
  ['Who surveys the job', 'The owner, every time', 'A salesperson'],
  ['Price', 'Fixed, in writing', '"Today only" discounts'],
  ['Deposit', 'None', 'Up to 25%'],
  ['Who fits it', 'Our own fitters', 'Subcontractors'],
];

export default {
  title: 'Components/Comparison table',
  render: () => `<table class="gos-compare" style="max-width:900px">
    <thead><tr><th scope="col" class="gos-compare__label">What matters to you</th><th scope="col" class="gos-compare__us"><b>Miller Glazing</b><small>Local, owner-run</small></th><th scope="col" class="gos-compare__them">National chains</th></tr></thead>
    <tbody>${ROWS.map(([q, us, them]) => `<tr><th scope="row" class="gos-compare__q">${q}</th><td class="gos-compare__us"><span class="gos-compare__icon">${I.tick}</span>${us}</td><td class="gos-compare__them"><span class="gos-compare__icon">${I.cross}</span>${them}</td></tr>`).join('')}</tbody>
    <tfoot><tr><th scope="row" class="gos-compare__q">Straight answers, all four</th><td class="gos-compare__us"><strong>4 out of 4</strong><small>Every box ticked</small></td><td class="gos-compare__them">Ask them and see</td></tr></tfoot>
  </table>`,
};

export const Default = {};
