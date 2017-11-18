importScripts('workbox-sw.prod.v2.1.1.js');

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
    "revision": "f90211a3fe840d634967f2d0555f8772"
  },
  {
    "url": "build/stqrcmp/e0fhfs70.js",
    "revision": "4519f7d33f90d96b1b2b27c2b54705b6"
  },
  {
    "url": "build/stqrcmp/mjbg3qgj.js",
    "revision": "a2248196bf79b416ed1f10dbc0113f1b"
  },
  {
    "url": "build/stqrcmp/stqrcmp.8yqwnnkc.js",
    "revision": "ac72c286a72d6b5dfff2584219ed01ef"
  },
  {
    "url": "build/stqrcmp/stqrcmp.ck03ub2d.js",
    "revision": "f4033b30d080294ee4bf6dddd6670cf3"
  },
  {
    "url": "build/stqrcmp/stqrcmp.l83e0cic.js",
    "revision": "09d4879f2ba712d15c1cf93339868a67"
  },
  {
    "url": "build/stqrcmp/stqrcmp.registry.json",
    "revision": "eeace4987057cdd289e97a6b439ccdc3"
  },
  {
    "url": "index.html",
    "revision": "f6baf840e871a91e068962833cdb20e8"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
