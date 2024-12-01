/**
 * UpcomingAppointments Component
 *
 * A React component that displays a table of upcoming medical appointments.
 *
 * Features:
 * - Renders a table with patient name, appointment time, and appointment type
 * - Uses PropTypes for type checking of the appointments data
 * - Displays appointment types with dynamic badge styling
 * - Responsive layout with Bootstrap classes
 *
 * Props:
 * - upcomingAppointmentsData: Array of appointment objects containing
 *   patientName, time, and type properties
 *
 * Usage:
 * <UpcomingAppointments upcomingAppointmentsData={appointmentsArray} />
 */

/** PropTypes related imports */
import PropTypes from "prop-types"; // Used for type checking of component props - validates upcomingAppointmentsData structure

const UpcomingAppointments = ({ upcomingAppointmentsData }) => {
  return (
    <div className="upcoming-appointments p-4">
      {/* Main container with padding */}
      {/* Section heading */}
      <h4 className="mb-5">Upcoming Appointments</h4>{" "}
      {/* Title with bottom margin */}
      {/* Content wrapper with flex column layout and spacing */}
      <div className="upcoming-appointments-content d-flex flex-column flex-wrap gap-3 ">
        {/* Container for appointments table with flex layout */}
        <table>
          {/* Table element to structure appointment data */}
          <thead>
            {/* Table header section */}
            {/* Table row for column headers */}
            <tr>
              <th>
                {/* Column header for patient name */}
                Patient
              </th>
              <th>
                {/* Column header for appointment time */}
                Time
              </th>
              <th>
                {/* Column header for appointment type */}
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Table body section */}
            {upcomingAppointmentsData.map(
              (
                appointment,
                index // Iterate through appointments array
              ) => (
                //  Table row for each appointment with unique key
                <tr key={index}>
                  <td>
                    {/* Display patient name */}
                    {appointment.patientName}
                  </td>
                  <td>
                    {/* Display appointment time */}
                    {appointment.time}
                  </td>
                  <td>
                    {/* Cell for appointment type badge */}
                    <div
                      className={`badge ${appointment.type.toLowerCase()}-badge`} // Dynamic badge class based on appointment type
                    >
                      {appointment.type} {/* Display appointment type */}
                    </div>
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

UpcomingAppointments.propTypes = {
  // Define prop types for UpcomingAppointments component for type checking
  upcomingAppointmentsData: PropTypes.arrayOf(
    // Specify that upcomingAppointmentsData should be an array
    PropTypes.shape({
      // Define the shape/structure of each object in the array
      patientName: PropTypes.string.isRequired, // Patient name must be a string and is required
      time: PropTypes.string.isRequired, // Appointment time must be a string and is required
      type: PropTypes.string.isRequired, // Appointment type must be a string and is required
    })
  ).isRequired, // The entire upcomingAppointmentsData array prop is required
};

// Export the component for use in other parts of the application
export default UpcomingAppointments;
