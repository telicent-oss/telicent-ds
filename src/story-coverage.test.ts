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
test("Component Story Coverage", () => {
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

  missingStories = [];

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

  expect(missingStories).toMatchInlineSnapshot(`
    [
      "./src/v1/components/data-display/FontAwesomeIcons/ClockIcon.tsx",
      "./src/v1/components/data-display/FontAwesomeIcons/DownArrowIcon.tsx",
      "./src/v1/components/data-display/FontAwesomeIcons/DownloadIcon.tsx",
      "./src/v1/components/data-display/FontAwesomeIcons/SearchIcon.tsx",
      "./src/v1/components/data-display/Icons/BinIcon.tsx",
      "./src/v1/components/data-display/Icons/CloseIcon.tsx",
      "./src/v1/components/data-display/Icons/DataServiceIcon.tsx",
      "./src/v1/components/data-display/Icons/DataSetIcon.tsx",
      "./src/v1/components/data-display/Icons/DragHandleIcon.tsx",
      "./src/v1/components/data-display/Icons/FloppyDiskIcon.tsx",
      "./src/v1/components/data-display/Icons/GridIcon.tsx",
      "./src/v1/components/data-display/Icons/MapIcon.tsx",
      "./src/v1/components/data-display/Icons/MinusCircleIcon.tsx",
      "./src/v1/components/data-display/Icons/PlayIcon.tsx",
      "./src/v1/components/data-display/Icons/PlusCircleIcon.tsx",
      "./src/v1/components/data-display/Icons/TelicentHorizontalSVG.tsx",
      "./src/v1/components/data-display/Icons/TelicentMark.tsx",
      "./src/v1/components/data-display/Icons/UserIcon.tsx",
      "./src/v1/components/data-display/IESType/IESType.tsx",
      "./src/v1/components/data-display/List/List.tsx",
      "./src/v1/components/data-display/Text/TitleAndContent/TitleAndContent.tsx",
      "./src/v1/components/data-display/TreeView/TreeView.tsx",
      "./src/v1/components/data-display/UserProfile/UserProfileContent/UserStatus.tsx",
      "./src/v1/components/inputs/Button/IconButton.tsx",
      "./src/v1/components/inputs/Button/LinkButton.tsx",
      "./src/v1/components/inputs/Button/PrimaryButton.tsx",
      "./src/v1/components/inputs/Button/SecondaryButton.tsx",
      "./src/v1/components/inputs/TextField.tsx",
      "./src/v1/components/layout/AppChrome.tsx",
      "./src/v1/components/layout/FlexBox.tsx",
      "./src/v1/components/surfaces/AppBar/TelicentBrand.tsx",
      "./src/v1/components/surfaces/FloatingPanel/FloatingPanelProvider.tsx",
      "./src/v1/components/surfaces/FloatingPanel/FloatingPanelToggleButton.tsx",
    ]
  `);
});
