/**
 * A utility function that generates unique identifiers for different entities (doctors, patients, appointments) in the system.
 * It combines a type-specific prefix with a random string of characters to ensure uniqueness.
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.type - The type of entity ('doctor', 'patient', or 'appointment')
 * @returns {string} A unique identifier with format PREFIX_RANDOMSTRING
 * 
 * Task List:
 * • Determine the appropriate prefix based on the entity type
 * • Generate a random string using a specific set of characters
 * • Combine prefix and random string to create a unique identifier
 * • Ensure generated IDs are consistent and readable
 * • Avoid similar-looking characters to prevent confusion
 */

export const generateId = ({ type }) => {
  let prefix = ""; // Initialize empty prefix string to store entity type identifier
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Define allowed characters for random part, excluding confusing characters like 0/O, 1/I

  // Determine the prefix based on the type
  if (type === "doctor") {
    prefix = "DOC"; // Set prefix for doctor type entities
  } else if (type === "patient") {
    prefix = "PAT"; // Set prefix for patient type entities
  } else if (type === "appointment") {
    prefix = "APP"; // Set prefix for appointment type entities
  }

  let randomPart = ""; // Initialize empty string to store the random characters

  // Generate 15 random characters for uniqueness
  for (let i = 0; i < 15; i++) {
    randomPart += characters.charAt(
      Math.floor(Math.random() * characters.length)
    ); // Append random character from allowed set to random part
  }

  return `${prefix}_${randomPart}`; // Combine prefix and random part with underscore separator to create final ID
};