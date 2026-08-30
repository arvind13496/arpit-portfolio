# Arpit Lakhani portfolio: build brief

Spec for a rebuild of an existing single-page portfolio site for Arpit Lakhani, a
copywriter based in Mumbai. This document is the source of truth for direction,
structure and sequencing. Read it fully before writing code.

Save this file in the repo at `docs/BRIEF.md`. Derive a short `CLAUDE.md` from
sections 2, 3 and 4 so future sessions load the rules without loading the whole brief.

---

## 1. Context

**Audience.** Two buyers, weighted roughly equally.
- Agency creative directors hiring a junior to mid copywriter. They want range and
  evidence of judgment.
- Founders and marketing leads hiring a freelancer. They want a category, a service,
  availability and a way to start a conversation today.

**Current state.** A hand rolled single page site, roughly 125 CSS rules, no build
step, no component structure, no version control. It works, and its problems are
structural rather than cosmetic.

**Verified facts about the current build.** These were measured, not guessed. Do not
re-derive them.

| Thing | Measured |
|---|---|
| Page height | 5606px, hero 851, about 516, origin 810, work 1330, beyond 740, doodle 649, contact 550 |
| Work section starts at | 2252px |
| Fonts actually rendering | Permanent Marker, Kalam, Patrick Hand, Caveat |
| Dead webfont | `Cosmos Oracle`, 6 `@font-face` declarations, 0 elements using it |
| Body copy | `#about p` at 22px with `line-height: normal`, measure 453px |
| Spec cards | 335x300, back has `overflow:auto`, mockups up to 800x1446 inside it |
| Full size viewer | None. No `<dialog>`, modal or lightbox anywhere in the DOM |
| Media queries | Three total: `max-width:700px` x2, `max-width:760px` x1. None target `nav` |
| Nav | `position:sticky`, `flex-wrap:wrap`, 76px tall, six pills, no mobile treatment |
| Centred blocks | 17 of 44 section level blocks, including every section heading but one |
| Border radii | 63 elements |
| Shadows | Nav pills and buttons use `3px 3px 0` offset drop shadows |
| Images | 13 files, 1411KB total, largest 170KB, `loading` attr set on 0 of them, 1 missing alt |
| Social meta | 3 Open Graph tags, 0 Twitter card tags |
| Left in the DOM | A "build notes" panel addressed to the site owner |

**Keep all of this. It is already right.** Skip link, `:focus-visible` outlines,
a `prefers-reduced-motion` block, real aria-labels on interactive elements,
`aria-pressed` state, a single `h1`, `lang` set, a written meta description,
`rel="noopener noreferrer"` on external links. Do not regress any of it.

---

## 2. Direction

**Sneaker culture zine.** Public, cheap, loud, hard edged, asymmetric. Photocopied
and stapled, not scrapbooked.

The current build is a scrapbook: warm cream ground, ruled notebook paper, rounded
corners, offset shadows, everything centred, four handwriting faces. Every one of
those pulls away from the target.

What survives from the current build: tape as a collage element, photographic crops,
marker scrawl, and a single brick red spot colour. That vocabulary is already zine
vocabulary. What changes is the ground it sits on, the type doing the talking, and
the alignment.

Reference points: Sneaker Freaker, photocopied fanzines, Nike's Trade Gothic Bold
Condensed era, off register spot colour printing. Not Muji, not Moleskine, not
Pinterest scrapbooking.

---

## 3. Design system

### Colour: three, not five

```
--paper   #E5E1D6   newsprint grey-warm  (currently #efe4c9, too yellow)
--ink     #16140D   near black
--red     #C8391F   the only accent, used as a single spot ink
```

Retire `--mustard`, `--yellow` and `--kraft` from all component styles. `--teal`
survives only as the `:focus-visible` outline colour. Photography carries every
other colour on the page. A zine is printed in one or two inks and that constraint
is the look.

### Type: three roles, one hand face

- **Display.** Heavy condensed grotesque, uppercase, tight. Archivo variable with the
  `wdth` axis at 62 to 75 and `wght` 800 to 900 gets close to Trade Gothic Bold
  Condensed. Line height 0.92, letter spacing near zero.
- **Body.** Same family at normal width, 17 to 18px, line height 1.6, measure capped
  at 68 characters.
- **Utility.** One monospace for briefs, credits, labels, page numbers and nav. This
  is the spec sheet voice.
- **Annotation.** Permanent Marker survives, used only as scrawl over images:
  circled words, arrows, margin notes. Never for body, headings or UI.

Remove Kalam, Patrick Hand and Caveat entirely. Delete the six unused `Cosmos Oracle`
`@font-face` declarations, or promote it to the utility role, but decide rather than
leaving it downloading for nothing.

### Texture

