// Local babel plugin used ONLY by the jest transform (jest.config.cjs).
// babel-jest compiles the .mjs build scripts to CommonJS and runs them in a CJS
// context, where `import.meta` is a syntax error at load time. Rewrite
// `import.meta.url` to a CJS-safe equivalent so the scripts can be unit-tested.
// The real Node ESM runtime (CI: `node scripts/build-llms.mjs`) never sees this
// transform and keeps `import.meta.url` unchanged.
module.exports = function importMetaToCjs() {
  return {
    name: "import-meta-url-to-cjs",
    visitor: {
      MetaProperty(path) {
        const { meta, property } = path.node;
        if (meta && meta.name === "import" && property && property.name === "meta") {
          path.replaceWithSourceString(
            "({ url: require('url').pathToFileURL(__filename).href })"
          );
        }
      },
    },
  };
};
