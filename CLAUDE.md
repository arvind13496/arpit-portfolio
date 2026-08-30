# CLAUDE.md — Arpit Lakhani portfolio

Working rules for this repo. Full spec is in `docs/BRIEF.md`; read it before any
structural work. This file is the derived short form (brief §2–4) so a session can
load the direction and constraints without the whole document.

The site is a React + Vite single page. Content lives in `src/data/` and sections
render from it — edit data, not markup, for copy changes. Styling is one file,
`src/index.css`.

## Direction (brief §2)

**Sneaker culture zine.** Public, cheap, loud, hard-edged, asymmetric — photocopied
and stapled, not scrapbooked. The build being replaced is a scrapbook (warm cream
ground, ruled notebook paper, rounded corners, offset shadows, everything centred,
four handwriting faces); every one of those pulls away from the target.

What survives: tape as a collage element, photographic crops, marker scrawl, a single
brick-red spot colour. What changes: the ground it sits on, the type doing the talking,
the alignment. References: Sneaker Freaker, photocopied fanzines, Nike's Trade Gothic
Bold Condensed era, off-register spot-colour printing. Not Muji, Moleskine, or
Pinterest scrapbooking.

## Design system (brief §3)

**Colour — three, not five.**
- `--paper #E5E1D6` newsprint grey-warm (was `#efe4c9`, too yellow)
- `--ink #16140D` near-black
- `--red #C8391F` the only accent, a single spot ink

Retire `--mustard`, `--yellow`, `--kraft`. `--teal` survives only as the
`:focus-visible` outline colour. Photography carries every other colour on the page.

**Type — three roles, one hand face.**
- **Display:** heavy condensed grotesque, uppercase, tight. Archivo variable, `wdth`
  62–75, `wght` 800–900, line-height 0.92, letter-spacing near zero.
- **Body:** same family, normal width, 17–18px, line-height 1.6, measure capped ~68ch.
- **Utility:** one monospace for briefs, credits, labels, page numbers, nav — the spec
  sheet voice.
- **Annotation:** Permanent Marker, only as scrawl over images (circled words, arrows,
  margin notes). Never for body, headings, or UI.

Remove Kalam, Patrick Hand, Caveat. Delete the unused `Cosmos Oracle` `@font-face`
declarations (or promote it to the utility role — decide, don't leave it downloading).

**Texture.** Photocopy grain at the root, once, not per section. Secondary images
duotone in ink/paper; full colour rationed to hero shots and work mockups so colour
becomes emphasis. One or two headlines off-register in spot red — twice reads as press,
everywhere reads as a filter.

**Edges.** Zero border-radius globally. No box-shadows. Hard cuts, torn edges via SVG
mask, tape holding things down.

**Grid.** Strict 12-column underneath so breaking it reads as intentional. Headlines
flush left. Full-bleed image blocks alternating with tight text columns. Stop centring.

**Motion.** Print logic, not web. Hard cuts / scroll-snap between spreads, not smooth
parallax. Small photocopy jitter on hover instead of easing. Keep the existing
`prefers-reduced-motion` block.

**Naming.** Retire "Portfolio Journal" (scrapbook language). Use issue language:
Issue 01, spreads, page numbers in the margin. This also gives the nav its active state.

## Hard rules (brief §4) — grep before calling a phase done

1. No element has a non-zero `border-radius`.
2. No element has a `box-shadow`.
3. Fewer than three elements are centre-aligned, each deliberate.
4. Exactly three font families load, plus Permanent Marker. No font downloads unused.
5. Every paragraph has an explicit `line-height` between 1.5 and 1.7.
6. No copy exists only inside an image. Every word Arpit wrote is selectable text.
7. No emoji in the DOM.
8. No scroll position shows a viewport of empty ground.
9. At 390px wide the sticky nav occupies one row, 56px maximum.
10. Every image has explicit width, height, and alt.
11. No hex colour literals outside `:root` — every colour is a token (rgba/color-mix ok).
12. No element's visibility may depend on an animation completing. Content is
    visible by default in CSS; any element hidden by JavaScript must be restored
    by that same code's cleanup. If the animation layer fails, the page reads.

## Keep (brief §1) — do not regress

Skip link, `:focus-visible` outlines, a `prefers-reduced-motion` block, real
aria-labels, `aria-pressed` state, a single `h1`, `lang` set, a written meta
description, `rel="noopener noreferrer"` on external links.

## Working protocol (brief §8)

- One ticket per session. Do not batch.
- Small commits with the ticket ID in the message, e.g. `T02: type system`. Push after
  each. Review is by reading diffs — many small commits beat one large one.
- Targeted patches, never full-file rewrites, once phase 0 is done.
- Stop and ask at the two sign-off points: end of Phase 1, and after the single
  Economist piece in T08.
- §7 lists blockers marked "do not guess — ask": photography shoot, shipped client work,
  sneaker name/colourway verification, owned-vs-wanted list, piece ranking.
