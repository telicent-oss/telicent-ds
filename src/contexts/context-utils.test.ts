import { getOntologyClass } from "./context-utils";

describe("context utils - getOntologyClass()", () => {
  test("returns DoctorAppointment when uri is 'http://telicent.io/ontology/DoctorAppointment'", () => {
    const fragment = getOntologyClass("http://telicent.io/ontology/DoctorAppointment");
    expect(fragment).toBe("DoctorAppointment");
  });
});
