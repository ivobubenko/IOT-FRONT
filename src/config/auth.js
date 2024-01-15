import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { registerUser } from "../context/api";

export const signInWithGoogle = async () => {
  try {
    const userCredentialImpl = await signInWithPopup(auth, googleProvider);
    registerUser(userCredentialImpl.user);
  } catch (err) {
    console.error("Problem signing with google", err);
  }
};
