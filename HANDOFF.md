# Handoff — Arpit Lakhani Portfolio Site

For whoever (human or Claude) picks this up next. Read this before touching code.

## What this is

A scrapbook/journal-style portfolio site for Arpit Lakhani — copywriter, foley
artist, vocalist, sneakerhead. Built from his Canva pitch deck. Original ask
(see `PROJECT_BRIEF.md` in `~/Downloads/` — not copied here) specified:
React + Vite, GSAP 3.12+, ScrollTrigger, plain CSS, semantic HTML, responsive,
accessible, production-ready.

Status: **content-complete**. All real photos, ad mockups, and video links are
wired in. Only remaining step is deployment (see "What's left" below).

## Stack & structure

- React 19 + Vite 8, plain CSS (no framework), GSAP + ScrollTrigger for scroll
  reveals, no other runtime deps.
- `npm install && npm run dev` to run locally, `npm run build` to build.
- One page, section-per-component:

```
src/
  App.jsx                 — assembles all sections, skip link, footer
  index.css                — all styles, single file, scrapbook/paper theme
  main.jsx
  hooks/useReveal.js       — GSAP ScrollTrigger scroll-reveal hook (respects
                             prefers-reduced-motion; sets opacity/transform on
                             any [data-reveal] descendant of the section ref)
  components/
    CustomCursor.jsx       — decorative pencil-dot cursor (desktop only,
                             skipped for touch + reduced-motion)
    Nav.jsx                — sticky top nav
    Hero.jsx                — "portfolio" hero, hero photo
    About.jsx               — "hii i'm arpit" + polaroid photo
    Origin.jsx               — 2016 origin story, 3-entry timeline
    Work.jsx / WorkCard.jsx — 8 flip-cards (spec work), data in data/work.js
    Beyond.jsx               — Foley Artist + Vocalist cards w/ real photos
                                 and real YouTube links
    Doodle.jsx               — interactive scribble canvas
    Contact.jsx              — contact details
    BuildNotes.jsx            — floating "📝 build notes" button (now only
                                 lists deployment + optional extras)
  data/work.js             — the 8 spec-work briefs/copy (verbatim from deck)
  assets/                  — all real photos + ad mockups, see below
```

## Where the real assets came from

