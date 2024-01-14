import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const registerUser = async (user) => {
  try {
    //console.log(user);
    const response = await fetch(
      "https://iot-server-am3ha201v-ivo-bubenkos-projects.vercel.app//login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          acessToken: user.accessToken,
          email: user.email,
          uid: user.uid,
        }),
      }
    );

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const signInWithGoogle = async () => {
  try {
    const userCredentialImpl = await signInWithPopup(auth, googleProvider);
    registerUser(userCredentialImpl.user);
  } catch (err) {
    console.error("Problem signing with google", err);
  }
};
