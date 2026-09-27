export default {
  title: 'Components/Sticky call bar',
  render: () => `<p style="font-size:13px;color:var(--mute);margin:0 0 12px">On a real page this is fixed to the bottom of the screen below 60rem. Shown here with <code>--static</code> so it's visible at any width.</p>
    <div class="gos-sticky gos-sticky--static" style="max-width:420px" aria-label="Contact shortcuts"><a class="gos-sticky__call" href="#">Call Dan</a><a class="gos-sticky__quote" href="#">Get my fixed price</a></div>`,
};

export const Static = {};

export const LiveOnMobile = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  render: () => `<p style="font-size:13px;color:var(--mute)">Switch the viewport to a phone size: the bar pins to the bottom of the screen.</p>
    <div class="gos-sticky" aria-label="Contact shortcuts"><a class="gos-sticky__call" href="#">Call Dan</a><a class="gos-sticky__quote" href="#">Get my fixed price</a></div>`,
};