Photocopy grain replaces ruled lines. Apply grain once at the root, not per section.
Secondary images render duotone in ink and paper; full colour is rationed to hero
shots and work mockups so that colour becomes an emphasis tool. One or two headlines
print off register in spot red. Twice reads as press. Everywhere reads as a filter.

### Edges

Zero border radius globally. No box shadows. Hard cuts, torn edges via SVG mask, tape
holding things down. Nothing on a zine page is rounded, because nothing on a zine page
was rendered. It was cut out.

### Grid and alignment

A strict 12 column grid underneath so that breaking it reads as intentional. Headlines
flush left. Full bleed image blocks alternating with tight text columns. Stop centring.

### Motion

Print logic, not web logic. Hard cuts and scroll snap between spreads rather than
smooth parallax. A small photocopy jitter on hover instead of easing. The existing
`prefers-reduced-motion` block already covers the exit; keep it.

### Naming

"Portfolio Journal" is scrapbook language and appears in the page title, the nav and
the footer. Replace with issue language: Issue 01, spreads, page numbers running in
the margin. This also hands the nav its missing active state.

---

## 4. Hard rules

Checkable, and worth grepping for before calling any phase done.

1. No element has a non zero `border-radius`.
2. No element has a `box-shadow`.
3. Fewer than three elements on the page are centre aligned, and each is deliberate.
4. Exactly three font families load, plus Permanent Marker. No font downloads unused.
5. Every paragraph has an explicit `line-height` between 1.5 and 1.7.
6. No copy exists only inside an image. Every word Arpit wrote is selectable text.
7. No emoji in the DOM.
8. No scroll position shows a viewport of empty ground.
9. At 390px wide the sticky nav occupies one row, 56px maximum.
10. Every image has explicit width, height and alt.
11. No hex colour literals outside `:root`. Every colour is a token; only the
    palette definitions in `:root` hold hex. (Functional `rgba()`/`color-mix()`
    are fine.)
12. No element's visibility may depend on an animation completing. Content is
    visible by default in CSS; any element hidden by JavaScript must be
    restored by that same code's cleanup. If the animation layer fails, the
    page still reads.

---

## 5. Content architecture

Eight movements, alternating personal and work the whole way down, ending on a
personal beat that hands into the ask. This ordering is fixed by the client.

| # | Type | Section | Job |
|---|---|---|---|
| 01 | Personal | Cover | Name, category and voice in six seconds |
| 02 | Work | Fast work | Prove he can write before asking for patience |
| 03 | Personal | The obsession | Personality, and why this is a zine |
| 04 | Work | The long copy | Range and judgment. The creative director block |
| 05 | Personal | The other shoes | Range beyond writing |
| 06 | Work | The commercial close | The founder block |
| 07 | Personal | The closet | Payoff of the metaphor, plus nine more pieces of copy |
| 08 | Contact | Sign off | Convert both audiences |

### Spec piece allocation

There are eight spec pieces. The allocation is the argument: movement 04 targets
creative directors, movement 06 targets founders, so the last work anyone sees is the
work they can buy.

**Movement 02, fast work.** Both read in three seconds, so they cost the visitor
nothing.
- The Economist, billboard. Brief: one line, on a flyover, read in 3 seconds at
  60kmph. No subhead, no explanation.
- The Whole Truth, insert card inside a first order.

**Movement 04, long copy.** One spread each, live text at reading size.
- Mad Ad Woman, Instagram ad. Long copy, single story.
- Dove, magazine ad. Long copy about real skin.
- Diesel, cinema ad. 45 to 60 seconds, brave-stupid over safe-smart.
- Liquid Death, 404 page. Brief: make an error 404 page for Liquid Death.
  The line "THIS PAGE IS DEAD, BURIED." is the best on the site. Set it at cover scale.

**Movement 06, commercial close.** Things a founder can price.
- Duolingo, full metro coach wrap.
- Mailchimp, cold email to a D2C founder who has never sent a marketing email.
  Flagged for rewrite or removal.

### Movement 03 content

The 2016 origin story, already written: the brother, the Instagram account, Sneakers N
Stuff, the OG AJ1 Bred, and the line about chasing a good drop and a good headline
taking the same obsessive brain. Treat as one full bleed photographic spread with text
in narrow columns over it. Do not build three stacked bordered cards; that is the most
scrapbook layout on the current site.

Hold "the rule" back for movement 05.

### Movement 05 content

The Tenet foley reel, the vocalist session, and "the rule" as a full spread pull quote:
walking a mile in someone else's shoes, the shoes must be cool and UK 10. That line is
the thesis of the site and currently sits third in a timeline nobody reaches.

### Movement 07 content: the closet

Replaces the doodle pad, which is being deleted. An inventory spread in two states.

