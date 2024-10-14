/**
 * Handles Google Sign-In functionality using Firebase authentication.
 *
 * This function performs the following operations:
 * 1. Creates a new GoogleAuthProvider instance
 * 2. Initiates Google Sign-In with a popup window
 * 3. On successful sign-in, navigates to the previous page or home page
 * 4. On sign-in failure, displays a formatted error message to the user
 *
 * The function uses Firebase's GoogleAuthProvider and signInWithPopup methods
 * for authentication, and a custom formatErrorMessage utility for error handling.
 *
 * @param {object} auth - The Firebase auth instance
 * @param {function} navigate - Function to handle navigation
 * @param {object} location - Object containing navigation state
 */

// ** Firebase Authentication imports **
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Used for Google Sign-In functionality

// ** Utility function imports **
import { formatErrorMessage } from "../formatErrorMessage"; // Used to format error messages for display

export const handleContinueWithGoogle = (auth, navigate, location) => {
  // Create a new GoogleAuthProvider instance for Google Sign-In
  const provider = new GoogleAuthProvider();

  // Initiate Google Sign-In with a popup window
  signInWithPopup(auth, provider)
    .then(() => {
      // On successful sign-in, navigate to the previous page or home page
      navigate(location.state?.from || "/", { replace: true });
    })
    .catch((error) => {
      // Handle sign-in errors
      const errorCode = error.code;
      // Display a formatted error message to the user
      window.alert(formatErrorMessage(errorCode));
    });
};
