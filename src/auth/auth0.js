// auth0.js

import auth0 from "auth0-js";

const auth0Config = {
  domain: "dev-1lem1kbt4nmv4sqz.us.auth0.com",
  clientID: "gURbUHFZkNlXtxfE0k5HD3uLT1qqt5tn",
  redirectUri: "http://localhost:3000", // Your callback URL
  responseType: "token id_token",
  scope: "openid profile email",
};

const auth0Client = new auth0.WebAuth(auth0Config);

export default auth0Client;
