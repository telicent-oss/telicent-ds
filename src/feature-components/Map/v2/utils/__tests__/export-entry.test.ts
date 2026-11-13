import { MalformedFeatureError } from "../../../../../export";

it("is reachable from the package entry", () => {
  expect(typeof MalformedFeatureError).toBe("function");
  const e = new MalformedFeatureError("f1", "boom");
  expect(e).toBeInstanceOf(MalformedFeatureError);
  expect(e).toBeInstanceOf(Error);
  expect(e.name).toBe("MalformedFeatureError");
});
