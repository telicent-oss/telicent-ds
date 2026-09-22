// Puts the generated component manifest inside the published package, so a
// consumer reads the manifest for the exact version they installed instead of
// guessing which one on the Pages site matches.
//
// Runs at the end of `yarn build`, not as an npm `prepack` hook: this repo sets
// ignore-scripts, so lifecycle hooks never fire. publish.yml asserts the file
// reached the tarball, because shipping a package with no manifest silently is
// worse than a red build.
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dts = resolve(root, "dist/export.d.ts");

if (!existsSync(dts)) {
  console.warn("pack-llms: no dist/export.d.ts, so skipping the manifest.");
  process.exit(0);
}

execFileSync("node", [resolve(root, "scripts/build-llms.mjs")], {
  cwd: root,
  stdio: "inherit",
});

copyFileSync(resolve(root, "llms/llms.txt"), resolve(root, "dist/llms.txt"));
console.log("pack-llms: wrote dist/llms.txt");
