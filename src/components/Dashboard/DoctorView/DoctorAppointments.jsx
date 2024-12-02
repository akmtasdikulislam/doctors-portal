/*
 * DoctorAppointments Component
 *
 * A comprehensive dashboard component for managing doctor appointments in a medical portal.
 * This component displays and manages appointment information in a tabular format with
 * detailed patient and treatment information.
 *
 * Features:
 * - Displays appointments in a responsive table layout
 * - Shows detailed patient information including profile images
 * - Tracks appointment status (Pending/Completed)
 * - Monitors payment status
 * - Provides appointment type categorization (Check-up/Urgent/Follow-up)
 * - Includes modal functionality for detailed appointment views
 * - Supports adding new appointments
 *
 * Technical Implementation:
 * - Uses React useState for modal and appointment selection state management
 * - Implements Bootstrap classes for responsive design
 * - Uses Lucide React icons for UI elements
 * - Integrates with formatDate utility for date formatting
 * - Features responsive table layout with column visibility based on screen size
 *
 * Data Structure:
 * Each appointment contains:
 * - Basic info (id, type, treatment, status)
 * - Schedule details (date and time)
 * - Patient information (name, age, gender, blood group, image)
 * - Doctor information (name, qualifications, specialization, image)
 * - Payment details (status, transaction info, due dates)
 */

// ** React related Imports **
import { useState } from "react"; // Used for managing modal state and selected appointment state

// ** Icons Imports**
import { Dot, FileText, Plus } from "lucide-react"; // Icons used for UI elements - Dot for separators, FileText for view button, Plus for add button

// ** Utility Functions Imports**
import formatDate from "../../../functions/formatDate"; // Helper function to format date strings in the appointment table

// ** Custom Components Imports**
import AppointmentModal from "../AppointmentModal/AppointmentModal"; // Modal component for displaying detailed appointment information

