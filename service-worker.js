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
    "revision": "b37cf48f246da53d272dd03bb94b0a15"
  },
  {
    "url": "assets/css/0.styles.ab95e677.css",
    "revision": "be2311625751918c4e4ed9a0b8343a5b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3edb9787.js",
    "revision": "e09a90f0dae94fc392955d58a2c45ec9"
  },
  {
    "url": "assets/js/11.ffabb050.js",
    "revision": "1eb40778ec4f61ae0837b1873b036c7c"
  },
  {
    "url": "assets/js/12.7dc542e1.js",
    "revision": "a3f1b7e2ad501a0f7514935ed498e4d5"
  },
  {
    "url": "assets/js/13.e45a0cab.js",
    "revision": "d159efd2dc6370f710e10640522bfed0"
  },
  {
    "url": "assets/js/14.71c678c7.js",
    "revision": "648e54b9281f6c48ff8a74f984fef8e0"
  },
  {
    "url": "assets/js/15.851405a0.js",
    "revision": "1954f8b1563b737a1efacfff7d771e7e"
  },
  {
    "url": "assets/js/16.b8255c31.js",
    "revision": "b9f1afb224dee6a47205bafe38462b3f"
  },
  {
    "url": "assets/js/3.8c91f459.js",
    "revision": "4c2af75c084ab494a756d4947e8e00c4"
  },
  {
    "url": "assets/js/4.74d20110.js",
    "revision": "e86fdfd923813c60deecda2cdf44457e"
  },
  {
    "url": "assets/js/5.78102a98.js",
    "revision": "26d828b11ec02c643fee93e8a77bfe64"
  },
  {
    "url": "assets/js/6.225880d2.js",
    "revision": "4dfd20dbee60c13bec3bd1c8497b399d"
  },
  {
    "url": "assets/js/7.d231f8b0.js",
    "revision": "70b64840a604f5fff18af4626b9b909b"
  },
  {
    "url": "assets/js/8.ce58fa61.js",
    "revision": "ca098a7625ca9c278b7a0e13650c8c66"
  },
  {
    "url": "assets/js/9.c7520ca1.js",
    "revision": "9a640e366461dd28099299c416c05e8b"
  },
  {
    "url": "assets/js/app.1dc40a41.js",
    "revision": "fe6930ff3c1740aa26286944fe6efdcc"
  },
  {
    "url": "assets/js/vendors~docsearch.7e9ae195.js",
    "revision": "5701edfa0ac40adbf6b1a48a30ef6473"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "586b861d8947d0cbb4947bf49e98ee63"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "62c6f8e14756fde9c4a0c9f24c77e515"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "38753a4f948ba1670c84a0a8f283e49a"
  },
  {
    "url": "guide/deploying.html",
    "revision": "b679a1d9929f26ad22b22a5e47a94423"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "39aa3851f4e0422251bcd278383bddaa"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "afea2e170ec3c4b9e49bf7bbb5207d1e"
  },
  {
    "url": "guide/index.html",
    "revision": "098eb8cdbbb22e75f2af8302a343bb6b"
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
    "revision": "4b70b30e003e5e1f8fdb4df2ccbf0080"
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
