# DECISIONS — audit trail for every value merge

Source: `DS_AUDIT.md` (Master Template audit, 27 Sep 2026, branch `design/hero` @ 3be9722).
"Uses" counts come from the audit's full tables. One line per decision.

**Rule for ⚠ groups (resolved decision #4):**
1. If a value in the group already has a token name in the Master Template, keep that value and that name.
2. Otherwise, keep the value with the highest "Uses" count.
3. **Tie-break** (the brief doesn't cover ties, so this rule is applied every time and is easy to change):
   - If two values in a group both have names, keep the one used more often through `var()`.
   - If the counts are equal, keep the value the audit lists first in that group.

No value was invented. Every pick below is one of the values in the audit's tables.

---

## Resolved decisions #1–#3, #5 (from the brief, recorded for completeness)

- **#1 Shadows.** Every shadow is now `color-mix(in srgb, var(--shadow-tint) N%, transparent)`, and `--shadow-tint: var(--brand)` (the same variable `--shadow` / `--shadow-lift` used before). The geometry is unchanged. There are 9 tiers: the audit's **10 distinct box-shadow geometries** minus the focus ring, which became `--ring`. `--text-shadow` is a separate token. The tiers are:
  - `--shadow-sm` `0 10px 30px -12px`
  - `--shadow` `0 12px 40px`
  - `--shadow-lift` `0 18px 50px`
  - `--shadow-overlay` `0 24px 60px -24px`
  - `--shadow-float` `0 30px 60px -38px`
  - `--shadow-raised` `0 34px 50px -28px`
  - `--shadow-card` `0 34px 70px -34px`
  - `--shadow-sticky` `0 10px 30px`
  - `--shadow-glow` `0 30px 80px -34px` (already gold `color-mix`)
- **#1 Shadow alpha per tier.** Each tier keeps the alpha of the value it replaced, after the colour merges below:
  - sm 50%, overlay 50%, float 35%, raised 35%, card 70%, sticky 22%, shadow 10%, lift 16%, glow 45%, text-shadow 35%.
- **#1 Colour source for shadows.** The navy `rgba(6,20,34,·)` and black `rgba(0,0,0,·)` shadow colours are replaced by `--shadow-tint`. That includes the black `.6` on `.m-book .m-card`, the black `.22` on the sticky bar and the black `.35` text-shadow.
- **#2 Text on gold.** `var(--ink)` → `--gold-ink: #141414` everywhere a gold background carries text or icons (buttons, disc, tag, sticky quote, and the gold cover icon).
- **#3 Heading weight.** Inner-page `h1–h4` weight 800 → `--weight-bold: 700` site-wide (`base.css`).
- **#5 Client colours.** Not defined in `tokens.css`: `--primary --secondary --gold --brand --brand-dark --accent --accent-ink --cta --cta-dark --cta-ink --ink --muted --surface --font-heading --font-body` are only ever read.

---

## Colours

- Hairline border `#E2E8EE` (--line, 2) · `#DFE6EC` (--line2, 2) · `#E4EAF0` (2) · `#E6ECF2` (3) → **`--line: #E2E8EE`**. Already named: `--line` (`--line2` is also named; equal uses, so `--line` wins as the first listed). `--line2` is retired.
- Control border `#D6DEE6` (3) · `#D3DDE6` (1) → **`--line-control: #D6DEE6`**. Highest usage: 3 vs 1.
- Placeholder grey `#C2D0DC` (1) · `#C9D7E2` (1) · `#C8D4DE` (1) → **`--placeholder: #C2D0DC`**. Tie at 1 each; first listed.
- Pale ground `#E9EEF3` (--ground, 3) · `#E7EDF3` (1) · `#DCE5EC` (1) → **`--ground: #E9EEF3`**. Already named: `--ground`.
- Darkest body `#2E3E4C` (--body2, 2) · `#3A4A58` (3) → **`--body2: #2E3E4C`**. Already named: `--body2` (this beats `#3A4A58`'s higher usage).
- Body `#4A5A68` (--body, 2) · `#5A6B7A` (3) → **`--body: #4A5A68`**. Already named: `--body` (this beats higher usage).
- Muted `#6C7E8C` (--mute, 2) · `#7A8B9A` (1) → **`--mute: #6C7E8C`**. Already named: `--mute`.
- Success green `#1B8A3E` (3) · `#0f7b4f` (--status-good, 1) → **`--status-good: #0f7b4f`**. Already named: `--status-good` (this beats higher usage).
- Navy scrim bases: 6,20,34 (12 uses across its alphas) · 8,26,44 (3) · 10,30,49 (5) · 16,44,70 (2) → **`--scrim: #061422`** (rgb 6,20,34). Highest usage: 12 vs 5 vs 3 vs 2. Used through `color-mix` for the scrims and the map grid.
- Navy alpha pair `.35` (1) · `.38` (1) → **35%**. Tie; first listed. Applied to the float and raised shadow tiers.
- Navy alpha pair `.45` (1) · `.5` (5) → **50%**. Highest usage: 5 vs 1. In the floating-card shadow, the `.45` is then overridden by the "Floating card" group below.
- Navy alpha pair `.7` (1) · `.72` (1) → **70%**. Tie; first listed. Applied to the card shadow and the announce bar (`.m-top`) background.
- Black `rgba(0,0,0,.22)` ≡ `rgb(0 0 0 / 22%)`: one value in two syntaxes → **22%** (sticky shadow, now tinted per #1).
- White glass fill `.05` (1) · `.06` (1) · `.07` (1) · `.08` (3) → **`--on-dark-glass: rgba(255,255,255,.08)`**. Highest usage: 3 vs 1.
- White subtle fill / hairline `.1` (1) · `.12` (3) · `.13` (1) · `.14` (5) → **`--ft-line: rgba(255,255,255,.14)`**. Already named: `--ft-line` (also the highest usage, 5).
- White divider `.16` (6) · `.18` (2) → **`--on-dark-divider: rgba(255,255,255,.16)`**. Highest usage: 6 vs 2.
- White stepper line / placeholder `.2` (1) · `.22` (1) · `.24` (1) · `.26` (1) → **`--on-dark-faint: rgba(255,255,255,.2)`**. Tie at 1 each; first listed.
- White outline border `.3` (3) · `.32` (1) → **`--on-dark-border: rgba(255,255,255,.3)`**. Highest usage: 3 vs 1.
- White secondary text `.62` (1) · `.68` (3) · `.7` (3) · `.72` (7) · `.74` (2) · `.76` (1) · `.78` (5) → **`--on-dark-muted: rgba(255,255,255,.72)`**. Highest usage: 7.
- White body-on-dark `.8` (2) · `.82` (5) · `.84` (2) · `.86` (2) · `.88` (2) · `.9` (1) → **`--on-dark-body: rgba(255,255,255,.82)`**. Highest usage: 5.
- White near-white `.92` (3) · `.94` (1) → **`--on-dark-strong: rgba(255,255,255,.92)`**. Highest usage: 3 vs 1.
- Gold mix 9% (1) · 10% (1) → **`--gold-soft: color-mix(gold 9%)`**. Tie; first listed.
- Gold mix 55% (1) · 60% (1) → **`--gold-line: color-mix(gold 55%)`**. Tie; first listed.
- Brand mix 10% (`--shadow`, 1) · 12% (1) → **10%**. Already named: it's the value inside `--shadow`. Now used by `--ring` (the field focus halo).

## Shadows (⚠ groups in audit 1.4; colour handled by #1, alpha picked here)

- Sticky bar `0 10px 30px rgba(0,0,0,.22)` ≡ `rgb(0 0 0 / 22%)`: identical → **`--shadow-sticky`, 22%**.
- Floating card `…,.35)` (`.m-jc--big`, 1) · `…,.45)` (`.m-stats`, 1), same geometry `0 30px 60px -38px` → **`--shadow-float`, 35%**. Tie; first listed.
- Form card `rgba(6,20,34,.7)` (`.m-card`, 1) · `rgba(0,0,0,.6)` (`.m-book .m-card`, 1), same geometry `0 34px 70px -34px` → **`--shadow-card`, 70%**. Tie; first listed.
- Dropdown / overlay `0 24px 60px -24px` (4) · `0 10px 30px -12px` (1). These are **different geometries**, so both are kept as tiers: **`--shadow-overlay`** (dropdowns, menus) and **`--shadow-sm`** (map pill, light tag), both at 50% (the colour they share).

## Spacing & sizes

- Control height 52 (5) · 53 (1) → **`--control-md: 52px`**. Highest usage: 5 vs 1.
- Large control height 58 (5) · 59 (1) → **`--control-lg: 58px`**. Highest usage: 5 vs 1.
- Small control height 42 (5) · 44 (7) · 46 (5) · 48 (5) → **`--control-sm: var(--space-12)` = 48px**. Already named: 48px = `--space-12`. This beats 44px's higher usage (7).
- Icon disc 28 (17) · 32 (18) · 34 (7) · 36 (6) · 38 (2) · 40 (8) · 42 (5) · 52 (5) → **split into two sizes, not merged to one** (corrected in the second commit):
  - **`--disc: var(--space-8)` = 32px** (`.gos-disc--md`, the default) for 28–42px. These were all doing the same small-icon job: step numbers, avatars, FAQ +/−, guarantee icons and the small tile arrow. Already named: `--space-8` (also the highest usage, 18).
  - **`--disc-lg: 52px`** (`.gos-disc--lg`) is kept as its own size. Among discs, 52px was used only by `.m-tile--big .go`, the arrow on the big bento tile. It was a deliberate size for the "big" tile variant, not a near-duplicate of the small discs. The audit's 52px count (5) also includes `.m-btn` min-height and `.m-gtree` margin, which aren't discs.
- Pill horizontal padding 12 (33) · 13 (6) · 14 (26) · 15 (9) · 17 (4) · 18 (22) → **`--pill-x: var(--space-3)` = 12px**. Already named: `--space-3` (also the highest usage).
- Pill vertical padding 6 (12) · 7 (6) · 8 (41) · 9 (7) · 10 (26) → **`--pill-y: var(--space-2)` = 8px**. Already named: `--space-2` (also the highest usage).
- Card padding 22 (21) · 24 (27) · 26 (9) · 28 (17) · 30 (10) · 31 (1) · 32 (18) · 34 (7) → **`--card-pad: var(--space-6)` = 24px**. Two named (24 = `--space-6`, 32 = `--space-8`); highest usage among them: 27 vs 18.
- Gaps 8 (41) · 9 (7) · 10 (26) → **`--gap-xs: var(--space-2)` = 8px**. Already named: `--space-2`.
- Gaps 12 (33) · 14 (26) · 16 (38) · 18 (22) → **`--gap-sm: var(--space-4)` = 16px**. Two named (12 = `--space-3`, 16 = `--space-4`); highest usage: 38 vs 33.
- Gaps 20 (23) · 22 (21) · 24 (27) → **`--gap-md: var(--space-6)` = 24px**. Two named (20 = `--space-5`, 24 = `--space-6`); highest usage: 27 vs 23.
- Section-head offset 28 (17) · 30 (10) · 32 (18) · 36 (6) → **`--head-offset: var(--space-8)` = 32px**. Already named: `--space-8`.
- Overlay insets 16 (38) · 18 (22) · 22 (21) · 24 (27) · 26 (9) · 28 (17) · 30 (10) → **`--inset: var(--space-4)` = 16px**. Two named (16, 24); highest usage: 38 vs 27.
- Max-width 330 (1) · 340 (4) → **`--measure-xs: 340px`**. Highest usage: 4 vs 1.
- Max-width 420 (2) · 440 (2) · 460 (1) · 462 (1) → **`--measure-sm: 420px`**. Tie at 2; first listed.
- Max-width 520 (2) · 540 (1) · 560 (3) → **`--measure-md: 560px`**. Highest usage: 3.
- Max-width 660 (1) · 700 (1) → **`--measure-lg: 660px`**. Tie; first listed.
- Card min-height 208 (3) · 220 (3) · 236 (2) → **`--tile-min: 208px`**. Tie at 3; first listed.
- Sticky-bar inset 10px (26) · 0.6rem (6) → **`--sticky-inset: 10px`**. Highest usage: 26 vs 6.
- Sticky-bar vertical padding 14px (26) · 0.8rem (1) → **`--sticky-pad-y: 14px`**. Highest usage: 26 vs 1.
- Sticky-bar horizontal padding / gap 8px · 0.5rem: the same length → **`var(--space-2)`**. Already named: `--space-2`.
- ⚠ **Page wrapper width** 1280px (4) · 72.5rem (`--maxw`, 1) → **`--maxw: 72.5rem` (1160px)**. Already named: `--maxw`. **The home page gets 120px narrower.**
- Page wrapper gutter `clamp(16px,4vw,80px)` · 2.5rem (referenced in the codebase as `--space-10`) → **`--gutter: var(--space-10)` = 2.5rem**. Already named: `--space-10`, which is now actually defined.
- ⚠ **Section rhythm** `.m-sec clamp(56px,7vw,96px)` · `.section clamp(var(--space-12),6vw,5rem)` · `.ft-cta` / `.ft-main` clamps → **`--section-y: clamp(var(--space-12), 6vw, 5rem)`**. Already named: the only one built from an existing token. **Home sections get tighter (max 80px instead of 96px).**
- rem↔px twin 0.6rem (6) · 10px (26) → **10px**. Highest usage.
- rem↔px twin 0.65rem (2) · 10px (26) → **10px**. Highest usage.
- rem↔px twin 0.875rem (2) · 14px (26) → **14px**. Highest usage.
- rem↔px twin 1.1rem (5) · 18px (22) → **18px**. Highest usage.
- rem↔px twin 1.4rem (3) · 22px (21) → **22px**. Highest usage.
- rem↔px twin 1.75rem (4) · 28px (17) → **28px**. Highest usage.
- rem↔px twin 2.4rem (2) · 38px (2) → **2.4rem**. Tie; first listed.

  In practice the twin picks above are absorbed by the role groups (a 22px gap becomes `--gap-md`, a 28px disc becomes `--disc`, and so on). They're recorded here because they're ⚠ rows in the audit.

## Radius

- Pill 999px (`--pill`: 14 `var()` uses) · 100px (`--radius-pill`: 4 `var()` uses) → **`--pill: 999px`**. Both named; more `var()` uses (14 vs 4). `--radius-pill` is retired.
- Small / control 9 (4) · 10 (1) · 11 (1) · 12 (3; `--radius-sm` and `--radius`) → **`--radius: 12px`**. Already named. Between the two names for 12px, `--radius` has 2 `var()` uses vs `--radius-sm`'s 1, so `--radius-sm` is retired.
- Medium 14 (3) · 16 (5; `--radius-lg`) · 18 (3) → **`--radius-lg: 16px`**. Already named: `--radius-lg`.
- Large 20 (`--r` and `--radius-panel`) · 22 (4) · 24 (1) → **`--r: 20px`**. Already named. `--r` has 5 `var()` uses vs `--radius-panel`'s 1, so `--radius-panel` is retired.
- Focus-ring radius 4px (1) · 6px (3) → **`--radius-focus: 6px`**. Highest usage: 3 vs 1.

## Typography

- Micro label 9 (2) · 10 (1) · 11 (15) · 12 (18) · 0.72rem (1) · 0.75rem (1) → **`--text-xs: 12px`**. Highest usage: 18.
- Small / body 13 (16) · 14 (23) · 15 (34) · 16 (8) · 0.8–1.03rem (1–5 each) → **`--text-sm: 15px`**. Highest usage: 34. **13px captions and 16px body both become 15px.**
- Lead 17 (6) · 18 (4) · 19 (2) · 1.05rem (4) · 1.08rem (1) · 1.09rem (1) · 1.1rem (1) → **`--text-md: 17px`**. Highest usage: 6.
- Small heading 20 (8) · 21 (2) · 22 (3) · 24 (5) · 25 (1) · 26 (1) · 1.15rem (3) · 1.2rem (4) · 1.25rem (2) → **`--text-lg: 20px`**. Highest usage: 8.
- Big numbers 28 (1) · 32 (1) · 34 (1) · 46 (1) · clamp(26px,2.4vw,34px) (1) · 1.9rem (1) → **`--text-xl: 28px`**. Tie at 1 each; first listed.
- Quote text clamp(17px,1.5vw,20px) (3) · clamp(22px,2.3vw,30px) (1) · clamp(22px,2.3vw,32px) (1) → **`--text-quote: clamp(17px,1.5vw,20px)`**. Highest usage: 3.
- Card heading clamp(24px,2.4vw,30px) (1) · clamp(26px,2.4vw,34px) (1) → **`--text-title: clamp(24px,2.4vw,30px)`**. Tie; first listed.
- H2 `.m-h2` clamp(30,4vw,48) · `.m-letter h2` · `.m-bleft .m-h2` · `.m-guar .m-h2` · `.ft-cta h2` · global h2 (1 use each) → **`--text-h2: clamp(30px,4vw,48px)`**. Tie; first listed.
- H1 `.m-h1` clamp(38px,5vw,58px) (1) · global h1 clamp(2.1rem,…,3.5rem) (1) → **`--text-h1: clamp(38px,5vw,58px)`**. Tie; first listed.
- Heading font `--fh: 'Outfit',sans-serif` · `--font-heading` (client var) → **`var(--font-heading)`**. Client-injected (#5) and already named. `--fh` is retired.
- Body font `--fb` · `--font-body` (client var) → **`var(--font-body)`**. Client-injected (#5) and already named. `--fb` is retired.
- Button weight `.btn` 700 · `.m-btn` 600 (the ⚠ note in 1.5); weight uses: 700 (44) vs 600 (42) → **`--weight-bold: 700` for buttons**. Highest usage: 44 vs 42. **Home buttons get slightly heavier.**

---

## Other choices (not ⚠ merges, listed so nothing is hidden)

- **Name clashes.**
  - `--ink` and `--surface` are client variables (#5), so the home page's `.m` overrides (`--ink: var(--secondary)`, `--surface: #F1F5F9`) are dropped. Components read the client's `--ink` and `--surface` directly.
  - The fixed `#F1F5F9` is no longer used. The audit marked it "keep, but check", not ⚠.
  - `--mute` (fixed grey, from the ⚠ merge) is used for muted UI text. The client's `--muted` is still available but no component reads it.
- **Consolidated family designs.** Where the audit marked a family 🔁 and both sides looked different, the **home master** look was taken as the design authority (per the Master Template's CLAUDE.md, "Never redesign it"). Values were then snapped to the merged tokens above. This covers:
  - kicker colour (mute, not brand)
  - field labels (12px uppercase)
  - field focus (gold outline plus `--ring` halo)
  - FAQ disc on `--surface`
  - sticky call on `--primary`, quote on `--gold`
  - button hover (1px lift, no shadow)
  - the footer-style CTA band
- **Button variant mapping.**
  - `--primary` = gold (was `.m-btn--gold` / `.btn--accent` / `.ft-btn`)
  - `--secondary` = client primary fill (`.m-btn--ink` / `.btn--primary`)
  - `--tertiary` = outline on light (`.m-btn--line`)
  - `--ghost` = outline on dark (`.m-btn--ghost` / `.cta__ghost`)
  - `--light` = white fill (`.btn--light`)
- **Button sizes.** `--sm` / `--md` / `--lg` = 48 / 52 / 58px (the three control-height merges above). Font sizes are 15 / 15 / 17px (the small/body and lead merges). The horizontal padding (20 / 24 / 30px) is kept from the original buttons.
- **Families with no size modifiers.** Tags have a single size because their ⚠ groups merged to one value. (Icon disc has `--md` / `--lg`; see the icon-disc entry above.) Adding `--sm` / `--lg` there would need invented values.
- **Letter-spacing and line-height** weren't audited, so each component keeps the literal value from the rule it replaces.
- **Heading line-height.** `1.04` (home) was chosen over `1.1` (inner) as the base heading line-height, following the home master.
- **Button hover: diagonal wipe** (branch `design/button-wipe`, 30 Sep 2026). The look was adapted from a GoHighLevel test site and rebuilt from scratch in plain CSS; none of that site's code was copied. The pill shape, sizes, variants and `--block` are unchanged. The label stays one element (it's not duplicated for the animation), so screen readers and search engines see the text once.
  - How it works: a `::before` fill behind the label, revealed with `clip-path` from a thin diagonal line in the centre. The label colour switches with it, and the button scales slightly (`scale`, not `transform`; the old 1px `--lift` hover is removed). It only runs on devices that support hover, with a fine pointer and motion allowed. Everywhere else the hover/focus is a plain background-colour change. `:focus-visible` gets the same fill plus the existing gold `--focus-ring`.
  - Wipe colours (`--btn-wipe-bg` / `--btn-wipe-ink` on each variant):
    - `--primary` (gold) → white `--paper`, text `--ink`
    - `--secondary` (client primary) → `--gold`, text `--gold-ink`
    - `--tertiary` (outline on light) → `--primary`, text white
    - `--ghost` (outline on dark) → white `--paper`, text `--ink`
    - `--light` (white on dark) → `--brand-tint`, text `--ink`
  - New tokens: `--ease-wipe`, `--btn-scale-hover`, `--btn-scale-press`. No existing colour token was added or changed.
  - Follow-up fix (branch `design/button-wipe-fix`): the label colour no longer fades over the whole 0.75s wipe. It flips in 0.06s at the moment the wipe crosses the middle of the label (starts at 0.17s on hover, 0.27s on leaving; tokens `--btn-ink-delay`, `--btn-ink-delay-out`, `--btn-ink-duration`, timings measured from paused frames in Storybook). On hover the border now takes the wipe colour, so no 1px rim of the resting colour shows. The one exception is primary, which keeps a gold rim (`--btn-wipe-border`), because a white pill on a white page otherwise disappears.
- **Card media slot** (branch `design/card-media`, 1 Oct 2026). Services, areas and showcase pages need `gos-card` with an optional photo at the top. Matches the site's current areas cards (`.page .area-shot` in the Master Template): the photo sits **inside** the card padding with rounded corners, not full-bleed.
  - Class: **`gos-card__media`**, an element of the card (same `__` pattern as `__title`, `__meta`, `__body`). It goes first in the card. With no `__media` element, `gos-card` is unchanged (every new rule is scoped to `.gos-card__media`; existing card stories compared pixel for pixel at 1280 and 375px in both example themes).
  - **Shape is its own modifier on the element**, the same way variant and size are separate on the block: `gos-card__media--fixed` and `gos-card__media--natural`. Always set one, like `gos-card--default`. Size stays on the card (`gos-card--sm/md/lg`), never on the media.
    - `--fixed`: the slot's size comes from `aspect-ratio`, 3:2 by default (the site's area cards use 3:2). The child is absolutely positioned to fill it (`object-fit: cover` for images), so a photo arriving later, or a different-shaped photo, shifts nothing. Change the shape per card with `--card-media-ratio` (e.g. `style="--card-media-ratio: 4 / 3"`), the same per-component custom property pattern as `--btn-wipe-bg`.
    - `--natural`: the image is 100% wide with `height: auto`, keeping its own proportions, never cropped. For tall door photos. Needs `width`/`height` on the `<img>` so the space is reserved before it loads.
  - Placeholder (empty `--fixed` slot): `linear-gradient(165deg, var(--ground), var(--placeholder))`, the job-card photo's gradient. `--natural` has no placeholder: with no image it has no height to show.
  - Any child: `--fixed` fills whatever is inside (an `<img>`, or the site's own "photo goes here" frame, `.m-phf`). `--natural` gives any child full width.
  - Corners: `--radius` (12px), the radius the site's area photo already uses.
  - Gap to the title: **`--gap-sm` (16px)**, the site's `margin-bottom: var(--space-4)`. The card already has a `--gap-xs` flex gap, so the media's own margin is `calc(var(--gap-sm) - var(--gap-xs))`, keeping the total at one `--gap-sm`.
  - `flex-shrink: 0`, so a card stretched by its grid can never squash the photo. No transition, no JavaScript. The link variant's hover lift moves the card and its photo together.
- **Card action and logo fit** (branch `design/card-action-contain`, 6 Oct 2026, v0.2.0). The Master Template's /accreditations/ cards needed a logo that's never cropped and a "verify on their register" link. Both were site-only CSS (`.page .gos-card__media--contain`, `.page .creds__link` in `styles/components.css`), and now live here.
  - **`gos-card__action`**: an element, the card's last child. `margin-top: auto` pushes it to the bottom of the flex column, so in a stretched grid row every card's link sits on the same line. `padding-top: --gap-xs`, so with the card's flex gap it's one `--gap-sm` below the text above it (the site used `--space-2` padding). Text `--text-sm`, semibold. Link colour is left to the site.
  - **`gos-card__media--contain`**: a fit modifier, separate from shape, so it works with `--fixed` and `--natural`. White `--paper` background (replaces the placeholder gradient), image `object-fit: contain` with `--space-6` (24px) padding: the site's values.
  - **Border on every media slot**: `--border` (1px) in `--line`, `--on-dark-border` on the dark card. This replaces the site's own border on the logo slot (`--hairline`) and now shows on photo cards too, a visible change from v0.1.0. It's always present, so hovering never moves anything.
  - **Hover**: border colour → `--primary` (`--on-dark-strong` on the dark card, where `--primary` is the background). Only inside `(hover: hover) and (pointer: fine)`, so touch screens never get a stuck hover colour. The 0.3s fade (the card's own border-color timing) is only added with `prefers-reduced-motion: no-preference`; with reduced motion on, the colour changes instantly. This replaces "No transition" in the entry above.
  - **`gos-card__meta` margin reset** (`margin: 0`): the proposed markup uses `<p>` for the meta line, and the browser's default paragraph margin was adding a gap. A `<span>` (as in the older stories) is unaffected.
- **Card hover and text links** (branch `design/card-hover-link`, 6 Oct 2026, v0.3.0). On the Master Template's /accreditations/ page the image-slot hover read as the wrong target: the owner wanted the whole card to respond, and the bottom link to animate like the site's other links.
  - **Media hover removed**: the `gos-card__media` border stays (1px `--line`) but no longer changes colour or fades. A visible change from v0.2.0.
  - **`gos-card--hover`**: a modifier, not the default, so the static cards (steps, credentials) don't start reacting to the mouse. Border → `--primary` under `(hover: hover) and (pointer: fine)`, `--on-dark-strong` on the dark card. It reuses the card's existing `border-color .3s` transition. It doesn't lift: `gos-card--link` keeps the lift for cards that are one big link. `--hover` is for cards with their own links inside, which can't be wrapped in an `<a>`.
  - **`gos-link` (new, `links.css`)**: the site's two underline effects as one component. `--track` is the hero "Liam" link (`.m-hero-sub a`): a 2px `--gold` line sized 0 → 100% over a 1px resting line. The resting line uses the `--gold-line` token (55% gold) rather than the site's literal 45%. `--draw` is the footer column links (`.ft-links a > span`): no resting line, drawn in from the left, leaving to the right.
    - Timing: `.5s` on `--ease-out`, the value both originals use.
    - `padding-bottom: 3px`, from the hero link. The footer used 2px; one value keeps the two variants the same height.
    - `box-decoration-break: clone`, so the line follows the words across a wrap. This replaces the footer's extra `<span>` inside each link.
    - The original links only had a hover state with motion allowed. Here, hover shows the line for any mouse user; the draw itself is the part gated on `prefers-reduced-motion: no-preference`. With reduced motion on, the line appears instantly rather than not at all.
    - Text colour is inherited (`color: inherit`), so the same class works on white cards, the dark hero and the footer.
    - **`--gold`** (colour modifier, combines with either effect): gold text for dark backgrounds, the hero "Liam" link's own colour, kept on hover and focus. A modifier rather than a third effect, so gold works with both underlines. Not for light backgrounds: `--gold` text on white fails contrast.
    - **`--gold-text` token and `--gold-deep`**: `--gold` text on white is 2.0:1 (`#F0A81E`), well under the 4.5:1 AA minimum for 15px text. `--gold-text` is `color-mix(in srgb, var(--gold) 60%, #000)`, derived like `--gold-soft` / `--gold-line` so every client's gold gets its own dark version: `#906512` for `#F0A81E`, 5.2:1 on white and 4.8:1 on `--surface`. 35% black (`#9C6D14`) was rejected: 4.6:1 on white but 4.2:1 on `--surface`. The underline stays `--gold`: it's decoration, and the text carries the contrast. A client with a much lighter gold should check `--gold-text` still passes.
    - The text colour also stays put on hover and focus (`.gos-link:hover { color: inherit }`): the line is the hover signal, and a site's own `a:hover` colour (the Master Template has one) would otherwise recolour it.
- **`gos-link-host`** (branch `design/link-host`, 6 Oct 2026, v0.4.0). The Master Template's hero stats are each one `<a>` (big number + label) with the underline on the label only, drawn when the mouse is anywhere over the stat (`a.m-stat:hover > span`). `gos-link` reacts to hovering itself, so on its own it would only animate when the pointer is on the label.
  - `gos-link-host` on the block link applies the same hover and focus-visible states to any `gos-link` inside it. Same values, same mouse-only and reduced-motion rules; nothing new to style.
  - The host only sets `color: inherit` and `text-decoration: none`; layout (block, flex) stays with the site.
  - A class on the parent rather than `:has()`, so it works in every browser the sites support and the intent is visible in the markup.
- **Icons: Lucide, one set, served by the design system** (branch `design/icons`, 6 Oct 2026, v0.5.0). The Master Template's ~20 icons were hand-written SVG strings in several files, near Lucide but not consistent (the nav chevron's stroke was 2.4, the phone icon a custom drawing). The owner chose Lucide for every icon, introduced one piece at a time.
  - **Where they live**: `src/icons/icons.json` is the approved list; `scripts/build.mjs` reads each one from the pinned `lucide-static` (devDependency, exact version) and writes `dist/icons.mjs`. Only approved icons ship, not Lucide's 1,500+. No runtime dependency: a site installing from GitHub gets the committed `dist/icons.mjs` and nothing else.
  - **Why strings, not a React package**: the Master Template builds its home page as HTML strings and its inner pages in React. A string works in both (React via `dangerouslySetInnerHTML` or a tiny wrapper), and it all runs when the page is built, so nothing is added in the browser.
  - **Sizes and weight**: `sm` 12px / stroke 2.5, `md` 14px / 2, `lg` 20px / 1.75 (on Lucide's 24-unit grid that's about 1.25 / 1.17 / 1.46px on screen). The weight steps down as icons grow so they read evenly; small icons in particular stay visible. `md` is 14px so the nav chevron (11px at stroke 2.4 before, about 1.1px) gets at least as visible, not lighter. Set both as attributes and in `icons.css`, so an icon is right even before the stylesheet loads.
  - **Accessibility**: decorative by default (`aria-hidden="true"`, `focusable="false"`); `label` switches to `role="img"` + `aria-label`.
  - **Licence**: Lucide is ISC; part of it derives from Feather (MIT). Both notices are copied in full into the header of `dist/icons.mjs`, which is the file that ships.
- **Select arrow and the check icon** (branch `design/form-icons`, 6 Oct 2026, v0.6.0). On the Master Template's hero form the select used the browser's own arrow (`appearance: auto`), which sat against the field's right border.
  - `select.gos-field__input` now draws Lucide's `chevron-down` as a background image: 14px (the `md` icon size), `--space-4` (16px) in from the right, the same as the text's left inset, with the text's right padding widened to clear it (16 + 14 + 8px).
  - The stroke is `#6C7E8C`, the `--mute` value written out: a background image can't use `currentColor` or a custom property. Same path and weight (2) as `icon('chevron-down')`.
  - `.gos-field__input:focus-visible` now sets `background-color` rather than the `background` shorthand, which would have wiped the arrow on focus. No visible change for other fields.
  - `check` added to the approved icons, for the ticks under the forms' button.
- **`arrow-right` icon** (branch `design/arrow-icon`, 6 Oct 2026, v0.6.1): added to the approved Lucide icons for the Master Template's "Where to start" tile buttons (and, later, its other "go" arrows).
- **Tile hover and a stronger scrim** (branch `design/tile-hover`, 6 Oct 2026, v0.7.0). The Master Template's "Where to start" tiles move onto `gos-tile`, and the owner wanted the whole tile to respond and the text to read better.
  - **Hover**: the arrow disc fills `--gold` (text `--gold-ink`) and its icon nudges 3px right; the photo scales to 1.04 over .6s (`--ease-out`). Mouse only (`hover: hover`, `pointer: fine`); keyboard focus gets the disc colour and nudge, not the zoom. Movement only with `prefers-reduced-motion: no-preference`; the colour change always.
  - **Title underline**: no new CSS. The tile is a `gos-link-host` and the title's words a `gos-link--draw` (README).
  - **Scrim**: was 5% at 35% to 86% at the bottom; now clear to 30%, 45% at 62%, 90% at the bottom. The upper photo stays clear and the lower half, where the text sits, is darker, so the small tiles' text reads over bright photos.
  - **`.gos-disc--lg svg`** is 20px (was the disc's 16px for every size), so the big tile's arrow is in proportion to its 52px disc.
  - **`.gos-tile__in` is white itself**: a tile that is also a `gos-link-host` gets `color: inherit` from links.css (which loads after cards.css), and a site's link-colour reset can do the same, so `.gos-tile`'s own white could lose and put dark text on the scrim.
- **`arrow-down` and `phone` icons** (branch `design/tile-hover`, 6 Oct 2026): added to the approved Lucide icons for the Master Template's promise section buttons ("See recent jobs" and the call button), and later its other call buttons.
- **Card: icon media, side layout, lead and foot text** (branch `design/card-side-icon`, 6 Oct 2026, v0.8.0). The Master Template's promise carousel moves onto `gos-card` (it had its own card shell with a big numeral panel), and the owner wanted the visual to tie in with each promise: an icon by default, a real photo when there is one.
  - **`gos-card__media--icon`**: brand gradient (`--primary` to `--secondary`), gold icon, centred, `clamp(48px, 30%, 88px)` wide, stroke 1.5 (Lucide at large sizes reads heavy at 2). The media border goes transparent on the gradient. Works in any media shape; also meant for cards with no photo elsewhere (an accreditation without a logo yet).
  - **`gos-card--side`**: flex row, media second (right) at `--card-side-media` (34%, the carousel's old visual-zone width), at least `--tile-min` tall and stretched to the card's height. Text goes in `gos-card__main`. Under 40rem it stacks, media first at the usual `--card-media-ratio`. A wrapper element rather than a grid trick, so title/body/action keep their normal flow and the action still pins to the bottom.
  - **`gos-card__body--lead`** (`--text-md`, medium, ink, `--leading-snug`) and **`--foot`** (pinned to the bottom with `margin-top: auto`; no divider, the owner preferred it without): the promise cards' statement and closing line, without site overrides.
  - Icons for the promises added to the approved list: shield-check, eye, calendar-check, sparkles, hand-heart, badge-check (the master's six example promises) and ruler, house, wrench, search-check (Miller's four).
  - **`--foot` and `gos-card__action` use two-class selectors** (`.gos-card .gos-card__…`): their `margin-top: auto` pins them to the bottom, and a site's paragraph reset (the Master Template's `.m p { margin: 0 }`, one class plus an element) outranked the single class and left them under the text.
  - **`gos-card__badge`**: a disc pinned to the media's bottom-right (`--inset` from both edges, above the photo), for the promise cards' icon on their photo (white `gos-disc--light`, ink icon). Selector `.gos-card__media > .gos-card__badge` so it beats the `--fixed` and `--natural` "every child fills the slot" rules.
- **`gos-steps--cols-4`** (on branch `design/card-side-icon`, 7 Oct 2026): the Master Template's process section moves onto `gos-steps`, and Miller has four steps; with only `--cols-3` / `--cols-5` its row had an empty fifth slot. Same breakpoints as the others (two columns under 64rem, one under 40rem).
