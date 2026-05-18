import {
  calculateBounds,
  checkIsValidPosition,
  getCoordinates,
  getIconLabel,
  recursiveFlatten,
} from "./helper";
import { AUSTRIA, MOLDOVA } from "../sampleData";
import { ARGA_ATTACK, BOULAY_ATTACK } from "../sampleData/markers";

describe("Helper functions", () => {
  describe("getIconLabel", () => {
    it("should return namespace from a uri", () => {
      expect(getIconLabel(ARGA_ATTACK.uri)).toBe("SUD11675");
    });
    it("should return the full uri if it can't work out the namespace", () => {
      expect(getIconLabel("http://idonthavea.hash")).toBe(
        "http://idonthavea.hash"
      );
    });
    it("should throw an error if the uri is invalid", () => {
      const consoleSpy = jest.spyOn(console, "error").mockReturnValue();
      getIconLabel("notAUri");
      expect(consoleSpy).toHaveBeenCalledWith(
        "URI 'notAUri' is not valid, TypeError: Invalid URL: notAUri"
      );
    });
  });

  describe("checkIsValidPosition", () => {
    it("should pass check if an array has a length of 2 AND the contents of each element does not contian another array", () => {
      expect(checkIsValidPosition([1, 2])).toBe(true);
    });

    it("should fail check if an array has a length of 2 AND the contents of each element DOES contian another array", () => {
      expect(checkIsValidPosition([[1], [2]])).toBe(false);
    });

    it("should fail check if the array has a length other than 2", () => {
      expect(checkIsValidPosition([1])).toBe(false);
      expect(checkIsValidPosition([1, 2, 3])).toBe(false);
    });
  });

  describe("recursiveFlatten", () => {
    it("should take a nested array and flatten it to a valid position array", () => {
      expect(
        recursiveFlatten([
          [
            [1, 2],
            [3, 4],
          ],
          [
            [3, 4],
            [
              [4, 5],
              [6, 7],
            ],
          ],
        ])
      ).toEqual([
        [1, 2],
        [3, 4],
        [3, 4],
        [4, 5],
        [6, 7],
      ]);
    });
  });
  describe("getCoordinates", () => {
    it("should get coordinates in a array of tuples", () => {
      expect(getCoordinates(MOLDOVA.geometry)).toMatchSnapshot(
        "moldova-coordinates"
      );
      expect(getCoordinates(AUSTRIA.geometry)).toMatchSnapshot(
        "austria-coordinates"
      );
    });
    it("should error if an invalid polygon is passed in", () => {
      const badGeom = Object.assign({}, AUSTRIA.geometry);
      badGeom.type = "Point";
      expect(() => getCoordinates(badGeom)).toThrow(
        "Unsupported geometry type"
      );
    });
  });

  describe("calculateBounds", () => {
    it("should calculate the bounds of markers", () => {
      expect(calculateBounds([BOULAY_ATTACK])).toMatchInlineSnapshot(`
        L {
          "_ne": ec {
            "lat": 13.33740234375,
            "lng": 24.36767578125,
          },
          "_sw": ec {
            "lat": 13.33740234375,
            "lng": 24.36767578125,
          },
        }
      `);
      expect(calculateBounds([ARGA_ATTACK])).toMatchInlineSnapshot(`
        L {
          "_ne": ec {
            "lat": 12.76611328125,
            "lng": 24.14794921875,
          },
          "_sw": ec {
            "lat": 12.76611328125,
            "lng": 24.14794921875,
          },
        }
      `);

      // Note the the _ne matches the boulay attack
      // While the new _sw matches the arga attack
      expect(calculateBounds([ARGA_ATTACK, BOULAY_ATTACK]))
        .toMatchInlineSnapshot(`
        L {
          "_ne": ec {
            "lat": 13.33740234375,
            "lng": 24.36767578125,
          },
          "_sw": ec {
            "lat": 12.76611328125,
            "lng": 24.14794921875,
          },
        }
      `);
    });
    it("should calculate polygons bounds", () => {
      expect(calculateBounds([], [AUSTRIA])).toMatchInlineSnapshot(`
        L {
          "_ne": ec {
            "lat": 49.02,
            "lng": 17.161,
          },
          "_sw": ec {
            "lat": 46.372,
            "lng": 9.531,
          },
        }
      `);

      expect(calculateBounds([], [MOLDOVA])).toMatchInlineSnapshot(`
        L {
          "_ne": ec {
            "lat": 48.491,
            "lng": 30.138,
          },
          "_sw": ec {
            "lat": 45.467,
            "lng": 26.616,
          },
        }
      `);
    });

    it("should calculate the bounds of polygons and bounds", () => {
      expect(calculateBounds([ARGA_ATTACK, BOULAY_ATTACK], [AUSTRIA, MOLDOVA]))
        .toMatchInlineSnapshot(`
        L {
          "_ne": ec {
            "lat": 49.02,
            "lng": 30.138,
          },
          "_sw": ec {
            "lat": 12.76611328125,
            "lng": 9.531,
          },
        }
      `);
    });
  });
});
