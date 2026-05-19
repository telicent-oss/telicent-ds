import { beforeEach, describe, expect, it } from "@jest/globals";
import { isAuthRedirect } from "./isAuthRedirectUri";

const setLocation = (href: string) => {
  const url = new URL(href);
  Object.defineProperty(window, "location", {
    configurable: true,
    value: {
      href: url.href,
      origin: url.origin,
      pathname: url.pathname,
    },
    writable: true,
  });
};

const config = {
  clientId: "demo",
  authServerUrl: "https://auth.example.com",
  redirectUri: "http://localhost:3000/search/callback",
  popupRedirectUri: "http://localhost:3000/search/auth-redirect-uri",
  scope: "openid profile",
  onLogout: () => {},
};

describe("isAuthRedirect", () => {
  beforeEach(() => {
    setLocation("http://localhost:3000/search/callback");
  });

  it("matches when current URL equals configured redirect", () => {
    const match = isAuthRedirect({
      config,
      url: window.location.href,
    });

    expect(match).toBe(true);
  });

  it("matches when current URL equals configured popup redirect", () => {
    setLocation("http://localhost:3000/search/auth-redirect-uri");

    const match = isAuthRedirect({
      config,
      url: window.location.href,
    });

    expect(match).toBe(true);
  });

  it("does not match when current URL differs", () => {
    setLocation("http://localhost:3000/search/other");

    const match = isAuthRedirect({
      config,
      url: window.location.href,
    });

    expect(match).toBe(false);
  });
});
