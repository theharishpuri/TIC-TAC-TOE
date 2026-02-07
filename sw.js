const CACHE_NAME = "my-pwa-v1";

const filesToCache = [
  "/",
  "index.html",
  "games.html",
  "style.css",
  "game.js",
  "script.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

// Install service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(filesToCache))
  );
});

// Fetch files from cache first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker Registered"));
}
