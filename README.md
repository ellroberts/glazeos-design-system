# GlazeOS Design System

This is the shared design system for GlazeOS client websites. It's **plain CSS only**: design tokens plus one stylesheet per component family. There's no React, no TypeScript and no client-side JavaScript, in line with GlazeOS's no-client-JS rule.

It's consumed by the **GlazeOS Master Template** ([github.com/reece-dotcom/Reece-GlazeOS-Master_Template](https://github.com/reece-dotcom/Reece-GlazeOS-Master_Template)) as an installable dependency. The Master Template is the Next.js site that serves every client. Its home page (`.m-*` classes) and inner pages (`.btn`, `.card`, `.field`, …) currently carry two separate styling systems. This package is the single shared one both can move onto.

Every value comes from the Master Template audit (`DS_AUDIT.md`, 27 Sep 2026). Each place where near-duplicate values were merged is recorded in **[DECISIONS.md](DECISIONS.md)**.

## What's inside

```
src/styles/
  tokens.css          all design tokens (COLOURS / SPACING / TYPOGRAPHY / BORDERS & RADII / SHADOWS)
  base.css            zero-specificity element defaults (headings are 700, focus ring)
  index.css           tokens + base
  components.css      imports every component file below
  components/         one file per component family (audit Part 2, families A–Z)
dist/                 compiled, @import-free stylesheets (npm run build)
src/stories/          Storybook stories, one per family, plus Tokens and Typography
```

| Export | File | Contents |
|---|---|---|
| `glazeos-design-system` | `dist/glazeos.css` | everything |
| `glazeos-design-system/styles` | `dist/styles.css` | tokens + base |
| `glazeos-design-system/components` | `dist/components.css` | all component families |
| `glazeos-design-system/tokens` | `src/styles/tokens.css` | tokens only |
| `glazeos-design-system/components/<name>` | `src/styles/components/<name>.css` | a single family, e.g. `components/buttons` |

### Client colours are not in here

Every client's own colours and fonts stay with the client. The Master Template injects them at `:root` from the client's `site.config.mjs` (in `app/layout.js`), and this package only ever *reads* them:

`--primary --secondary --gold --brand --brand-dark --accent --accent-ink --cta --cta-dark --cta-ink --ink --muted --surface --font-heading --font-body`

Anything genuinely fixed (neutral greys, the spacing scale, radii, shadow geometry, type sizes) is baked into `tokens.css`. Shadows are tinted from the client's `--brand` through one variable, `--shadow-tint`.

### Class conventions

- Every class is prefixed **`gos-`**, so nothing collides with the Master Template's existing `.m-*` / `.btn` classes while both exist.
- **Two independent modifier axes.** Each component has a variant axis and a size axis, and they are never merged into one modifier:

```html
<a class="gos-btn gos-btn--primary gos-btn--lg" href="#quote">Get my fixed price</a>
<a class="gos-btn gos-btn--tertiary gos-btn--sm" href="/reviews/">Read the reviews</a>
```

### Card with a photo

