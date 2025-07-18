import { PreferredLabelCache } from "../index";
jest.mock("@telicent-oss/ontologyservice", () => ({
  OntologyService: jest.fn().mockImplementation(() => ({
    getAllPreferredLabels: jest.fn().mockResolvedValue([
      {
        name: { value: "http://ies.data.gov.uk/ontology/ies4#Person" },
        label: { value: "Person" },
      },
    ]),
  })),
}));

import { OntologyService } from "@telicent-oss/ontologyservice";

describe("preferredLabels", () => {
  beforeAll(() => {
    const ontologyService = new OntologyService("http://testcom", "ontology");
    PreferredLabelCache.init(ontologyService);
  });

  it("should initialise and return the correct value", () => {
    const got = PreferredLabelCache.get(
      "http://ies.data.gov.uk/ontology/ies4#Person"
    );
    expect(got).toBe("Person");
  });

  // new URL is not behaving as expected. It returns a {}. When I try the same
  // thing manually in the browser it works as expected.
  // Leaving this test in to show the intent. Skipping for now.
  it.skip("should get the human-friendly type from the uri if there is no label available", () => {
    const got = PreferredLabelCache.get(
      "http://ies.data.gov.uk/ontology/ies4#RegionOfSpace"
    );
    expect(got).toBe("Region Of Space");
  });

  it("should return an empty string if no value is provided", () => {
    // @ts-ignore - not passing required argument on purpose
    const got = PreferredLabelCache.get();
    expect(got).toBe("");
  });
});
