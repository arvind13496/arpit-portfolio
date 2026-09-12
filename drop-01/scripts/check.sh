#!/usr/bin/env bash
# DROP 01 hard rules (brief §5), as greps. Exits non-zero on any failure.
# Runtime rules that need a browser (nav height, horizontal overflow, accent
# coverage, quoted-label count in the rendered DOM) are not here; see §11.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

CSS="src/app.css"; HTML="index.html"; SRC="src"
fail=0
pass() { printf '  ok   %s\n' "$1"; }
bad()  { printf '  FAIL %s\n' "$1"; fail=1; }
hits() { [ -n "$1" ] && printf '%s\n' "$1" | sed 's/^/         /'; }

echo "▶ build"
if npm run --silent build >/dev/null 2>&1; then pass "vite build clean"; else bad "vite build failed"; fi

echo "▶ hard rules"

# 1 — radius: zero throughout. Any rounded-* utility or non-zero border-radius fails.
h=$(grep -rnIE '\brounded(-[a-z0-9]+)?\b' "$SRC" | grep -v 'rounded-none'; grep -rnIE 'border-radius:[[:space:]]*[^0;[:space:]]' "$SRC")
[ -z "$h" ] && pass "1  zero radius" || { bad "1  radius present"; hits "$h"; }

# 2 — shadows: only the Npx Npx 0 0 shape, and only via the hard-* tokens.
h=$(grep -rnIE 'box-shadow:' "$SRC" | grep -vE 'box-shadow:[[:space:]]*(var\(--shadow-hard-[0-9]+\)|none)')
h2=$(grep -rnIE '\-\-shadow-hard-[0-9]+:' "$CSS" | grep -vE ':[[:space:]]*[0-9]+px [0-9]+px 0 0 ')
h3=$(grep -rnIE '\b(shadow-(sm|md|lg|xl|2xl|inner)|drop-shadow|text-shadow)\b' "$SRC")
[ -z "$h$h2$h3" ] && pass "2  every shadow is hard (Npx Npx 0 0)" || { bad "2  blurred or untokened shadow"; hits "$h$h2$h3"; }

# 2b — two stroke weights, one rule: 3px only on the page's own divisions
# (<section>, <nav>, the ticker); every object edge is 2px; the only 1px edges
# are dotted or dashed hairlines.
h=$(grep -rnIE 'border(-[trbl])?-\[3px\]' "$SRC"/components | grep -vE '<section|<nav|className="ticker')
h2=$(grep -rnIE '\bborder(-[trbl])?(-4|-\[[0-9]+px\])\b' "$SRC"/components | grep -vE '\[3px\]')
h3=$(grep -rnIE '\bborder(-[trbl])?([[:space:]"`])' "$SRC"/components | grep -vE 'border-(dotted|dashed)')
[ -z "$h$h2$h3" ] && pass "2b two stroke weights: 3px page divisions, 2px objects, 1px hairlines only dotted/dashed" || { bad "2b stroke weight drift"; hits "$h$h2$h3"; }

# 3 — no gradients.
h=$(grep -rnIE 'bg-gradient|\b(from|via|to)-[a-z]|(linear|radial|conic)-gradient' "$SRC")
[ -z "$h" ] && pass "3  no gradients" || { bad "3  gradient present"; hits "$h"; }

# 4 — exactly two families load, both used, no @font-face of our own.
fams=$(grep -oE 'family=[A-Za-z+]+' "$HTML" | sort -u); n=$(printf '%s\n' "$fams" | wc -l | tr -d ' ')
ff=$(grep -rn '@font-face' "$SRC" || true)
if [ "$n" = "2" ] && printf '%s' "$fams" | grep -q 'Bricolage' && printf '%s' "$fams" | grep -q 'Martian' && [ -z "$ff" ]; then
  pass "4  two families load: Bricolage Grotesque, Martian Mono"; else bad "4  font families: $n ($fams) font-face:$ff"; fi

