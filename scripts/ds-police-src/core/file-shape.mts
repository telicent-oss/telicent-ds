import { basename } from "node:path";
import { SECTION_NAMES, SectionName } from "../types.mts";

export type FileShape = "component" | "hook" | "util" | "types-only";

const HOOK_BASENAME = /^use[A-Z][A-Za-z0-9]*\.tsx?$/;
const TYPES_ONLY_BASENAME = /\.types\.tsx?$/;
const JSX_HINT = /<\/?[A-Za-z][A-Za-z0-9.]*[\s/>]/;
const REACT_IMPORT_HINT = /from\s+['"]react['"]/;
const RETURN_HINT_HOOK = /\breturn\s*[\{\(\[]|\breturn\s+[a-zA-Z_]/;
const FUNCTION_DEFINITION = /\b(function|const)\s+[A-Za-z_]/;

export interface ShapeInputs {
  filePath: string;
  source: string;
}

export function detectShape(inputs: ShapeInputs): FileShape {
  const name = basename(inputs.filePath);
  if (TYPES_ONLY_BASENAME.test(name)) return "types-only";
  if (HOOK_BASENAME.test(name)) return "hook";
  if (
    JSX_HINT.test(inputs.source) &&
    REACT_IMPORT_HINT.test(inputs.source) &&
    FUNCTION_DEFINITION.test(inputs.source)
  ) {
    return "component";
  }
  if (RETURN_HINT_HOOK.test(inputs.source) && /\b(use[A-Z])/.test(inputs.source))
    return "hook";
  return "util";
}

const COMPONENT_AXES: readonly SectionName[] = SECTION_NAMES;
const HOOK_AXES: readonly SectionName[] = [
  "framework_fit",
  "types",
  "docs",
  "necessity",
];
const UTIL_AXES: readonly SectionName[] = [
  "framework_fit",
  "types",
  "docs",
  "necessity",
];
const TYPES_ONLY_AXES: readonly SectionName[] = [
  "framework_fit",
  "types",
  "docs",
];

export function axesFor(shape: FileShape): readonly SectionName[] {
  switch (shape) {
    case "component":
      return COMPONENT_AXES;
    case "hook":
      return HOOK_AXES;
    case "util":
      return UTIL_AXES;
    case "types-only":
      return TYPES_ONLY_AXES;
  }
}

export function shapeVariant(shape: FileShape): string {
  return `shape:${shape}`;
}