const DoctorAppointments = () => {
  document.title = "Appointments - Dashboard | Doctors Portal";
  const appointments = [
    {
      id: 1,
      type: "Check-up",
      treatment: "Dental Checkup",
      status: "Pending",
      schedule: {
        date: "2024/03/05",
        time: "08.00 AM - 09.00 AM",
      },
      patient: {
        name: "Jane Smith",
        age: "30",
        gender: "Female",
        bloodGroup: "B+",
        image:
          "https://img.freepik.com/premium-photo/professional-man-suit-with-confident-expression_1349627-433.jpg?ga=GA1.1.1805791538.1723570349&semt=ais_hybrid",
      },
      doctor: {
        name: "Dr. Sarah",
        qualifications: "BDS, MDS",
        specialization: "Orthodontist",
        image:
          "https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg?ga=GA1.1.1805791538.1723570349&semt=ais_hybrid",
      },
      payment: {
        status: "Unpaid",
        dueDate: "2024/03/12",
      },
    },
    {
      id: 2,
      type: "Urgent",
      treatment: "Root Canal",
      status: "Completed",
      schedule: {
        date: "2024/03/06",
        time: "09.00 AM - 10.00 AM",
      },
      patient: {
        name: "John Doe",
        age: "45",
        gender: "Male",
        bloodGroup: "O+",
        image:
          "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      },
      doctor: {
        name: "Dr. Michael",
        qualifications: "BDS, FCPS",
        specialization: "Endodontist",
        image:
          "https://img.freepik.com/free-photo/cheerful-male-doctor-white-gown-portrait_53876-105121.jpg?ga=GA1.1.1805791538.1723570349&semt=ais_hybrid",
      },
      payment: {
        status: "Paid",
        transactionId: "TXN789456123",
        paymentDate: "2024/03/05",
        paymentMethod: "Credit Card",
        amount: 850,
      },
    },
    {
      id: 3,
      type: "Follow-up",
      treatment: "Teeth Whitening",
      status: "Completed",
      schedule: {
        date: "2024/03/07",
        time: "10.00 AM - 11.00 AM",
      },
      patient: {
        name: "Emily Johnson",
        age: "28",
        gender: "Female",
        bloodGroup: "A-",
        image:
          "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      },
      doctor: {
        name: "Dr. Jessica",
        qualifications: "BDS, MDSc",
        specialization: "Cosmetic Dentist",
        image:
          "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
      },
      payment: {
        status: "Paid",
        transactionId: "TXN456789123",
        paymentDate: "2024/03/06",
        paymentMethod: "Debit Card",
        amount: 600,
      },
    },
    {
      id: 4,
      type: "Urgent",
      treatment: "Wisdom Tooth Extraction",
      status: "Pending",
      schedule: {
        date: "2024/03/08",
        time: "11.00 AM - 12.00 PM",
      },
      patient: {
        name: "Robert Wilson",
        age: "35",
        gender: "Male",
        bloodGroup: "AB+",
        image:
          "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
      },
      doctor: {
        name: "Dr. James",
        qualifications: "BDS, MS",
        specialization: "Oral Surgeon",
        image:
          "https://img.freepik.com/premium-photo/mature-male-doctor-with-stethoscope_1312263-172.jpg?ga=GA1.1.1805791538.1723570349&semt=ais_hybrid",
      },
      payment: {
        status: "Unpaid",
        dueDate: "2024/03/15",
      },
    },
    {
      id: 5,
      type: "Follow-up",
      treatment: "Dental Implant",
      status: "Completed",
      schedule: {
        date: "2024/03/09",
        time: "08.00 AM - 09.00 AM",
      },
      patient: {
        name: "Sarah Thompson",
        age: "52",
        gender: "Female",
        bloodGroup: "O-",
        image:
          "https://img.freepik.com/premium-photo/confident-young-woman-smiling-professional-portrait_1218330-602.jpg?ga=GA1.1.1805791538.1723570349&semt=ais_hybrid",
      },
      doctor: {
        name: "Dr. William",
        qualifications: "BDS, PhD",
        specialization: "Implantologist",
        image:
          "https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg",
      },
      payment: {
        status: "Paid",
        transactionId: "TXN123456789",
        paymentDate: "2024/03/08",
        paymentMethod: "Bank Transfer",
        amount: 1200,
      },
    },
  ];
  const [selectedAppointment, setSelectedAppointment] = useState(1); // State to track which appointment is currently selected for viewing in the modal, initialized with first appointment (index 1)

  const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the appointment details modal - true for open, false for closed

  const openModal = (appoinmentID) => {
    /* 
    Opens a modal dialog to display detailed information about a specific appointment.
    Takes an appointment ID as a parameter and updates the state to show the modal with the selected appointment details.

    Task List:
    • Update the selected appointment state with the provided ID
    • Set the modal visibility state to true to display it
    • Ensure proper state management for modal interactions
    */
    setSelectedAppointment(appoinmentID); // Updates the state to track which appointment is currently selected for viewing
    setIsOpen(true); // Shows the modal by setting its visibility state to true
  };
  const closeModal = () => setIsOpen(false); // Hides the modal by setting its visibility state to false when called

  return (
    <section
      id="appointments" // Unique identifier for the appointments section in the dashboard
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Centers content and creates a responsive flex container with vertical layout and spacing
    >
      <h2 className="m-0 p-0 mb-4">Appointments</h2>
      {/* Main section heading with margin adjustments */}
      <div className="appointments-content d-flex flex-column gap-4 p-4 rounded-3">
        {/* Container for appointments content with padding and rounded corners */}
        <div className="d-flex align-items-center justify-content-between gap4">
          {/* Header row with flex layout for title and add button */}
          <h4>Appointment List</h4> {/* Subsection heading */}
          <button className="btn btn-secondary">
            {/* Add appointment button with Bootstrap styling */}
            <Plus className="me-sm-2 btn-icon" /> {/* Plus icon with margin */}
            <span className="d-none d-sm-inline">Add Appointment</span>
            {/* Button text, hidden on small screens */}
          </button>
        </div>
        <div className="appointments-table-container">
          {/* Wrapper for the appointments table */}
          <table className="appointments-table">
            {/* Main appointments table */}
            <thead>
              {/* Table header row */}
              <tr>
                <th className="serial-no-cell">
                  {/* Serial number column for appointment order */}
                  Sl. No
                </th>
                <th className="d-none d-lg-table-cell">
                  {/* Patient details column - only displays on lg screens and above */}
                  Patient
                </th>
                <th className="appointment-name-cell">
                  {/* Treatment name column */}
                  Treatment
                </th>
                <th className="d-none d-lg-table-cell">
                  {/* Appointment Type */}
                  Type
                </th>
                <th className="date-time-th">
                  {/* Appointment date and time information */}
                  Date & Time
                </th>
                <th className="d-none d-sm-table-cell">
                  {/* Appointment status - hidden on xs screens */}
                  Status
                </th>
                <th className="d-none d-lg-table-cell">
                  {/* Payment status - only visible on lg screens and above */}
                  Payment Status
                </th>
                <th>
                  {/* Action buttons for appointment management */}
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(
                (
                  appointment,
                  index // Maps through appointments array to create table rows
                ) => (
                  <tr key={index}>
                    {/* Table row for each appointment */}
                    <td className="serial-no-cell">{index + 1}</td>
                    <td className="d-none d-lg-table-cell">
                      {/* Patient information cell */}
                      <div className="patient-cell d-flex align-items-center gap-3">
                        {/* Patient info container */}
                        <div className="profile-photo patient-image">
                          {/* Patient photo container */}
                          <img src={appointment.patient.image} alt="" />
                          {/* Patient profile image */}
                        </div>
                        <div className="patient-details">
                          {/* Patient details container */}
                          <p className="m-0">{appointment.patient.name}</p>
                          {/* Patient name */}
                          <p className="m-0 small-text text-secondary">
                            {/* Patient additional details */}
                            {appointment.patient.age} yrs
                            <Dot className="dot" /> {/* Age with separator */}
                            {appointment.patient.gender} <Dot className="dot" />
                            {/* Gender with separator */}
                            {appointment.patient.bloodGroup} {/* Blood group */}
                          </p>
                        </div>
                      </div>
                    </td>
                    {/* Displays sequential number */}
                    <td className="appointment-name-cell">
                      {appointment.treatment}
                    </td>
                    {/* Shows treatment type */}
                    <td className="d-none d-lg-table-cell">
                      <div
                        className={`badge ${appointment.type.toLowerCase()}-badge`} // Dynamic badge class based on appointment type
                      >
                        {appointment.type} {/* Display appointment type */}
                      </div>
                    </td>
                    <td className="date-time-cell">
                      {/* Date and time cell */}
                      <p className="m-0">
                        {formatDate(
                          new Date(appointment.schedule.date),
                          "short"
                        )}
                      </p>
                      {/* Formatted date */}
                      <p className="m-0 small-text text-secondary">
                        {appointment.schedule.time}
                      </p>
                      {/* Appointment time */}
                    </td>
                    <td className="d-none d-sm-table-cell">
                      {/* Status cell, responsive visibility */}
                      <div
                        className={`badge ${appointment.status.toLowerCase()}-badge`}
                      >
                        {/* Status badge with dynamic styling */}
                        {appointment.status}
                      </div>
                    </td>
                    <td className="d-none d-lg-table-cell">
                      {/* Payment status cell */}
                      <span
                        className={`badge ${appointment.payment.status.toLowerCase()}-badge`}
                      >
                        {/* Payment status badge */}
                        {appointment.payment.status}
                      </span>
                    </td>
                    <td>
                      {/* Actions cell */}
                      <button
                        className="btn action-btn me-2" // View button styling
                        title="View Appointment" // Button tooltip
                        onClick={() => openModal(index)} // Click handler to open appointment details
                      >
                        <FileText className="btn-icon" /> {/* View icon */}
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <AppointmentModal // Modal component for appointment details
            isOpen={isOpen} // Controls modal visibility
            closeModal={closeModal} // Function to close modal
            appointment={appointments[selectedAppointment]} // Selected appointment data
          />
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default DoctorAppointments;
