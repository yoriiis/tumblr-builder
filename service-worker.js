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
    "revision": "931db6d5a6a34ebdd071c6ed3da93fb4"
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
    "url": "assets/js/10.1aa4c97c.js",
    "revision": "4a357f608cf5c5a8b5b61623ed9d1a0e"
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
    "url": "assets/js/13.84a004a3.js",
    "revision": "dc6140fa4c832648c57ff3b959095ef5"
  },
  {
    "url": "assets/js/14.bca8ce1d.js",
    "revision": "5a2bad710eb5ced3836e79df64af69e4"
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
    "url": "assets/js/8.41ad91a3.js",
    "revision": "87557053bf578621c42b30c454d61a64"
  },
  {
    "url": "assets/js/9.d469eef1.js",
    "revision": "8ba6cdf59a4bcedb299ed0c81fc55b18"
  },
  {
    "url": "assets/js/app.e10cae76.js",
    "revision": "0e60616cb5a255409c92d2369a520ac0"
  },
  {
    "url": "assets/js/vendors~docsearch.7e9ae195.js",
    "revision": "5701edfa0ac40adbf6b1a48a30ef6473"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "3feffec460a2c7582699ea0c759cf10d"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "2b9027af32f354f62676ff6605afe5a8"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "9567e8fc8322d8b4950566fe9583bf0d"
  },
  {
    "url": "guide/deploying.html",
    "revision": "3e84c2726439d8fbe1279ede48df1d8d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "37d6bcf0c3a8884f8876afc5a8045181"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "96043cf4da0eef1ff87397b1cb62d5df"
  },
  {
    "url": "guide/index.html",
    "revision": "e0d9991b6f62c64a8bcb5480048fed11"
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
    "revision": "7fb0fae722497ab36c15de4aeb0e7521"
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
