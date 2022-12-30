const publicVapidKey =
  "BB1hwvVLRa3fx56npRsQghzXs4gq9nMmEJHKtSoPSdlU98QD7CQL_6r9lGWlP_04bBes6Ef7OXy7sGoBMu0PPZc";

async function send(serviceWorkerRegistration) {
  const options = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  };
  serviceWorkerRegistration.pushManager.subscribe(options).then(
    async (pushSubscription) => {
      console.log(pushSubscription.endpoint);
      await fetch("https://pwa-push-server.onrender.com/subscribe", {
        method: "POST",
        body: JSON.stringify(pushSubscription),
        headers: {
          "content-type": "application/json",
        },
      });
    },
    (error) => {
      console.error(error);
    }
  );
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default send;
