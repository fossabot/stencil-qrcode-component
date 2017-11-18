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
    "revision": "74f46518cbbf3feaf6bf1d80ee24d8ff"
  },
  {
    "url": "build/stqrcmp/cdz1ebkb.js",
    "revision": "28f38d764a80ea1792abc1254167db3b"
  },
  {
    "url": "build/stqrcmp/stqrcmp.8jvnyp4h.js",
    "revision": "6c97dfe9b27d6df57730078dbb541a2f"
  },
  {
    "url": "build/stqrcmp/stqrcmp.g7dbrs97.js",
    "revision": "8ff9fd29cbf398dabdc17a5709e6f502"
  },
  {
    "url": "build/stqrcmp/stqrcmp.registry.json",
    "revision": "cfd240ba13f625c855c78dfebcce7e6c"
  },
  {
    "url": "build/stqrcmp/stqrcmp.rmfnnwcc.js",
    "revision": "2f8925e6ff8228d9f56dfe6672bcec4c"
  },
  {
    "url": "build/stqrcmp/wrsble3p.js",
    "revision": "8b4810927545d3531e3576b9e9f4004c"
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
