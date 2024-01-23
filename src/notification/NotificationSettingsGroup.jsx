/*
import { subscribeUserToPush } from "./push-notification";

export const handleSubscribeClick = async (user) => {
  if (Notification.permission === "granted") {
    // Call the subscribe function with your VAPID public key

    console.log(
      await subscribeUserToPush(
        user,
        "BP-JgYy2hzhTWB5LFPD_jhscLGJ2fDggIrlifMFFELzAYYyLBrthOUJ3_ldUr22PLXHNfjYCZ33An1PzN3WiaNc"
      )
    );
  }
};*/

import WebPushService from "./webpush";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import React from "react";

const NotificationSettingsGroup = React.forwardRef((props, ref) => {
  const [push, setPush] = useState(false);
  const { user } = useUser();

  const handlePushChange = async (e) => {
    const { checked } = e.target;
    setPush(checked);
    try {
      if (!checked) {
        const payload = await WebPushService.unsubscribe(user.uid);
        if (payload) {
          await WebPushService.unsubscribe(user.uid); // server
        }
        return;
      }

      if (!WebPushService.hasPermission()) {
        await WebPushService.requestPermission();
      }
      // console.log("debug3", await WebPushService.getSubscription(user.uid));
      let subscription = await WebPushService.getSubscription(user.uid);
      console.log("debug4", subscription);
      if (!subscription) {
        subscription = await WebPushService.subscribe(user.uid);
      }
      await WebPushService.subscribe(user.uid); // server
      console.log("Subscribed to web push");
    } catch (error) {
      setPush(!checked);
      console.error(error);
    }
  };

  return (
    <section>
      <div className="block px-4 py-2 w-full text-sm text-gray-700 text-center flex mx-auto">
        Notifications
        <input type="checkbox" checked={push} onChange={handlePushChange} />
      </div>
    </section>
  );
});

export default NotificationSettingsGroup;
