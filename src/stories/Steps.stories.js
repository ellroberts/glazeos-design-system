import { I, dark } from './_helpers.js';

const STEPS = [
  ['Free survey', 'Day 1', 'We measure every opening and talk you through the options.'],
  ['Fixed price', 'Within 48 hours', 'In writing, and it does not move.'],
  ['Made to measure', '2–3 weeks', 'Built to the millimetre from the survey.'],
  ['Fitting', '1–2 days', 'Old frames out, new in, tidied every day.'],
  ['Sign-off', 'Same day', 'We walk round it with you before we go.'],
];

export default {
  title: 'Components/Process & stepper',
};

export const StepCards = {
  render: () => `<ol class="gos-steps gos-steps--cols-5">${STEPS.map(([t, w, p], i) => `<li class="gos-step"><span class="gos-disc gos-disc--gold">${i + 1}</span><b class="gos-step__title">${t}</b><span class="gos-step__when">${w}</span><p>${p}</p></li>`).join('')}</ol>`,
};

export const StepCardsThree = {
  render: () => `<ol class="gos-steps gos-steps--cols-3">${STEPS.slice(0, 3).map(([t, w, p], i) => `<li class="gos-step"><span class="gos-disc gos-disc--gold">${i + 1}</span><b class="gos-step__title">${t}</b><span class="gos-step__when">${w}</span><p>${p}</p></li>`).join('')}</ol>`,
};

const stepper = (variant) => `<ol class="gos-stepper gos-stepper--${variant}" style="max-width:460px">${STEPS.slice(0, 4).map(([t, , p], i, a) => `<li><span class="gos-disc ${i === a.length - 1 ? 'gos-disc--gold' : variant === 'on-dark' ? 'gos-disc--glass' : 'gos-disc--surface'}">${i === a.length - 1 ? I.tick : i + 1}</span><div><b class="gos-stepper__title">${t}</b><p>${p}</p></div></li>`).join('')}</ol>`;

export const StepperOnDark = { render: () => dark(stepper('on-dark')) };
export const StepperOnLight = { render: () => stepper('on-light') };
