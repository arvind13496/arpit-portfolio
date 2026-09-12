# Build prompt: Arpit Lakhani — "DROP 01"

> Paste everything below the rule into Fable as a single message. It is a
> parallel direction to the zine in `docs/BRIEF.md`, built for side-by-side
> comparison — not a replacement. Fill the four `<<FILL:...>>` tokens in §2.2
> before sending, or leave them and accept visible placeholders in the build.

---

Build a single-page portfolio site for Arpit Lakhani.

You are the designer and the engineer. Make the aesthetic calls yourself — the
laws in §4 and §5 are the constraints, not a style to execute politely. Where
§4 leaves a choice open, choose, and say what you chose in §11.

## 1. Deliverable

A runnable Vite + React + Tailwind project, not a single pasted file.

- React 19, Vite, **Tailwind CSS v4** (CSS-first config via `@import "tailwindcss"`
  and `@theme` in one stylesheet — no `tailwind.config.js` unless you need a
  plugin, and say so if you do).
- No component library, no CSS-in-JS, no animation library unless you justify it
  in §11. `prefers-reduced-motion` is respected wherever you do animate.
- Content lives in `src/data/*.js` and sections render from it. Copy edits must
  cost ten lines, not a file rewrite.
- Ship: every source file with its full path, `package.json`, the Tailwind entry
  stylesheet, `index.html`. It must run on `npm install && npm run dev` with zero
  further edits and zero missing imports.

## 2. The subject — real content, and the rule about it

**Do not invent any fact about this person.** Not a date, not a metric, not an
employer, not a product name, not a deal size, not a testimonial. Everything
factual in the build traces to §2.1–§2.4 below or is rendered as a visibly
unfinished token (see §2.5). This is a portfolio a real person will send to real
employers; a fabricated career is worse than an empty slot.

### 2.1 Who he is — both halves, and the collision is the point

- **Product Manager, Government and Institutional Banking, ICICI Bank.** The day job.
- **Copywriter, foley artist, vocalist, sneakerhead.** The craft.
- SCMHRD alumnus. Based in Mumbai.

Do not resolve this tension into one identity — it is the most interesting thing
on the page. A GIB product manager who writes spec ads for Liquid Death at night
is the thesis. Institutional banking supplies the clinical register; the
sneaker/copy practice supplies the heat. The design system in §4 is that same
collision, which is why it is mostly black, white and monospace with one
violent accent.

### 2.2 Banking career content — NOT SUPPLIED

No verified milestones, dates, product names, transaction volumes or outcomes
exist for the ICICI GIB role. Render these as §2.5 tokens:

- `<<FILL:GIB_ROLE_DATES>>`
- `<<FILL:GIB_PRODUCT_SURFACE>>`
- `<<FILL:GIB_MILESTONES>>` (expect 3–5 entries when supplied)
- `<<FILL:SCMHRD_DATES>>`

Design the components that consume these so they read correctly once real values
land — and so their emptiness is obvious now. Do not pad them with plausible
banking language.

### 2.3 The spec copy — eight pieces, verbatim

All eight are **self-set briefs, not shipped client work.** Label them that way
somewhere the visitor cannot miss it. No client listed here hired him.

Each piece has a format, a client, the brief he set himself, and his copy. Set
the copy as real selectable text at reading size. Never as an image.

1. **Liquid Death** — 404 page.
   Brief: Make an error 404 page for Liquid Death.
   Line: "THIS PAGE IS DEAD, BURIED."
   Copy: A graveyard scene — two headstones spell 404, a skull half-buried,
   moonlit sky. "Click here to go back to our thirst-murdering products."
   *This is the strongest line on the site. Set it at cover scale.*

2. **Mailchimp** — cold email.
   Brief: Write a cold email from Mailchimp to a D2C founder who runs everything
   on Instagram and has never sent a marketing email.
   Line: "Put a foot into the doors of your customers' inbox."
   Copy: Are your business decisions left on the whimsy of the algorithms? Take
   control of your visibility, reach out to your customers! With Mailchimp's
   ever-intuitive mailing platform, you're always one step closer to your customers.

3. **Duolingo** — full metro-coach wrap.
   Brief: Write a full metro-coach wrap for Duolingo.
   Lines: "Jitni der scroll karne me waste kiya, utni der me French me ask out
   karna seekh jaate. Anyways, your loss." · "Duo ko sirf HOOT HOOT hi nahi,
   slackers ke saath BRUTE hona bhi aata hai." · "Aaj ka lesson complete nahi
   kiya? Aa jau kya mai apni pe???"
   *Hinglish is deliberate. Do not translate, gloss or correct it.*

