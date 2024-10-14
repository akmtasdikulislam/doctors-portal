/**
 * Handles user login using Firebase authentication.
 *
 * This function performs the following operations:
 * 1. Attempts to sign in the user with provided email and password
 * 2. If successful, updates login status with a success message
 * 3. If unsuccessful, formats the error message and updates login status with failure
 *
 * The function uses Firebase's signInWithEmailAndPassword method for authentication
 * and a custom formatErrorMessage utility for error handling.
 *
 * @param {object} auth - The Firebase auth instance
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 * @param {function} setLoginStatus - Function to update the login status
 */

// ** Firebase related imports **
import { signInWithEmailAndPassword } from "firebase/auth"; // Used for authenticating users with email and password

// ** Utility function imports **
import { formatErrorMessage } from "../formatErrorMessage"; // Used to format error messages for display to the user

export const handleLogin = (auth, email, password, setLoginStatus) => {
  // Attempt to sign in the user with provided credentials
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // If sign-in is successful, update login status
      setLoginStatus({
        success: true,
        message: "Login successful",
      });
    })
    .catch((error) => {
      // If sign-in fails, update login status with error message
      setLoginStatus({
        success: false,
        message: formatErrorMessage(error.code),
      });
    });
};
