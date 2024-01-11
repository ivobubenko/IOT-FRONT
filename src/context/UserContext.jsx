// UserContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserDevices } from "../components/api/get-devices";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState(null);
  const [showedDevice, setShowedDevice] = useState(0);

  const login = (userData) => {
    // Logic to handle user login
    setUser(userData);
  };

  const logout = () => {
    // Logic to handle user logout
    console.log("Logout");
    //Redirect
    setUser(null);
  };

  useEffect(() => {
    const fetchDevices = async (userId) => {
      try {
        const devicesData = await getUserDevices();
        setDevices(devicesData);
        console.log(devicesData);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };
    fetchDevices();
  }, []);

  const changeDevice = (number) => {
    setShowedDevice(number);
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, devices, changeDevice, showedDevice }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
