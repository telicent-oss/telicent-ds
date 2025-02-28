import geohash from "../utils/geohash";

describe("test the decode function", () => {
  test("test", () => {
    const value = geohash.decode("gcp0f2we9jsq");
    expect(value).toMatchObject({
      latitude: 50.76021392829716,
      longitude: -1.2983978725969791,
      error: {
        latitude: 8.381903171539307e-8,
        longitude: 1.6763806343078613e-7,
      },
    });
  });
});
