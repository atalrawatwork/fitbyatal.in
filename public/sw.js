const CACHE_NAME = 'fitbyatal-v1';
const OFFLINE_URLS = ['/', '/tools/tools', '/blogs/blog'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match('/')))
  );
});

// Web push (wire up with OneSignal's SDK on the client; this handler
// covers plain Push API messages if you roll your own instead).
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'FitByAtal', {
      body: data.body || 'New post published.',
      icon: '/images/favicon.png',
    })
  );
});
