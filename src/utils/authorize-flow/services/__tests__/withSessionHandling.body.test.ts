import type AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";
import axios, { AxiosAdapter, AxiosHeaders } from "axios";

import { AuthEvent } from "../broadcastChannelService";
import { withSessionHandling } from "../withSessionHandling";

jest.mock("../broadcastChannelService", () => {
  const mockListeners = new Set<(mockEvent: string) => void>();
  return {
    AuthEvent: {
      AUTHENTICATED: "authenticated",
      UNAUTHORIZED: "unauthorized",
    },
    onAuthEvent: (cb: (mockEvent: string) => void) => {
      mockListeners.add(cb);
      return () => mockListeners.delete(cb);
    },
    broadcastAuthEvent: jest.fn(),
    __fire: (e: string) => mockListeners.forEach((cb) => cb(e)),
  };
});

const { __fire } = jest.requireMock("../broadcastChannelService") as {
  __fire: (mockEvent: string) => void;
};

const flushMicrotasks = () => new Promise((resolve) => setTimeout(resolve, 0));

const adapterFor = (...responses: (Response | Error)[]) => {
  const authClient = {
    makeAuthenticatedRequest: jest.fn(async () => {
      const next = responses.shift();
      if (next instanceof Error) throw next;
      return next;
    }),
  };
  const instance = axios.create();
  withSessionHandling(
    instance,
    { queryClient: undefined, keysToInvalidate: [] },
    authClient as unknown as AuthServerOAuth2Client
  );
  const adapter = instance.defaults.adapter as AxiosAdapter;
  return () =>
    adapter({
      url: "https://api.example/sparql",
      method: "post",
      headers: new AxiosHeaders(),
    });
};

const text = (body: string, status: number) =>
  new Response(body, { status, headers: { "content-type": "text/plain" } });

describe("withSessionHandling response bodies", () => {
  it("keeps the real status and text for a non-JSON error", async () => {
    const send = adapterFor(
      text("Parse error: Lexical error at line 1, column 6.", 400)
    );
    await expect(send()).rejects.toMatchObject({
      response: {
        status: 400,
        data: "Parse error: Lexical error at line 1, column 6.",
      },
    });
  });

  it("still parses JSON bodies", async () => {
    const send = adapterFor(
      new Response('{"ok":true}', {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );
    await expect(send()).resolves.toMatchObject({
      status: 200,
      data: { ok: true },
    });
  });

  it("resolves non-JSON success bodies as text", async () => {
    const send = adapterFor(text("<a> <b> <c> .", 200));
    await expect(send()).resolves.toMatchObject({
      status: 200,
      data: "<a> <b> <c> .",
    });
  });

  it("returns null for an empty body", async () => {
    const send = adapterFor(new Response(null, { status: 204 }));
    await expect(send()).resolves.toMatchObject({ status: 204, data: null });
  });

  it("rejects network failures without a made-up response", async () => {
    const send = adapterFor(new TypeError("Failed to fetch"));
    const error = await send().catch((e: unknown) => e);
    expect(error).toMatchObject({ message: "Failed to fetch" });
    expect(error).not.toHaveProperty("response");
  });

  it("keeps a text body on the retry after re-auth", async () => {
    const send = adapterFor(
      new Response(null, { status: 401 }),
      text("plain", 200)
    );
    const pending = send();
    await flushMicrotasks();
    __fire(AuthEvent.AUTHENTICATED);
    await expect(pending).resolves.toMatchObject({
      status: 200,
      data: "plain",
    });
  });
});
