import { I, stars } from './_helpers.js';

export default {
  title: 'Components/Footer',
  parameters: { layout: 'fullscreen' },
  render: () => `<footer class="gos-footer gos-footer--default">
  <div class="gos-cta"><div class="gos-wrap gos-cta__in">
    <div><p class="gos-kicker gos-kicker--gold gos-kicker--line-none">Ready when you are</p><h2 class="gos-cta__title">Ready for your fixed price?</h2><p class="gos-cta__lede">Tell us the job and your postcode.</p></div>
    <div class="gos-cta__actions"><a href="#" class="gos-btn gos-btn--primary gos-btn--lg">Get my fixed price ${I.arrow}</a><a href="#" class="gos-call gos-call--on-dark gos-call--lg"><span class="gos-call__icon">${I.phone}</span><span><small class="gos-call__note">Speak to Dan</small><b class="gos-call__number">01234 567890</b></span></a></div>
    <div class="gos-cta__trust"><a href="#" class="gos-rating gos-rating--on-dark">${stars('sm')}<span class="gos-rating__text"><b>5.0</b> · 21 Google reviews</span></a><span class="gos-badges" style="margin-left:auto"><span class="gos-badge gos-badge--plain gos-badge--sm">FENSA</span><span class="gos-badge gos-badge--plain gos-badge--sm">Certass</span></span></div>
  </div></div>
  <div class="gos-footer__main"><div class="gos-wrap gos-footer__grid">
    <div class="gos-footer__brand"><a class="gos-footer__name" href="#">Miller Glazing</a><p class="gos-footer__about">Family-run window and door fitters in Leeds since 2009.</p>
      <address class="gos-footer__nap"><span>12 Mill Lane, Leeds, LS1 4AP</span><a class="gos-footer__tel" href="#">01234 567890</a><a href="#">hello@millerglazing.co.uk</a></address></div>
    <nav aria-label="Services"><h2 class="gos-footer__h">Services</h2><ul class="gos-footer__links"><li><a href="#">uPVC windows</a></li><li><a href="#">Composite doors</a></li></ul><a class="gos-footer__more" href="#">All services ${I.arrow}</a></nav>
    <nav aria-label="Areas"><h2 class="gos-footer__h">Areas we cover</h2><ul class="gos-footer__links"><li><a href="#">Leeds</a></li><li><a href="#">Harrogate</a></li></ul></nav>
    <nav aria-label="Company"><h2 class="gos-footer__h">Company</h2><ul class="gos-footer__links"><li><a href="#">About us</a></li><li><a href="#">Contact us</a></li></ul>
      <div style="margin-top:24px"><h2 class="gos-footer__h">Opening hours</h2><ul class="gos-footer__hours"><li><span>Mon–Fri</span><span>08:00–18:00</span></li><li><span>Sat</span><span>09:00–13:00</span></li></ul></div></nav>
  </div>
  <div class="gos-wrap"><nav class="gos-footer__local" aria-label="Popular local pages"><span class="gos-footer__h" style="border:0;margin:0 8px 0 0;padding:0">Popular local pages</span><a class="gos-chip gos-chip--on-dark gos-chip--md" href="#">Windows in Leeds</a><a class="gos-chip gos-chip--on-dark gos-chip--md" href="#">Doors in Harrogate</a></nav></div></div>
  <div class="gos-footer__bottom"><div class="gos-wrap"><span>© 2026 Miller Glazing Ltd · Company no. 01234567</span><span class="gos-footer__legal"><a href="#">Privacy policy</a><a href="#">Sitemap</a></span></div></div>
</footer>`,
};

export const Default = {};
