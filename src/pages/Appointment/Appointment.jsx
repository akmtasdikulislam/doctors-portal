/**
 * Appointment Component
 *
 * This component represents the main appointment page of the Doctors Portal application.
 * It integrates various sub-components to create a complete appointment booking experience.
 *
 * Key features:
 * - Uses React's useState hook to manage the selected appointment date
 * - Renders a navigation bar for site-wide navigation
 * - Displays an appointment header with date selection functionality
 * - Provides a booking interface for scheduling appointments on the selected date
 * - Includes a footer component for consistent layout across pages
 *
 * The component also sets the document title for better user experience and SEO.
 * It utilizes a custom formatDate utility function to ensure consistent date formatting.
 */

/** React related imports */
import { useState } from "react"; // Used for managing state of selected date

/** Component imports */
import AppointmentHeader from "../../components/AppointmentHeader/AppointmentHeader"; // Renders the header section of the appointment page
import BookAppointment from "../../components/BookAppointment/BookAppointment"; // Handles the appointment booking functionality
import Footer from "../../components/Footer/Footer"; // Renders the footer section
import NavBar from "../../components/NavBar/NavBar"; // Renders the navigation bar

/** Utility imports */
import formatDate from "../../functions/formatDate"; // Used to format the selected date for display and processing

const Appointment = () => {
  document.title = "Appointment | Doctors Portal"; // Set the page title for the Appointment page
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize state for the selected date with the current date

  return (
    <main id="appointment">
      {/* Main container for the appointment page */}
      <NavBar /> {/* Renders the navigation bar component */}
      <AppointmentHeader
        selectedDate={selectedDate}
        // Passes the selected date to the header component
        setSelectedDate={setSelectedDate}
        // Passes the function to update the selected date
      />
      <BookAppointment selectedDate={formatDate(selectedDate)} />{" "}
      {/* Renders the appointment booking component with formatted date */}
      <Footer /> {/* Renders the footer component */}
    </main>
  );
};

export default Appointment;
