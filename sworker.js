var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/app.config.js',
  '/app.module.js',
  '/channel.controller.js',
  '/channel.service.js',
  '/news.latest.controller.js',
  '/news.popular.controller.js',
  '/news.top.controller.js',
  '/part.controller.js',
  '/sidebar.controller.js',
  '/a.html',
  '/index.html',
  '/latest.html',
  '/part.html',
  '/popular.html',
  '/top.html'
  '/a.jpg',


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