`gos-card` takes an optional photo slot, `gos-card__media`, as its first child. It sits inside the card padding with rounded corners, one `--gap-sm` above the title. Pick its shape with a modifier on the slot (separate from the card's variant and size):

```html
<!-- Fixed 3:2: the photo fills and crops, so the card never jumps when a photo loads or is missing -->
<a class="gos-card gos-card--link gos-card--md" href="/areas/leeds/">
  <div class="gos-card__media gos-card__media--fixed"><img src="leeds.jpg" alt="" width="1200" height="800"></div>
  <h3 class="gos-card__title">Leeds</h3>
</a>

<!-- Natural: the photo keeps its own shape (tall door photos), nothing cropped -->
<div class="gos-card gos-card--default gos-card--md">
  <div class="gos-card__media gos-card__media--natural"><img src="door.jpg" alt="" width="600" height="1000"></div>
  <h3 class="gos-card__title">Composite doors</h3>
</div>
```

- An empty `--fixed` slot shows a neutral placeholder at full size, and fills with any child (e.g. the site's "photo goes here" frame).
- Change the fixed shape per card with `style="--card-media-ratio: 4 / 3"`.
- In a grid, add `align-items: start` so each card hugs its own content.
- The slot has a fixed 1px `--line` border. It doesn't change on hover; for a hover effect, add `gos-card--hover` to the card (below).
- Why it's built this way: see the "Card media slot" entry in [DECISIONS.md](DECISIONS.md).

### Logo cards and a bottom link

Add `gos-card__media--contain` to the slot for logos: the whole image sits on white with padding and is never cropped. Add `gos-card__action` as the card's last child for a link that sits at the bottom of the card, and make that link a `gos-link` (below). Add `gos-card--hover` so the card's border changes colour when the mouse is anywhere over it:

```html
<article class="gos-card gos-card--default gos-card--md gos-card--hover">
  <div class="gos-card__media gos-card__media--fixed gos-card__media--contain"><img src="logo.png" alt="" width="900" height="300"></div>
  <h2 class="gos-card__title">Example Trade Body</h2>
  <p class="gos-card__body">Every installer on the register is checked each year.</p>
  <p class="gos-card__meta">Member since 2014</p>
  <p class="gos-card__action"><a class="gos-link gos-link--track" href="https://example.org/register">Verify on their register</a></p>
</article>
```

- For the links to line up across a row, leave the grid at its default stretch (don't add `align-items: start`).
- `gos-card--hover` is for cards that hold their own links. A card that is one big link uses `gos-card--link` instead (it lifts as well).

### Text links

`gos-link` is an inline link with a gold underline that draws across on hover. Text colour is inherited, so it works on light and dark backgrounds, and the line follows the words when a link wraps.

- `gos-link--track`: a faint gold line at rest; the solid line sweeps across it on hover. Use it where the link must read as a link before anyone hovers it (card actions, links in a sentence).
- `gos-link--draw`: no line at rest; the solid line draws in from the left and leaves to the right. Use it in lists of links that are already obviously links (footer columns).
- `gos-link--gold`: gold text instead of the inherited colour, kept on hover. Add it to either effect, on dark backgrounds only (gold text on white is too low-contrast). `gos-link--track gos-link--gold` is the hero "Liam" link; `gos-link--draw gos-link--gold` keeps the line hidden until hover.
- `gos-link--gold-deep`: the light-background version, darker gold text from the `--gold-text` token (5.2:1 on white for the default `#F0A81E`); the underline stays `--gold`.
- Keyboard focus always shows the full line. Hover is mouse-only, and with reduced motion on the line appears without the draw.
- `gos-link-host`: for a block that is one big link with the underline on one piece of text inside it (a hero stat, a tile). Put `gos-link-host` on the `<a>` and `gos-link` (with its effect) on the text; hovering or focusing anywhere on the block draws the line.

```html
<a class="gos-link-host" href="#jobs"><b>2,800</b><span class="gos-link gos-link--track">Windows fitted</span></a>
```

```html
<a class="gos-link gos-link--track" href="/services/">Find out more</a>
```
- Why: see the "Card action and logo fit" entry in [DECISIONS.md](DECISIONS.md).

### Icons

Every icon is from [Lucide](https://lucide.dev), and only the approved ones ship. `glazeos-design-system/icons` exports `icon(name, { size, label })`, which returns an inline `<svg>` string drawn in the text colour. It runs when the site builds the page, so nothing extra loads in the browser.

```js
import { icon } from 'glazeos-design-system/icons';
icon('chevron-down', { size: 'md' }); // <svg class="gos-icon gos-icon--md" …>
```

- Sizes: `sm` 12px, `md` 14px (default), `lg` 20px. The line weight steps down as the size grows (2.5 / 2 / 1.75), so small icons don't look faint.
- Decorative by default (`aria-hidden`). Pass `label` for an icon that means something on its own.
- To add an icon: put its Lucide name in `src/icons/icons.json`, run `npm run build`, commit `dist/icons.mjs`. An unknown name throws, so a typo fails the site's build.
- The Lucide version is pinned (`lucide-static` in devDependencies). Its ISC licence (and the MIT notice for the icons Lucide took from Feather) is reproduced at the top of `dist/icons.mjs`.
- See them all in Storybook: Foundations → Icons.

## Using it in the Master Template

Install it from GitHub:

```bash
npm install github:ellroberts/glazeos-design-system
```

Then load the CSS once, after the client theme variables are set:

```js
// app/layout.js
import 'glazeos-design-system/styles';
import 'glazeos-design-system/components';
```

`dist/` is committed, so installing from GitHub needs no build step. After changing anything in `src/styles/`, run `npm run build` and commit the updated `dist/` with it.

## Run Storybook locally

Needs Node 22.12 or newer.

```bash
npm install
```

```bash
npm run storybook
```

This opens Storybook at http://localhost:6006.

- **Foundations → Tokens** shows the colour swatches, spacing scale, radii and shadow tiers. **Foundations → Typography** shows every size and weight. Both pages read `tokens.css` directly, so they are always current.
- **Components → …** has one page per family, with controls for each variant and size.
- The **Client** toolbar switch swaps between two example client themes. It shows which colours come from the client and which are fixed. Those example themes live in `.storybook/demo-theme.css` and are not part of the package.

To build a static copy: `npm run build-storybook` (output goes to `storybook-static/`).

## Component families

| | Family | File | Status in the audit |
|---|---|---|---|
| A | Buttons | `buttons.css` | 🔁 consolidated (`.m-btn` + `.btn` + `.ft-btn`) |
| B | Call pill | `call-pill.css` | ✅ shared (`.m-pill` + `.ft-call` + `.m-talk`) |
| C | Tags & status pills | `tags.css` | 🏠 new shared family |
| D | Kickers & labels | `kicker.css` | 🔁 |
| E | Chips + choice chips | `chips.css` | 🔁 |
| F | Form fields | `fields.css` | 🔁 |
| G | Form card | `form-card.css` | 🔁 |
| H | Cards, tiles, job cards | `cards.css` | 🔁 (+ optional photo slot, `gos-card__media`, logo fit `--contain`, bottom link `gos-card__action`, card hover `--hover`) |
| I | Glass cards (dark sections) | `glass.css` | 🏠 |
| J | Stat displays + rating | `stats.css` | 🔁 |
| K | Accreditation badges | `badges.css` | 🔁 |
| L | Star rating | `stars.css` | 🔁 |
| M | FAQ accordion | `faq.css` | 🔁 |
| N | Section heading | `section-head.css` | 🔁 |
| O | Layout (wrap, section, grid) | `layout.css` | 🔁 |
| P | Sticky call bar | `sticky-bar.css` | 🔁 |
| Q | CTA band | `cta-band.css` | 🔁 |
| R | Icon disc | `icon-disc.css` | 🔁 |
| S | Tick & link lists, trust row | `lists.css` | 🔁 |
| T | Owner portrait & letter | `portrait.css` | 🔁 |
| U | Map | `map.css` | 🔁 |
| V | Comparison table | `compare-table.css` | 🏠 |
| W | Process & stepper | `steps.css` | 🏠 |
| X | Inner-page content patterns | `content.css` | 📄 |
| Y | Header & nav | `nav.css` | ✅ |
| Z | Footer | `footer.css` | ✅ |
| AA | Text links | `links.css` | 🔁 |
| AB | Icons (Lucide) | `icons.css` + `dist/icons.mjs` | 🔁 |
