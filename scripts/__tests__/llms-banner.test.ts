import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// build-llms.mjs stamps the version banner after the manifest's first "# " title and
// exits 1 when there is none. That guard needs a full build to reach; this test
// catches the same drift from `yarn test` alone.
describe("the version banner has somewhere to go", () => {
  it("docs/COMPONENTS.md opens with a '# ' title", () => {
    const manifest = readFileSync(
      resolve(__dirname, "../../docs/COMPONENTS.md"),
      "utf8"
    );
    expect(manifest).toMatch(/^# .*\n/);
  });
});
