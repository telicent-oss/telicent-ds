// What the llms.txt manifest published to the website claims to document.
//
// Only the website copy needs this. The copy that ships inside the npm package is
// installed beside the code it documents, so it names package.json's version flat
// and never consults git.

const readParentVersion = (git) => {
  const raw = git(["show", "HEAD~1:package.json"]);
  if (!raw) return null;
  try {
    return JSON.parse(raw).version ?? null;
  } catch {
    return null;
  }
};

// A root commit legitimately has no parent. A shallow clone has one it cannot read,
// which is a checkout to fix rather than a state to accept quietly.
const isRootCommit = (git) =>
  git(["rev-parse", "--is-shallow-repository"]) !== "true" &&
  git(["rev-parse", "--verify", "--quiet", "HEAD^1"]) === "";

// Actions checks out a detached HEAD, where abbrev-ref returns the literal "HEAD".
const namedBranch = (git) => {
  const abbrev = git(["rev-parse", "--abbrev-ref", "HEAD"]);
  return abbrev && abbrev !== "HEAD" ? abbrev : "unknown-branch";
};

/**
 * `version` from package.json alone is a lie between releases: package.json only
 * moves when release-please merges, so every push to main regenerates the manifest
 * from current source while still stamping the last released number. A consumer on
 * that number then gets a manifest that matches their version string and documents
 * components they do not have.
 *
 * A build is a release iff this commit is the one that set the current version,
 * i.e. the parent's package.json says something else. That test needs the parent
 * commit, so a caller running in CI must check out at least two commits.
 *
 * @param version {string} this commit's package.json version
 * @param git {(args: string[]) => string} runs git, returns trimmed stdout or ""
 * @param warn {(message: string) => void} where to report an unreadable parent
 * @param ref {string | undefined} branch name, when the caller already knows it
 * @returns {string} e.g. "v4.0.0" or "unreleased (main@83b3447, after v3.7.0)"
 */
export function resolveDocumentsLabel({ version, git, warn = console.warn, ref }) {
  // Outside a checkout, an unpacked tarball say, there is nothing to compare against.
  if (git(["rev-parse", "--git-dir"]) === "") {
    return `unreleased (${ref || "unknown-branch"}@unknown, after v${version})`;
  }

  const parentVersion = readParentVersion(git);

  // Released builds name the version, so a consumer on it can match exactly.
  // Everything else says so, so the same comparison fails and the reader falls back
  // to the installed types instead of trusting this file.
  if (parentVersion !== null && parentVersion !== version) return `v${version}`;

  // A shallow clone reads a real release as an ordinary build and stamps it
  // "unreleased". Say so rather than stopping the deploy: a cautious label beats no
  // manifest at all.
  if (parentVersion === null && !isRootCommit(git)) {
    warn(
      "build-llms: cannot read the parent commit's package.json, so a release build " +
        "cannot be told from an ordinary one. The website copy will be stamped " +
        "unreleased; the copy inside the package is unaffected. Check out with at " +
        "least two commits (fetch-depth: 2 in GitHub Actions)."
    );
  }

  const sha = git(["rev-parse", "--short", "HEAD"]);
  return `unreleased (${ref || namedBranch(git)}@${sha || "unknown"}, after v${version})`;
}
