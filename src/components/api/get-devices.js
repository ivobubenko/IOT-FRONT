import { auth } from "../../config/firebase";

export async function getUserDevices() {
  let userData;
  try {
    const ownerId = auth.currentUser.uid;
    const response = await fetch(
      `https://iot-server-am3ha201v-ivo-bubenkos-projects.vercel.app/${ownerId}`
    );

    userData = await response.json();
  } catch (e) {
    throw new Error();
  }
  return userData;
}
