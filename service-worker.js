const cacheName = "my-web-app-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./assets/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
