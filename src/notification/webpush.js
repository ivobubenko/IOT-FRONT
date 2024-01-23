async function sendSubscribeToServer(subscribe, uid) {
  const API_BASE_URL = "https://iot-server-o8j2.onrender.com/sendSubscription";

  const body = JSON.stringify({
    uid: uid,
    subscription: subscribe,
  });
  console.log(body);
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
async function sendUnSubscribeToServer(uid) {
  const API_BASE_URL =
    "https://iot-server-o8j2.onrender.com/sendUnsubscription";

  const body = JSON.stringify({
    uid: uid,
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
      return await registration.pushManager.getSubscription(uid);
    });
  }

  static async subscribe(uid) {
    console.log("debug1", uid);
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BOF5vD11z7CHvvdAUFMWCt2qDjUk5ou8CEbWLbCmcoIVpoZQRbrlafPJ1LafQJiyQtpoV49DBQBzYba7aq8kGeA", //process.env.REACT_APP_VAPID_PUBLIC_KEY,
    });
    console.log("debug2", subscription, uid);
    //console.log(uid, subscription);
    await sendSubscribeToServer(subscription, uid);

    return subscription;
  }

  3;
  static async unsubscribe(uid) {
    const subscription = await this.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
    }
    await sendUnSubscribeToServer(uid);
    return subscription;
  }
}

export default WebPushService;
