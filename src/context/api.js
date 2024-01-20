import { auth } from "../config/firebase";

const API_BASE_URL = "https://iot-server-o8j2.onrender.com";

// Centralized API call function
async function makeApiCall(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error; // rethrow the error to be handled by the calling function
  }
}

export const addDeviceAPI = async (device) => {
  const ownerId = auth.currentUser.uid;
  const body = JSON.stringify({
    name: device.name,
    plant: device.selectedPlant,
    id: device.deviceId,
    ownerId: ownerId,
  });

  return await makeApiCall(`${API_BASE_URL}/newdevice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer your-bearer-token-here`, // Replace with secure token retrieval
    },
    body: body,
  });
};

export async function getUserDevices() {
  const ownerId = auth.currentUser.uid;
  return await makeApiCall(`${API_BASE_URL}/getdevices/${ownerId}`);
}

export const registerUser = async (user) => {
  const body = JSON.stringify({
    acessToken: user.accessToken, // There's a typo here, should it be "accessToken"?
    email: user.email,
    uid: user.uid,
  });

  return await makeApiCall(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
};

export const removeDeviceApi = async (uid, deviceId) => {
  return await makeApiCall(`${API_BASE_URL}/deletedevice/${uid}/${deviceId}`);
};

export const loadDeviceApi = async (device) => {
  if (!device) {
    throw new Error("Device not found");
  }
  // Simulated API call, replace with a real API call if needed
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([` hi ${device.name}`]);
    }, 100);
  });
};

export const connectToDeviceApi = async (uid, deviceId) => {
  return await makeApiCall(`${API_BASE_URL}/connectdevice/${uid}/${deviceId}`);
};

export const changeNameApi = async (deviceId, uid, newName) => {
  return await makeApiCall(
    `${API_BASE_URL}/changedevicename/${uid}/${deviceId}${newName}`
  );
};
