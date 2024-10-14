/**
 * Handles user sign-up using Firebase authentication.
 *
 * This function performs the following operations:
 * 1. Creates a new user account with the provided email and password
 * 2. Updates the user's profile with the provided name and a default photo URL
 * 3. Sets the sign-up status to success if account creation is successful
 * 4. Sets the sign-up status to failure with a formatted error message if an error occurs
 *
 * The function uses Firebase's createUserWithEmailAndPassword and updateProfile methods
 * for user creation and profile updating, respectively. It also uses a custom
 * formatErrorMessage utility for error handling.
 *
 * @param {object} auth - The Firebase auth instance
 * @param {string} email - The user's email address
 * @param {string} name - The user's display name
 * @param {string} password - The user's password
 * @param {function} setSignUpStatus - Function to update the sign-up status
 */

// ** Firebase Authentication imports **
import {
  createUserWithEmailAndPassword, // Used to create a new user account with email and password
  updateProfile, // Used to update the user's profile with display name and photo URL
} from "firebase/auth";

// ** Utility function imports **
import { formatErrorMessage } from "../formatErrorMessage"; // Used to format error messages for display

export const handleSignUp = (auth, email, name, password, setSignUpStatus) => {
  // Create a new user account with the provided email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Get the user object from the userCredential
      const user = userCredential.user;
      // Update the user's profile with display name and default photo URL
      return updateProfile(user, {
        displayName: name,
        photoURL:
          "https://res.cloudinary.com/disqpzshx/image/upload/v1723570944/xndmubs4xbbwthbmidyc.png",
      });
    })
    .then(() => {
      // Set the sign-up status to success with a success message
      setSignUpStatus({
        success: true,
        message: "Account created successfully",
      });
    })
    .catch((error) => {
      // Set the sign-up status to failure with a formatted error message
      setSignUpStatus({
        success: false,
        message: formatErrorMessage(error.code),
      });
    });
};
