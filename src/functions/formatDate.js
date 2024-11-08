/**
 * Formats a given date object into a string representation.
 *
 * @param {Date} date - The date object to be formatted.
 * @param {string} [format="full"] - The format to use ("full", "short", or "iso").
 * @returns {string} A formatted date string based on the specified format:
 *                   - full: "01 January 2023"
 *                   - short: "01 Jan 2023"
 *                   - iso: "2023/01/01"
 *
 * This function takes a Date object and formats it into a string representation
 * based on the specified format. It extracts the day, month, and year components
 * from the input date. The month is converted from a numeric value to its
 * corresponding name using a predefined array of month names for full and short
 * formats. For ISO format, it returns the date in YYYY/MM/DD format.
 */

// Function to format a Date object into a string
function formatDate(date, format = "full") {
  /*
  This function takes a Date object and formats it into a string representation based on the specified format.
  It supports different date formats including full (e.g., "01 January 2023"), short (e.g., "01 Jan 2023"),
  and ISO (e.g., "2023/01/01"). The function handles the extraction and formatting of day, month, and year
  components from the input date.

  Format options:
  - "full": Returns date in format "01 January 2023"
  - "short": Returns date in format "01 Jan 2023" 
  - "iso": Returns date in format "2023/01/01"

  Task List:
  • Extract and pad the day component from the date
  • Get the month name from the months array
  • Extract the full year from the date
  • Format the date string based on the specified format
  • Return the formatted date string
  */

  // Array of month names for converting numeric month to string representation
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the day component and ensure it's two digits with leading zero if needed
  const day = date.getDate().toString().padStart(2, "0");
  // Convert numeric month to its corresponding name using the months array
  const month = months[date.getMonth()];
  // Get the full year as a four-digit number
  const year = date.getFullYear();

  // Determine the output format based on the format parameter
  switch (format) {
    case "full":
      // Return date in full format with complete month name
      return `${day} ${month} ${year}`;
    case "short":
      // Return date in short format with abbreviated month name
      return `${day} ${shortMonths[date.getMonth()]} ${year}`;
    case "iso":
      // Return date in ISO format (YYYY/MM/DD)
      return `${year}-${(date.getMonth()+1).toString().padStart(2, "0")}-${day}`;
    default:
      // Return full format as default if no valid format is specified
      return `${day} ${months.full[month]} ${year}`;
  }
}
// Export the formatDate function as the default export of this module
export default formatDate;
