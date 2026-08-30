#!/usr/bin/env bash
# Project checks: lint, build, and the grep-able hard rules from docs/BRIEF.md.
# Run with `npm run check`. Exits non-zero on the first failing group.
set -uo pipefail

cd "$(dirname "$0")/.." || exit 2

CSS="src/index.css"
HTML="index.html"
fail=0

pass() { printf '  ok   %s\n' "$1"; }
bad()  { printf '  FAIL %s\n' "$1"; fail=1; }

echo "▶ lint"
npm run --silent lint || fail=1

echo "▶ build"
npm run --silent build >/dev/null || bad "vite build failed"
[ "$fail" -eq 0 ] && pass "build clean" || true

echo "▶ hard rules"

# Rule 1 — no non-zero border-radius (the global reset `border-radius: 0` is fine).
if grep -nE 'border-radius:[[:space:]]*[^0[:space:];]' "$CSS" >/dev/null; then
  bad "rule 1: non-zero border-radius"; grep -nE 'border-radius:[[:space:]]*[^0[:space:];]' "$CSS"
else pass "rule 1: no non-zero border-radius"; fi

# Rule 2 — no box-shadow anywhere.
if grep -rnE 'box-shadow' src >/dev/null; then
  bad "rule 2: box-shadow present"; grep -rnE 'box-shadow' src
else pass "rule 2: no box-shadow"; fi

# Rule 4 — exactly three font families load.
families=$(grep -oE 'family=[A-Za-z+]+' "$HTML" | sort -u | wc -l | tr -d ' ')
if [ "$families" = "3" ]; then pass "rule 4: three font families"; else bad "rule 4: $families font families (want 3)"; fi

# Rule 10 — every <img> has width, height and alt.
missing=$(perl -0777 -ne '
  while (/<img\b[^>]*?\/?>/gs) {
    my $t = $&;
    print "$t\n" unless ($t =~ /\bwidth=/ && $t =~ /\bheight=/ && $t =~ /\balt=/);
  }' src/components/*.jsx)
if [ -n "$missing" ]; then bad "rule 10: <img> missing width/height/alt"; printf '%s\n' "$missing"
else pass "rule 10: all <img> have width/height/alt"; fi

# Rule 11 — no hex colour literals outside :root (CSS), and none in components
# except Doodle (slated for deletion in T11).
css_hex=$(awk '/:root[[:space:]]*{/{r=1} r&&/}/{r=0;next} !r' "$CSS" | grep -nE '#[0-9a-fA-F]{3,6}([^0-9a-fA-F]|$)')
if [ -n "$css_hex" ]; then bad "rule 11: hex outside :root in $CSS"; printf '%s\n' "$css_hex"
else pass "rule 11: no hex outside :root in css"; fi

comp_hex=$(grep -rnE '#[0-9a-fA-F]{3,6}([^0-9a-fA-F]|$)' src/components --exclude=Doodle.jsx | grep -v '#work/')
if [ -n "$comp_hex" ]; then bad "rule 11: hex literal in a component"; printf '%s\n' "$comp_hex"
else pass "rule 11: no hex in components (Doodle excepted, T11)"; fi

echo
if [ "$fail" -eq 0 ]; then echo "✅ all checks passed"; else echo "❌ checks failed"; fi
exit "$fail"