User shared a Canva deck (`~/Downloads/Arpit Lakhani.pdf`, 16 pages, exported
by the user directly since the Canva MCP connector couldn't get read access
to the shared design — permission_denied even after a share-link change, and
account-switching wasn't practical mid-session). Deck was rendered to PNG at
300dpi via `pdftoppm` and each real asset was cropped out with ImageMagick/
`sips`, then converted to compressed JPEGs (the crop agents originally saved
PNGs; those were later re-encoded to JPEG at quality 80 to cut file size
~5x — e.g. foley-artist.png 623KB → foley-artist.jpg 116KB).

Asset → source mapping (deck page numbers, 1-indexed):

| Asset | Deck page | What it is |
|---|---|---|
| `hero-photo.jpg` | 1 (cover) | Arpit lying back holding a green sneaker |
| `about-photo.jpg` | 2 | Same photo, polaroid crop for About section |
| `liquid-death.jpg` | 5 | Liquid Death 404 page mockup |
| `mailchimp.jpg` | 6 | Mailchimp cold email mockup |
| `duolingo.jpg` | 7 | Duolingo metro-coach wrap photo |
| `economist.jpg` | 9 | The Economist billboard mockup |
| `mad-ad-woman.jpg` | 10 | Mad Ad Woman Instagram post mockup |
| `diesel.jpg` | 11 | Diesel 5-panel storyboard |
| `whole-truth.jpg` | 12 (left) | Whole Truth insert card photos |
| `dove.jpg` | 12 (right) | Dove magazine ad mockup |
| `foley-artist.jpg` | 14 | Arpit's studio portrait (Foley Artist card) |
| `vocalist.jpg` | 15 | Arpit doing peace signs in studio (Vocalist card) |
| `hammock.jpg` | 1 (cover) | Arpit in a hammock, bottom-left of Hero |
| `paper-texture.jpg` | 1 (cover) | Real crumpled-paper swatch, used as Hero's background (layered under the ruled-line CSS gradient via `background-image` with two comma-separated layers) |

Real YouTube links (pulled from the PDF's embedded link annotations via
`pypdf`, not visible in the rendered images):
- Foley Artist → `https://youtu.be/w8C73Huj_iE`
- Vocalist → `https://youtu.be/m-SW2KQaQ1Y?si=kWUl9KQZpAPsLgDc`

A second PDF the user had in Downloads, `Cards.pdf`, turned out to be an
unrelated Keenai Wealth event invite — ignore it, it was a red herring.

`Cover.png` / hammock photo / torn-paper textures from the Canva cover were
**not** extracted — noted as optional in the build-notes panel, not done.

## Key decisions made along the way

- Rebuilt the original single-file prototype (`~/Downloads/index (2).html`)
  as a componentized React app rather than editing the HTML in place — this
  was an explicit user choice (asked via AskUserQuestion: "build project" vs
  "just edit brief").
- Vanilla `IntersectionObserver` reveal-on-scroll was replaced with GSAP +
  ScrollTrigger (`useReveal` hook) per the tech-stack requirement.
- Flip-cards use a real `<button aria-pressed>` (not a bare `onClick` div)
  so they're keyboard- and screen-reader-accessible; front/back faces get
  `aria-hidden` toggled based on flip state.
- `prefers-reduced-motion` is respected in three places: global CSS
  (kills all animations/transitions), `useReveal` (skips the scroll
  animation, sets final state immediately), and `CustomCursor` (doesn't
  mount at all).
- Doodle canvas is `role="img"` with a label explaining it's decorative/
  optional, so screen reader users aren't blocked thinking it's required.

## Known bug fixed during build (worth knowing about)

The doodle-pad canvas was missing `ref={canvasRef}` on the `<canvas>` element
during initial build — this threw `Cannot read properties of null (reading
'getContext')` on mount. Caught via a real Playwright run (console errors),
not just `npm run build` (which stays silent on runtime errors). If you
change `Doodle.jsx`, re-verify with an actual browser render, not just a
type-check/build.

A second one: a CSS `url('../assets/paper-texture.jpg')` in `index.css`
silently failed in production builds only (dev server masked it, since Vite
serves `src/` directly in dev). The bug: `index.css` lives at `src/index.css`,
so `../assets/` resolves *above* `src/` — a directory that doesn't have an
`assets/` folder — while `./assets/` is the correct relative path. Vite gave
no build warning; the symptom was just a missing background image and no
hashed file in `dist/assets/`. If you add more `url()` references in
`index.css`, remember it lives at `src/index.css`, not inside a subfolder —
relative paths to `src/assets/*` are `./assets/...`, not `../assets/...`.

## Verification done

- `npm run build` — clean, no errors, ~110KB gzipped JS.
- Playwright (headless Chromium) smoke test: loads the page, scrolls through
  the full page (needed for ScrollTrigger reveals to fire — a straight
  `fullPage` screenshot without scrolling will show everything blank, that's
  expected GSAP ScrollTrigger behavior, not a bug), flips a work card,
  checks `console --errors`, screenshots desktop (1440×900) and mobile
  (390×844). All clean, no console errors, mobile layout stacks correctly.
- Did not test on a real device or with a real screen reader — only
  automated accessibility attributes (aria-*, semantic HTML, focus-visible
  outlines) were verified, not manually audited with e.g. VoiceOver.

## What's left

1. **Deploy** — pick Vercel/Netlify/GitHub Pages, connect a repo (this
   project isn't a git repo yet — nothing has been committed), and suggest a
   custom domain.
2. **Contact details** — double-check phone/email/handles are still current
   (they matched the deck's last page as of this build, unchanged from the
   original brief).
3. Consider running a Lighthouse pass and a real screen-reader pass before
   calling this fully production-verified.

Done since the last pass: hammock photo + real paper-texture background
(cropped from the Canva cover) are now layered into the Hero section —
see the asset table above and `Hero.jsx`/`index.css` `#hero` rules.
