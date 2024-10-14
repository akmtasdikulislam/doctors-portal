/**
 * Handles user sign-out using Firebase authentication.
 *
 * This function performs the following operations:
 * 1. Attempts to sign out the user using Firebase's signOut method
 * 2. If successful, logs a success message to the console
 * 3. If unsuccessful, logs the error to the console
 *
 * The function uses Firebase's signOut method for authentication.
 * It's designed to be simple and straightforward, focusing solely on the sign-out process.
 *
 * @param {object} auth - The Firebase auth instance
 */

// ** Firebase Authentication Imports **
import { signOut } from "firebase/auth"; // Used to sign out the user from Firebase Authentication
export const handleSignOut = (auth) => {
  // Call the signOut function with the auth object
  signOut(auth)
    .then(() => {
      // If sign-out is successful, log a message
      console.log("Sign-out successful");
    })
    .catch((error) => {
      // If there's an error during sign-out, log the error
      console.log(error);
    });
};
