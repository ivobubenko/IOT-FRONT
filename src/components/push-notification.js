export const subscribeUserToPush = (serverPublicKey) => {
  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    const pushOptions = {
      userVisibleOnly: true,
      applicationServerKey: serverPublicKey,
    };

    serviceWorkerRegistration.pushManager
      .subscribe(pushOptions)
      .then((subscription) => {
        console.log("Received PushSubscription:", subscription);
        // Send this subscription object to your server
        sendSubscriptionToServer(subscription);
      })
      .catch((error) => {
        if (Notification.permission === "denied") {
          console.warn("Permission for notifications was denied");
        } else {
          console.error("Failed to subscribe to push", error);
        }
      });
  });
};

const sendSubscriptionToServer = (subscription) => {
  // Implement the logic to send subscription to your server
};
