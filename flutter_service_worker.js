'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56aec6c2d98ea6b50f24fee7124a13e1",
"assets/AssetManifest.bin.json": "084805adc577f90bebd9c83579cb0b1b",
"assets/AssetManifest.json": "e5060ad4cbaae7c0467b38f52deb33e1",
"assets/assets/fonts/DanaFaNum-Bold.ttf": "87d824745e8855753d71bf9637a45891",
"assets/assets/fonts/DanaFaNum-Regular.ttf": "46dc609d47a260b0f3676f6a147db905",
"assets/assets/icons/about.svg": "fd7beba9a2e831e7629e35a7b422aec8",
"assets/assets/icons/arrows.svg": "590ab0bb02cd3d93e92b3af5487e1d0d",
"assets/assets/icons/bale.svg": "fd4b7ddfd5299cfd6409188d0635e612",
"assets/assets/icons/blog.svg": "e1dbd19ff457f405138e9c8896a695ad",
"assets/assets/icons/eitaa.svg": "febc3d3ab5c0d523dcc8568b5b83e0cc",
"assets/assets/icons/graduation.svg": "f98e87988d50e018daf9e808f97b6902",
"assets/assets/icons/group.svg": "c3ad48d705cc814995b86ac882b1e7ab",
"assets/assets/icons/home.svg": "a2e4fce2cb6b6267f468470dac7d5f04",
"assets/assets/icons/instagram.svg": "067d0ed32a3feb4b081c5b8a6baaebea",
"assets/assets/icons/like.svg": "3d5d5e3cdbf6e42106deeed0d4b6b4dd",
"assets/assets/icons/lock.svg": "5aa0531555ae843002b8fe27ce0bb691",
"assets/assets/icons/menu.svg": "460d3d9a996efa15e44fa6c339380dda",
"assets/assets/icons/monitor-mobbile.svg": "a40257312d8637bd0f3b81e442c9331b",
"assets/assets/icons/phone-call.svg": "3227b90df9cef0eb799858a61681e977",
"assets/assets/icons/phone.svg": "bd3d2133663e04a4849566691336d0fc",
"assets/assets/icons/telegram.svg": "5c315e1109ba42e0b73a46b731a5f26b",
"assets/assets/icons/user.svg": "1a1249339b0668391264b0dd69cd5bde",
"assets/assets/icons/users.svg": "d13dd931ef61f320a93acc13de5e0b71",
"assets/assets/images/ayandeh_bank.png": "c40e6a153e13367423423d99c97d5027",
"assets/assets/images/book.png": "dee1790fce6710b3d4cf203c1c24439d",
"assets/assets/images/boy.jpg": "e98e7ae449605c74582fd70901ad27d5",
"assets/assets/images/curved-arrow.png": "a5960ba25057ca298604e2c97ba3d701",
"assets/assets/images/gardeshgari_bank.png": "374d701924f8f82747ef4e8349226975",
"assets/assets/images/melat_bank.png": "11cde1c008aea68729b30a481533d6e7",
"assets/assets/images/prfile.svg": "a4050b1476a6441cca957e2292b4144d",
"assets/assets/images/profile.png": "4e277be5b1f0e52b29836f92207a23c7",
"assets/assets/images/Rectangle.png": "405f163b23f7f80962cf9539d1bbe6f1",
"assets/assets/images/saman_bank.png": "d0c69b8c6dd39504f721af47d8926025",
"assets/assets/images/talent_logo.png": "d9c93f9d66ca7dbc06fbde6ff7d037b5",
"assets/assets/images/toolxox.com-iscout-DOfYCbtwQh.png": "b178f1e09fb953a03de6a531872bf5e0",
"assets/FontManifest.json": "310d460975a43f964752c0c7eb8357ba",
"assets/fonts/MaterialIcons-Regular.otf": "2a305f905ce8fea5e5c7f44da84df64c",
"assets/NOTICES": "a383346eb76de6127cf4c3dd1fef8a93",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "57cd55e018ea61402d16b6301ccb73a5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "13be8624f54339025d333dd4dd3097ea",
"/": "13be8624f54339025d333dd4dd3097ea",
"main.dart.js": "5597a3c17ac0c1d9290dd28a35bd0c47",
"manifest.json": "19e3d2bfd56b5691a2c5026f3f9b8a95",
"version.json": "162a1e013b519a9ff16e409e9c44853a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
