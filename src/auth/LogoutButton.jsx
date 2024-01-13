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
      className="border-solid border-2 border-blue-900 rounded bg-blue-400 min-w-24"
      onClick={logOut}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
