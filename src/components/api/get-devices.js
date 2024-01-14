import { auth } from "../../config/firebase";
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
