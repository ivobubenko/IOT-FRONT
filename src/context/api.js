import { auth } from "../config/firebase";
export const addDeviceAPI = async (device) => {
  console.log(device);

  try {
    console.log(device);
    const ownerId = auth.currentUser.uid;

    const response = await fetch(
      "https://iot-server-o8j2.onrender.com/newdevice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    return result;
  } catch (error) {
    console.error("Error registering device:", error);
    return "false";
  }
};
//bearer token: htTeTaXThUkLYdy7nSvzM3zY

export async function getUserDevices() {
  let userData;
  try {
    const ownerId = auth.currentUser.uid;
    const response = await fetch(
      `https://iot-server-o8j2.onrender.com/getdevices/${ownerId}`
    );

    userData = await response.json();
  } catch (e) {
    throw new Error();
  }
  return userData;
}

export const registerUser = async (user) => {
  try {
    //console.log(user);
    const response = await fetch("https://iot-server-o8j2.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acessToken: user.accessToken,
        email: user.email,
        uid: user.uid,
      }),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
