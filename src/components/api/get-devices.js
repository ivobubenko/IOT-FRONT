import { auth } from "../../config/firebase";

export async function getUserDevices() {
  let userData;
  try {
    const ownerId = auth.currentUser.uid;
    const response = await fetch(`http://localhost:8080/getdevices/${ownerId}`);

    userData = await response.json();
  } catch (e) {
    throw new Error();
  }
  return userData;
}
