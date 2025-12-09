import { matchCurrentUri } from "./matchCurrentUrl";

const setLocation = (href: string) => {
  const url = new URL(href);
  Object.defineProperty(window, "location", {
    configurable: true,
    value: {
      href: url.href,
      origin: url.origin,
      pathname: url.pathname,
    },
    writable: true,
  });
};

describe("matchCurrentUri", () => {
  beforeEach(() => {
    setLocation("http://localhost:3000/");
  });

  it("is true only when origin and pathname match", () => {
    const cases = [
      {
        label: "exact match",
        current: "http://localhost:3000/search/callback",
        target: "http://localhost:3000/search/callback",
      },
      {
        label: "includes /callback",
        current: "http://localhost:3000/search/callback",
        target: "http://localhost:3000/search/callback-settings",
      },
      {
        label: "endswith /callback",
        current: "http://localhost:3000/search/callback",
        target: "http://localhost:3000/search/settings/callback",
      },
      {
        label: "relative target on same path",
        current: "http://localhost:3000/search/callback",
        target: "/search/callback",
      },
      {
        label: "relative target on different path",
        current: "http://localhost:1234/search/callback",
        target: "/search/callback",
      },
      {
        label: "suffix overlap",
        current: "http://localhost:3000/search/callback",
        target: "http://localhost:3000/callback",
      },
      {
        label: "different path",
        current: "http://localhost:3000/search/other",
        target: "http://localhost:3000/search/callback",
      },
      {
        label: "different origin",
        current: "http://localhost:3000/search/callback",
        target: "https://other.example.com/search/callback",
      },
    ];

    const outputs = cases.map(({ label, current, target }) => {
      setLocation(current);
      return {
        label,
        result: matchCurrentUri(target, current),
        target,
        current,
      };
    });

    expect(
      outputs.map((output) => [
        `${output.result ? "✅" : "❌"}${output.label}`,
        output.current,
        output.target,
      ])
    ).toMatchInlineSnapshot(`
      [
        [
          "✅exact match",
          "http://localhost:3000/search/callback",
          "http://localhost:3000/search/callback",
        ],
        [
          "❌includes /callback",
          "http://localhost:3000/search/callback",
          "http://localhost:3000/search/callback-settings",
        ],
        [
          "❌endswith /callback",
          "http://localhost:3000/search/callback",
          "http://localhost:3000/search/settings/callback",
        ],
        [
          "❌relative target on same path",
          "http://localhost:3000/search/callback",
          "/search/callback",
        ],
        [
          "❌relative target on different path",
          "http://localhost:1234/search/callback",
          "/search/callback",
        ],
        [
          "❌suffix overlap",
          "http://localhost:3000/search/callback",
          "http://localhost:3000/callback",
        ],
        [
          "❌different path",
          "http://localhost:3000/search/other",
          "http://localhost:3000/search/callback",
        ],
        [
          "❌different origin",
          "http://localhost:3000/search/callback",
          "https://other.example.com/search/callback",
        ],
      ]
    `);
  });
});
