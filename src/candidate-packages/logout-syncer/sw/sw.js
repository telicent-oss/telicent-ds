/// <reference lib="webworker" />
console.info("sw.js version: {{rollup:pkg.version}}");
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim())
);

self.addEventListener("message", (event) => {
  if (event.data?.type === "sign-out-request") {
    self.clients.matchAll({ includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        client.postMessage({ type: "logout" });
      }
    });
  }
});

/**
 * @param {*} message message to send to _other_ tabs/pages
 * @param {*} sourceClientId Normally would pass entire event, but using
 *    pass-by-value of single property, as events can mutate/garbage collect.
 */
async function postMessageAll(message, sourceClientId) {
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of allClients) {
    if (client.id !== sourceClientId) {
      client.postMessage(message);
    }
  }
}

const postMessageAllThrottled = throttle(postMessageAll, 10_000);

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") return;

  const url = new URL(event.request.url);

  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  event.respondWith(
    (async () => {
      try {
        const res = await fetch(event.request.clone());

        if (res.status === 401) {
          event.waitUntil(
            postMessageAllThrottled({
              type: "logout-likely",
              url: url.href,
            },
            event.clientId
          )
          );
        }

        // on opaqueredirect, likely redirected to login page
        if (res.status === 0 && res.type === "opaqueredirect") {
          event.waitUntil(
            postMessageAllThrottled(
              { type: "logout-likely", url: url.href },
              event.clientId
            )
          );
        }
        return res;
      } catch (error) {
        /**
         * IDEA Force logout on network errors etc
         * BACKGROUND For UX purposes we don't necessary count ANY error as "logout-likely"
         * HOW 
         *  - Handle non-401 errors e.g. network loss, timeouts 5xxs, 404s:
         *  - event.WaitUntil postMessageAllThrottled({ type: "offline-or-network-error" , error })
         */
        return Response.error();
      }
    })()
  );
});

/**
 * Small, simple throttle fn
 */
function throttle(fn, duration) {
  let lastCalled = 0;
  let timeoutId;

  return function throttled(...args) {
    const now = Date.now();
    const remaining = duration - (now - lastCalled);

    if (remaining <= 0) {
      clearTimeout(timeoutId);
      lastCalled = now;
      fn.apply(this, args);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCalled = Date.now();
        fn.apply(this, args);
      }, remaining);
    }
  };
}
