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

//self.addEventListener("install", (e) => {
  //console.log(e);
  //send().catch((err) => console.error(err));
//});

//const publicVapidKey =
  //"BB1hwvVLRa3fx56npRsQghzXs4gq9nMmEJHKtSoPSdlU98QD7CQL_6r9lGWlP_04bBes6Ef7OXy7sGoBMu0PPZc";
//async function send() {
  //const options = {
    //userVisibleOnly: true,
    //applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  //};
  //ServiceWorkerRegistration.pushManager.subscribe(options).then(
    //(pushSubscription) => {
      //console.log(pushSubscription.endpoint);
    //},
    //(error) => {
      //console.error(error);
    //}
  //);

  //await fetch("http://localhost:3000/subscribe", {
    //method: "POST",
    //body: JSON.stringify(subscription),
    //headers: {
      //"content-type": "application/json",
    //},
  //});
//}

//function urlBase64ToUint8Array(base64String) {
  //const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  //const base64 = (base64String + padding)
    //.replace(/\-/g, "+")
    //.replace(/_/g, "/");

  //const rawData = window.atob(base64);
  //const outputArray = new Uint8Array(rawData.length);

  //for (let i = 0; i < rawData.length; ++i) {
    //outputArray[i] = rawData.charCodeAt(i);
  //}
  //return outputArray;
//}
