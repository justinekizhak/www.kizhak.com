importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.routing.registerRoute(
            /\.(?:js|css)$/,
        workbox.strategies.staleWhileRevalidate(),
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
