import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const LogoutButton = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      className="block px-4 py-2 w-full text-sm text-gray-700 text-center flex mx-auto"
      onClick={logOut}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
