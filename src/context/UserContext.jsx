// UserContext.js
import "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  addDeviceAPI,
  getUserDevices,
  removeDeviceApi,
  loadDeviceApi,
} from "./api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showedDevice, setShowedDevice] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchDevices = async () => {
      if (user) {
        try {
          setLoading(true);
          const userData = await getUserDevices(user.uid);
          const devicesArr = userData.devices;
          setDevices(devicesArr);
          setLoading(false);
        } catch (error) {}
      }
    };

    fetchDevices();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setDeviceData(await loadDeviceApi(devices[showedDevice]));
      setLoading(false);
    };
    fetchData();
  }, [devices, showedDevice]);

  ///
  const changeDevice = async (number) => {
    setShowedDevice(number);
  };
  ///
  const removeDevice = async () => {
    //console.log(user, devices[showedDevice]);
    const uid = user.uid;
    const deviceId = devices[showedDevice].id;
    setLoading(true);
    const response = await removeDeviceApi(uid, deviceId);
    setDevices(response.updatedDevices);
    setLoading(false);
    response.success && setShowedDevice(0);
    return response;
  };

  ///
  const addDevice = async (device) => {
    setLoading(true);
    const newDevices = await addDeviceAPI(device);
    setLoading(false);
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
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
