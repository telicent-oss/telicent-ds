import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

const makeIcon = (path?: string): IconDefinition =>
  ({
    icon: [512, 512, [], "", path],
  } as unknown as IconDefinition);

describe("fa icon resolver", () => {
  let resolveFaIconPath: any;
  let ensureFaIconPath: any;
  let registerFaIconLoader: any;

  beforeEach(() => {
    jest.resetModules();

    ({
      resolveFaIconPath,
      ensureFaIconPath,
      registerFaIconLoader,
    } = require("../faIconResolver"));
  });

  /* ------------------------------------------------------------- */
  /* resolveFaIconPath                                             */
  /* ------------------------------------------------------------- */

  describe("resolveFaIconPath", () => {
    it("returns missing for undefined", () => {
      expect(resolveFaIconPath(undefined)).toEqual({ status: "missing" });
    });

    it("resolves IconDefinition synchronously", () => {
      const icon = makeIcon("XYZ");

      expect(resolveFaIconPath(icon)).toEqual({
        path: "XYZ",
        status: "ready",
      });
    });

    it("returns invalid if IconDefinition has no path", () => {
      const icon = makeIcon(undefined);

      expect(resolveFaIconPath(icon)).toEqual({
        path: undefined,
        status: "invalid",
      });
    });

    it("returns loading when inflight exists", async () => {
      registerFaIconLoader(async () => makeIcon("A"));

      const promise = ensureFaIconPath("custom fa-test");

      expect(resolveFaIconPath("custom fa-test")).toEqual({
        status: "loading",
      });

      await promise;
    });

    it("returns ready after cached load", async () => {
      registerFaIconLoader(async () => makeIcon("ABC"));

      await ensureFaIconPath("custom fa-test");

      expect(resolveFaIconPath("custom fa-test")).toEqual({
        path: "ABC",
        status: "ready",
      });
    });
  });

  /* ------------------------------------------------------------- */
  /* ensureFaIconPath                                              */
  /* ------------------------------------------------------------- */

  describe("ensureFaIconPath", () => {
    it("loads via registered loader", async () => {
      registerFaIconLoader(async () => makeIcon("LOADED"));

      const path = await ensureFaIconPath("custom fa-test");

      expect(path).toBe("LOADED");
    });

    it("falls back to free loader when no custom loader resolves", async () => {
      const path = await ensureFaIconPath("fa-solid fa-user");

      expect(typeof path).toBe("string"); // free loader returns real path
    });

    it("uses cache after first load", async () => {
      const loader = jest.fn(async () => makeIcon("CACHE"));
      registerFaIconLoader(loader);

      await ensureFaIconPath("custom fa-test");
      await ensureFaIconPath("custom fa-test");

      expect(loader).toHaveBeenCalledTimes(1);
    });

    it("deduplicates inflight loads", async () => {
      const loader = jest.fn(
        async () =>
          new Promise<IconDefinition>((resolve) =>
            setTimeout(() => resolve(makeIcon("DUP")), 10)
          )
      );

      registerFaIconLoader(loader);

      const p1 = ensureFaIconPath("custom fa-test");

      const result = await p1;

      expect(result).toBe("DUP");
      expect(loader).toHaveBeenCalledTimes(1);
    });
  });

  /* ------------------------------------------------------------- */
  /* Loader precedence                                             */
  /* ------------------------------------------------------------- */

  describe("loader precedence", () => {
    it("app loaders override default loaders", async () => {
      registerFaIconLoader(async () => makeIcon("APP"));

      const path = await ensureFaIconPath("fa-solid fa-user");

      expect(path).toBe("APP");
    });

    it("falls through when first loader returns undefined", async () => {
      const loader1 = jest.fn(async () => undefined);
      const loader2 = jest.fn(async () => makeIcon("FALLTHROUGH"));

      // order matters: last registered runs first
      registerFaIconLoader(loader2);
      registerFaIconLoader(loader1);

      const path = await ensureFaIconPath("custom fa-test");

      expect(loader1).toHaveBeenCalled();
      expect(loader2).toHaveBeenCalled();
      expect(path).toBe("FALLTHROUGH");
    });
  });

  describe("faIconResolver – coverage branches", () => {
    let resolveFaIconPath: any;
    let ensureFaIconPath: any;
    let registerFaIconLoader: any;

    beforeEach(() => {
      jest.resetModules();

      ({
        resolveFaIconPath,
        ensureFaIconPath,
        registerFaIconLoader,
      } = require("../faIconResolver"));
    });

    /* ------------------------------------------------------------ */
    /* classToIconName edge branches                                */
    /* ------------------------------------------------------------ */

    it("handles FA class with no icon name token", async () => {
      // hits `parts[1] ?? ""`
      await ensureFaIconPath("fa-solid");
    });

    it("handles dashed icon names correctly", async () => {
      registerFaIconLoader(async () => ({
        icon: [512, 512, [], "", "PATH"],
      }));

      const result = await ensureFaIconPath("fa-solid fa-user-circle");

      expect(result).toBe("PATH");
    });

    /* ------------------------------------------------------------ */
    /* freeLoader branches                                          */
    /* ------------------------------------------------------------ */

    it("covers free regular loader branch", async () => {
      const result = await ensureFaIconPath("fa-regular fa-user");

      expect(typeof result).toBe("string");
    });

    it("handles invalid icon candidate", async () => {
      registerFaIconLoader(async () => ({} as any));

      const result = await ensureFaIconPath("custom fa-invalid");

      expect(result).toBeUndefined();
    });

    it("handles loader throwing error", async () => {
      registerFaIconLoader(async () => {
        throw new Error("boom");
      });

      await expect(ensureFaIconPath("custom fa-error")).rejects.toThrow("boom");
    });

    /* ------------------------------------------------------------ */
    /* resolveFaIconPath cache edge branches                        */
    /* ------------------------------------------------------------ */

    it("returns invalid when cache contains undefined", async () => {
      await ensureFaIconPath("custom fa-missing");

      const res = resolveFaIconPath("custom fa-missing");

      expect(res.status).toBe("invalid");
    });

    it("returns missing when not cached or inflight", () => {
      const res = resolveFaIconPath("custom fa-never");

      expect(res.status).toBe("missing");
    });

    /* ------------------------------------------------------------ */
    /* inflight branch coverage                                     */
    /* ------------------------------------------------------------ */

    it("deduplicates inflight loads", async () => {
      const loader = jest.fn(
        async () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ icon: [0, 0, [], "", "X"] }), 10)
          )
      );

      registerFaIconLoader(loader);

      const p1 = ensureFaIconPath("custom fa-load");
      const p2 = ensureFaIconPath("custom fa-load");

      await Promise.all([p1, p2]);

      expect(loader).toHaveBeenCalledTimes(1);
    });
  });
});
