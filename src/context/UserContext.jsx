// UserContext.js

import "firebase/auth";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { auth } from "../config/firebase";
import {
  addDeviceAPI,
  getUserDevices,
  removeDeviceApi,
  loadDeviceApi,
  connectToDeviceApi,
  changeNameApi,
} from "./api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  // Use more granular loading states
  const [loadingDevices, setLoadingDevices] = useState(false);
  const [loadingDeviceData, setLoadingDeviceData] = useState(false);

  const [showedDevice, setShowedDevice] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  // Example of error handling
  const loadDevices = async (uid) => {
    try {
      setLoadingDevices(true);
      const userData = await getUserDevices(uid);
      setDevices(userData.devices);
    } catch (error) {
      console.error("Failed to load devices:", error);
      // Handle error appropriately
    } finally {
      setLoadingDevices(false);
    }
  };
  useEffect(() => {
    const fetchDevices = async () => {
      if (user) {
        await loadDevices(user.uid);
      }
    };

    fetchDevices();
  }, [user]);

  // Only load device data when showedDevice changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingDeviceData(true);

        try {
          const data = await loadDeviceApi(devices[showedDevice]);
          if (!data.deviceData) throw new Error("YYYYYYAAAAAAAAAAa");
          setDeviceData(data.deviceData);
        } catch (e) {
          setDeviceData([
            { date: null, moisture: null, temperature: null, waterlevel: null },
          ]);
        }
      } catch (error) {
        console.error("Failed to load device data:", error);
        // Handle error appropriately
      } finally {
        setLoadingDeviceData(false);
      }
    };

    if (devices.length > 0) {
      fetchData();
    }
  }, [devices, showedDevice]);

  ///
  // Use useCallback to memoize functions
  const changeDevice = useCallback(async (number) => {
    setShowedDevice(number);
  }, []);
  ///
  const removeDevice = async () => {
    //console.log(user, devices[showedDevice]);
    const uid = user.uid;
    const deviceId = devices[showedDevice].id;
    setLoadingDevices(true);
    const response = await removeDeviceApi(uid, deviceId);
    setDevices(response.updatedDevices);
    setLoadingDevices(false);
    response.success && setShowedDevice(0);
    return response;
  };

  ///
  const addDevice = async (device) => {
    setLoadingDevices(true);
    const newDevices = await addDeviceAPI(device);
    setLoadingDevices(false);
    if (newDevices.message === "Device added") {
      setDevices(newDevices.devices);

      setShowedDevice(
        newDevices.devices.findIndex((d) => d.id === device.deviceId) ?? 0
      );
    } else if (newDevices.message === "Device already exists!") {
      setShowedDevice(devices.findIndex((d) => d.id === device.deviceId));
    }
    return "Failed";
  };

  const connectDevice = async (deviceId) => {
    await connectToDeviceApi(user.uid, deviceId);
    await loadDevices(user.uid);
    const index = devices.findIndex((d) => d.id === deviceId);

    setShowedDevice(index !== -1 ? index : 0);
  };

  const changeDeviceName = async (newName) => {
    setLoadingDeviceData(true);
    const resp = await changeNameApi(
      user.uid,
      devices[showedDevice].id,
      newName
    );
    await loadDevices(user.uid);
    setLoadingDeviceData(false);
    return resp;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        devices,
        changeDevice,
        showedDevice,
        addDevice,
        removeDevice,
        deviceData,
        loadingDeviceData,
        loadingDevices,
        connectDevice,
        changeDeviceName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
