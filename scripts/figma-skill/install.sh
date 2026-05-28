#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET_DIR="$HOME/.claude/figma-to-react"
COMMANDS_DIR="$HOME/.claude/commands"

echo "Installing figma-to-react skill..."

mkdir -p "$TARGET_DIR/references"
mkdir -p "$COMMANDS_DIR"

COMPONENTS_SRC="$SCRIPT_DIR/../../.claude/agents/context/COMPONENTS.md"
if [ ! -f "$COMPONENTS_SRC" ]; then
  echo "ERROR: COMPONENTS.md not found at $COMPONENTS_SRC"
  echo "Run this script from the telicent-ds repo: ./scripts/figma-skill/install.sh"
  exit 1
fi

PHASE1_SRC="$SCRIPT_DIR/references/phase1-figma-extraction.md"
PHASE2_SRC="$SCRIPT_DIR/references/phase2-react-generation.md"
SKILL_SRC="$SCRIPT_DIR/figma-to-react.md"

for f in "$PHASE1_SRC" "$PHASE2_SRC" "$SKILL_SRC"; do
  if [ ! -f "$f" ]; then
    echo "ERROR: missing source file: $f"
    exit 1
  fi
done

changed=0

copy_if_changed() {
  local src="$1" dst="$2"
  if [ -f "$dst" ] && diff -q "$src" "$dst" > /dev/null 2>&1; then
    return
  fi
  if [ -f "$dst" ]; then
    cp "$dst" "$dst.bak"
  fi
  cp "$src" "$dst"
  changed=1
}

copy_if_changed "$COMPONENTS_SRC" "$TARGET_DIR/COMPONENTS.md"
copy_if_changed "$PHASE1_SRC" "$TARGET_DIR/references/phase1-figma-extraction.md"
copy_if_changed "$PHASE2_SRC" "$TARGET_DIR/references/phase2-react-generation.md"
copy_if_changed "$SKILL_SRC" "$COMMANDS_DIR/figma-to-react.md"

echo ""
if [ "$changed" -eq 1 ]; then
  echo "Updated:"
else
  echo "Already up to date:"
fi
echo "  $COMMANDS_DIR/figma-to-react.md    (slash command)"
echo "  $TARGET_DIR/COMPONENTS.md          (component manifest)"
echo "  $TARGET_DIR/references/            (phase docs)"
echo ""
echo "Usage: type /figma-to-react in Claude Code or Claude Desktop"
