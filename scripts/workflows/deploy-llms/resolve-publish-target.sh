#!/usr/bin/env bash
# Decides where this ref publishes. The only place the ref is read; every later step
# in deploy-llms.yml reads these outputs.
#
# ref     dir         urlpath      major      published at
# main    './'        ''           <major>    /llms.txt and /v<major>/llms.txt
# branch  './<name>'  '<name>/'    unset      /<name>/llms.txt
set -euo pipefail

: "${REF:?REF is required}"
: "${REF_NAME:?REF_NAME is required}"
: "${GITHUB_OUTPUT:?GITHUB_OUTPUT is required}"

echo "ref=$REF_NAME" >> "$GITHUB_OUTPUT"

if [ "$REF" != "refs/heads/main" ]; then
  {
    echo "dir=./$REF_NAME"
    echo "urlpath=$REF_NAME/"
  } >> "$GITHUB_OUTPUT"
  exit 0
fi

# An empty major would publish to /v/, so fail here instead.
major="$(node -p 'require("./package.json").version.split(".")[0]')"
: "${major:?could not read the major from package.json}"

{
  echo "dir=./"
  echo "urlpath="
  echo "major=$major"
} >> "$GITHUB_OUTPUT"
