/*
 * AppointmentModal Component
 * -------------------------
 * A comprehensive modal component for managing medical appointments in a healthcare application.
 *
 * Key Features:
 * - Displays detailed appointment information including doctor and patient details
 * - Supports viewing and editing appointment details (treatment, date, time)
 * - Shows payment status and transaction details
 * - Implements edit/save/cancel functionality for appointment modifications
 * - Includes responsive design for mobile and desktop views
 *
 * Technical Implementation:
 * - Uses React Modal for the dialog implementation
 * - Implements form handling with React Hook Form
 * - Manages editing state with React useState hook
 * - Utilizes PropTypes for type checking
 * - Integrates Lucide React icons for UI elements
 * - Implements custom date formatting utility
 *
 * Props:
 * - isOpen: Controls modal visibility
 * - closeModal: Function to handle modal closing
 * - appointment: Object containing all appointment-related data
 */

/** React related imports */
import PropTypes from "prop-types"; // Type checking for component props
import { useState } from "react"; // State management for editing mode

/** React Hook Form imports */
import { useForm } from "react-hook-form"; // Form handling and validation

/** React Modal imports */
import Modal from "react-modal"; // Modal/dialog component

/** Icon imports */
import {
  ClipboardPlus, // Used for appointment ID section icon
  Clock, // Used for booking date section icon
  Dot, // Used as separator in doctor and patient info
  Droplet, // Used for blood group icon in patient info
  Edit, // Used for edit button icon
  Save, // Used for save changes button icon
  Stethoscope, // Used for doctor information section icon
  Trash2, // Used for delete appointment button icon
  User, // Used for patient information section icon
  X, // Used for modal close button icon
} from "lucide-react";

/** Utility imports */
import formatDate from "../../../functions/formatDate"; // Date formatting utility used for displaying dates

Modal.setAppElement("#root"); // Set the root element for the modal to ensure proper accessibility and screen reader support

