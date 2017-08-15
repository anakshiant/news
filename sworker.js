var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'a.html',
  'app.config.js',
  'app.module.js',
  'channel.controller.js',
  'channel.service.js',
  'cover.png',
  'ico.png',
  'icon.png',
  'index.html',
  'latest.html',
  'news.latest.controller.js',
  'news.popular.controller.js',
  'news.top.controller.js',
  'part.controller.js',
  'part.html',
  'popular.html',
  'sidebar.controller.js',
  'top.html',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});