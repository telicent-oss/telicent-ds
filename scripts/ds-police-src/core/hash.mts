import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

export function normaliseBytes(input: string | Buffer): Buffer {
  const text =
    typeof input === "string" ? input : input.toString("utf8");
  const lfOnly = text.replace(/\r\n/g, "\n");
  const trimmedLines = lfOnly
    .split("\n")
    .map((line) => line.replace(/[\t ]+$/g, ""))
    .join("\n");
  const withTrailingNewline = trimmedLines.endsWith("\n")
    ? trimmedLines.replace(/\n+$/, "\n")
    : `${trimmedLines}\n`;
  return Buffer.from(withTrailingNewline, "utf8");
}

export function sha256(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

export async function sha256File(path: string): Promise<string> {
  const raw = await readFile(path);
  return sha256(normaliseBytes(raw));
}
