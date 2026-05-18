import glob from "glob";
import path from "path";
import fs from "fs";

/**
 * Test to help capture when we forget to add a storybook
 *
 * If you see your new component appear in this test - consider if it needs a story
 * If you have it covered in story and this test still complains
 * - you can add: `// ignore story-coverage.test.ts` to your file.
 */
it("looks for components that appear to be missing a story - snapshots these components for examination", () => {
  let missingStories: string[] = [];

  // Gather all component files matching the given patterns
  const allComponentFiles = [
    "./src/v1/components/**/*.tsx",
    "./src/component-library/**/*.tsx",
  ].flatMap((pattern) => glob.sync(pattern));

  // Filter out files that are stories, tests, marked to ignore or non-pascal
  const componentFiles = allComponentFiles.filter((file) => {
    if (/\.stories\.(tsx|jsx)$/.test(file)) return false;
    if (/\.(test|spec)\.tsx$/.test(file)) return false;
    const content = fs.readFileSync(file, "utf8");
    if (content.includes("// ignore story-coverage.test.ts")) return false;

    // lazy pascal-case check
    const [firstLetterBaseName] = path.basename(file, path.extname(file));
    if (
      firstLetterBaseName &&
      firstLetterBaseName === firstLetterBaseName.toLowerCase()
    ) {
      return false;
    }
    return true;
  });

  // For each component, check for a story
  componentFiles.forEach((componentFile) => {
    const dir = path.dirname(componentFile);
    const baseName = path.basename(componentFile, path.extname(componentFile));

    // 1. Check story version of component file
    const directStories = glob.sync(
      path.join(dir, `${baseName}.stories.@(tsx|jsx)`)
    );
    if (directStories.length > 0) return;

    // 2. Otherwise, check if sibling story imports this component file
    const siblingStories = glob.sync(path.join(dir, "*.stories.@(tsx|jsx)"));
    const hasImport = siblingStories.some((storyFile) => {
      const content = fs.readFileSync(storyFile, "utf8");
      return new RegExp(`import\\s+.*${baseName}`, "i").test(content);
    });

    if (!hasImport) {
      missingStories.push(componentFile);
    }
  });

  expect(missingStories).toMatchInlineSnapshot(`[]`);
});
