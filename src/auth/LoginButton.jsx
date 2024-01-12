import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="border-solid border-2 border-sky-500 rounded min-w-24 bg-sky-50 hover:bg-sky-100"
      onClick={() => loginWithRedirect()}
    >
      <p className="text-4xl subpixel-antialiased ">Login</p>
    </button>
  );
};

export default LoginButton;
