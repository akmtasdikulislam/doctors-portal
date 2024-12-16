/**
 * UpcomingAppointments Component
 *
 * A React component that displays upcoming appointments in a table format.
 * The component handles two different views based on user category (doctor/patient).
 *
 * Features:
 * - Header section with title and "View All" button
 * - Responsive design with Bootstrap classes
 * - Table view that adapts based on user type:
 *   For doctors: Shows patient name, time, and appointment type
 *   For patients: Shows doctor name, specialty, date, and time
 * - Dynamic badge styling for appointment types
 * - Responsive text that conditionally shows "Appointments" on larger screens
 *
 * Props:
 * @param {Array} upcomingAppointmentsData - Array of appointment objects containing
 *                                          details like patient/doctor info, time,
 *                                          date, and appointment type
 *
 * @returns {JSX.Element} A table displaying upcoming appointments
 */

/** React related imports */
import PropTypes from "prop-types"; // For type checking and validation of component props

/** Icon imports */
import { FileText } from "lucide-react"; // Icon component used in the "View All" button header section

const UpcomingAppointments = ({ upcomingAppointmentsData }) => {
  const user = {
    category: "patient",
  };
  return (
    <div className="upcoming-appointments p-4">
      {/* Main container with padding for upcoming appointments section */}
      <div className="d-flex align-items-center justify-content-between mb-5">
        {/* Flex container for header with space between title and button */}
        <h4>Upcoming Appointments</h4> {/* Section title */}
        <button className="btn btn-secondary d-flex gap-2 align-items-center">
          {/* Button with secondary styling and flex layout for icon alignment */}
          <FileText className="icon" /> {/* File text icon from Lucide React */}
          <span>
            {/* Text wrapper for button content */}
            View All <span className="d-none d-sm-inline">Appointments</span>
            {/* Responsive text that shows "Appointments" only on larger screens */}
          </span>
        </button>
      </div>
      <div className="upcoming-appointments-content d-flex flex-column flex-wrap gap-3 ">
        {/* Content wrapper with flex column layout and spacing */}
        <table>
          {/* Table for structured display of appointment data */}
          {user.category === "doctor" ? (
            // Conditional rendering based on user category
            <>
              <thead>
                <tr>
                  {/* Table header row for doctor view */}
                  <th>Patient</th> {/* Column header for patient name */}
                  <th>Time</th> {/* Column header for appointment time */}
                  <th>Type</th> {/* Column header for appointment type */}
                </tr>
              </thead>
              <tbody>
                {upcomingAppointmentsData.map((appointment, index) => (
                  //  {/* Mapping through appointments data for doctor view */}
                  <tr key={index}>
                    Individual appointment row with unique key
                    <td>{appointment.patientName}</td>
                    {/* Cell displaying patient name */}
                    <td>{appointment.time}</td>
                    {/* Cell displaying appointment time */}
                    <td>
                      <div
                        className={`badge ${appointment.type.toLowerCase()}-badge`}
                      >
                        {/* Dynamic badge with styling based on appointment type */}
                        {appointment.type}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <>
              <thead>
                <tr>
                  {/* Table header row for patient view */}
                  <th>Doctor</th> {/* Column header for doctor name */}
                  <th>Speciality</th>
                  {/* Column header for doctor speciality */}
                  <th>Date</th> {/* Column header for appointment date */}
                  <th>Time</th> {/* Column header for appointment time */}
                </tr>
              </thead>
              <tbody>
                {upcomingAppointmentsData.map((appointment, index) => (
                  // Mapping through appointments data for patient view
                  <tr key={index}>
                    {/* Individual appointment row with unique key */}
                    <td>{appointment.doctor.name}</td>
                    {/* Cell displaying doctor name */}
                    <td>{appointment.doctor.speciality}</td>
                    {/* Cell displaying doctor speciality */}
                    <td>{appointment.date}</td>
                    {/* Cell displaying appointment date */}
                    <td>{appointment.time}</td>
                    {/* Cell displaying appointment time */}
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

UpcomingAppointments.propTypes = {
  // Define the expected prop types for the UpcomingAppointments component
  upcomingAppointmentsData: PropTypes.arrayOf(
    // Specify that upcomingAppointmentsData should be an array of objects
    PropTypes.shape({
      // Define the shape/structure of each appointment object in the array
      patientName: PropTypes.string, // Patient's name should be a string
      time: PropTypes.string, // Appointment time should be a string
      type: PropTypes.string, // Appointment type should be a string
      doctor: PropTypes.shape({
        // Define nested object structure for doctor information
        name: PropTypes.string, // Doctor's name should be a string
        speciality: PropTypes.string, // Doctor's speciality should be a string
      }),
      date: PropTypes.string, // Appointment date should be a string
    })
  ).isRequired, // Mark the prop as required for the component to function properly
};
// Export the component for use in other parts of the application
export default UpcomingAppointments;
