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

workbox.precaching.precacheAndRoute([]);