4. **The Economist** — billboard.
   Brief: One line, on a flyover, read in 3 seconds at 60kmph. No subhead, no
   explanation.
   Line: "Make them mean it when they say 'great speaking with you.'"
   *One line only. Do not add a subhead — the brief forbids it.*

5. **Mad Ad Woman** — Instagram ad, long copy.
   Brief: Write an ad to sell the 'Mad Ad Woman' copy batch. Find insights only
   someone who's been through it could know, as a single story with long copy.
   Copy: "Copywriting is a creative task, and creativity is subjective. Then how
   do you know whether your copy is good or bad?" — breaks down what makes copy
   objectively good, then: "DM to get more details and sign up for the next copy batch."
   Hero line: `<<FILL:MADADWOMAN_LINE>>` — he has not written a pull line for this
   piece. Do not write one for him.

6. **Diesel** — cinema ad, 45–60s.
   Brief: Playing right before a Friday-night blockbuster. The crowd just paid
   ₹600 for popcorn — one gloriously dumb, joyful decision already made. Diesel
   celebrates brave-stupid over safe-smart. Reckless on purpose.
   Line: "Be Bold. Be Stupid."
   Copy: 5-panel storyboard — BMX ride through the city → denim & bike detail →
   skateboard jump → campus walk → rock concert finale.

7. **The Whole Truth** — insert card.
   Brief: Write the little insert card inside someone's first-ever Whole Truth order.
   Copy: "The Whole Truth is that this product is not the sweetest out there. And
   it's certainly not the cheapest. It takes conscious effort to prioritise one's
   health — and we're proud of you for doing that."

8. **Dove** — long-copy magazine ad.
   Brief: Write a long-copy magazine ad for Dove about real skin.
   Line: "This is what your skin is supposed to look like."
   Copy: (a mirror, reflecting nothing but skin.) "...Dove is here to change that.
   Beauty isn't a goal to achieve, it's a feeling. Because this is the only way
   your skin is supposed to look like."

### 2.4 The rest of the real content

**Origin, 2016.** His brother made his Instagram account and showed him the page
of "Sneakers N Stuff", a Sweden-based sneaker store. They'd just posted the return
of the OG AJ1 Bred. His line: sneakers have inspired him to create — ad campaigns,
cold emails, metro wraps, even foley sound design. Chasing a good drop and chasing
a good headline take the same kind of obsessive brain.

**Foley artist.** Entire foley of the Tenet final sequence — footsteps, falls,
carrying, action sequences. Video: https://youtu.be/w8C73Huj_iE

**Vocalist.** Studio session. Video: https://youtu.be/m-SW2KQaQ1Y

For both: label what it is, where it plays and how long it runs. "Watch the full
video here" is not a label. Runtimes are not supplied — token them per §2.5 rather
than guessing.

