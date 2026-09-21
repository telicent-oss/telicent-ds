/**
 * What the llms.txt manifest claims to document.
 *
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
  const inGitRepo = git(["rev-parse", "--git-dir"]) !== "";

  const parentVersion = (() => {
    if (!inGitRepo) return null;
    const raw = git(["show", "HEAD~1:package.json"]);
    if (!raw) return null;
    try {
      return JSON.parse(raw).version ?? null;
    } catch {
      return null;
    }
  })();

  // Released builds name the version, so a consumer on it can match exactly.
  // Everything else says so, so the same comparison fails and the reader falls back
  // to the installed types instead of trusting this file.
  if (parentVersion !== null && parentVersion !== version) return `v${version}`;

  // A shallow clone holds HEAD but not its parent's objects, so a real release
  // reads as an ordinary build and publishes stamped "unreleased". Say so rather
  // than stopping the publish: a cautious label beats no manifest at all. A root
  // commit genuinely has no parent, so it is the one silent case.
  const shallow = git(["rev-parse", "--is-shallow-repository"]) === "true";
  const hasParentRef = git(["rev-parse", "--verify", "--quiet", "HEAD^1"]) !== "";
  const rootCommit = !shallow && !hasParentRef;

  if (inGitRepo && parentVersion === null && !rootCommit) {
    warn(
      "build-llms: cannot read the parent commit's package.json, so a release build " +
        "cannot be told from an ordinary one. Every build will be stamped unreleased. " +
        "Check out with at least two commits (fetch-depth: 2 in GitHub Actions)."
    );
  }

  // Name the branch the manifest was built from. A preview published for a feature
  // branch used to read "main@<sha>" for a commit that was never on main. Actions
  // checks out a detached HEAD, where abbrev-ref returns the literal "HEAD", so the
  // caller passes GITHUB_REF_NAME when it has it.
  const branch = (() => {
    if (ref) return ref;
    const abbrev = inGitRepo ? git(["rev-parse", "--abbrev-ref", "HEAD"]) : "";
    return abbrev && abbrev !== "HEAD" ? abbrev : "unknown-branch";
  })();

  const sha = inGitRepo ? git(["rev-parse", "--short", "HEAD"]) : "";
  return `unreleased (${branch}@${sha || "unknown"}, after v${version})`;
}
