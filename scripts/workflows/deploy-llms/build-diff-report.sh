#!/usr/bin/env bash
# Renders llms.diff.html: the manifest just built against the one already published.
# Must run before the deploy steps, which overwrite that published manifest. Writes the
# report into ./llms so those steps publish it alongside the manifest.
#
# Both sides collapse the branch out of URLs (/<branch>/, blob/<branch>/) to ../, so the
# diff shows content rather than the prefix. Only these copies are rewritten; a "Branch:"
# line names each side.
set -euo pipefail

: "${SITE:?SITE is required}"
: "${REPO:?REPO is required}"
: "${BRANCH:?BRANCH is required}"
: "${GITHUB_OUTPUT:?GITHUB_OUTPUT is required}"
urlpath="${URLPATH-}"

d="$(mktemp -d "${RUNNER_TEMP:-/tmp}/llms-diff.XXXXXX")"

# Read the baseline from gh-pages, not over HTTP: the Pages CDN serves a stale copy for
# minutes after a deploy, which would diff against the wrong file.
git fetch --depth=1 --no-tags origin gh-pages || echo "no gh-pages yet"
git show origin/gh-pages:llms.txt > "$d/a.raw" 2>/dev/null \
  || { echo "no published manifest, treating it as a new file"; : > "$d/a.raw"; }
cp llms/llms.txt "$d/b.raw"

{ echo "Branch: /";                sed "s#$SITE/#$SITE/../#g;         s#$REPO/blob/main/#$REPO/blob/../#g"    "$d/a.raw"; } > "$d/a"
{ echo "Branch: ${urlpath:-/}";    sed "s#$SITE/$urlpath#$SITE/../#g; s#$REPO/blob/$BRANCH/#$REPO/blob/../#g" "$d/b.raw"; } > "$d/b"

if diff -q "$d/a" "$d/b" >/dev/null; then
  echo "changed=false" >> "$GITHUB_OUTPUT"
  echo "manifest is identical to the published one, so no report"
  exit 0
fi

echo "changed=true" >> "$GITHUB_OUTPUT"
diff -u --label a/llms.txt --label b/llms.txt "$d/a" "$d/b" > "$d/llms.diff" || true
node_modules/.bin/diff2html -i file -F llms/llms.diff.html --style side -- "$d/llms.diff"
