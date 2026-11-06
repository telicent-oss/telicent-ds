import { applyLoaderHead, applyLoaderMessage, toScript } from "../loaderRuntime";

const html = document.documentElement;

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  delete html.dataset.theme;
  window.history.pushState({}, "", "/");
});

afterEach(() => jest.restoreAllMocks());

describe("applyLoaderHead", () => {
  it("goes light only when the user stored light", () => {
    localStorage.setItem("app.themeMode", "light");
    applyLoaderHead("app.themeMode", "start");
    expect(html.dataset.theme).toBe("light");
  });

  it.each([
    ["no stored value", "app.themeMode", null],
    ["a stored dark value", "app.themeMode", "dark"],
    ["a dark-only app", null, "light"],
  ])("stays dark with %s", (_, key, stored) => {
    if (stored) localStorage.setItem("app.themeMode", stored);
    applyLoaderHead(key, "start");
    expect(html.dataset.theme).toBe("dark");
  });

  it("stays dark when storage throws", () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    applyLoaderHead("app.themeMode", "start");
    expect(html.dataset.theme).toBe("dark");
  });

  it("resumes the logo animation from the stored start time", () => {
    sessionStorage.setItem("start", String(Date.now() - 2000));
    applyLoaderHead(null, "start");
    const delay = parseFloat(html.style.getPropertyValue("--logo-animation-delay"));
    expect(delay).toBeLessThanOrEqual(-2);
  });

  it("records a start time on first load", () => {
    applyLoaderHead(null, "start");
    expect(sessionStorage.getItem("start")).not.toBeNull();
  });
});

describe("applyLoaderMessage", () => {
  beforeEach(() => {
    document.body.innerHTML = '<p id="msg">Loading…</p>';
  });

  it("swaps the message on /callback", () => {
    window.history.pushState({}, "", "/graph/callback");
    applyLoaderMessage("msg", "Logging you in…");
    expect(document.getElementById("msg")?.textContent).toBe("Logging you in…");
  });

  it("leaves the message alone elsewhere", () => {
    applyLoaderMessage("msg", "Logging you in…");
    expect(document.getElementById("msg")?.textContent).toBe("Loading…");
  });
});

it("toScript calls the function with JSON-serialised args", () => {
  const fn = (a: string | null) => a;
  expect(toScript(fn, ["key", null])).toMatch(/\)\("key", null\);\n$/);
});
