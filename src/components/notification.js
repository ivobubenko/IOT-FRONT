import { subscribeUserToPush } from "./push-notification";

export const handleSubscribeClick = () => {
  if (Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // Call the subscribe function with your VAPID public key
        subscribeUserToPush(
          "BP-JgYy2hzhTWB5LFPD_jhscLGJ2fDggIrlifMFFELzAYYyLBrthOUJ3_ldUr22PLXHNfjYCZ33An1PzN3WiaNc"
        );
      }
    });
  }
};
