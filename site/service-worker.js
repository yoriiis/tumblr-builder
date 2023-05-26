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
    "revision": "5d530821c4323a43f61a367c037083fc"
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
    "url": "assets/js/10.008233e3.js",
    "revision": "73043f4bde0b39592e62139d768918e2"
  },
  {
    "url": "assets/js/11.0161d313.js",
    "revision": "be0dfe411d553908207a4bf0e3bb8847"
  },
  {
    "url": "assets/js/12.ffc4c7f7.js",
    "revision": "7e81c7c15aebed9f5d9396008d9c6c8c"
  },
  {
    "url": "assets/js/13.e45a0cab.js",
    "revision": "d159efd2dc6370f710e10640522bfed0"
  },
  {
    "url": "assets/js/14.bca8ce1d.js",
    "revision": "5a2bad710eb5ced3836e79df64af69e4"
  },
  {
    "url": "assets/js/15.bbf18f55.js",
    "revision": "f9ded6e9701f07ee882dda8ac96666f7"
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
    "url": "assets/js/app.a1055e77.js",
    "revision": "8d477ef29ef1ce4e6caf9fa19ff1ea2e"
  },
  {
    "url": "assets/js/vendors~docsearch.7e9ae195.js",
    "revision": "5701edfa0ac40adbf6b1a48a30ef6473"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "afba7b6e3442135b390c5a63e118a59a"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "34c96de080147b3097da82dd4eba980c"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "bb1a19a7c6872ff6cc31b3dff21875e1"
  },
  {
    "url": "guide/deploying.html",
    "revision": "630861b255082d07fa94811370e6ea9d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4aa0000adecdfa58e3bdb246519ec2e7"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "ee420cc386d5d891e5d7d0d781dabae2"
  },
  {
    "url": "guide/index.html",
    "revision": "1faf9b81b344abe17d45da94ca804c7f"
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
    "revision": "53e01e2247cb312b19ec4242a30abd15"
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
