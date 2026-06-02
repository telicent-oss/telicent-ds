import axios, { AxiosAdapter, AxiosHeaders } from "axios";
import { withSessionHandling } from "../withSessionHandling";

describe("withSessionHandling header normalization", () => {
  let capturedHeaders: Record<string, unknown> | undefined;

  beforeEach(() => {
    capturedHeaders = undefined;
  });

  it("drops undefined content-type before forwarding headers", async () => {
    const authClient = {
      makeAuthenticatedRequest: async (
        _url: string,
        options: Record<string, unknown>
      ) => {
        capturedHeaders = options.headers as Record<string, unknown>;
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

    await adapter({
      url: "/test",
      method: "post",
      data: { foo: "bar" },
      headers: new AxiosHeaders({
        "Content-Type": undefined as unknown as string,
      }),
    });

    expect(capturedHeaders).toMatchInlineSnapshot(`{}`);
  });

  it("passes through defined headers when forwarding headers", async () => {
    const authClient = {
      makeAuthenticatedRequest: async (
        _url: string,
        options: Record<string, unknown>
      ) => {
        capturedHeaders = options.headers as Record<string, unknown>;
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

    await adapter({
      url: "/test",
      method: "post",
      data: { foo: "bar" },
      headers: new AxiosHeaders({
        "X-Custom-Header": "my-value",
      }),
    });

    expect(capturedHeaders).toMatchInlineSnapshot(`
      {
        "X-Custom-Header": "my-value",
      }
    `);
  });
});
