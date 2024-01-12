// UserContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserData } from "../components/api/get-devices";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user: auth0User } = useAuth0();
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState(null);
  const [showedDevice, setShowedDevice] = useState(0);

  useEffect(() => {
    setUser(auth0User);
  }, [auth0User]);

  useEffect(() => {
    const fetchDevices = async () => {
      if (user) {
        try {
          const userData = await getUserData(auth0User.email);
          const devicesArr = userData[0].devices;
          setDevices(devicesArr);
        } catch (error) {
          console.error("Error fetching devices:", error);
        }
      }
    };
    fetchDevices();
  }, [auth0User]);

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
