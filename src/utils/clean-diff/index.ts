import "snapshot-diff";
import snapshotDiff from "snapshot-diff";
import { createSerializer } from "@emotion/jest";
import prettyFormat from "pretty-format";
import { prettyDOM } from "@testing-library/dom";

export function cleanDiff<T>(before: T, after: T): string {
  const raw = snapshotDiff(before, after, {
    contextLines: 0,
    stablePatchmarks: true,
    aAnnotation: "",
    bAnnotation: "",
    colors: false,
  }) as string;

  return raw
    .split("\n")
    .filter((l) => !/^Snapshot Diff:/.test(l))
    .filter((l) => !l.includes("__reactFiber$"))
    .map((l) => l.trimStart())
    .join("\n");
}

const emotionSerializer = createSerializer({});
const pretty = (node: unknown): string =>
  prettyFormat(node, { plugins: [emotionSerializer], maxDepth: 1, min: true });

export function cleanSerializedDiff<T>(before: T, after: T): string {
  return cleanDiff(pretty(before), pretty(after));
}

/* === HTML diff that tolerates DocumentFragment === */
type PrettyTarget = Element | Document;

const toPrettyTarget = (
  n: Element | Document | DocumentFragment
): PrettyTarget => {
  // 11 === Node.DOCUMENT_FRAGMENT_NODE
  if ((n as DocumentFragment).nodeType === 11) {
    const first = (n as DocumentFragment).firstElementChild;
    return first ?? document.documentElement; // Element fallback
  }
  return n as PrettyTarget;
};

export const cleanHtml = (
  el: Element | Document | DocumentFragment
): string => prettyDOM(toPrettyTarget(el), undefined, { highlight: false }) || "";

export const cleanHtmlDiff = (
  before: Element | Document | DocumentFragment,
  after: Element | Document | DocumentFragment
): string => cleanDiff(cleanHtml(before), cleanHtml(after));