import { defaultIdhLabel, extractIdhOptions, isIdhLabelComplete } from "./idhLabel";

const ACCESS = {
  properties: {
    classification: { enum: ["O", "S"] },
    allowedNats: { items: { enum: ["XAA", "XBB"] }, contains: { enum: ["XAA"] } },
    allowedOrgs: { items: { enum: ["Org A", "Org B"] }, contains: { enum: ["Org A"] } },
    groups: { items: { enum: ["urn:telicent:groups:team-c"] } },
  },
};

const OPTIONS = {
  classifications: ["O", "S"],
  nats: { options: ["XAA", "XBB"], mustInclude: ["XAA"] },
  orgs: { options: ["Org A", "Org B"], mustInclude: ["Org A"] },
  groups: { options: ["urn:telicent:groups:team-c"] },
};

describe("extractIdhOptions", () => {
  it("reads the access block behind a pydantic $ref, bare or in allOf", () => {
    const $defs = { AccessModel: ACCESS };
    const ref = { $ref: "#/$defs/AccessModel" };
    expect(extractIdhOptions({ $defs, properties: { access: ref } })).toEqual(OPTIONS);
    expect(extractIdhOptions({ $defs, properties: { access: { allOf: [ref] } } })).toEqual(OPTIONS);
  });

  it("gives null when the schema allows no valid label", () => {
    expect(extractIdhOptions({ properties: {} })).toBeNull();
    const noNats = { properties: { ...ACCESS.properties, allowedNats: { items: { enum: [] } } } };
    expect(extractIdhOptions({ properties: { access: noNats } })).toBeNull();
  });
});

describe("defaultIdhLabel", () => {
  it("starts from the lowest classification and the user's own nationality and organisation", () => {
    expect(defaultIdhLabel(OPTIONS)).toEqual({
      classification: "O",
      allowedNats: ["XAA"],
      allowedOrgs: ["Org A"],
      groups: [],
    });
  });
});

describe("isIdhLabelComplete", () => {
  it("needs a nationality and an organisation", () => {
    const label = defaultIdhLabel(OPTIONS);
    expect(isIdhLabelComplete(label)).toBe(true);
    expect(isIdhLabelComplete({ ...label, allowedNats: [] })).toBe(false);
    expect(isIdhLabelComplete({ ...label, allowedOrgs: [] })).toBe(false);
  });
});
