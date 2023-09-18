import { app } from "./firebaseSetup";
import toast from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

export async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User registered:", user);
    toast.success("User Created");
  } catch (error) {
    console.error("Registration error:", error);
    toast.error("Something Went Wrong");
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User logged in:", user);
    toast.success("User Login");
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Something Went Wrong");
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("User logged out");
    toast.success("User Logout");
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("Something Went Wrong");
  }
}
