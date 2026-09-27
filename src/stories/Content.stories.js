export default {
  title: 'Components/Content patterns',
};

export const Breadcrumb = {
  render: () => `<nav class="gos-crumb" aria-label="Breadcrumb"><ol><li><a href="#">Home</a></li><li><a href="#">Areas</a></li><li><span aria-current="page">Harrogate</span></li></ol></nav>`,
};

export const DirectAnswer = {
  render: () => `<div class="gos-answer"><p class="gos-answer__q">How much do new windows cost in Harrogate?</p><p class="gos-answer__a">Most three-bed semis come in between £4,500 and £7,000 for a full house of uPVC windows, fitted, with a 10-year guarantee.</p></div>`,
};

export const LocalProof = {
  render: () => `<div class="gos-proof"><p class="gos-kicker">Harrogate</p><p class="gos-proof__text">We've fitted 140 homes in Harrogate since 2009, from the stone terraces off Cold Bath Road to new builds at Killinghall — mostly sash replacements that keep the conservation-area look.</p><p class="gos-proof__meta">Postcodes covered: HG1, HG2, HG3</p></div>`,
};

export const Prose = {
  render: () => `<div class="gos-prose"><p>Long-form copy (blog posts, privacy policy) sits in <code>.gos-prose</code>.</p><h2>A heading inside prose</h2><p>Paragraphs get even spacing, links use the client's primary colour, and <a href="#">lists</a> indent cleanly.</p><ul><li>First point</li><li>Second point</li></ul><h3>A smaller heading</h3><p>And back to text.</p></div>
    <p class="gos-meta" style="margin-top:24px">Last reviewed 21 September 2026</p>`,
};
