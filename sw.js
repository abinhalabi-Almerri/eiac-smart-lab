// Offline copy of the EIAC Interactive Lab, for the iPad home-screen app.
// Step 1 (install): the small files are stored, so the app opens with no internet.
// Step 2 (after that, in the background): the film is stored in its own cache, which survives app updates.
const CACHE = "eiac-lab-202611161537";
const FILM_CACHE = "eiac-film-39050761";
const FILM = "film-en.mp4";
const FILES = ["./","index.html","manifest.webmanifest","family.jpg","glass.js","global-aci-logo.svg","icon-180.png","icon-192.png","icon-512.png","lab.jpg","logo-white.svg","slides/chicken.jpg","slides/dates.jpg","slides/fish.jpg","slides/produce.jpg","slides/storage.jpg","slides/trust.jpg","slides/water.jpg"];
const FONTS = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;700&family=Reem+Kufi:wght@500;700&display=swap";

const tell = async (msg) => (await self.clients.matchAll({ includeUncontrolled: true })).forEach((c) => c.postMessage(msg));

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const f of FILES) {
      const res = await fetch(f, { cache: "reload" });
      if (!res.ok) throw new Error("could not store " + f);
      await cache.put(f, f === "./" || f.endsWith(".html") ? await clean(res) : res);
    }
    try { const css = await fetch(FONTS); if (css.ok) await cache.put(FONTS, css); } catch (e) {}
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE && k !== FILM_CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

// the page asks for the offline status; the film is fetched then if it is not stored yet
let filmJob = null;
async function status() {
  const film = await (await caches.open(FILM_CACHE)).match(FILM);
  return { type: "offline-status", film: !!film };
}
async function storeFilm() {
  const res = await fetch(FILM, { cache: "reload" });
  if (!res.ok || !res.body) throw new Error("film " + res.status);
  const total = +res.headers.get("Content-Length") || 0, reader = res.body.getReader(), parts = [];
  let got = 0, last = -1;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    parts.push(value); got += value.length;
    const pct = total ? Math.floor(100 * got / total) : 0;
    if (pct !== last && pct % 5 === 0) { last = pct; tell({ type: "offline-progress", pct }); }
  }
  const blob = new Blob(parts, { type: "video/mp4" });
  await (await caches.open(FILM_CACHE)).put(FILM, new Response(blob, { headers: { "Content-Type": "video/mp4", "Content-Length": String(blob.size) } }));
}
self.addEventListener("message", (e) => {
  if (!e.data || e.data.type !== "offline-check") return;
  e.waitUntil((async () => {
    let s = await status();
    if (!s.film) {
      if (!filmJob) filmJob = storeFilm().catch((err) => tell({ type: "offline-error", message: String(err) })).finally(() => { filmJob = null; });
      await filmJob;
      s = await status();
    }
    tell(s);
  })());
});

// the stored page does not load the host's own overlay script
async function clean(res) {
  const html = (await res.text()).replace(/<script[^>]*\/\.netlify\/[^>]*><\/script>/g, "");
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

// videos are asked for in pieces (Range requests); answer them from the stored file
async function ranged(req, res) {
  const range = req.headers.get("range");
  if (!range) return res;
  const blob = await res.blob(), size = blob.size;
  const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
  let start = m[1] ? +m[1] : 0, end = m[2] ? +m[2] : size - 1;
  if (!m[1] && m[2]) { start = size - +m[2]; end = size - 1; }
  end = Math.min(end, size - 1);
  return new Response(blob.slice(start, end + 1), { status: 206, headers: {
    "Content-Type": res.headers.get("Content-Type") || "video/mp4", "Content-Range": `bytes ${start}-${end}/${size}`,
    "Content-Length": String(end - start + 1), "Accept-Ranges": "bytes" } });
}

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin && url.pathname.startsWith("/.netlify/")) {
    e.respondWith(new Response("", { headers: { "Content-Type": "text/javascript" } }));
    return;
  }
  if (e.request.method !== "GET") return;
  // the page itself: take the newest copy when online (so updates show at once), the stored copy when offline
  if (e.request.mode === "navigate") {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), 4000);
        const res = await fetch(e.request, { signal: ctrl.signal, cache: "no-store" });
        clearTimeout(timer);
        if (res.ok) { const page = await clean(res); await cache.put("./", page.clone()); return page; }
      } catch (err) {}
      return (await cache.match("./")) || Response.error();
    })());
    return;
  }
  e.respondWith((async () => {
    const same = url.origin === location.origin;
    const key = e.request.url.split("#")[0];
    const isFilm = same && url.pathname.endsWith("/" + FILM);
    const hit = isFilm ? await (await caches.open(FILM_CACHE)).match(FILM) : await (await caches.open(CACHE)).match(key, { ignoreSearch: same && key !== FONTS });
    if (hit) return ranged(e.request, hit);
    try {
      const res = await fetch(e.request);
      // keep the web fonts for next time
      if (res.ok && /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) (await caches.open(CACHE)).put(e.request, res.clone());
      return res;
    } catch (err) {
      return new Response("", { status: 504 });
    }
  })());
});
