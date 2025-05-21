/// <reference lib="webworker" />
console.log('sw.js version: {{rollup:pkg.version}}');
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event =>
  event.waitUntil(self.clients.claim())
);

self.addEventListener('message', event => {
  if (event.data?.type === 'sign-out-request') {
    self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
      for (const client of clients) {
        client.postMessage({ type: 'logout' });
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

self.addEventListener("fetch", event => {
  const { protocol } = new URL(event.request.url);
  if (protocol !== "http:" && protocol !== "https:") return;

  event.respondWith((async () => {
    const res = await fetch(event.request.clone());

    if (res.status === 401) {
      await postMessageAll({ type: "logout", url: event.request.url });
    }
    else if (
      res.status === 0 &&
      // https://developer.mozilla.org/en-US/docs/Web/API/Response/type#opaqueredirect
      res.type === 'opaqueredirect'
    ) {
      await postMessageAll({ type: "logout-likely", url: event.request.url });
    }
    else if (res.status >= 200 && res.status < 300) {
      await postMessageAll({ type: "authenticated", url: event.request.url });
    }

    return res;
  })());
});
