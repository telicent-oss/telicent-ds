import { resolveDocumentsLabel } from "../llms-version-label.mjs";

type GitResponses = Record<string, string>;

// Keys are the git args joined by a space; anything unlisted returns "", which is
// what the real runner returns when the command fails.
function fakeGit(responses: GitResponses) {
  return (args: string[]): string => responses[args.join(" ")] ?? "";
}

const FULL_CLONE = {
  "rev-parse --git-dir": ".git",
  "rev-parse --is-shallow-repository": "false",
  "rev-parse --verify --quiet HEAD^1": "83b34478",
  "rev-parse --short HEAD": "0c7e373",
  "rev-parse --abbrev-ref HEAD": "main",
};

describe("resolveDocumentsLabel", () => {
  it("names the version when this commit set it", () => {
    const label = resolveDocumentsLabel({
      version: "4.0.0",
      warn: jest.fn(),
      git: fakeGit({
        ...FULL_CLONE,
        "show HEAD~1:package.json": JSON.stringify({ version: "3.7.0" }),
      }),
    });
    expect(label).toBe("v4.0.0");
  });

  it("says unreleased when the parent carries the same version", () => {
    const label = resolveDocumentsLabel({
      version: "4.0.0",
      warn: jest.fn(),
      git: fakeGit({
        ...FULL_CLONE,
        "show HEAD~1:package.json": JSON.stringify({ version: "4.0.0" }),
      }),
    });
    expect(label).toBe("unreleased (main@0c7e373, after v4.0.0)");
  });

  it("warns on a shallow clone rather than stopping the publish", () => {
    // actions/checkout defaults to fetch-depth 1, which leaves HEAD~1 unreadable.
    // Without the warning the build silently stamps a real release "unreleased".
    const warn = jest.fn();
    const label = resolveDocumentsLabel({
      version: "4.0.0",
      warn,
      git: fakeGit({
        "rev-parse --git-dir": ".git",
        "rev-parse --is-shallow-repository": "true",
        "rev-parse --abbrev-ref HEAD": "main",
        "rev-parse --short HEAD": "0c7e373",
      }),
    });
    expect(label).toBe("unreleased (main@0c7e373, after v4.0.0)");
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("fetch-depth: 2"));
  });

  it("warns when the parent commit exists but its package.json cannot be read", () => {
    // A blobless clone (--filter=blob:none) resolves HEAD^1 but needs a network
    // fetch for the blob, so the repo is not shallow and the parent is unreadable.
    const warn = jest.fn();
    const label = resolveDocumentsLabel({
      version: "4.0.0",
      warn,
      git: fakeGit({
        "rev-parse --git-dir": ".git",
        "rev-parse --is-shallow-repository": "false",
        "rev-parse --verify --quiet HEAD^1": "83b34478",
        "rev-parse --abbrev-ref HEAD": "main",
        "rev-parse --short HEAD": "0c7e373",
      }),
    });
    expect(label).toBe("unreleased (main@0c7e373, after v4.0.0)");
    expect(warn).toHaveBeenCalled();
  });

  it("says unreleased on a root commit without warning, since it has no parent", () => {
    const warn = jest.fn();
    const label = resolveDocumentsLabel({
      version: "0.1.0",
      warn,
      git: fakeGit({
        "rev-parse --git-dir": ".git",
        "rev-parse --is-shallow-repository": "false",
        "rev-parse --abbrev-ref HEAD": "main",
        "rev-parse --short HEAD": "abc1234",
      }),
    });
    expect(label).toBe("unreleased (main@abc1234, after v0.1.0)");
    expect(warn).not.toHaveBeenCalled();
  });

  it("says unreleased outside a git repo, e.g. an unpacked tarball", () => {
    const label = resolveDocumentsLabel({
      version: "4.0.0",
      warn: jest.fn(),
      git: fakeGit({}),
    });
    expect(label).toBe("unreleased (unknown-branch@unknown, after v4.0.0)");
  });

  it("names the branch it built from, not always main", () => {
    const label = resolveDocumentsLabel({
      version: "3.7.0",
      warn: jest.fn(),
      git: fakeGit({
        "rev-parse --git-dir": ".git",
        "rev-parse --is-shallow-repository": "false",
        "rev-parse --verify --quiet HEAD^1": "83b34478",
        "show HEAD~1:package.json": JSON.stringify({ version: "3.7.0" }),
        "rev-parse --abbrev-ref HEAD": "chore/ds-skill-and-per-major-llms",
        "rev-parse --short HEAD": "3a07091",
      }),
    });
    expect(label).toBe(
      "unreleased (chore/ds-skill-and-per-major-llms@3a07091, after v3.7.0)"
    );
  });

  it("prefers the ref the caller passes, since Actions detaches HEAD", () => {
    // In a detached checkout `rev-parse --abbrev-ref HEAD` returns "HEAD", so the
    // workflow passes GITHUB_REF_NAME instead.
    const label = resolveDocumentsLabel({
      version: "3.7.0",
      warn: jest.fn(),
      ref: "idea/SearchBox",
      git: fakeGit({
        "rev-parse --git-dir": ".git",
        "rev-parse --is-shallow-repository": "false",
        "rev-parse --verify --quiet HEAD^1": "83b34478",
        "show HEAD~1:package.json": JSON.stringify({ version: "3.7.0" }),
        "rev-parse --abbrev-ref HEAD": "HEAD",
        "rev-parse --short HEAD": "9eca209",
      }),
    });
    expect(label).toBe("unreleased (idea/SearchBox@9eca209, after v3.7.0)");
  });
});
