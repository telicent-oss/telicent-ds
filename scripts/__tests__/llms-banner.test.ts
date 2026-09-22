import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// build-llms.mjs inserts the version banner after the manifest's first "# " title
// and exits 1 when there is none. That guard only runs during a full build, which
// no pull request performs, so this test is the banner's only check before merge.
const TITLE = /^(# .*\n)/;

describe("the version banner has somewhere to go", () => {
  it("docs/COMPONENTS.md opens with a '# ' title", () => {
    const manifest = readFileSync(
      resolve(__dirname, "../../docs/COMPONENTS.md"),
      "utf8"
    );
    expect(manifest).toMatch(TITLE);
  });

  it("inserting the banner changes the manifest", () => {
    const manifest = readFileSync(
      resolve(__dirname, "../../docs/COMPONENTS.md"),
      "utf8"
    );
    const stamped = manifest.replace(
      TITLE,
      (title) => `${title}\n**VERSION:** documents v9.9.9\n`
    );
    expect(stamped).not.toEqual(manifest);
    expect(stamped.split("\n")[2]).toEqual("**VERSION:** documents v9.9.9");
  });
});
