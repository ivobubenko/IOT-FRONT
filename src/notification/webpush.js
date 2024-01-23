async function sendSubscribeToServer(subscribe, uid) {
  const API_BASE_URL = "https://iot-server-o8j2.onrender.com/sendSubscription";

  const body = JSON.stringify({
    subscribe,
    uid,
  });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body, // Convert the object to a JSON string
  };
  const response = await fetch(API_BASE_URL, options);
  console.log(response);
}
async function sendUnSubscribeToServer(subscribe, uid) {
  const API_BASE_URL =
    "https://iot-server-o8j2.onrender.com/sendUnsubscription";

  const body = JSON.stringify({
    subscribe,
    uid,
  });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body, // Convert the object to a JSON string
  };
  const response = await fetch(API_BASE_URL, options);
  console.log(response);
}

class WebPushService {
  static hasPermission() {
    return Notification.permission === "granted";
  }

  static async requestPermission() {
    return await Notification.requestPermission();
  }

  static async getSubscription(uid) {
    return await navigator.serviceWorker.ready.then(async (registration) => {
      return await registration.pushManager.getSubscription();
    });
  }

  static async subscribe(uid) {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BOF5vD11z7CHvvdAUFMWCt2qDjUk5ou8CEbWLbCmcoIVpoZQRbrlafPJ1LafQJiyQtpoV49DBQBzYba7aq8kGeA", //process.env.REACT_APP_VAPID_PUBLIC_KEY,
    });
    console.log("debug2", subscription);
    //console.log(uid, subscription);
    sendSubscribeToServer(subscription, uid);

    return subscription;
  }

  3;
  static async unsubscribe(uid) {
    const subscription = await this.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
    }
    sendUnSubscribeToServer(subscription, uid);
    return subscription;
  }
}

export default WebPushService;
