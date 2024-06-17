'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "317c147cc84c700daff2ab3037a4eb5a",
"index.html": "953ffe699ea6342ef089af6f3879f530",
"/": "953ffe699ea6342ef089af6f3879f530",
"main.dart.js": "a8a7515d6c3fe7875c42cb5f08fc6877",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ab6a4c3c522eaad7767f28b2262e9d12",
".git/config": "1c4c84f4235519206bdd1c1a0259ba26",
".git/objects/0c/93b7e680cbe40208f224ce5537da94d7cd9e16": "d700db7d4d7bf46b8e02b25a75368c80",
".git/objects/3e/9ae9d3e4ecd37b664f9baf303930dc15489e22": "05ad7fcb7380aec6e9fe98c666a90f1b",
".git/objects/68/bd68127178f25df143220be0934c992de2acb1": "14631040ad6e381f47f307b2aa488835",
".git/objects/68/65385471ade897347216b84f572ac39f540f43": "fc5cde188b630de4c500432f04c76484",
".git/objects/6f/806474948b2cfc5f8fb3fcea4b49e67c49031a": "3d82e1d66b29d009b566d59acbb63c52",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/2152152cfadfac691a3a344978612a654e8c93": "0ca6ca9becf2a67ce8914e48f00142cb",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/c37be7390a43ebbe5c13604982c36f71ef4e27": "f26c1acebc79ccba2a23cb9ba7780711",
".git/objects/05/dfbb58f97aa665016a752783d5b27be585b863": "f9adcff7954e61976385758f04e74cc8",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bd/04bd6d38974fe93d8b8109b08d5690e24b3f04": "43642891645ad290a5184f04d8e3a025",
".git/objects/bd/6cb5da5528c6db6e4c0771e9b2e813c915680f": "9b73eef9d962e1c131b7c1687be8782a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7d67a9c7f67ba63e70d7dbfb4651f717f41d9c": "390714c2afdbaa482b7131364887bb66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ed66e8d6165e516e8605a4a8a4f52ba6d5b6f8": "baef718ee61f27cb8f485bd2ab6145c2",
".git/objects/fd/5fb515c5066dafed449fa94119a998a90128dd": "57a26a964295f32e67d71ce85f35c67d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/e3fc7fc225da9b0780a84c1ce46350dfee3362": "d1713dcb2586052b876770e0772319c1",
".git/objects/c8/6424893227105e49bc6d08afa970049bd80473": "69212a4facf086035c864a08ee1d40e5",
".git/objects/c1/11e4114f11d0272b5993755cf03e83ef919678": "5f4557a3a32685b1b7d3268b3a698e40",
".git/objects/c6/df730f3855e736638db316a02825c1f0773680": "56c41c8ffb419da04eefae41db2b9a1b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/83fbe0517ae3455c1b1a2988915d8632350acf": "38632842c5dfdc0ef5e019186b7abc8a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/542ae932d7990d8b1464f89c7895d4c38e0d45": "5ae295c5b4fe2e5f3160bb4c6ec7fcdf",
".git/objects/17/3d9565d1114852c51c69fc16c6d0a67f004fdc": "ca49e125dfc7ce9774598b60dcd94c57",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/41e3ab12884fc213d8b9daf852bd629fd91a5a": "f34c81bd3223c439d78baf00c55b292c",
".git/objects/44/abfcffa695a099ba436daf1be259792a6fb6e5": "7a0b2f18b6623af4d6e4ef57ae5b5df0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/39de96fe3b27f7a37a05b4c87bade05e09a281": "b758dc1030a099ba96040a41ce752f07",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/e4fb6ce14a6134f2444d78a49668d88aa542d7": "fe6bbb27a0be66342944a585cca1b221",
".git/objects/36/036d8bdc64bdc8adf32905719fef19362fef67": "1ba53421c72710cd11a9977bb9e4dedb",
".git/objects/54/f5084c08abdc2165578174496f0bceaeb9ffaf": "8f57cbd2fe88276f29daf6b93d05a000",
".git/objects/08/19e0808782031ddda15a77feb6d25f953eee88": "dea5fc06401a27ea89b7585421ffc425",
".git/objects/08/895492caab52cba98edd38bf525d473335dec3": "7dd8f13c367b83dfc216b3707b6bd667",
".git/objects/01/eb62999e2962a096bc3fc814b43b75215df92a": "b86705ce53a80962583e43ee9ce7e076",
".git/objects/63/8154158931f9b887f5a5ecd2d895fc5321b39d": "078d22c967ab392dae38fa510e29685d",
".git/objects/bf/9fbba06fa74e7c07eb78fbdfc275fd25392005": "1e956d851691d3c3078cf896af2b3cf4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dc/374666bce7bd96a655ca1a49ab29b133765dbe": "cb0d3def311c88604e29cb85be36f139",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/284c380bf9203f773dc780814fb5778a98fa46": "c2cd0a6d2d2a2a19c726a4cb61f1a7c3",
".git/objects/a6/685a829cc021ced972d8f47c85c3e43b4a41e6": "3bd241f1bf05d14977d653964aad8cf9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/b4d4c86adf29596070ace5aa7d6f1ddde03da5": "053dbed2db4946df01941ef967b6d732",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/46ce1f012223517a32fe0b4df5a5cc9dba1238": "f7bc5bb22fb7c4d22405b7955b837970",
".git/objects/2c/652cb16412bcd4c737bead1606b91fb4f03afd": "1beeddcc2c9dbb58efeec938fcd61258",
".git/objects/83/744c15a415d5d4dacf533f78b210cbd6b3c9c0": "ae2def11268ec8c97d63f716b22c3811",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/6c33da316e24431e803332a0610cc2c10eb342": "58e9aa1b228183819e9cb1937ac09307",
".git/objects/4f/a106faf4bf6d103e92c423171c505cfe62736a": "3686f0f17685201b78841f5eea4659dc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/78/9a287cc313bacabeb89dcfa3789d075cd4104c": "bf591ad5f7376ce56d41f02c48404a46",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2a3db7d903e2a8c6cbb717e86987b13b",
".git/logs/refs/heads/main": "77f67c771d238a650cfbc2a731d31670",
".git/logs/refs/remotes/origin/main": "ded46a3d621f434489e0e9fd41f4fa29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ab019d75723267751db2526f14d63437",
".git/refs/remotes/origin/main": "ab019d75723267751db2526f14d63437",
".git/index": "7260b7ab1bc0cd52dfa3d9b2084eff58",
".git/COMMIT_EDITMSG": "28e5a2f7a15417b1effd67c5acfd0ade",
"assets/asset/medium.svg": "a3fddd3f76b8e65bf3f1eecaa7eed64e",
"assets/asset/Awign_5.png": "ce1936b28451be0451a30d954d64bdb9",
"assets/asset/Taskforce_4.png": "50bbbf9570d290fd40b27891c7341884",
"assets/asset/Awign_1.png": "22bf0dd053a18cb1367f7b1cad042fc3",
"assets/asset/github.svg": "422b45f9b735da46e17e8cfdb7328071",
"assets/asset/Taskforce_1.png": "328d30adefedaea8e64a9351ffe12462",
"assets/asset/Taskforce_3.png": "9eb96542c56219bc06f87be2dda4e2d5",
"assets/asset/Awign_2.png": "47172c2f247b5d105d71b0b850ce6bfb",
"assets/asset/Awign_3.png": "b247ef56f584a78f09728499960f903d",
"assets/asset/Taskforce_2.png": "2944abd10025f06983dc067f77c83edb",
"assets/asset/instagram.svg": "be758ca61a2773fe84ad567b72435111",
"assets/asset/playstore_light.png": "718bb04fac70894aa2f59799726268cb",
"assets/asset/facebook.svg": "eff54484c6ca4707e353acfe1c1e2f3b",
"assets/asset/stackoverflow.svg": "15ebcd4b4cc84e529c618e630f7aa2dc",
"assets/asset/profile.png": "40bc1cb50d41941bd7473b9b3e96023d",
"assets/asset/playstore_dark.png": "1625eac6754f43f236ce79c4b78170ca",
"assets/asset/linkedin.svg": "ae2fd1ef72361423ce8734464be77983",
"assets/asset/twitter.svg": "923fdee99bd2e309ddeeb98919a73a56",
"assets/asset/fonts/FiraSans-ExtraBold.ttf": "ab5e89ae3427a97125ae380280b1df7f",
"assets/asset/fonts/FiraSans-SemiBold.ttf": "eb5e811f2fe0408c9d0a552fcf1fb390",
"assets/asset/fonts/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"assets/asset/google_play.png": "f14fa0f391db4ccc85bae0d6966686f8",
"assets/AssetManifest.json": "0f9222cd04b5b7dabe479bafa4ace48c",
"assets/NOTICES": "955ead1c062d434973ad4767b4a76bc8",
"assets/FontManifest.json": "25d9d19925765bdc900d8551a3ad99b7",
"assets/AssetManifest.bin.json": "88661214a50fe4a08170d0b988531b12",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ef19d1b35bd2dcc4953d84ce16e27dd3",
"assets/fonts/MaterialIcons-Regular.otf": "6ecce1bba9564e523f7b25c1e690bce4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
