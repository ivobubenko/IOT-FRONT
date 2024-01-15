// UserContext.js
import "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { addDeviceAPI, getUserDevices } from "./api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([]);

  const [showedDevice, setShowedDevice] = useState(0);

  useEffect(() => {
    // Set up the authentication observer

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    // Clean up the observer when the component unmounts

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchDevices = async () => {
      if (user) {
        try {
          const userData = await getUserDevices(user.uid);
          console.log(userData.devices);

          const devicesArr = userData.devices;
          setDevices(devicesArr);
        } catch (error) {
          console.error("Error fetching devices:", error);
        }
      }
    };

    fetchDevices();
  }, [user]);

  const changeDevice = (number) => {
    setShowedDevice(number);
  };
  const addDevice = async (device) => {
    const newDevices = await addDeviceAPI(device);
    console.log(newDevices);
    if (newDevices.message === "Device added") {
      setDevices(newDevices.devices);

      setShowedDevice(
        newDevices.devices.findIndex((d) => d.id === device.deviceId) ?? 0
      );
      console.log(newDevices.devices, device);
      console.log(
        newDevices.devices.findIndex((d) => d.id === device.deviceId) ?? 0
      );
    } else if (newDevices.message === "Device already exists!") {
      setShowedDevice(devices.findIndex((d) => d.id === device.deviceId));
    }
    return "Failed";
  };

  return (
    <UserContext.Provider
      value={{ user, devices, changeDevice, showedDevice, addDevice }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
