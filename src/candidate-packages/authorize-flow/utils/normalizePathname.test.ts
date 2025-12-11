import { normalizePathname } from "./normalizePathname";

describe("normalizePathname", () => {
  it("produces stable paths", () => {
    const cases = ["", "/", "/search/", "/search//", "/search/callback"];

    const outputs = cases.map((input) => ({
      input,
      output: normalizePathname(input),
    }));

    expect(outputs).toMatchInlineSnapshot(`
      [
        {
          "input": "",
          "output": "/",
        },
        {
          "input": "/",
          "output": "/",
        },
        {
          "input": "/search/",
          "output": "/search",
        },
        {
          "input": "/search//",
          "output": "/search",
        },
        {
          "input": "/search/callback",
          "output": "/search/callback",
        },
      ]
    `);
  });
});