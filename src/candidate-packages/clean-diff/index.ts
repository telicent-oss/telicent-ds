import "snapshot-diff";
import snapshotDiff from "snapshot-diff";

export function cleanDiff<T>(before: T, after: T): string {
  const raw = snapshotDiff(before, after, {
    contextLines: 0,
    stablePatchmarks: true,
    aAnnotation: "",
    bAnnotation: "",
  });

  return raw
    .split("\n")
    .filter((line: string) => !/^Snapshot Diff:/.test(line))
    .map((line: string) => line.trimStart())
    .join("\n");
}
