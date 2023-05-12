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
    "revision": "cf379f766a0e4479d23543b97274dd95"
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
    "url": "assets/js/10.8ac9be0f.js",
    "revision": "ee3c4653588b47fb14c6dd9de8694053"
  },
  {
    "url": "assets/js/11.0309eda9.js",
    "revision": "0702bc122f4e7e6ae7722bee1c0a1499"
  },
  {
    "url": "assets/js/12.0c6f98bf.js",
    "revision": "0172726fdf123dcda40cdaf7c2e5bbe2"
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
    "url": "assets/js/15.78dc33cb.js",
    "revision": "70e1e3d6f88bb78a0b65760df68b71c4"
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
    "url": "assets/js/app.31fc183e.js",
    "revision": "95cce6a4c1531d61dcd83562c15e305f"
  },
  {
    "url": "assets/js/vendors~docsearch.7e9ae195.js",
    "revision": "5701edfa0ac40adbf6b1a48a30ef6473"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "6a0aa4b4043230b91f39d43e4180c16e"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "a744d905a6d79eb52b22c18c708a2fa6"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "25671e3e9d3a8c0bb0012662a7394daf"
  },
  {
    "url": "guide/deploying.html",
    "revision": "2842a5463966a60d483c725186edb606"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8c79c09f05672088f0655ff8b0bcf04d"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "6a2f97654b08214b6b738860f429add1"
  },
  {
    "url": "guide/index.html",
    "revision": "7108bd703a34e39a6acfdc1d6bde598c"
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
    "revision": "a3391d329ea90d50716d24a8be17d7d9"
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
