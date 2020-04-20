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
    "revision": "05d91335d21afb2fc26d2269cf8f819f"
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
    "url": "assets/js/8.ff53c860.js",
    "revision": "d72489ff876f1034765ab6068a52b1cb"
  },
  {
    "url": "assets/js/9.f57b192a.js",
    "revision": "ae1e27731f7de8414d29a6d19e7c733a"
  },
  {
    "url": "assets/js/app.7178ebb2.js",
    "revision": "fcdd58c36a24f37a73aa1722d7cbd709"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "79b3784b3f34b17133bdf26efe1802ac"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "0be676b4abe95b4b147e0ac7fd90d354"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "b366a628ac00c8603f4d2c1e0e0d5a1d"
  },
  {
    "url": "guide/deploying.html",
    "revision": "3e35b649b3229e2364afecc1bc4633a9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "379839031bac365828b8dfb479853ec8"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "0350ef172b53f4be2ae87328e9c53e47"
  },
  {
    "url": "guide/index.html",
    "revision": "79adb21fc2020cd2ab0e334858479aa5"
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
    "revision": "bce5574119e199da4978e673536795e8"
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