**In rotation, 7 pairs, full colour photography:**
1. adidas Originals Continental 80 Vegan
2. Nike Blazer Mid '77 Pro Club, Light Bone / Sail / Sesame / Pecan
3. Puma Slipstream
4. Nike Zoom Vomero 5, Metallic Silver / University Red
5. Echos Above Away Day, Forest Green
6. Nike Air Max Dawn
7. Comet Aeon V2, Mango Chilli

**Gone, 2 pairs, rendered as an absence:**
8. Fila Montana Plus, Red / Black
9. Converse Chuck 70

Rules for this section:
- Numbering runs 01 to 09 continuous across both states so the gap is visible.
- In rotation renders in full colour from a real photograph. Gone renders as an empty
  box, a cut out silhouette or a ghosted outline. Do not fake the two he no longer
  owns with stock photography.
- Colour therefore means "still here", which puts the three colour rationing rule to
  real work instead of leaving it a style note.
- Model in the display face. Colourway in mono caps, exactly as a box label sets it.
  Sneakerheads read a colourway the way a designer reads a Pantone number.
- Each entry carries one line of copy from Arpit: where he got it, what it cost him,
  what it replaced. Nine one liners about objects he owns is a tighter copy test than
  most spec briefs, and it reads as personality rather than portfolio.
- Capitalisation above has been tidied for setting. Names and colourways are as
  supplied by the client and need verifying before they go into type.

---

## 6. Build sequence

Four phases. Each ends in something reviewable. Do not start a phase before the one
above it is done, or work gets rebuilt.

### Phase 0: make the project cheap to change

Nothing visible changes. Everything after this depends on it.

- **T00 Version control.** `git init`, `.gitignore` for node_modules, .DS_Store, dist,
  build, local env files. Commit as "baseline: portfolio as built". Push to a public
  GitHub repo. Note that the owner's phone number is hardcoded in the source and a
  public repo puts it in history permanently; confirm before committing or swap for a
  placeholder.
- **T0a Extract content from markup.** Move the eight spec pieces, the timeline entries
  and the nine sneakers into a data file, and render sections from it. Right now every
  content edit costs a full file rewrite. After this it costs ten lines. This is the
  single largest efficiency gain in the project and it must happen before the
  restructure, because the restructure multiplies the sections.
- **T0b Remove cruft.** Delete the build notes panel and button. Delete the unused
  `Cosmos Oracle` declarations.

### Phase 1: foundations

Nothing moves. Everything changes look. One screenshot to judge.

- **T01 Token set.** New three colour palette per section 3. `--shadow: none`. Global
  `border-radius: 0` and remove all 63 existing radii, including the nav pills'
  `8px 8px 0 0` and the `3px 3px 0` offsets. Add root level grain.
- **T02 Type system.** Load Archivo variable with the `wdth` axis. Three roles plus
  Permanent Marker per section 3. Remove Kalam, Patrick Hand, Caveat. Delete every
  `line-height: normal` on a text block.
- **T03 Unalign and densify.** Remove `text-align: center` from every section heading
  and body block. Establish one spacing scale. Kill the 250 to 400px unmanaged gaps;
  in a zine, empty ground reads as a printing error. Where a gap is needed, fill it
  with an annotation, a taped in fragment or a margin note.
- **T04 Nav as issue contents.** Renumber sections as spreads 01 to 08 with margin page
  numbers. Nav becomes a contents list in mono: a flush line or fixed left rail on
  desktop, a one line horizontal scroller or a collapse under 640px on mobile. Add
  scroll spy so the current spread is marked. Retitle away from "Portfolio Journal".

**Phase 1 is done when** it reads as a zine at a glance, and hard rules 1 to 5 and 9
all pass.

### Phase 2: make the work readable

This is the phase that decides whether the site works. Everything else is secondary.

