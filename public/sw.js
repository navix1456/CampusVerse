const CACHE_VERSION = 'v2';
const CACHE_NAME = `campusverse-cache-${CACHE_VERSION}`;
const STATIC_CACHE = `static-cache-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-cache-${CACHE_VERSION}`;

const urlsToCache = [
  '/',
  '/index.html',
  '/assets/',
  '/manifest.json',
  '/favicon.ico'
];

// Cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Cache installation failed:', error);
      })
  );
  // Force activate the new service worker immediately
  self.skipWaiting();
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});

// Handle fetch requests
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          // Check if the cached response is stale
          const cacheDate = response.headers.get('date');
          if (cacheDate) {
            const cacheTime = new Date(cacheDate).getTime();
            const now = new Date().getTime();
            // If cache is older than 1 hour, fetch fresh
            if (now - cacheTime > 3600000) {
              return fetchAndCache(event.request);
            }
          }
          return response;
        }

        return fetchAndCache(event.request);
      })
      .catch(() => {
        // Return offline fallback if available
        return caches.match('/offline.html');
      })
  );
});

async function fetchAndCache(request) {
  try {
    const response = await fetch(request);
    
    // Check if valid response
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }

    // Clone the response
    const responseToCache = response.clone();

    // Cache the response
    const cache = await caches.open(DYNAMIC_CACHE);
    await cache.put(request, responseToCache);

    return response;
  } catch (error) {
    console.error('Fetch failed:', error);
    // Return offline fallback if available
    return caches.match('/offline.html');
  }
} 