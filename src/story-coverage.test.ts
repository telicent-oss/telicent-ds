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
    "./src/components/**/*.tsx",
    "./src/utils/**/*.tsx",
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

  expect(missingStories).toMatchInlineSnapshot(`
    [
      "./src/components/buttons/Button/IconButton.tsx",
      "./src/components/buttons/Button/PrimaryButton.tsx",
      "./src/components/buttons/Button/SecondaryButton.tsx",
      "./src/components/buttons/Button/TertiaryButton.tsx",
      "./src/components/buttons/Button/TextButton.tsx",
      "./src/components/data-display/DropdownButton/assets/TestIcons.tsx",
      "./src/components/data-display/FontAwesomeIcons/ClockIcon.tsx",
      "./src/components/data-display/FontAwesomeIcons/DownArrowIcon.tsx",
      "./src/components/data-display/FontAwesomeIcons/DownloadIcon.tsx",
      "./src/components/data-display/FontAwesomeIcons/SearchIcon.tsx",
      "./src/components/data-display/Icons/BinIcon.tsx",
      "./src/components/data-display/Icons/CloseIcon.tsx",
      "./src/components/data-display/Icons/DataServiceIcon.tsx",
      "./src/components/data-display/Icons/DataSetIcon.tsx",
      "./src/components/data-display/Icons/DragHandleIcon.tsx",
      "./src/components/data-display/Icons/FloppyDiskIcon.tsx",
      "./src/components/data-display/Icons/GridIcon.tsx",
      "./src/components/data-display/Icons/MapIcon.tsx",
      "./src/components/data-display/Icons/MinusCircleIcon.tsx",
      "./src/components/data-display/Icons/PlayIcon.tsx",
      "./src/components/data-display/Icons/PlusCircleIcon.tsx",
      "./src/components/data-display/Icons/TelicentHorizontalSVG.tsx",
      "./src/components/data-display/Icons/TelicentMark.tsx",
      "./src/components/data-display/Icons/UserIcon.tsx",
      "./src/components/data-display/Icons/XIcon.tsx",
      "./src/components/data-display/IESType/IESType.tsx",
      "./src/components/data-display/List/List.tsx",
      "./src/components/data-display/Text/TitleAndContent/TitleAndContent.tsx",
      "./src/components/data-display/TreeView/TreeView.tsx",
      "./src/components/data-display/UserProfile/UserProfileContent/UserStatus.tsx",
      "./src/components/layout/AppChrome.tsx",
      "./src/components/layout/FlexBox.tsx",
      "./src/components/SearchAutocomplete/SearchAutocomplete.tsx",
      "./src/components/SearchAutocompleteDialog/RecentSearches.tsx",
      "./src/components/SearchAutocompleteDialog/SearchAutocompleteDialog.tsx",
      "./src/components/SearchAutocompleteDialog/SearchResults.tsx",
      "./src/components/surfaces/AppBar/TelicentBrand.tsx",
      "./src/components/surfaces/FloatingPanel/FloatingPanelProvider.tsx",
      "./src/components/surfaces/FloatingPanel/FloatingPanelToggleButton.tsx",
      "./src/components/TypeIcon/TypeIcon.tsx",
      "./src/utils/authorize-flow/components/AuthModal.tsx",
      "./src/utils/authorize-flow/components/ForceNoIframe.tsx",
      "./src/utils/authorize-flow/context/AuthContext.tsx",
      "./src/utils/authorize-flow/context/AuthProvider.tsx",
      "./src/utils/authorize-flow/pages/AuthRedirectUri.tsx",
      "./src/utils/authorize-flow/pages/Callback.tsx",
    ]
  `);
});
