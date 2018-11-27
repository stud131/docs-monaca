importScripts('workbox-v3.6.3/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: 'workbox-v3.6.3/'
});

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
  prefix: 'Monaca-Doc',
  precache: 'precache',
  runtime: 'runtime',
});

workbox.precaching.precacheAndRoute([
  {
    "url": "css/bootstrap.min.css",
    "revision": "496d954c5b1bf52c796557e07abc2173"
  },
  {
    "url": "css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "css/nucleus.css",
    "revision": "429b5c1009209408a28d29ce6dfcd8a7"
  },
  {
    "url": "theme-original/style.css",
    "revision": "b2c5ba987eac23e2c439568376729579"
  },
  {
    "url": "js/docsearch.min.js",
    "revision": "c5676a7a7421b0c05d0d9e0390e610a4"
  },
  {
    "url": "js/monaca.js",
    "revision": "9cccccda977089496c9e6bf696a82af5"
  },
  {
    "url": "js/zepto.min.js",
    "revision": "50a4556b0089cfa1cb61e88ea23bbcce"
  }
]);
