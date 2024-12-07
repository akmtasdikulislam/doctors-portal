/**
 * RecentPrescriptions Component
 *
 * A React component that displays a table of recent prescriptions in a dashboard layout.
 *
 * Features:
 * - Displays a header with "Recent Prescriptions" title and a "View All" button
 * - Shows a table with columns for Medication, Dosage, Frequency, and End Date
 * - Each medication row includes a pill icon and prescription details
 * - Responsive design with Bootstrap classes for layout and spacing
 * - Uses PropTypes for type checking of the prescriptionsData prop
 *
 * Props:
 * - prescriptionsData: Array of prescription objects containing
 *   medicineName, dosage, frequency, and endDate properties
 *
 * Dependencies:
 * - lucide-react for icons (FileText, Pill)
 * - prop-types for runtime type checking
 */

/** React related imports */
import PropTypes from "prop-types"; // Used for runtime type checking of prescriptionsData prop to ensure data structure validity

/** Icon imports */
import { FileText, Pill } from "lucide-react"; // FileText icon used in 'View All' button, Pill icon used in prescription table rows

const RecentPrescriptions = ({ prescriptionsData }) => {
  return (
    <div className="recent-prescriptions p-4">
      {/* Main container for recent prescriptions section with padding */}
      <div className="d-flex align-items-center justify-content-between mb-5">
        {/* Header container with flex layout for title and button */}
        <h4>Recent Prescriptions</h4> {/* Section title */}
        <button className="btn btn-secondary d-flex gap-2 align-items-center">
          {/* View all button with flex layout and spacing */}
          <FileText className="icon" /> {/* File text icon from lucide-react */}
          <span>
            {/* Button text wrapper */}
            View All <span className="d-none d-sm-inline">Appointments</span>
            {/* Responsive text - hides 'Appointments' on small screens */}
          </span>
        </button>
      </div>
      <div className="recent-prescriptions-content d-flex flex-column flex-wrap gap-3 ">
        {/* Content container with flex column layout and gap spacing */}
        <table>
          {/* Table for structured display of prescription data */}
          <thead>
            {/* Table header container */}
            <tr>
              {/* Header row */}
              <th>
                {/* Header cell for medication name */}
                Medication
              </th>
              <th>
                {/* Header cell for dosage information */}
                Dosage
              </th>
              <th>
                {/* Header cell for frequency information */}
                Frequency
              </th>
              <th>End Date</th> {/* Header cell for end date */}
            </tr>
          </thead>
          <tbody>
            {/* Table body container */}
            {/* Iterates through prescription data array */}
            {prescriptionsData.map(
              (
                prescription,
                index /* Current prescription object and its index */
              ) => (
                // Table row for each prescription with unique key
                <tr key={index}>
                  <td>
                    {/* Cell for medication name with icon */}
                    <Pill className="medicine-icon me-3" />
                    {/* Pill icon from lucide-react with margin */}
                    {prescription.medicineName}
                    {/* Display medicine name from prescription data */}
                  </td>
                  <td>
                    {/* Cell for dosage information */}
                    {prescription.dosage}
                    {/* Display dosage from prescription data */}
                  </td>
                  {/* Cell for frequency information */}
                  <td>{prescription.frequency}</td>
                  <td>
                    {/* Cell for end date information */}
                    {prescription.endDate}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

RecentPrescriptions.propTypes = {
  // PropTypes validation object for RecentPrescriptions component to ensure type safety
  prescriptionsData: PropTypes.arrayOf(
    // Validates that prescriptionsData is an array containing prescription objects
    PropTypes.shape({
      // Defines the required structure/shape of each prescription object in the array
      medicineName: PropTypes.string.isRequired, // Validates that medicineName is a required string property
      dosage: PropTypes.string.isRequired, // Validates that dosage is a required string property
      frequency: PropTypes.string.isRequired, // Validates that frequency is a required string property
      endDate: PropTypes.string.isRequired, // Validates that endDate is a required string property
    })
  ).isRequired, // Ensures that the prescriptionsData prop must be provided when using this component
};
// Export the component for use in other parts of the application
export default RecentPrescriptions;
