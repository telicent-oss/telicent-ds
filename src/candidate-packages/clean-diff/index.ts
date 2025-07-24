import "snapshot-diff"
import snapshotDiff from "snapshot-diff"
import { createSerializer } from "@emotion/jest"
import prettyFormat from "pretty-format"

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
    .filter(line => !/^Snapshot Diff:/.test(line))
    .filter(line => !line.includes("__reactFiber$"))
    .map(line => line.trimStart())
    .join("\n")
}

const emotionSerializer = createSerializer({})

const pretty = (node: unknown): string =>
  prettyFormat(node, {
    plugins: [emotionSerializer],
    maxDepth: 1,
    min: true,
  })

export function cleanSerializedDiff<T>(before: T, after: T): string {
  return cleanDiff(pretty(before), pretty(after))
}
