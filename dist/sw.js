if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const d=e=>n(e,o),s={module:{uri:o},exports:a,require:d};i[o]=Promise.all(r.map((e=>s[e]||d(e)))).then((e=>(c(...e),a)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"2774538ae8cce1805ed50b17b5f12c22"},{url:"android-chrome-512x512.png",revision:"7480a508a14b2b7812c1cc3e81857eef"},{url:"apple-touch-icon.png",revision:"7c1ee6f7626c8b8ab739771e7ac3fbba"},{url:"assets/index-6df824b5.css",revision:null},{url:"assets/index-d4033823.js",revision:null},{url:"favicon-16x16.png",revision:"3d2ea0baa524d3b5293e2023fca394bd"},{url:"favicon-32x32.png",revision:"b8810b67baaaad82d594238993165a1e"},{url:"favicon.ico",revision:"7c66e7f4487da0a308fdd4f00f4fcdae"},{url:"index.html",revision:"0362f730ccd4ddf1628cff2760c231a2"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"favicon.ico",revision:"7c66e7f4487da0a308fdd4f00f4fcdae"},{url:"apple-touch-icon.png",revision:"7c1ee6f7626c8b8ab739771e7ac3fbba"},{url:"android-chrome-192x192.png",revision:"2774538ae8cce1805ed50b17b5f12c22"},{url:"android-chrome-512x512.png",revision:"7480a508a14b2b7812c1cc3e81857eef"},{url:"manifest.webmanifest",revision:"7497756918ef715efd09b38acad8aeda"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