- **T08 Copy becomes live text.** Author every spec piece's copy as real selectable HTML
  at reading size. Retire the flip card.

  The pattern that landed is **index-plus-overlay**, not inline spreads. On the page each
  piece is a full-width index entry on the 12-column grid, flush left: a mono format and
  client label, then the line as the hero in Archivo condensed caps at cover scale, live
  selectable text, and an affordance that reads as interactive. The full case study lives
  in a native `<dialog>` opened with `showModal()` (top layer, backdrop and Escape for
  free): the brief in mono, the full copy at a 60 to 70 character measure, the mockup at
  full size, and a margin slot for the T09 self-critique. The overlay is focus-managed
  (focus in on open, back to the trigger on close), body-scroll-locked, deep-linkable
  (`#work/<slug>`, opening pushes a history entry so the back button closes it and a
  shared link opens the piece), full screen on mobile and width-capped on desktop, with
  prev/next controls to move between pieces. Under `prefers-reduced-motion` there is no
  slide-in, and per hard rule 12 the line and label stay readable if the dialog never
  opens.

  **Build this for The Economist piece only, then stop and get sign off on the pattern
  before applying it to the other seven.** Reviewing one piece instead of eight is where
  the time goes. The Economist entry drops its second copy line ("Nice talking to you →
  Pleasure doing business with you") — the brief asked for one line, no subhead.

- **T09 Judgment layer.** Each of the four long copy pieces carries one line of self
  critique: what he would cut, what did not work. Set it as a marker annotation in the
  margin so it reads as a note to himself, not a disclaimer. Label the section honestly
  as self set briefs and say why. If shipped client work exists, it leads movement 02
  and the spec pieces move behind it.

**Phase 2 is done when** every word Arpit wrote can be selected and copied, no text is
legible only by scrolling inside a card, and every mockup can be viewed at native size.

### Phase 3: restructure

- **T05 Reorder into the braid.** New section order per section 5. Split the single
  `#work` section into three: two pieces, four pieces, two pieces. Move "the rule" into
  movement 05. Delete the doodle section.
- **T06 Cover.** Full bleed, wordmark in condensed caps at cover scale, flush left, one
  strong photograph, spot red. Rewrite the positioning line so it carries a category and
  a service alongside the voice; the current line, "copywriter, sneakerhead and
  professional over-thinker of headlines", is three quarters personality and no
  information. Drop the "obsessed with sneakers" badge, which restates the line beside
  it.
- **T07 Movement 03 photographic.** Full bleed image spread, text in narrow columns,
  marker annotation on top. Cut the stacked timeline cards.
- **T11 The closet.** Build per section 5. Delete `#doodle`, its canvas, the four pen
  swatches and the clear button.

  The doodle pad was the only thing on the site a visitor could make and send. The
  closet must absorb that job: let someone pick the pair they would walk a mile in and
  have that choice pre-fill the mail subject in movement 08. Cheaper alternative, an
  "ask me about this pair" link per entry that pre-fills the same mail.

- **T10 Label the videos.** Replace both "watch the full video here" links with real
  labels: what it is, where it plays, how long it runs. Replace the foley thumbnail;
  the current frame is a dark unreadable crop. Consider inline poster and play rather
  than sending people off site at the moment they are interested.
- **T12 Harden the close.** Pre-fill the mailto subject. Add one line of availability,
  and clarify what "Mumbai (currently)" means for remote hiring. Add a downloadable one
  pager for creative directors who forward rather than bookmark. Replace the four emoji
  with drawn icons at the same weight as the rest of the page. Accept the pair selection
  handed over from T11.

### Phase 4: ship

- **T13 Image pipeline.** WebP or AVIF. `loading="lazy"` below the fold. Explicit width
  and height on every image. Alt text on the one missing it. Serve at roughly 2x the
  box occupied; several are currently 3x or more. Apply the duotone treatment at build
  time rather than as a CSS filter so payload drops with it.
  **Target: under 600KB total, down from 1411KB.**
- **T14 Pre launch sweep.** Complete the Open Graph set, add Twitter card tags, produce
  a 1200x630 share image with the wordmark in spot red. Verify phone, email and handles
  are current. Confirm every item in the keep list from section 1 still holds. Keyboard
  only pass reaching every interactive element with a visible focus state.

---

## 7. Blocked and unresolved

Do not guess these. Ask.

1. **Photography.** The direction is image hungry and there are currently 13 images,
   mostly portraits. Movement 03 and movement 07 both need real photography. The good
   news is that movement 07 gives a concrete shoot list: seven pairs the client owns,
   one wall, one afternoon, consistent light because it is a single session. Those
   frames also feed movement 03. **Blocks T07 and T11.** If the shoot is not happening,
   say so and the direction recalibrates to a type led zine: heavier display, more spot
   red, photography used sparingly.
2. **Shipped client work.** Unknown whether any exists. All eight current pieces are
   spec. **Blocks T09**, and changes whether movement 02 leads with spec or real work.
3. **Sneaker names.** Verify every model and colourway before setting them in type.
   "Echos Above Away Day" is the one most worth confirming.
4. **Owned or wanted.** The seven pair list was described as the client's closet but
   phrased ambiguously. Built here as owned. If it is a grails list, movement 07 is a
   different section.
5. **Piece ranking.** The allocation in section 5 was made on format and commercial
   legibility, not on the quality of the writing, because the copy is currently locked
   inside images. If one of the long copy pieces is clearly his best, it should lead.

---

## 8. Working protocol

- One ticket per session. Do not batch.
- Small commits with the ticket ID in the message, for example `T02: type system`.
  Push after each. Review happens by reading diffs, so many small commits are much
  cheaper to review than one large one.
- Targeted patches, never full file rewrites, once phase 0 is done.
- Stop and ask at the two sign off points: end of phase 1, and after the single
  Economist piece in T08.
