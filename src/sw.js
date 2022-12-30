import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

self.skipWaiting();
clientsClaim();
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: "test push notification",
    image:
      "https://pixabay.com/vectors/bell-notification-communication-1096280/",
    icon: "https://pixabay.com/vectors/bell-notification-communication-1096280/",
  });
});
