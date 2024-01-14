import { auth } from "../../config/firebase";
//bearer token: htTeTaXThUkLYdy7nSvzM3zY

export async function getUserDevices() {
  let userData;
  try {
    const ownerId = auth.currentUser.uid;
    const response = await fetch(
      `https://iot-server-am3ha201v-ivo-bubenkos-projects.vercel.app/${ownerId}`,
      {
        headers: {
          Authorization: "Bearer htTeTaXThUkLYdy7nSvzM3zY",
        },
      }
    );

    userData = await response.json();
  } catch (e) {
    throw new Error();
  }
  return userData;
}
