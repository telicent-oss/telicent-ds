import axios, { AxiosAdapter, AxiosHeaders } from "axios";
import { withSessionHandling } from "../withSessionHandling";
import { AuthEvent } from "../broadcastChannelService";

jest.mock("../broadcastChannelService", () => {
  const mockListeners = new Set<Function>();
  return {
    AuthEvent: {
      AUTHENTICATED: "authenticated",
      REAUTHENTICATED: "reauthenticated",
      USER_CHANGED: "user-changed",
      UNAUTHORIZED: "unauthorized",
    },
    onAuthEvent: (cb: Function) => {
      mockListeners.add(cb);
      return () => mockListeners.delete(cb);
    },
    broadcastAuthEvent: jest.fn(),
    __fire: (e: string) => mockListeners.forEach((cb) => cb(e)),
  };
});

const { __fire } = jest.requireMock("../broadcastChannelService") as {
  __fire: (event: string) => void;
};

type CapturedCall = {
  body: unknown;
  headers: Record<string, unknown> | undefined;
  method: string | undefined;
};

const flushMicrotasks = () => new Promise((resolve) => setTimeout(resolve, 0));

describe("withSessionHandling 401 retry", () => {
  it("preserves body and headers on the retry after re-auth", async () => {
    const calls: CapturedCall[] = [];

    const authClient = {
      makeAuthenticatedRequest: async (
        _url: string,
        options: Record<string, unknown>
      ) => {
        calls.push({
          body: options.body,
          headers: options.headers as Record<string, unknown> | undefined,
          method: options.method as string | undefined,
        });

        if (calls.length === 1) {
          return new Response(null, { status: 401 });
        }
        return new Response("{}", {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    };

    const instance = axios.create();
    withSessionHandling(
      instance,
      { queryClient: undefined, keysToInvalidate: [] },
      authClient as any
    );

    const adapter = instance.defaults.adapter as AxiosAdapter;

    const requestPromise = adapter({
      url: "/documents",
      method: "post",
      data: { title: "hello" },
      headers: new AxiosHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Custom-Header": "my-value",
      }),
    });

    await flushMicrotasks();

    __fire(AuthEvent.AUTHENTICATED);

    await requestPromise;

    expect(calls).toHaveLength(2);
    expect(calls[1].body).toEqual(calls[0].body);
    expect(calls[1].headers).toEqual(calls[0].headers);
    expect(calls[1].method).toEqual(calls[0].method);
    expect(calls[1].body).toBe("title=hello");
    expect(calls[1].headers).toMatchObject({
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Custom-Header": "my-value",
    });
  });
});