const customStyles = {
  // Define custom styles object for the modal component
  overlay: {
    // Configure the modal overlay appearance and behavior
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Creates a semi-transparent dark backdrop for better focus on modal content
  },
};
const AppointmentModal = ({ isOpen, closeModal, appointment }) => {
  const [isEditing, setIsEditing] = useState(false); // State to track whether the appointment is in editing mode or view mode
  const { register } = useForm(); // Destructure register method from useForm hook to handle form input registration and validation

  const handleEditButtonClick = () => {
    setIsEditing(true); // Enable editing mode by updating the state when edit button is clicked
  };
  const handleCancelButtonClick = () => {
    /*
    Handles the cancellation of appointment editing mode by resetting the editing state.
    
    Task List:
    • Reset the editing state to false when cancel button is clicked
    • Discard any unsaved changes made during editing
    • Return the form to view-only mode
    */
    setIsEditing(false); // Reset editing mode state to false when cancel button is clicked
  };

  return (
    <Modal
      isOpen={isOpen} // Controls the visibility state of the modal - true to show, false to hide
      onRequestClose={closeModal} // Handler function called when user attempts to close the modal (via escape key or clicking overlay)
      contentLabel="Appointment Information Modal" // Accessibility label for screen readers to identify the modal's purpose
      style={customStyles} // Applies custom styling defined above, mainly for the semi-transparent overlay
      className="appointment-modal-content" // CSS class for styling the modal content container
      shouldCloseOnEsc={true} // Enables closing the modal with the Escape key for better user experience
      shouldCloseOnOverlayClick={true} // Enables closing the modal by clicking the overlay/backdrop
      preventScroll={true} // Prevents background content scrolling while modal is open for better focus
    >
      <div className="appoinment-modal">
        {/* Main container for the appointment modal content */}
        <div className="appointment-modal-header d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
          {/* Header section with title and close button */}
          <h5 className="m-0">Appointment Information</h5> {/* Modal title */}
          <X className="icon" onClick={closeModal} />{" "}
          {/* Close button with X icon */}
        </div>
        <div className="appointment-meta p-3 d-flex align-items-center justify-content-between">
          {/* Container for appointment metadata (ID and booking date) */}
          <div className="appointment-id d-flex align-items-center gap-2">
            {/* Appointment ID section */}
            <div className="appointment-id-icon">
              <ClipboardPlus className="icon" />{" "}
              {/* Icon for appointment ID section */}
            </div>
            <div className="appointment-id-info">
              {/* Container for appointment ID text */}
              <p className="m-0 small-text">Appointment ID</p>{" "}
              {/* Label for appointment ID */}
              <p className="m-0 appointment-id-value">AP12345</p>{" "}
              {/* Actual appointment ID value */}
            </div>
          </div>
          <div className="booking-date d-flex align-items-center gap-2">
            {/* Booking date section */}
            <div className="booking-date-icon">
              <Clock className="icon" /> {/* Clock icon for booking date */}
            </div>
            <div className="booking-date-info">
              {/* Container for booking date information */}
              <p className="m-0 small-text">Booking Date</p>{" "}
              {/* Label for booking date */}
              <p className="m-0 booking-date-value">
                {formatDate(new Date(appointment.schedule.date), "short")}{" "}
                {/* Formatted booking date display */}
              </p>
            </div>
          </div>
        </div>
        <div className="appointment-status d-sm-none d-flex align-items-center justify-content-between mt-4 ">
          {/* Mobile-only appointment status display */}
          <p className="m-0">Appointment Status:</p> {/* Status label */}
          <div className={`badge ${appointment.status.toLowerCase()}-badge`}>
            {/* Dynamic status badge */}
            {appointment.status} {/* Status text */}
          </div>
        </div>
        <div className="appointment-details my-3">
          {/* Main container for appointment details */}
          <form className="appointment-info-form">
            {/* Form for appointment information */}
            <fieldset>
              <label>Treatment:</label> {/* Treatment input label */}
              <input
                type="text"
                disabled={!isEditing}
                {...register("treatment")}
                defaultValue={appointment.treatment}
              />{" "}
              {/* Treatment input field - enabled only in edit mode */}
            </fieldset>
            <div className="appointment-date-time-group d-flex flex-wrap align-items-center justify-content-around gap-4 mt-2">
              {/* Container for date and time inputs */}
              <fieldset>
                <label>Date:</label> {/* Date input label */}
                <input
                  type="date"
                  disabled={!isEditing}
                  {...register("date")}
                  defaultValue={formatDate(
                    new Date(appointment.schedule.date),
                    "iso"
                  )}
                />{" "}
                {/* Date input field - enabled only in edit mode */}
              </fieldset>
              <fieldset>
                <label>Time:</label> {/* Time select label */}
                <select
                  disabled={!isEditing}
                  {...register("time")}
                  defaultValue={appointment.schedule.time}
                >
                  {/* Time slot selection dropdown - enabled only in edit mode */}
                  <option value="">Select Time</option> {/* Default option */}
                  <option value="08.00 AM - 09.00 AM">
                    08.00 AM - 09.00 AM
                  </option>
                  <option value="09.00 AM - 10.00 AM">
                    09.00 AM - 10.00 AM
                  </option>
                  <option value="10.00 AM - 11.00 AM">
                    10.00 AM - 11.00 AM
                  </option>
                  <option value="11.00 AM - 12.00 PM">
                    11.00 AM - 12.00 PM
                  </option>
                </select>
              </fieldset>
            </div>
          </form>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 my-4">
            {/* Container for doctor and patient info cards */}
            <div className="p-3 border rounded-1 doctor-info">
              {/* Doctor information card */}
              <div className="doctor-info-header d-flex align-items-center gap-2 mb-3">
                {/* Doctor card header */}
                <Stethoscope className="icon" /> {/* Doctor section icon */}
                <p className="m-0">Doctor Information</p> {/* Section title */}
              </div>
              <div className="d-flex align-items-center gap-3">
                {/* Doctor details container */}
                <div className="profile-photo doctor-image">
                  <img src={appointment.doctor.image} alt="" />{" "}
                  {/* Doctor's profile photo */}
                </div>
                <div className="doctor-details">
                  {/* Doctor's text information */}
                  <p className="m-0 name">{appointment.doctor.name}</p>{" "}
                  {/* Doctor's name */}
                  <p className="m-0 small-text text-secondary">
                    {appointment.doctor.qualifications} <Dot className="icon" />{" "}
                    {appointment.doctor.specialization}
                  </p>{" "}
                  {/* Doctor's qualifications and specialization */}
                </div>
              </div>
            </div>
            <div className="p-3 border rounded-1 patient-info">
              {/* Patient information card */}
              <div className="patient-info-header d-flex align-items-center gap-2 mb-3">
                {/* Patient card header */}
                <User className="icon" /> {/* Patient section icon */}
                <p className="m-0">Patient Information</p> {/* Section title */}
              </div>
              <div className="d-flex align-items-center gap-3">
                {/* Patient details container */}
                <div className="profile-photo patient-image">
                  <img src={appointment.patient.image} alt="" />{" "}
                  {/* Patient's profile photo */}
                </div>
                <div className="patient-details">
                  {/* Patient's text information */}
                  <p className="m-0 name">{appointment.patient.name}</p>{" "}
                  {/* Patient's name */}
                  <p className="m-0 small-text text-secondary d-flex align-items-center">
                    {appointment.patient.age} yrs <Dot className="icon" />
                    {appointment.patient.gender} <Dot className="icon" />
                    <Droplet className="icon blood-icon me-1" />
                    {appointment.patient.bloodGroup}
                  </p>{" "}
                  {/* Patient's age, gender, and blood group */}
                </div>
              </div>
            </div>
          </div>
          <div className="payment-status p-3 border rounded-1">
            {/* Payment status section */}
            <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
              {/* Payment status header */}
              <h6>Payment Status:</h6> {/* Status label */}
              {appointment.payment.status === "Paid" ? (
                <div className="badge paid-badge">Paid</div>
              ) : (
                <div className="badge unpaid-badge">Unpaid</div>
              )}{" "}
              {/* Dynamic payment status badge */}
            </div>
            {appointment.payment.status === "Paid" ? (
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                {/* Paid payment details */}
                <div>
                  <p className="m-0 small-text text-secondary">
                    Transaction ID: {appointment.payment.transactionId}
                  </p>{" "}
                  {/* Transaction ID display */}
                  <p className="m-0 small-text text-secondary">
                    Payment Date:{" "}
                    {formatDate(
                      new Date(appointment.payment.paymentDate),
                      "short"
                    )}
                  </p>{" "}
                  {/* Payment date display */}
                </div>
                <div>
                  <p className="m-0 small-text text-secondary">
                    Payment Method: {appointment.payment.paymentMethod}
                  </p>{" "}
                  {/* Payment method display */}
                  <p className="m-0 small-text text-secondary">
                    Amount: ${appointment.payment.amount}
                  </p>{" "}
                  {/* Payment amount display */}
                </div>
              </div>
            ) : (
              <>
                <p className="m-0 small-text text-secondary">
                  Due date:{" "}
                  {formatDate(new Date(appointment.payment.dueDate), "short")}
                </p>{" "}
                {/* Due date for unpaid appointments */}
                <button className="btn btn-secondary mt-2 py-1 px-4">
                  Pay Now
                </button>{" "}
                {/* Payment action button */}
              </>
            )}
          </div>
        </div>
        <div className="modal-actions d-flex flex-wrap align-items-center justify-content-between gap-2 mt-4">
          {/* Modal action buttons container */}
          <button className="btn btn-danger">
            <Trash2 className="icon" />
            Delete
            <span>Appointment</span>
          </button>{" "}
          {/* Delete appointment button */}
          <div className="d-flex align-items-center gap-2">
            {/* Edit/Save buttons container */}
            {isEditing ? (
              <>
                <button className="btn btn-secondary">
                  <Save className="icon" />
                  Save
                  <span>Changes</span>
                </button>{" "}
                {/* Save changes button - visible in edit mode */}
                <button
                  className="btn btn-light"
                  onClick={handleCancelButtonClick}
                >
                  Cancel
                </button>{" "}
                {/* Cancel edit button - visible in edit mode */}
              </>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={handleEditButtonClick}
              >
                <Edit className="icon" />
                Edit
                <span>Appointment</span>
                {/* Edit appointment button - visible in view mode */}
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

AppointmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Controls the visibility state of the modal - true to show, false to hide
  closeModal: PropTypes.func.isRequired, // Function to handle closing the modal when triggered by user actions
  appointment: PropTypes.object.isRequired, // Contains all appointment data including patient, doctor, schedule and payment details
};

// Export the component for use in other parts of the application
export default AppointmentModal;
