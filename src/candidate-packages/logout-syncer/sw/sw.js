// public/sw.js
/// <reference lib="webworker" />

const CACHE_NAME = 'app-cache-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  console.log('[SW] install');
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.add(OFFLINE_URL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW] activate...');
  event.waitUntil(
    caches
      .keys()
      // TODO Delete cache stuff?
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim())
      .then(() => console.log('[SW] activated')),
  );
});

async function postMessageAll(message) {
  const clientsList = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clientsList) {
    client.postMessage(message);
  }
}

/* 401-only pass-through fetch handler ---------------------------- */
self.addEventListener('fetch', event => {
    console.log('[SW] fetch');
    const { protocol } = new URL(event.request.url);
    if (protocol !== 'http:' && protocol !== 'https:') return;          // ignore chrome-extension:// etc.
  
    event.respondWith((async () => {
      const res = await fetch(event.request);                           // default network behaviour
      if (res.type !== 'opaque' && res.status === 401) {
        await postMessageAll({ type: 'logout', url: event.request.url });
    } else if (res.status >= 200 && res.status < 300) {
        await postMessageAll({ type: 'authenticated', url: event.request.url });
      }
      return res;                                                       // hand back untouched response
    })());
  });