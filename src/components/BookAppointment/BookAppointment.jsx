/**
 * BookAppointment Component
 *
 * This component is responsible for displaying available appointments for a selected date.
 * It receives a selectedDate prop and renders a list of appointment options.
 *
 * Key features:
 * - Displays multiple appointment options with details like name, time, and available spaces
 * - Uses the BookAppointmentCard component to render individual appointment cards
 * - Provides a variety of dental services for booking
 *
 * The component uses a static array of appointment data, which could be replaced
 * with dynamic data fetched from an API in a real-world scenario.
 */

/** React related imports */
import PropTypes from "prop-types"; // Used for type-checking component props

/** Component imports */
import BookAppointmentCard from "../BookAppointmentCard/BookAppointmentCard"; // Component for rendering individual appointment cards

const BookAppointment = ({ selectedDate }) => {
  // Data for available appointments
  const availableAppointments = [
    {
      id: 1,
      name: "Teeth Orthodontics",
      time: "08.00 AM - 09.00 AM",
      space: 10,
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      time: "09.00 AM - 10.00 AM",
      space: 8,
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "10.00 AM - 11.00 AM",
      space: 9,
    },
    {
      id: 4,
      name: "Cavity Protection",
      time: "11.00 AM - 12.00 PM",
      space: 5,
    },
    {
      id: 5,
      name: "Pediatric Dental",
      time: "06.00 PM - 07.00 PM",
      space: 10,
    },
    {
      id: 6,
      name: "Oral Surgery",
      time: "07.00 PM - 08.00 PM",
      space: 10,
    },
  ];
  return (
    <section className="container my-5 py-5">
      {/* Main container for the available services section with top and bottom margin/padding */}
      <h2 className="text-center sub-heading pb-5">
        {/* Centered heading for the section with bottom padding */}
        Available Services on {selectedDate}
        {/* Display the selected date for appointments */}
      </h2>
      <div className="row my-5">
        {/* Container for appointment cards with top and bottom margin */}
        {availableAppointments.map((appointment) => (
          // Map through the availableAppointments array to render individual appointment cards
          <BookAppointmentCard
            key={appointment.id}
            // Unique key prop for each appointment card
            appointment={appointment}
            // Pass the appointment data to the BookAppointmentCard component
            selectedDate={selectedDate}
            // Pass the selected date to the BookAppointmentCard component
          />
        ))}
      </div>
    </section>
  );
};

BookAppointment.propTypes = {
  // Define the expected prop types for the BookAppointment component
  selectedDate: PropTypes.string.isRequired,
  // Ensure that selectedDate is a required string prop
};

export default BookAppointment;
// Export the BookAppointment component as the default export
