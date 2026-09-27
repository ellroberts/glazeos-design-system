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

## Using it in the Master Template

Install it from GitHub. Replace `<owner>` with the account the repo lives under:

```bash
npm install github:<owner>/glazeos-design-system
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
| H | Cards, tiles, job cards | `cards.css` | 🔁 |
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