# 5 — text-on-fill law. White type on lime/pink; black type on blue; lime/pink rings or outlines on the white ground.
h=$(grep -rnIE 'bg-(lime|pink)[^"'"'"'`]*text-paper|text-paper[^"'"'"'`]*bg-(lime|pink)' "$SRC")
h2=$(grep -rnIE 'bg-blue[^"'"'"'`]*text-ink|text-ink[^"'"'"'`]*bg-blue' "$SRC")
h3=$(grep -rnIE '\b(ring|outline)-(lime|pink)\b' "$SRC")
h4=$(grep -rnIE '\bborder-(lime|pink)\b' "$SRC" | grep -vE 'bg-ink')
[ -z "$h$h2$h3$h4" ] && pass "5  text-on-fill law holds in class pairings" || { bad "5  forbidden fill/type pairing"; hits "$h$h2$h3$h4"; }

# 7 — every paragraph has an explicit line-height in range. The base rule sets
# 1.6 on p; no utility may override it out of range.
h=$(grep -rnIE '<p\b[^>]*\bleading-(none|tight|snug|[0-9])' "$SRC")
base=$(awk '/^[[:space:]]*p[[:space:]]*\{/{f=1} f&&/line-height/{print; exit}' "$CSS" | grep -oE '1\.[5-7]' || true)
[ -z "$h" ] && [ -n "$base" ] && pass "7  paragraphs at line-height $base" || { bad "7  paragraph line-height"; hits "$h"; }

# 8 — no emoji in source (astral-plane symbols and the common BMP symbol blocks).
h=$(perl -CSD -ne 'print "$ARGV:$.: $_" if /[\x{1F000}-\x{1FFFF}\x{2600}-\x{27BF}\x{FE0F}]/' $(find "$SRC" "$HTML" -type f -name '*.js' -o -name '*.jsx' -o -name '*.html' -o -name '*.css'))
[ -z "$h" ] && pass "8  no emoji" || { bad "8  emoji present"; hits "$h"; }

# 9 — every <img> has width, height and alt.
h=$(perl -0777 -ne 'while (/<img\b[^>]*?\/?>/gs) { my $t=$&; print "$ARGV: $t\n" unless ($t =~ /\bwidth=/ && $t =~ /\bheight=/ && $t =~ /\balt=/); }' "$SRC"/components/*.jsx)
[ -z "$h" ] && pass "9  every <img> has width, height, alt" || { bad "9  <img> missing attrs"; hits "$h"; }

# 10 — no colour literal outside @theme.
h=$(awk '/@theme[[:space:]]*\{/{t=1} t&&/^\}/{t=0;next} !t' "$CSS" | grep -nE '#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(' | grep -v 'var(--')
h2=$(grep -rnIE '#[0-9a-fA-F]{3,8}\b' "$SRC"/components "$SRC"/data "$SRC"/*.jsx | grep -vE "#(lot|custody|main|root|[a-z-]+-heading)\b")
[ -z "$h$h2" ] && pass "10 no colour literal outside @theme" || { bad "10 colour literal outside tokens"; hits "$h$h2"; }

# 11 — quoted meta-irony labels: at most six <Q> in source; none with quotes in an aria-label.
q=$(grep -rhoIE '<Q\b' "$SRC" | wc -l | tr -d ' ')
h=$(grep -rnIE --include='*.jsx' 'aria-label="[^"]*[“”"][^"]*"' "$SRC")
[ "$q" -le 6 ] && [ -z "$h" ] && pass "11 quoted labels: $q in source (≤6), none as accessible names" || { bad "11 quoted labels: $q in source"; hits "$h"; }

# 13 — nothing hidden pending an animation or observer.
h=$(grep -rnIE 'opacity-0\b|IntersectionObserver|data-reveal|animate-(fade|in)' "$SRC")
[ -z "$h" ] && pass "13 content visible by default" || { bad "13 visibility gated on animation"; hits "$h"; }

# 15 — unsourced facts: print every FILL still outstanding.
echo "▶ outstanding FILL tokens"
awk '/^export const FILLS/{f=1;next} f&&/^\};/{f=0} f&&/: null/{sub(/:.*/,""); gsub(/ /,""); print "         <<FILL:" $0 ">>"}' "$SRC/data/identity.js"

echo
[ "$fail" -eq 0 ] && echo "all static checks passed" || echo "checks failed"
exit "$fail"
