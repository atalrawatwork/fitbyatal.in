// v2: network-first for pages. The old cache-first worker kept serving stale HTML and
// old JS chunks after every deploy (broken pages / old content for returning visitors).
const CACHE_NAME = 'fitbyatal-v2';
const OFFLINE_URLS = ['/'];

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
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).catch(() => caches.match('/')));
  }
  // everything else (JS, CSS, images) is left to the browser / CDN cache
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'FitByAtal', {
      body: data.body || 'New post published.',
      icon: '/images/favicon.png',
    })
  );
});
