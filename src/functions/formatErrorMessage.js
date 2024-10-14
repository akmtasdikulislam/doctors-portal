/**
 * Formats an error code into a more readable message.
 *
 * This function takes an error code as input and performs the following operations:
 * 1. Removes the "auth/" prefix if present
 * 2. Splits the code into words based on hyphens
 * 3. Capitalizes the first word
 * 4. Joins the words back together with spaces
 *
 * The resulting string is a more human-readable error message.
 *
 * @param {string} errorCode - The error code to be formatted
 * @returns {string} A formatted error message
 */

export const formatErrorMessage = (errorCode) => {
  // Remove the "auth/" prefix if it exists
  const code = errorCode.replace("auth/", ""); // Remove "auth/" prefix from the error code

  // Split the code by hyphens
  const words = code.split("-"); // Split the code into an array of words

  // Capitalize the first word
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1); // Capitalize the first letter of the first word

  // Join the words back together with spaces
  return words.join(" "); // Combine words into a formatted error message
};
