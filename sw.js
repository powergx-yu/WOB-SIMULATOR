const CACHE_NAME = 'ccr-fluid-lab-v2';
const urlsToCache = [
  './CCR_Fluid_Lab_v2_PWA.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});
