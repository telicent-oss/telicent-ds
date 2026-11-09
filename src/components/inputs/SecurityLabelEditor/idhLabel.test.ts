import { defaultIdhLabel, extractIdhOptions } from "./idhLabel";

const ACCESS = {
  type: "object",
  properties: {
    classification: { type: "string", enum: ["LOW", "MID", "HIGH"] },
    allowedNats: { type: "array", items: { enum: ["XAA", "XBB", "XCC"] }, contains: { enum: ["XAA"] } },
    allowedOrgs: { type: "array", items: { enum: ["Org A", "Org B"] }, contains: { enum: ["Org A"] } },
    groups: { type: "array", items: { enum: ["urn:telicent:groups:team-a"] } },
  },
};

// The shape pydantic's model_json_schema() gives: the access block behind a $ref.
const IDH_SCHEMA = {
  type: "object",
  $defs: { AccessModel: ACCESS },
  properties: { containsPii: { type: "boolean" }, access: { $ref: "#/$defs/AccessModel" } },
};

const OPTIONS = {
  classifications: ["LOW", "MID", "HIGH"],
  nats: { options: ["XAA", "XBB", "XCC"], mustInclude: ["XAA"] },
  orgs: { options: ["Org A", "Org B"], mustInclude: ["Org A"] },
  groups: { options: ["urn:telicent:groups:team-a"] },
};

describe("extractIdhOptions", () => {
  it("reads the options through a $ref", () => {
    expect(extractIdhOptions(IDH_SCHEMA)).toEqual(OPTIONS);
  });

  it("reads the options through a $ref wrapped in allOf", () => {
    const schema = { ...IDH_SCHEMA, properties: { access: { allOf: [{ $ref: "#/$defs/AccessModel" }] } } };
    expect(extractIdhOptions(schema)).toEqual(OPTIONS);
  });

  it("reads an inline access block", () => {
    expect(extractIdhOptions({ properties: { access: ACCESS } })).toEqual(OPTIONS);
  });

  it("gives no options when the schema has no access block", () => {
    expect(extractIdhOptions({ properties: {} })).toBeNull();
    expect(extractIdhOptions(undefined)).toBeNull();
  });

  it("gives no options when the user may name no nationality", () => {
    const access = {
      ...ACCESS,
      properties: { ...ACCESS.properties, allowedNats: { type: "array", items: { enum: [] } } },
    };
    expect(extractIdhOptions({ properties: { access } })).toBeNull();
  });

  it("gives empty lists for groups and must-include values the schema leaves out", () => {
    const access = {
      properties: {
        classification: { enum: ["LOW"] },
        allowedNats: { items: { enum: ["XAA"] } },
        allowedOrgs: { items: { enum: ["Org A"] } },
      },
    };
    expect(extractIdhOptions({ properties: { access } })).toEqual({
      classifications: ["LOW"],
      nats: { options: ["XAA"], mustInclude: [] },
      orgs: { options: ["Org A"], mustInclude: [] },
      groups: { options: [] },
    });
  });
});

describe("defaultIdhLabel", () => {
  it("starts at the lowest classification with the user's own nationality and organisation", () => {
    expect(defaultIdhLabel(OPTIONS)).toEqual({
      classification: "LOW",
      allowedNats: ["XAA"],
      allowedOrgs: ["Org A"],
      groups: [],
    });
  });

  it("takes the first nationality and organisation when none must be included", () => {
    const options = {
      ...OPTIONS,
      nats: { options: ["XBB", "XAA"], mustInclude: [] },
      orgs: { options: ["Org B"], mustInclude: [] },
    };
    expect(defaultIdhLabel(options)).toMatchObject({ allowedNats: ["XBB"], allowedOrgs: ["Org B"] });
  });
});
