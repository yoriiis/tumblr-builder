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
    "revision": "2f61df2f19115c04e1cbe550c0591d25"
  },
  {
    "url": "assets/css/0.styles.434ef7b4.css",
    "revision": "cdf1dae2c299ee49554819a629d743e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17f985a5.js",
    "revision": "7d9b5372b8cb66d5c008553e757bf5fd"
  },
  {
    "url": "assets/js/11.9f499cf1.js",
    "revision": "87b8478e8411100b066684846413f564"
  },
  {
    "url": "assets/js/12.8331889e.js",
    "revision": "019b0c7ed1ca58fd2f2909f06e57166b"
  },
  {
    "url": "assets/js/13.d2944e5e.js",
    "revision": "336ff111c5dbe57cf07b3cf0c1c660f9"
  },
  {
    "url": "assets/js/14.931eebaf.js",
    "revision": "104153086c1676d345b2dcdebdef6c3b"
  },
  {
    "url": "assets/js/15.ca934ab9.js",
    "revision": "081045f48611b91434849e5364b4cb20"
  },
  {
    "url": "assets/js/2.1f2f8a53.js",
    "revision": "e5ff3e002c7cedfedee91c3e76c4dff3"
  },
  {
    "url": "assets/js/3.5c2027bb.js",
    "revision": "659cd44601488257e9fc82b9a6977e78"
  },
  {
    "url": "assets/js/4.1acad89d.js",
    "revision": "f68e42992ad3cce124cc824bdfd73f4d"
  },
  {
    "url": "assets/js/5.d46b1a1b.js",
    "revision": "003503ac30b6bfc130ff6ca7da6e5898"
  },
  {
    "url": "assets/js/6.96989ac4.js",
    "revision": "301a564c0fce9f79477e48755d87daf3"
  },
  {
    "url": "assets/js/7.d46041d3.js",
    "revision": "398b42e8287ef615bf085f4c3a4d7aac"
  },
  {
    "url": "assets/js/8.78016ff0.js",
    "revision": "a563c9d61da9c6af58f44e4c3b8cd994"
  },
  {
    "url": "assets/js/9.0e1e60e8.js",
    "revision": "b451e71550446a073dbb2d7a7951b592"
  },
  {
    "url": "assets/js/app.e57d646a.js",
    "revision": "05a223b9e8abf4b7643afb2fa7c60943"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "7711f6f41d6fffa31a9bf165133b04e2"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "cdfef1363d4bdb968ff8a551663dccda"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "8186b5c16aa6cbe3b032bcac644598c7"
  },
  {
    "url": "guide/deploying.html",
    "revision": "d1fa162b4da35cb3f8f8898458b7f7d1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7a2f0330c6ff06df850da9609f0a1119"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "c194e65d1e33b12dd5cd4aed359cd4be"
  },
  {
    "url": "guide/index.html",
    "revision": "10748792b2d5b997bd1da00a25900710"
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
    "revision": "0ad365270ed70e9b7256b7e2aff7abe5"
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
