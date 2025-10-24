self.addEventListener('install', e => {
  e.waitUntil(caches.open('stilx-cache').then(cache => {
    return cache.addAll(['./', './index.html', './music.wav']);
  }));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});