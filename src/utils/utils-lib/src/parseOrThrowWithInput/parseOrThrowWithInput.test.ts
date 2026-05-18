import { z, ZodError } from "zod";
import { parseOrThrowWithInput } from "./parseOrThrowWithInput";

describe("parseOrThrowWithInput", () => {
  let schema: z.ZodSchema<{ foo: string }>;
  let validData: unknown;
  let invalidData: unknown;

  beforeEach(() => {
    schema = z.object({ foo: z.string() });
    validData = { foo: "bar" };
    invalidData = { foo: 123 };
  });

  it("returns parsed output for valid data", () => {
    const result = parseOrThrowWithInput(schema, validData);
    expect(result).toMatchInlineSnapshot(`
      {
        "foo": "bar",
      }
    `);
  });

  it("throws ZodError and attaches original input on failure", () => {
    expect(() => parseOrThrowWithInput(schema, invalidData)).toThrowError(
      ZodError
    );

    try {
      parseOrThrowWithInput(schema, invalidData);
    } catch (error) {
      const zodErr = error as ZodError & { input: unknown };

      expect(zodErr.issues).toMatchInlineSnapshot(`
        [
          {
            "code": "invalid_type",
            "expected": "string",
            "message": "Expected string, received number",
            "path": [
              "foo",
            ],
            "received": "number",
          },
        ]
      `);

      expect(zodErr.input).toMatchInlineSnapshot(`
        {
          "foo": 123,
        }
      `);
    }
  });
});
