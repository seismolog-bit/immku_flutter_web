'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "5a6085c821ac10c29142133f35e954f2",
"/assets/FontManifest.json": "cc1a521ccfd5705915ca1af9c6fee5b7",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/images/icons/actionbar_checkin.png": "e504a5d11816367669f9a3c53f12e320",
"/assets/images/icons/actionbar_search.png": "77c43ab0e8cbe431c41ec8f5bcb84e81",
"/assets/images/icons/book-grey.png": "9ac199330d35cf346af9a7cf25c11cf0",
"/assets/images/icons/book.png": "2a5d5ced09cb7fa37fd1e9ca4c9e9629",
"/assets/images/icons/bookshelf_add.png": "72c6ec5b6af3210afc182096a7d9b2b2",
"/assets/images/icons/bookshelf_bg.png": "338aa45ada122177270326f8812f462b",
"/assets/images/icons/bookshelf_cloud_0.png": "75fd283bba358487702ef8d4fa8c0d4c",
"/assets/images/icons/bookshelf_cloud_1.png": "75b92643653bfd203cda2e8d99377c7d",
"/assets/images/icons/bookshelf_cloud_2.png": "1150f408c53b4b1751b7c3a6208c5ff8",
"/assets/images/icons/bookshelf_cloud_3.png": "10a64e1707e56603d5343303f209b03c",
"/assets/images/icons/bookshelf_continue_read.png": "b8abab7f5c3a15b189c0c1e5f2192091",
"/assets/images/icons/categories-grey.png": "9547330b722f841f5f997f68be16d83a",
"/assets/images/icons/categories.png": "23aa301fb601c984500c3fa17cf20987",
"/assets/images/icons/chat.png": "53ec2691894615dbd8b838e3c7c9121b",
"/assets/images/icons/contact.png": "645972e18f800131a5872bbc7be17dc2",
"/assets/images/icons/download.png": "cbb153556434ef5ca8e0736e2d60ce37",
"/assets/images/icons/fog-at-night.png": "b2bf3e29779fe0b82f6a0ba702860897",
"/assets/images/icons/instagram.png": "4c975dc2d632799c2ae3e3a6854ac748",
"/assets/images/icons/lock.png": "51a81eaa8b07d959d3a35e4b2d106119",
"/assets/images/icons/moon.png": "8b5a3580eef8221dda1d22806973ee2d",
"/assets/images/icons/report.png": "6bb8fbd8a4078d324f1661a09aca55cd",
"/assets/images/icons/settings.png": "866c81c04bf34a7186e3091c97ddf47b",
"/assets/images/icons/share-app.png": "7ef8981b84d0cf18594b0f8e82647e7b",
"/assets/images/icons/share-bg.png": "05c63691553320b0c3994960251c1fe6",
"/assets/images/icons/share-white.png": "ed20bc51d8c09b659f4a58b77bde51a4",
"/assets/images/icons/share.png": "3695666952da1a65691ccbfdf8b0e1a2",
"/assets/images/icons/star.png": "2bf687fdb7d203b6e340cd85c124dd6a",
"/assets/images/icons/sun-day.png": "f5a1ce091abb430f87018fa5c12f3c1c",
"/assets/images/logo-immku-grey.png": "61862769e42a7161106fa92843b3b454",
"/assets/images/logo-immku.png": "2343519ca5743dea9d2a7789ae488c9d",
"/assets/images/logo.png": "4dc5b7f995b1901c5f784db2da9b79cf",
"/assets/images/pavicon.png": "772d659ce0772d91cea3b6dbdb49dae7",
"/assets/images/pavicon_grey.png": "dd448416cb9aaba47cf59a196cd2f207",
"/assets/LICENSE": "8d83c307993b90bbf7d69c0f75a1257c",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "f9a0e9f819337e4a26a7ddbe1d32492b",
"/main.dart.js": "20d58a4d4193c7345d727768bd10f117",
"/manifest.json": "3cb8fa332b23eade0808186ba0142659"
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
