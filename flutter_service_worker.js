'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "bf9272dae869b1d6a8d4514ed0c81f20",
"manifest.json": "44a1e45d546dd676e76b9832dbc318fd",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/asset/fonts/Galada-Regular.ttf": "e52d76f8cf4d7d12b20723322d758d16",
"assets/LICENSE": "b4766e0006c5b47b19add14b2d5f80a5",
"assets/FontManifest.json": "116908f57f9f8e25c2d55a308a3d476e",
"assets/AssetManifest.json": "2432f1ce315af3ae82aa2ba89dfaa2c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/Img/icon.png": "526076c3fae5ac396bfd7e0a86c20dbf",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"index.html": "546024ce91aac3f0f7bd87b5a19aa81a",
"/": "546024ce91aac3f0f7bd87b5a19aa81a",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
