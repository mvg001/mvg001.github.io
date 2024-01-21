'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"version.json": "59f09033a2e6d8bb2fe6465b2bd8e1e1",
"index.html": "e3cb44f8b74bbd0fc081388cd1e338e5",
"/": "e3cb44f8b74bbd0fc081388cd1e338e5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "4feb2c6188400bd864125b1b119e3592",
"assets/AssetManifest.json": "4eb4c929b432981660db19e1785392e8",
"assets/NOTICES": "17ef40d87383468382df35ea2558b203",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "877d498535ffc0898c70d2d78f4affe0",
"assets/fonts/MaterialIcons-Regular.otf": "ceac343873d83940fc7337e60bf32a27",
"assets/assets/images/emoji_u1f99a.svg.vec": "2f4ff715cadb74d094c16775c24182f4",
"assets/assets/images/emoji_u1f3c0.svg.vec": "9eadb89a03f19e31be341a3efa809ec3",
"assets/assets/images/emoji_u1f986.svg.vec": "f6ae83aa82688838ca8480655156253b",
"assets/assets/images/emoji_u1f6e9.svg.vec": "4dbfbebb67315d961aa280d7ee40caa0",
"assets/assets/images/emoji_u1f381.svg.vec": "b364358447e694d5d9bd8f9c24cf8292",
"assets/assets/images/emoji_u1fa91.svg.vec": "c494645853478340aeb2c3924c0ebd96",
"assets/assets/images/emoji_u1f680.svg.vec": "961640944e08858e516733c220055e7d",
"assets/assets/images/emoji_u1fa81.svg.vec": "3cd33f82e0bd33338e064ec2092576d9",
"assets/assets/images/emoji_u1fab4.svg.vec": "e5a8c28497a4244703816e72b57111e5",
"assets/assets/images/emoji_u1f41e.svg.vec": "22415e0f81906f8bf329dfe5f8bd5a56",
"assets/assets/images/emoji_u1f9fb.svg.vec": "1529a85826b7b169353765402913f8c3",
"assets/assets/images/emoji_u1f369.svg.vec": "0a80104ef9f833f4dab73728f46348bd",
"assets/assets/images/emoji_u1f352.svg.vec": "37407e127725b762e45305ef220fe8ea",
"assets/assets/images/emoji_u1f427.svg.vec": "f9e24729f07a4c8124448cf27da42f90",
"assets/assets/images/emoji_u1f412.svg.vec": "5d3504ac2da1301c3077edafbca41a8f",
"assets/assets/images/emoji_u1f3af.svg.vec": "278504c1dd260cf24f7b00adad1e071a",
"assets/assets/images/emoji_u1fabb.svg.vec": "f5916b08cbba40960f09b5bb5964e2a6",
"assets/assets/images/emoji_u1f3a0.svg.vec": "3e559151b4d75e4e6f76ecc73f4102f8",
"assets/assets/images/emoji_u1f9c1.svg.vec": "91b02d108c0e61d606a8e85d863100cc",
"assets/assets/images/emoji_u1f992.svg.vec": "ece8b8ab0ce19b6fb1384b2cc6e692e6",
"assets/assets/images/emoji_u1f335.svg.vec": "7616970ebc3f23e7229d799549d0e29c",
"assets/assets/images/emoji_u2615.svg.vec": "363e5a6d41c9573dbf824287633fcd11",
"assets/assets/images/emoji_u1f99c.svg.vec": "e19e48234308fe3e8961c6462167011e",
"assets/assets/images/emoji_u1f354.svg.vec": "868653bd31c6f535e6269759d83af07b",
"assets/assets/images/emoji_u1f6f5.svg.vec": "456ea285ebd03c7d4f883f4205db08cd",
"assets/assets/images/emoji_u1f9f8.svg.vec": "fa2ce451d09d1e804ad261e0efdcb9ce",
"assets/assets/images/emoji_u1f5dd.svg.vec": "eaf095c915631962bd852c7fa3baea68",
"assets/assets/images/emoji_u1f407.svg.vec": "2ddc3bb7ebcf82e1abfc8140a2f9f395",
"assets/assets/images/emoji_u1f349.svg.vec": "c28017c04c8b42b77f8c02d223f53134",
"assets/assets/images/emoji_u1f426.svg.vec": "cc5207880115d5f3a583278e2a3a404a",
"assets/assets/images/emoji_u1f4a3.svg.vec": "898ff22112d02b4845167547d797094d",
"assets/assets/images/emoji_u1f9ed.svg.vec": "fc0d9552276affb1cdbbe2b577c1eb3d",
"assets/assets/images/emoji_u1f42c.svg.vec": "74d4c212de77293a86498d918e847862",
"assets/assets/images/emoji_u1f95d.svg.vec": "90ea535da192a4dae030c7a52f521029",
"assets/assets/images/emoji_u1f96a.svg.vec": "ebdb9e2c51e000ce485f455eef264263",
"assets/assets/images/emoji_u1fab2.svg.vec": "89831145a63561c7da024fbaba1a777c",
"assets/assets/images/emoji_u1f3ba.svg.vec": "a187a94fbb12dc1ca437c77d8b684c43",
"assets/assets/images/emoji_u1f3a1.svg.vec": "bd4346566c31abfd2fc69ab6a054ed2b",
"assets/assets/images/emoji_u1f4a1.svg.vec": "84f395b8e189d47b49e73e28c434f671",
"assets/assets/images/emoji_u1f415.svg.vec": "36428c499665561194c142f8b4d5cf80",
"assets/assets/images/emoji_u1f34e.svg.vec": "0baa3bb8b2aa607faeed89e07b899f44",
"assets/assets/images/emoji_u1f36d.svg.vec": "fee7757aa3dd40ab1948cf3ef393695e",
"assets/assets/images/emoji_u1f998.svg.vec": "6da56529cee233087fe85e6ee5bc61b8",
"assets/assets/images/red_question_mark.svg.vec": "fad7375eab9c30beeff23073df7df8b3",
"assets/assets/images/emoji_u1f3b8.svg.vec": "56527c6d391e40e7e4c2226d579ff6ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin.json": "0f108e6bfe42e05eee633203f6bdf745",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"manifest.json": "9d21b56dfb42157da4d6fb65d7ec7878"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
