# Editing the copy

Every word on either site lives in a data file. You do not need to open a
component to change what the page says.

## DROP 01 (the neo-brutalist build)

| File | What it holds |
| --- | --- |
| `drop-01/src/data/identity.js` | Name, day job, craft list, the statement of account rows, the off-the-books rows, the rule, the origin story and its KYC fields, the résumé link |
| `drop-01/src/data/work.js` | The eight briefs: client, format, the brief itself, the headline, the body copy, the button label |
| `drop-01/src/data/crafts.js` | Foley and vocals: what it is, where it plays, the link |
| `drop-01/src/data/closet.js` | The seven pairs: brand, model, colourway |

## The zine (the original build)

Copy lives in `src/data/`. Same rule: edit the data, not the markup.

## How to make an edit in the browser

1. Open the file on github.com and press the pencil.
2. Change the text between the quote marks. Leave the quotes, the commas
   and the square brackets exactly where they are.
3. Commit. If the repository requires a pull request, GitHub offers to
   open one for you.

## What happens if you break it

Nothing reaches the live site. The text is inside JavaScript files, so a
missing quote is a syntax error: the Check workflow fails, the Pages
deploy never runs, and the published site stays on the last good version.
You get an email with a red X, and the fix is to correct the line and
commit again.

## Two things to watch

- **Apostrophes.** Type the curly ones — `’` not `'` — in anything a
  reader sees. A straight apostrophe inside a single-quoted string also
  breaks the file. If a line needs an apostrophe, wrap the string in
  double quotes.
- **The FILL slots.** `null` values render on the page as a visible
  pending marker, on purpose. Replacing `null` with real text removes the
  marker.
