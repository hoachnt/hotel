if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const f=e=>n(e,o),l={module:{uri:o},exports:r,require:f};i[o]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"CNTT"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.b925a35e.css",revision:null},{url:"/css/chunk-vendors.4b0a11dc.css",revision:null},{url:"/favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"/img/icons/android-chrome-192x192.png",revision:"64fdb0addf459cb0f8e9de741a85fe4d"},{url:"/img/icons/android-chrome-512x512.png",revision:"e005da575ad7c613bfa9792c001bef71"},{url:"/img/icons/apple-touch-icon.png",revision:"5bf08cd36fb2bab3966e9e6a0c0ad41c"},{url:"/img/icons/favicon-16x16.png",revision:"e2ad6b5e26b4751e4d1b2f28bd0355f0"},{url:"/img/icons/favicon-32x32.png",revision:"ac7eff16684bb6b9717bfa307a4b9668"},{url:"/img/logo.965b105d.png",revision:null},{url:"/index.html",revision:"a811f8b1c38f5cce2c5d008bcc040d4b"},{url:"/js/app.46c089f7.js",revision:null},{url:"/js/app.46c089f7.js.map",revision:"3827466bd7c7351d36b18437c379e274"},{url:"/js/chunk-vendors.354b12c7.js",revision:null},{url:"/manifest.json",revision:"c54c7275b75656668aa9d655dbbf9e15"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
