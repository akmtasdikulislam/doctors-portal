/*
 * BookAppointmentModal Component
 *
 * This component renders a modal dialog for booking appointments.
 * It uses react-modal for the modal functionality and react-hook-form for form handling.
 *
 * Key features:
 * - Customizable modal styles
 * - Form validation and error handling
 * - Accessibility considerations (setting app element for screen readers)
 * - Responsive design with centered positioning
 *
 * The component accepts props for controlling the modal state, appointment details,
 * and selected date, allowing for flexible integration within a larger application.
 */

// ** React related imports **
import PropTypes from "prop-types"; // Runtime type checking for React props
import { useEffect } from "react"; // Hook for side effects in functional components

// ** Form handling imports **
import { Controller, useForm } from "react-hook-form"; // Tools for form state management and validation

// ** UI component imports **
import Modal from "react-modal"; // Component for creating modal dialogs
import FormError from "../FormError/FormError"; // Custom component for displaying form errors

const customStyles = {
  content: {
    border: 0, // Remove default border
    borderRadius: ".5em", // Add rounded corners
    bottom: "auto", // Reset default bottom positioning
    boxShadow: "0 7px 30px -10px rgba(150, 170, 180, 0.5)", // Add subtle shadow effect
    left: "50%", // Position from left edge
    marginRight: "-50%", // Adjust for centering
    padding: "1.75em", // Add internal spacing
    right: "auto", // Reset default right positioning
    top: "50%", // Position from top edge
    transform: "translate(-50%, -50%)", // Center the modal
    width: "28em", // Set fixed width
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Set semi-transparent black background for modal overlay
  },
};

Modal.setAppElement("#root"); // Set the app element for the Modal component to ensure proper accessibility

const BookAppointmentModal = ({
  appointment,
  modalIsOpen,
  selectedDate,
  closeModal,
}) => {
  const {
    register, // Function to register input fields for validation
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form validation errors
    control, // Object to control form inputs
    setValue, // Function to programmatically set form values
    reset, // Function to reset form to default values
  } = useForm({
    defaultValues: {
      date: selectedDate, // Set initial value for date field
      email: "", // Set initial value for email field
      name: "", // Set initial value for name field
      phone: "", // Set initial value for phone field
      service: appointment.name, // Set initial value for appointment field
      time: appointment.time, // Set initial value for time field
    },
  });

  //  UseEffect hook to set the date value when the selectedDate prop changes
  useEffect(() => {
    setValue("date", selectedDate); // Update the 'date' field in the form with the selected date when it changes
  }, [selectedDate, setValue]); // Re-run this effect when selectedDate or setValue function changes

  return (
    <div>
      <Modal
        isOpen={modalIsOpen} // Controls the visibility of the modal based on the modalIsOpen prop
        onRequestClose={closeModal} // Function to be called when the modal should be closed (e.g., clicking outside)
        style={customStyles} // Applies custom styles defined in the customStyles object to the modal
        contentLabel="Appointment booking form" // Provides an accessible label for screen readers
      >
        {/* Modal header with appointment name and close button */}
        <div className="modal-header d-flex align-items-center justify-content-between">
          <h4>{appointment.name}</h4> {/* Display the appointment name */}
          <button className="btn close-btn" onClick={closeModal}>
            {/* Close button with click handler */}
            <span>✖</span> {/* Unicode character for 'X' */}
          </button>
        </div>

        {/* Form for booking appointment */}
        <form
          className="contact-us-form mt-3 d-flex flex-column gap-3"
          // Form submission handler
          onSubmit={handleSubmit((data) => {
            console.log(data); // Log form data to console
            // Reset form fields after submission
            reset({
              date: selectedDate, // Set the initial value for the date field using the selectedDate prop
              email: "", // Initialize the email field as an empty string
              name: "", // Initialize the name field as an empty string
              phone: "", // Initialize the phone field as an empty string
              service: appointment.name, // Set the initial value for the service field using the appointment name
              time: appointment.time, // Set the initial value for the time field using the appointment time
            });
            // Close the modal after form submission
            closeModal();
          })}
        >
          {/* Date input field (disabled) */}
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              // Render date input field
              <input {...field} type="text" value={field.value} disabled />
            )}
          />
          {/* Time input field (disabled) */}
          <input
            type="text"
            {...register("time")} // Register time field with react-hook-form
            value={appointment.time}
            disabled
          />
          {/* Name input field */}
          <input
            type="text"
            {...register("name", { required: "Please enter your name" })} // Register name field with validation
            placeholder="Enter your full name"
          />
          {errors.name && <FormError errorMessage={errors.name.message} />}
          {/* Display name field error if any */}

          {/* Phone input field */}
          <input
            type="tel"
            // Register phone field with validation
            {...register("phone", {
              required: "Please enter your phone number",
              maxLength: {
                value: 11,
                message: "Please enter a valid 11-digit phone number",
              },
              minLength: {
                value: 11,
                message: "Please enter a valid 11-digit phone number",
              },
            })}
            placeholder="Enter your phone number"
          />
          {errors.phone && <FormError errorMessage={errors.phone.message} />}
          {/* Display phone field error if any */}

          {/* Email input field */}
          <input
            type="email"
            // Register email field with validation
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Enter your email address"
          />
          {errors.email && <FormError errorMessage={errors.email.message} />}
          {/* Display email field error if any */}

          {/* Submit button for the form */}
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

// PropTypes for component props validation

BookAppointmentModal.propTypes = {
  appointment: PropTypes.shape({
    name: PropTypes.string.isRequired, // Validates that the appointment object has a required 'name' property of type string
    time: PropTypes.string.isRequired, // Validates that the appointment object has a required 'time' property of type string
  }).isRequired, // Ensures that the entire appointment object is required
  modalIsOpen: PropTypes.bool.isRequired, // Validates that modalIsOpen is a required boolean prop
  selectedDate: PropTypes.string.isRequired, // Validates that selectedDate is a required string prop
  closeModal: PropTypes.func.isRequired, // Validates that closeModal is a required function prop
};

// Export the component for use in other parts of the application
export default BookAppointmentModal;
