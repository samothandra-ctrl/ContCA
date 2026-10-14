// Service worker: guarda os arquivos para o app abrir offline e atualiza em segundo plano.
// Ao mudar algum arquivo do app, aumente o número da versão abaixo.
const CACHE = 'calorias-v1';
const ASSETS = ['./', './index.html', './foods.js', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  e.respondWith(
    caches.match(r, { ignoreSearch: true }).then(hit => {
      const net = fetch(r).then(res => {
        if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); }
        return res;
      }).catch(() => hit || (r.mode === 'navigate' ? caches.match('./index.html') : undefined));
      if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
      return net;
    })
  );
});
