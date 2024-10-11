/**
 * BookAppointmentCard Component
 *
 * This component represents a card for booking appointments. It displays
 * appointment details and provides functionality to open a modal for booking.
 *
 * Features:
 * - Displays appointment name, time, and available spaces
 * - Manages the state of a booking modal (open/closed)
 * - Provides functions to open and close the booking modal
 *
 * Props:
 * - appointment: Object containing appointment details (name, time, space)
 * - selectedDate: The currently selected date for the appointment
 *
 * State:
 * - modalIsOpen: Boolean to control the visibility of the booking modal
 */

/** React related imports */
import PropTypes from "prop-types"; // Used for type-checking component props
import { useState } from "react"; // Used for managing modal state

/** Component imports */
import BookAppointmentModal from "../BookAppointmentModal/BookAppointmentModal"; // Modal component for booking appointments

const BookAppointmentCard = ({ appointment, selectedDate }) => {
  // State to manage modal visibility
  const [modalIsOpen, setIsOpen] = useState(false);

  // Function to open the modal
  function openModal() {
    /*
    Opens the modal for booking appointments.

    Task List:
    • Set the modal's open state to true
    */

    setIsOpen(true); // Update the state to open the modal
  }
  // Function to close the modal
  function closeModal() {
    /*
    Closes the modal for booking appointments.

    Task List:
    • Set the modal's open state to false
    */

    setIsOpen(false); // Update the state to close the modal
  }

  return (
    <div className="col-md-4 mb-4">
      <div className="card border-0 p-4 book-appointment-card">
        {/* Card container with no border and padding */}
        <div className="card-body text-center">
          {/* Card body with centered text */}
          <h5 className="card-title sub-heading">{appointment.name}</h5>{" "}
          {/* Appointment name as card title */}
          <p className="card-text mb-2">{appointment.time}</p>{" "}
          {/* Appointment time with bottom margin */}
          <p className="card-text small-text text-secondary">
            {/* Secondary text for available spaces */}
            {appointment.space} SPACES AVAILABLE
          </p>
          {/* Button to open the booking modal */}
          <button onClick={openModal} className="btn btn-primary">
            BOOK APPOINTMENT
          </button>
          <BookAppointmentModal
            appointment={appointment}
            //  Pass appointment details to modal
            modalIsOpen={modalIsOpen}
            //  Control modal visibility
            closeModal={closeModal}
            //  Function to close the modal
            selectedDate={selectedDate}
            //  Selected date for the appointment
          />
        </div>
      </div>
    </div>
  );
};

BookAppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    // Define the shape of the appointment prop
    name: PropTypes.string.isRequired, // Appointment name (required string)
    time: PropTypes.string.isRequired, // Appointment time (required string)
    space: PropTypes.number.isRequired, // Available spaces (required number)
  }).isRequired,
  selectedDate: PropTypes.string.isRequired, // Selected date (required string)
};

export default BookAppointmentCard; // Export the component for use in other parts of the application
