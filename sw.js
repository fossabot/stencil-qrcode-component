importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/stqrcmp.js",
    "revision": "837e17988d5ef8cf25fa60d88639273f"
  },
  {
    "url": "build/stqrcmp/slkajbos.js",
    "revision": "2944cf0ba9e13cd269c58994a6e4dab0"
  },
  {
    "url": "build/stqrcmp/slkajbos.sc.js",
    "revision": "d9aa57da957d04dda0ff7d49c04caf05"
  },
  {
    "url": "build/stqrcmp/stqrcmp.jp0q1sln.js",
    "revision": "247a84a7cd5b2d9804df9280009b4cff"
  },
  {
    "url": "build/stqrcmp/stqrcmp.r6tc8zdm.js",
    "revision": "ce7e931cc8d1abf1c120af05bdb0c399"
  },
  {
    "url": "build/stqrcmp/stqrcmp.registry.json",
    "revision": "9f90cfadfdf48cbadcd96b112739f33a"
  },
  {
    "url": "build/stqrcmp/stqrcmp.s3wr2ii1.js",
    "revision": "96571c2dd8e3a4cd44ad1ad934755d9b"
  },
  {
    "url": "build/stqrcmp/yat0kz88.js",
    "revision": "0a36fe8eab34d2b3e7180c6e4eabbe10"
  },
  {
    "url": "build/stqrcmp/yat0kz88.sc.js",
    "revision": "521227e5bb202865bea52829e1c2bd4d"
  },
  {
    "url": "index.html",
    "revision": "bd82649cb768755e9154c62f2c8c7161"
  },
  {
    "url": "workbox-sw.prod.v2.1.1.js",
    "revision": "2a5638f9e33d09efc487b96804a0aa11"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
