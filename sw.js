self.addEventListener('install', event => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            return caches.delete(cache);
          })
        );
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const newHeaders = new Headers(response.headers);
          newHeaders.set('Cache-Control', 'no-store');
          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
          });
        })
        .catch(() => caches.match(event.request))
    );
  });