**The rule** (his thesis line, give it a full spread): "I wouldn't have a problem
walking a mile in someone else's shoes. The shoes must be cool tho — and my size
(UK 10 if you're wondering)."

**The closet.** Nine pairs, numbered 01–09 continuous. Seven in rotation, two
gone — the numbering runs unbroken across both states so the gap is visible.
Render "gone" as a real absence (empty crate, ghosted outline, cut silhouette).
Do not substitute stock photography for the two he no longer owns.

| # | Brand | Model | Colourway | State |
|---|---|---|---|---|
| 01 | adidas Originals | Continental 80 | Vegan | rotation |
| 02 | Nike | Blazer Mid '77 Pro Club | Light Bone / Sail / Sesame / Pecan | rotation |
| 03 | Puma | Slipstream | — | rotation |
| 04 | Nike | Zoom Vomero 5 | Metallic Silver / University Red | rotation |
| 05 | echos above | Away Day | Forest Green | rotation |
| 06 | Nike | Air Max Dawn | — | rotation |
| 07 | Comet | Aeon v2 | Mango Chilli | rotation |
| 08 | Fila | Montana Plus | Red / Black | gone |
| 09 | Converse | Chuck 70 | — | gone |

Model name in the display face; colourway in mono caps, exactly as a shoebox
label sets it. Sneakerheads read a colourway the way a designer reads a Pantone
number — so set it like a spec value, not a caption. "Fila Montana Plus" and
"echos above Away Day" are unverified; mark them, do not silently correct them.

**Contact.** arpitlakhani16@gmail.com · Instagram @lakhaniarpit · LinkedIn
arpitlakhani · Mumbai. No phone number — do not add one, do not invent one.
Pre-fill the mailto subject. External links get `rel="noopener noreferrer"`.

### 2.5 Unfinished content is rendered, not filled

Three content sets are genuinely empty and are his to write: his per-piece
self-critique lines, his one line about each pair in the closet, and everything
tokened `<<FILL:...>>` above.

Build the slots. Render each as an obviously unfinished token — visible, styled
as a placeholder, never mistakable for shipped copy (e.g. `[ SELF-CRITIQUE PENDING ]`
in accent-on-black mono). Do not write these in his voice. Do not quietly omit
the slot either: if the design needs the critique margin, the empty margin must
still read as a deliberate empty margin.

## 3. Direction

**High-contrast digital brutalism, streetwear anti-design.** Reference points:
Off-White's quotation marks and industrial labelling, Balenciaga's flattened
institutional typography, Swiss grid discipline used aggressively rather than
politely, terminal and spec-sheet vernacular.

Present the portfolio as a **timed product drop**, not a résumé — an archival
release with a drop number, a manifest, lot numbers, an issue date. The banking
half supplies the paperwork register for that framing: reference numbers,
value dates, instrument labels, settlement language. Use that vocabulary as
structure, not as decoration.

**On the "3% rule":** Virgil Abloh's rule was about changing an existing object
by three percent — not about using three percent accent colour. Apply the real
version: take a recognised institutional form (a bank statement, a wire transfer
advice, a term sheet, a compliance stamp) and alter it minimally so it reads as
both the original and a hijacking of it. The joke only lands if the source form
is rendered straight enough to be recognised.

**Meta-irony, capped.** Literal quoted labels on functional UI ("SCROLL", "LINK",
"SUBMIT") are in scope, but they are a device and devices saturate. Hard cap in
§5. The quoted string is never the accessible name — `aria-label` carries the
clean text.

## 4. Design system — resolved

No either/ors. These are decided; §11 is where you tell me if you overrode one.

**Colour.** Three tokens, one accent.
- `--paper: #FFFFFF` pure white
- `--ink: #000000` stark black
- `--acid: #CCFF00` the single accent

Verified contrast, so there is no argument about it later:

| Pair | Ratio | Verdict |
|---|---|---|
| `#000000` on `#FFFFFF` | 21.00:1 | fine for anything |
| `#CCFF00` on `#000000` | 17.87:1 | fine for anything |
| `#CCFF00` on `#FFFFFF` | **1.18:1** | invisible — never text, never an icon, never a focus ring |

So the accent law: **acid green only ever sits on black.** On white it may exist
only as a solid fill behind black text, never as the foreground. This is a
constraint that makes the design better — it forces the accent into black
inversion blocks, which is exactly the Off-White move.

**Type.** Two families, both on Google Fonts. Helvetica Neue is not web-available
and is not an option; do not reference it in `@font-face`.
- **Display:** Inter, weights 700–900, uppercase, tight tracking (negative at
  large sizes), line-height 0.85–0.95. Stack: `Inter, "Helvetica Neue", Arial, sans-serif`.
- **Body, data, labels, everything else:** JetBrains Mono, 400/700. Stack:
  `"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace`.

Monospace carries the body copy — that is the spec-sheet voice and it is correct
here. It also means measure discipline matters more, not less: cap running text
at 65–75 characters.

**Structure.** Exposed grid, visible as rules rather than implied. Black borders
1px–4px, chosen per role rather than stamped uniformly. Zero border-radius. Zero
shadows. Zero gradients. Flush-left everything; centre only where you can defend
it in §11.

**Motion.** Aggressive and cheap: hard state swaps, instant inversions, mono
label glitches, marquee tickers. No easing that reads as "web polish". Nothing
fades in on scroll. Under `prefers-reduced-motion` it all stops and the page
still reads.

## 5. Hard rules — mechanically checkable, and I will check them

Write these as a `scripts/check.sh` that greps the source and exits non-zero on
violation, then make it pass. A rule you cannot grep is a rule you will break.

1. No non-zero border radius. No `rounded-*` except `rounded-none`.
2. No `shadow-*` (except `shadow-none`), no `drop-shadow`, no `text-shadow`.
3. No gradients: no `bg-gradient-*`, `from-*`, `via-*`, `to-*`, no `linear-gradient`.
4. Exactly two font families load. No unused `@font-face`, no unused Google Fonts axis.
5. The accent never renders text, border or outline against white. Grep for
   accent-on-white class pairings and fail them.
6. The accent covers no more than ~3% of painted surface on any viewport. State
   your measurement method in §11.
7. Every paragraph has an explicit line-height between 1.5 and 1.7.
8. No emoji anywhere in the DOM. Icons are drawn (inline SVG) at the same
   weight as the type.
9. Every `<img>` has explicit `width`, `height` and `alt`. Decorative images get
   `alt=""` plus `aria-hidden="true"`.
10. No colour literal outside the `@theme` token layer. `rgb()`/`color-mix()`
    off a token is fine.
11. At most **six** quoted meta-irony labels in the entire DOM, and none of them
    is an element's accessible name.
12. No copy exists only inside an image. Every word he wrote is selectable text.
13. Content is visible in CSS by default. Nothing's visibility depends on an
    animation completing or an observer firing. If the JS animation layer throws,
    the page still reads top to bottom.
14. At 390px wide, the nav occupies one row, 56px maximum, and the page body
    does not scroll horizontally at any width from 320px up.
15. **No unsourced fact.** Every factual claim about Arpit traces to §2 or renders
    as a `<<FILL>>`/placeholder token. Grep for the token pattern and print what
    is still outstanding.

## 6. Invent 2–3 components — the brief, not the answer

Collide institutional banking form with streetwear object culture. Two or three,
built properly, beats five sketched. Each must do a real job for a real visitor —
a component that only performs the aesthetic is dead weight.

Directions worth considering (take them or beat them):
- Career history as a **thermal receipt** — reference numbers, value dates, a
  torn perforation, a total. Once §2.2 lands it holds real milestones; today it
  holds tokens and should look like a receipt printed on an empty till.
- The closet as a **settlement manifest** or custody register — nine lots, two
  marked disposed, colourways as instrument identifiers.
- Spec work as a **drop manifest** with lot numbers and a self-set-brief
  disclosure, since §2.3 requires the spec status to be unmissable.
- A ticker that streams something real — the nine-pair closet, the eight briefs —
  rather than invented transaction volume. A ticker of fabricated numbers breaks §2.

Hover and focus states should be aggressive but never destroy usability: inversion,
label swaps, hard offsets. Keyboard focus must remain obviously visible — and per
§4 the focus ring cannot be acid on white.

## 7. Accessibility floor — not negotiable, not a later pass

Brutalism is not an excuse; most of this costs nothing.

- Skip link. Visible `:focus-visible` on every interactive element.
- One `<h1>`. Real heading order. `lang` set. Written meta description.
- Semantic landmarks. Real buttons and links, not clickable divs.
- `aria-pressed`/`aria-expanded` where state exists. `aria-label` free of quote
  gimmicks.
- Body text ≥16px despite the mono. Monospace at small sizes is where brutalist
  sites actually fail people.
- Full keyboard pass: every interactive element reachable, in order, visibly focused.

## 8. Performance budget

Total transferred page weight under 600KB. Images WebP or AVIF, served at ~2x
their box, `loading="lazy"` below the fold. Fonts: `display=swap`, subset to
Latin, and only the weights §4 names. No web font loaded for a single heading.

## 9. Scope

Build what §1–§8 specify, completely. If you hit something genuinely blocked,
finish everything else and say exactly what you left and why.

Do not add features beyond this brief — no blog, no dark-mode toggle, no CMS, no
analytics, no contact-form backend. Note extras as suggestions at the end
instead of building them. Where the brief is ambiguous, take the reading the
wording most directly supports, implement that one, and state the assumption;
don't build for both readings. Keep scratch checks out of the repo apart from
`scripts/check.sh`.

Where you write any prose of your own — labels, alt text, section furniture —
remove mannered prose. Say the thing literally rather than reaching for a
metaphor. His copy is the writing on this page; yours is plumbing and should
read like it.

## 10. Done means

1. `npm install && npm run dev` runs clean. No missing imports, no console errors.
2. `npm run build` succeeds.
3. `scripts/check.sh` passes all fifteen rules of §5.
4. A keyboard-only pass reaches every interactive element with a visible focus state.
5. 390px and 1440px both hold, with no horizontal scroll.
6. Every outstanding `<<FILL>>` token is listed for me, so I know exactly what
   Arpit still has to write.

## 11. What to hand back

**Code first.** Every file, full paths, complete. Do not précis it or leave
"// ... rest unchanged".

Then, and briefly — no more than 400 words total, prose not bullet theatre:

- **Decisions:** the components you invented and why those, any §4 default you
  overrode, how you measured the 3% in rule 6.
- **Verification:** the actual output of `scripts/check.sh`, plus what you tested
  by hand versus what you could not test in this environment. Say plainly what
  you did not verify. Do not write a self-audit that certifies your own work as
  passing — the script's output is the evidence, and an honest "I could not check
  X here" is worth more than a confident claim.
- **Outstanding:** the `<<FILL>>` list from §10.6.
