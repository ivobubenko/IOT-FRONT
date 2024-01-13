// UserContext.js
import "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserData } from "../components/api/get-devices";
import { auth } from "../config/firebase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([
    { name: "plant" },
    { name: "plant2" },
    { name: "plant3" },
    { name: "plant4" },
    { name: "plantasdfasdfadsfadsfa5" },
    { name: "plant6" },
    { name: "plant7" },
  ]);

  const [showedDevice, setShowedDevice] = useState(0);

  useEffect(() => {
    // Set up the authentication observer

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    // Clean up the observer when the component unmounts

    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    const fetchDevices = async () => {
      if (user) {
        try {
          console.log(user);
          const userData = await getUserData(user.uid);
          const devicesArr = userData[0].devices;
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

  return (
    <UserContext.Provider value={{ user, devices, changeDevice, showedDevice }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
