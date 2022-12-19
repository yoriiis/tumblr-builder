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
    "revision": "39093da8305d703214d32fd2cfdf77bc"
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
    "url": "assets/js/12.ef799392.js",
    "revision": "f4323c2b77ceb2b1acadf200435f7222"
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
    "url": "assets/js/8.e031a700.js",
    "revision": "05528210e9bb9edb5fdc74ec00b589e5"
  },
  {
    "url": "assets/js/9.d469eef1.js",
    "revision": "8ba6cdf59a4bcedb299ed0c81fc55b18"
  },
  {
    "url": "assets/js/app.60939a61.js",
    "revision": "19c28859c3f184130578384066c442e2"
  },
  {
    "url": "assets/js/vendors~docsearch.7e9ae195.js",
    "revision": "5701edfa0ac40adbf6b1a48a30ef6473"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "0e700ea9b955b9624239ad439096d1e5"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "beadcd2c919dc71dce1e8b64f6774a9e"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "e58d6870acf58e3178d34f5c692a986d"
  },
  {
    "url": "guide/deploying.html",
    "revision": "f6ba65159404afba10eabc22262a4389"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "895ef5c8e505074cd777db734dbbbfab"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "d0ddff3f34ab0a19848f7a74c0e93ad6"
  },
  {
    "url": "guide/index.html",
    "revision": "3ded3143803f3db3f99006503e85a148"
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
    "revision": "a6ceeac3d19b6dfe679389bc82f34c02"
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
