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
    "revision": "9195f19a097826208053e8e28e101419"
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
    "url": "assets/js/11.0161d313.js",
    "revision": "be0dfe411d553908207a4bf0e3bb8847"
  },
  {
    "url": "assets/js/12.0de59cfc.js",
    "revision": "8b180a63ffc23f6af0b7e8d6cb95704c"
  },
  {
    "url": "assets/js/13.f0a88667.js",
    "revision": "58b07325bc2117137c656870fc3849a0"
  },
  {
    "url": "assets/js/14.71c678c7.js",
    "revision": "648e54b9281f6c48ff8a74f984fef8e0"
  },
  {
    "url": "assets/js/15.ba69e5f2.js",
    "revision": "60974f85e4d75e1401593a3bd2869110"
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
    "url": "assets/js/app.4f26e5d7.js",
    "revision": "e12959c4755b33f6e3f9d92d304f2fe0"
  },
  {
    "url": "assets/js/vendors~docsearch.7e9ae195.js",
    "revision": "5701edfa0ac40adbf6b1a48a30ef6473"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "60c30a059444ba34e6347197f2914702"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "257bad0bf4032234e077408ab3d7b09a"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "223605ec789137b976d5ded142f55363"
  },
  {
    "url": "guide/deploying.html",
    "revision": "81f12411ff81425383389329af4c2bfb"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7b322763eb7f48dd974214e48863b22d"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "613ceaf886d3979c5961f226c7418441"
  },
  {
    "url": "guide/index.html",
    "revision": "607c5386a9e09ce261df7498624c25ab"
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
    "revision": "6557df6f958aaac70d4893ff5bcd83a5"
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
