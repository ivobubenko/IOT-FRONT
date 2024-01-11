// Callback.js

import React, { useEffect } from "react";
import auth0Client from "./auth0"; // Import the Auth0 client
import { useHistory } from "react-router-dom";

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    auth0Client.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // Store the tokens in localStorage or a secure cookie
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);

        // Redirect or update UI as needed
        history.push("/"); // Redirect to the home page or wherever you want
      } else if (err) {
        console.error("Authentication error", err);
      }
    });
  }, [history]);

  return <div>Authenticating...</div>;
};

export default Callback;
