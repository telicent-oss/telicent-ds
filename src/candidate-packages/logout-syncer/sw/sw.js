/// <reference lib="webworker" />
console.log("sw.js version: {{rollup:pkg.version}}");
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

async function postMessageAll(message) {
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of allClients) {
    client.postMessage(message);
  }
}

const postMessageAllThrottled = throttle(postMessageAll, 10_000);

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // TODO this is far too greedy, need something like
  // if (ALLOWED_ROOTS.find(el => window.location.href.includes(el) ) return;

  event.respondWith(fetch(event.request.clone()));

  event.waitUntil(
    (async () => {
      try {
        const res = await fetch(event.request.clone());
        if (res.status === 401) {
          await postMessageAllThrottled({
            type: "logout-likely",
            url: url.href,
          });
        }
        if (res.status === 0 && res.type === "opaqueredirect") {
          await postMessageAll({ type: "logout-likely", url: url.href });
        }
      } catch (err) {
        await postMessageAll({ type: "logout-likely", error: err.message });
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
