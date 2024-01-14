import { auth } from "../../config/firebase";
export const addDevice = async (device) => {
  console.log(device);

  try {
    console.log(device);
    const ownerId = auth.currentUser.uid;

    const response = await fetch(
      "https://iot-server-am3ha201v-ivo-bubenkos-projects.vercel.app/newdevice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer htTeTaXThUkLYdy7nSvzM3zY",
        },

        body: JSON.stringify({
          name: device.name,
          plant: device.selectedPlant,
          id: device.deviceId,
          ownerId: ownerId,
        }),
      }
    );

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error registering device:", error);
  }
};
