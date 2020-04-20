/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b8895e4d5aed10f84238bdd254bd64f6"
  },
  {
    "url": "assets/css/0.styles.207a34e1.css",
    "revision": "919bc7b2c124749436fceffbfe9f6444"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54495d2e.js",
    "revision": "ff48b3a62aa6644e29d35f76c32018ea"
  },
  {
    "url": "assets/js/11.0e613f9c.js",
    "revision": "a2bd0c07fcd90b19e1e8e9bcbf8ac7d5"
  },
  {
    "url": "assets/js/12.65b3261d.js",
    "revision": "9f5206a5695a92a511069f7b50f6ec1f"
  },
  {
    "url": "assets/js/13.d6a7d057.js",
    "revision": "b303b8981a0f48ab093172fb6501a35b"
  },
  {
    "url": "assets/js/14.2e46a9a3.js",
    "revision": "65aa705a2fd7be251a2250ce2513a9ac"
  },
  {
    "url": "assets/js/15.59672a64.js",
    "revision": "dc77d8752030c016afc54f5a18f26c30"
  },
  {
    "url": "assets/js/2.3a811de8.js",
    "revision": "5cb627971cb14ed7957bbc02042cf1cf"
  },
  {
    "url": "assets/js/3.6c08c4cd.js",
    "revision": "891b993256fdb3fe9bc5253aa0ff4eac"
  },
  {
    "url": "assets/js/4.cc956f76.js",
    "revision": "07f81a9498ded123b2d40fbd69582db6"
  },
  {
    "url": "assets/js/5.5974477d.js",
    "revision": "8dea35d0f98b8fb51db65c34384ec755"
  },
  {
    "url": "assets/js/6.9b300e79.js",
    "revision": "82b397eb1feffc36d040b72ea01964a1"
  },
  {
    "url": "assets/js/7.985be4c5.js",
    "revision": "b3bed8e826819a2cd427e2dd5c4dce94"
  },
  {
    "url": "assets/js/8.03686727.js",
    "revision": "e85adf99e79a1c6bcce01cd8934113cd"
  },
  {
    "url": "assets/js/9.f57b192a.js",
    "revision": "ae1e27731f7de8414d29a6d19e7c733a"
  },
  {
    "url": "assets/js/app.f30458e2.js",
    "revision": "6bfa95876288ed5d14e07e6185015eb0"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "d6525dd512b90ab9c3f731289d4373b5"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "bb3a28ad02ce254243a77ff4567282b1"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "aa1575c3db130d40f095f444eb882b91"
  },
  {
    "url": "guide/deploying.html",
    "revision": "580702231591ba665e2b9dd3b8ac1c57"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1bc829cd3450891597d8e2044a8654e0"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "ea9d7e9b2ec3e47c41248de2e80ade59"
  },
  {
    "url": "guide/index.html",
    "revision": "10338ab8f4f488a5ac4b4012db917897"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "ed5ebd2a7fc7b231569a1942f9bb257f"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "5b4585243011d6045f7bf4087655d7c3"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "f15c8fd25961995fa1bc1fdb8bcdef83"
  },
  {
    "url": "index.html",
    "revision": "7ac0c9d4d27b452b42a42a3403b6fad1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
