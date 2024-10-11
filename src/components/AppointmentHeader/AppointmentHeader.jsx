/*
 * AppointmentHeader Component
 *
 * This component represents the header section of an appointment booking interface.
 * It includes a calendar for date selection and an image of a chair.
 *
 * Key features:
 * - Uses react-calendar for date selection
 * - Displays an appointment heading
 * - Shows an image of a chair
 * - Responsive layout using Bootstrap classes
 *
 * Props:
 * - selectedDate: The currently selected date (Date object)
 * - setSelectedDate: Function to update the selected date
 *
 * The component handles date changes through the handleDateChange function,
 * which updates the selected date and logs it to the console.
 */

// ** React and related libraries **
import PropTypes from "prop-types"; // For type-checking component props
import Calendar from "react-calendar"; // Calendar component for date selection

// ** Assets **
import chair from "../../assets/images/chair.png"; // Image of a chair used in the appointment header

const AppointmentHeader = ({ selectedDate, setSelectedDate }) => {
  // Function to handle date change event
  const handleDateChange = (newSelectedDate) => {
    /*
    This function handles the date change event when a new date is selected.
    It updates the selected date state and logs the new date to the console.

    Task List:
    • Update the selected date state
    • Log the newly selected date to the console
    */

    setSelectedDate(newSelectedDate); // Update the selected date state with the new date
    console.log("Selected date:", newSelectedDate); // Log the newly selected date to the console for debugging purposes
  };

  return (
    <section className="row hero-section d-flex align-items-center my-5 py-5">
      {/* Hero section with flex layout for alignment */}
      <div className="col-4 offset-1">
        {/* Left column for text content */}
        <h2 className="sub-heading">Appointment</h2>
        {/* Main heading for the hero section */}
        <Calendar
          onChange={handleDateChange} // Event handler for when a date is selected
          value={selectedDate} // The currently selected date
          calendarType="hebrew" // Sets the calendar type to Hebrew
          className="mt-5" // Adds margin-top for spacing
        />
      </div>
      <div className="col-5 offset-1">
        {/* Right column for image */}
        <img className="img-fluid" src={chair} alt="Chair" />
        {/* Responsive image of a dental chair */}
      </div>
    </section>
  );
};

AppointmentHeader.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired, // Ensures that selectedDate prop is a Date object and is required
  setSelectedDate: PropTypes.func.isRequired, // Ensures that setSelectedDate prop is a function and is required
};
export default AppointmentHeader; // Export the AppointmentHeader component as the default export, allowing it to be imported and used in other parts of the application
