/**
 * Formats a given date object into a string representation.
 * 
 * @param {Date} date - The date object to be formatted.
 * @returns {string} A string in the format "day Month year" (e.g., "1 January 2023").
 * 
 * This function takes a Date object as input and returns a formatted string
 * representation of the date. It extracts the day, month, and year from the
 * input date. The month is converted from a numeric value to its corresponding
 * name using a predefined array of month names. The resulting string combines
 * the day, month name, and year in the specified format.
 */

// Array of month names for converting numeric month to string representation
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Function to format a Date object into a string
function formatDate(date) {
  // Extract the day of the month from the date object
  const day = date.getDate();
  // Get the month name using the numeric month as an index in the months array
  const month = months[date.getMonth()];
  // Extract the full year (4 digits) from the date object
  const year = date.getFullYear();

  // Return the formatted date string using template literals
  return `${day} ${month} ${year}`;
}

// Export the formatDate function as the default export of this module
export default formatDate;
