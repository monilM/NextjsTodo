import React, { useState } from "react";
import Login from "@/components/templates/Login";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../../utils/firebase"; // Import the auth object
import { NextRouterWrapper } from "@/routes";
import { DASHBOARD_PAGE } from "@/routes/paths";
import Loader from "@/components/atoms/Loader";

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const checkUserExists = async (email) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      // If signInMethods array is not empty, user exists
      return signInMethods.length > 0;
    } catch (error) {
      console.error("Error checking user existence:", error);

      return false; // Assume user doesn't exist on error
    }
  };

  const createNewUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;
      console.log("New user created:", newUser);
      return newUser; // Return the newly created user
    } catch (error) {
      console.error("Error creating new user:", error);
      return null; // Return null on error
    }
  };
  const authenticateUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in successfully:", user);
      return user; // Return the user object
    } catch (error) {
      console.error("Error signing in:", error);
      return null; // Return null on error (incorrect password, network error, etc.)
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("email", email);
    // const resp = await checkUserExists(email);
    // console.log("resp", resp);
    // if (!resp) {
    //   const newUserCreated = await createNewUser(email, password);
    //   console.log("newUserCreated", newUserCreated);
    // } else {
    const user = await authenticateUser(email, password);
    setIsLoading(false);
    if (user) {
      NextRouterWrapper({
        pathName: DASHBOARD_PAGE,
      });
    } else {
      console.log("Authentication failed");
    }
    // }
  };

  return (
    <div>
      {isLoading ? (
        <Loader /> // Display the loader while loading
      ) : null}
      <Login handleFormSubmit={handleFormSubmit}></Login>
    </div>
  );
};

export default LoginContainer;
