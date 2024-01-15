// UserContext.js
import "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { addDeviceAPI, getUserDevices, removeDeviceApi } from "./api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([]);

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
          const userData = await getUserDevices(user.uid);

          const devicesArr = userData.devices;
          setDevices(devicesArr);
        } catch (error) {}
      }
    };

    fetchDevices();
  }, [user]);

  const changeDevice = (number) => {
    setShowedDevice(number);
  };

  const removeDevice = async () => {
    //console.log(user, devices[showedDevice]);
    const uid = user.uid;
    const deviceId = devices[showedDevice].id;
    const response = await removeDeviceApi(uid, deviceId);
    setDevices(response.updatedDevices);
    response.success && setShowedDevice(0);
    return response;
  };
  const addDevice = async (device) => {
    const newDevices = await addDeviceAPI(device);

    if (newDevices.message === "Device added") {
      setDevices(newDevices.devices);

      setShowedDevice(
        newDevices.devices.findIndex((d) => d.id === device.deviceId) ?? 0
      );
      /*
      console.log(newDevices.devices, device);
      console.log(
        newDevices.devices.findIndex((d) => d.id === device.deviceId) ?? 0
      );*/
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
