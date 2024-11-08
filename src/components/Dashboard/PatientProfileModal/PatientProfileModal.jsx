/*
 * PatientProfileModal Component
 *
 * A comprehensive modal component for managing patient profiles in a healthcare application.
 * This component provides functionality for both viewing and editing patient information,
 * as well as creating new patient profiles.
 *
 * Key Features:
 * - Displays patient personal information, demographics, contact details, and emergency contacts
 * - Supports both view and edit modes with proper form validation
 * - Handles profile photo uploads and previews
 * - Provides responsive layout for different screen sizes
 * - Includes accessibility features for better user experience
 *
 * The component uses:
 * - React Hook Form for form management and validation
 * - React Modal for popup dialog functionality
 * - State management for handling edit mode and photo uploads
 * - PropTypes for type checking of component props
 *
 * Props:
 * - isOpen: Controls modal visibility
 * - closeModal: Function to handle modal closing
 * - userData: Object containing patient information
 * - addNew: Boolean flag for new patient profile creation mode
 */

/** React related imports */
import PropTypes from "prop-types"; // Type checking for component props
import { useEffect, useState } from "react"; // React hooks for managing component lifecycle and state

/** Form and Modal related imports */
import { useForm } from "react-hook-form"; // Form handling and validation
import Modal from "react-modal"; // Modal/dialog component for displaying popup content

/** Icon imports */
import { AlertCircle, PenBox, Save, Trash2, X } from "lucide-react"; // Icons used in buttons and UI elements

/** Utility imports */
import formatDate from "../../../functions/formatDate"; // Helper function to format date strings
import FormError from "../../FormError/FormError";

Modal.setAppElement("#root"); // Set the root element for the modal to ensure proper accessibility and screen reader support

const customStyles = {
  // Define custom styles object for the modal component
  overlay: {
    // Configure the modal overlay appearance and behavior
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Creates a semi-transparent dark backdrop for better focus on modal content
  },
};
const PatientProfileModal = ({ isOpen, closeModal, userData, addNew }) => {
  const [isEditing, setIsEditing] = useState(false); // State variable to track whether the form is in edit mode or view mode
  const [uploadedPhoto, setUploadedPhoto] = useState(null); // State variable to store and manage the uploaded profile photo URL
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Destructure register and reset functions from useForm hook for form handling and validation

  const handleEditButtonClick = () => {
    /*
    Handles the click event for the edit button, enabling the editing mode for the profile form.
    
    Task List:
    • Update the editing state to true
    • Enable form fields for editing
    • Show save and cancel buttons
    */
    setIsEditing(true); // Enable editing mode by setting isEditing state to true
  };
  const handleCancelButtonClick = () => {
    /*
    Handles the click event for the cancel button, disabling the editing mode and reverting any unsaved changes.
    
    Task List:
    • Disable editing mode
    • Revert form fields to read-only state
    • Hide save and cancel buttons
    */
    setIsEditing(false); // Disable editing mode by setting isEditing state to false
  };
  const handleCancelAltButtonClick = () => {
    /*
    Handles the click event for the alternative cancel button, closing the modal without saving any changes.
    
    Task List:
    • Close the modal window
    • Discard any unsaved changes
    • Return to the previous view
    */
    closeModal(); // Close the modal window and discard any unsaved changes
  };
  const handleResetButtonClick = () => {
    /*
    Handles the click event for the reset button, clearing all form fields and resetting them to their initial empty state.
    
    Task List:
    • Reset all form fields to empty strings
    • Clear personal information fields
    • Clear demographic information fields
    • Clear contact information fields
    • Clear emergency contact fields
    */
    reset({
      name: "", // Reset the name field to empty string
      // Demographics
      age: "", // Clear the age field
      gender: "", // Reset gender selection to empty
      dateOfBirth: "", // Clear the date of birth field
      bloodGroup: "", // Reset blood group to empty string
      height: "", // Clear the height measurement
      weight: "", // Clear the weight measurement

      // Contact Information
      email: "", // Reset email address to empty
      phone: "", // Clear phone number field
      address: "", // Reset address field to empty

      // Emergency Contact
      emergencyContactName: "", // Clear emergency contact name
      emergencyContactRelationship: "", // Reset relationship field
      emergencyContactPhone: "", // Clear emergency contact phone
      emergencyContactAddress: "", // Reset emergency contact address
    });
  };

  const handlePhotoUpload = (event) => {
    /*
    Handles the upload and preview of a profile photo when a file is selected through the file input.
    
    Task List:
    • Check if a file is selected
    • Create a temporary URL for the selected image file
    • Update the profile photo preview with the selected image
    */
    if (event.target.files.length > 0) {
      // Check if at least one file is selected in the file input
      var src = URL.createObjectURL(event.target.files[0]); // Create a temporary URL for the first selected file for preview
      setUploadedPhoto(src); // Update the state with the temporary URL to display the selected photo
    }
  };

  useEffect(() => {
    /*
    Handles the initialization and reset of form data based on whether it's a new profile or editing an existing one.
    Updates form fields with user data when available and manages editing state.
    
    Task List:
    • Check if creating a new profile
    • Reset form fields if new profile
    • Enable editing mode for new profile
    • Populate form with existing user data if editing
    • Update editing state based on conditions
    • Handle form field population with proper formatting
    */
    if (addNew) {
      // Check if creating a new profile entry
      handleResetButtonClick(); // Clear all form fields to their initial empty state
      setIsEditing(true); // Enable editing mode for new profile creation
    } else {
      reset({
        // Populate form fields with existing user data
        name: userData.personalInfo.name, // Set name field with user's personal information
        // Demographics
        age: userData.demographics.age, // Set age field from demographics data
        gender: userData.demographics.gender.toLowerCase(), // Convert and set gender to lowercase for consistency
        dateOfBirth: formatDate(
          // Format and set date of birth in ISO format
          new Date(userData.demographics.dateOfBirth),
          "iso"
        ),
        bloodGroup: userData.demographics.bloodGroup, // Set blood group from demographics data
        height: userData.demographics.height, // Set height measurement from demographics
        weight: userData.demographics.weight, // Set weight measurement from demographics

        // Contact Information
        email: userData.contactInfo.email, // Set email from contact information
        phone: userData.contactInfo.phone, // Set phone number from contact data
        address: userData.contactInfo.address, // Set address from contact information

        // Emergency Contact
        emergencyContactName: userData.emergencyContact.name, // Set emergency contact name
        emergencyContactRelationship: userData.emergencyContact.relationship, // Set relationship with emergency contact
        emergencyContactPhone: userData.emergencyContact.phone, // Set emergency contact phone number
        emergencyContactAddress: userData.emergencyContact.address, // Set emergency contact address
      });
      isEditing && setIsEditing(false); // Disable editing mode if currently enabled
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset, userData]); // Re-run effect when reset function or userData changes
  return (
    <Modal
      isOpen={isOpen} // Controls the visibility state of the modal - true to show, false to hide
      onRequestClose={closeModal} // Function to handle modal closing when user clicks outside or presses ESC
      contentLabel="Appointment Information Modal" // Accessibility label for screen readers to identify modal purpose
      style={customStyles} // Applies custom styling defined in customStyles object for modal appearance
      className="profile-modal-container" // CSS class for styling the modal container element
      shouldCloseOnEsc={true} // Enables closing modal with ESC key for better user experience
      shouldCloseOnOverlayClick={true} // Allows closing modal by clicking the overlay/backdrop
      preventScroll={true} // Prevents background content scrolling while modal is open
    >
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="profile-modal d-flex flex-column justify-content-between"
      >
        {/* Main modal container with flex layout for vertical content arrangement */}
        <div className="profile-modal-content d-flex flex-lg-row flex-column justify-content-between w-100">
          {/* Content wrapper that switches between row/column layout based on screen size */}
          <X className="close-btn" onClick={closeModal} />
          {/* Close button with X icon in top-right corner */}
          <div
            className={`profile-photo-column d-flex flex-column align-items-center justify-content-center gap-4 ${
              isEditing ? "editing" : ""
            }`}
          >
            {/* Left column containing profile photo and basic info */}
            <div className="profile-photo-column-content d-flex flex-lg-column flex-row align-items-center justify-content-center gap-3">
              {/* Container for photo and name info with responsive layout */}
              <div className="profile-photo">
                {/* Profile photo container with edit functionality */}
                <img
                  src={
                    uploadedPhoto // Use uploaded photo if available
                      ? uploadedPhoto
                      : addNew // Use placeholder for new profiles
                      ? "/images/profile-placeholder.png"
                      : userData.personalInfo.profileImage // Use existing profile image
                  }
                  alt=""
                />
                <input
                  type="file"
                  id="file-upload-input"
                  className="d-none" // Hidden file input triggered by label
                  accept="image/*" // Accept only image files
                  onChange={(event) => handlePhotoUpload(event)}
                />
                <label
                  className={`edit-btn btn-secondary ${
                    isEditing ? "" : "d-none" // Show edit button only in edit mode
                  }`}
                  htmlFor="file-upload-input"
                >
                  <PenBox className="icon" /> {/* Edit icon for photo upload */}
                </label>
              </div>
              <div className="profile-info d-flex flex-column align-items-lg-center">
                {/* Container for name and ID information */}
                <fieldset className={`py-1 mb-2 ${!isEditing ? "d-none" : ""}`}>
                  {/* Name input field shown only in edit mode */}
                  <label className="me-2">Name:</label>
                  <input
                    type="text"
                    className="py-1 mb-2"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                    })} // React Hook Form registration
                  />
                  {errors.name && (
                    <FormError errorMessage={errors.name.message} />
                  )}
                </fieldset>
                <h5 className={`m-0 mb-2 ${isEditing ? "d-none" : ""}`}>
                  {/* Name display shown only in view mode */}
                  {userData.personalInfo.name}
                </h5>
                {!addNew && ( // Show ID and join date only for existing profiles
                  <>
                    <p className="m-0 small-text text-secondary">
                      {userData.id} {/* Display user ID */}
                    </p>
                    <p className="m-0 small-text text-secondary">
                      Joined on: {userData.joinDate} {/* Display join date */}
                    </p>
                  </>
                )}
              </div>
            </div>
            {!addNew && (
              <div className="d-flex d-md-none flex-wrap align-items-center justify-content-center gap-3">
                {/* Mobile-only action buttons */}
                <button className="btn btn-danger">
                  <Trash2 className="icon" /> <span>Delete</span>
                  {/* Delete profile button */}
                </button>
                <button className="btn btn-outline-danger">
                  <AlertCircle className="icon" /> Reset password
                  {/* Password reset button */}
                </button>
              </div>
            )}
          </div>
          <div className="profile-details p-4 w-100">
            {/* Main form container for all profile details */}
            <h6 className="m-0 mb-3">Patient Information</h6>
            {/* Section header for patient details */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
              {/* Two-column layout for form fields */}
              <fieldset className="flex-grow-1">
                <label>Age</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("age", {
                    required: {
                      value: true,
                      message: "Please enter your age",
                    },
                  })}
                />
                {errors.age && <FormError errorMessage={errors.age.message} />}
                {/* Age input field */}
              </fieldset>
              <fieldset className="flex-grow-1">
                <label>Gender</label>
                <select
                  disabled={!isEditing}
                  {...register("gender", {
                    required: {
                      value: true,
                      message: "Please select your gender",
                    },
                  })}
                >
                  {/* Gender dropdown selection */}
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <FormError errorMessage={errors.gender.message} />
                )}
              </fieldset>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 my-3">
              {/* Two-column layout with margin */}
              <fieldset className="flex-grow-1">
                <label>Date of Birth</label>
                <input
                  type="date"
                  disabled={!isEditing}
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Please enter your date of birth",
                    },
                  })} // Date picker for birth date
                />
                {errors.dateOfBirth && (
                  <FormError errorMessage={errors.dateOfBirth.message} />
                )}
              </fieldset>
              <fieldset className="flex-grow-1">
                <label>Blood Group</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("bloodGroup", {
                    required: {
                      value: true,
                      message: "Please enter your blood group",
                    },
                  })} // Blood group input field
                />
                {errors.bloodGroup && (
                  <FormError errorMessage={errors.bloodGroup.message} />
                )}
              </fieldset>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
              {/* Two-column layout for measurements */}
              <fieldset className="flex-grow-1">
                <label>Height</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("height", {
                    required: {
                      value: true,
                      message: "Please enter your height",
                    },
                  })} // Height measurement input
                />
                {errors.height && (
                  <FormError errorMessage={errors.height.message} />
                )}
              </fieldset>
              <fieldset className="flex-grow-1">
                <label>Weight</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("weight", {
                    required: {
                      value: true,
                      message: "Please enter your weight",
                    },
                  })} // Weight measurement input
                />
                {errors.weight && (
                  <FormError errorMessage={errors.weight.message} />
                )}
              </fieldset>
            </div>
            <h6 className="m-0 mt-3">Contact Information</h6>
            {/* Section header for contact details */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 my-3">
              {/* Two-column layout for contact info */}
              <fieldset className="flex-grow-1">
                <label>Email</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email address",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter a valid email address",
                    },
                  })} // Email input with validation
                />
                {errors.email && (
                  <FormError errorMessage={errors.email.message} />
                )}
              </fieldset>
              <fieldset className="flex-grow-1">
                <label>Phone</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Please enter your phone number",
                    },
                  })} // Phone number input
                />
                {errors.phone && (
                  <FormError errorMessage={errors.phone.message} />
                )}
              </fieldset>
            </div>
            <fieldset className="w-100">
              <label>Address</label>
              <input
                type="text"
                disabled={!isEditing}
                {...register("address", {
                  required: {
                    value: true,
                    message: "Please enter your address",
                  },
                })} // Full-width address input
              />
              {errors.address && (
                <FormError errorMessage={errors.address.message} />
              )}
            </fieldset>
            <h6 className="m-0 mt-3">Emergency Contact</h6>
            {/* Section header for emergency contact */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 my-3">
              {/* Two-column layout for emergency contact */}
              <fieldset className="flex-grow-1">
                <label>Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("emergencyContactName", {
                    required: {
                      value: true,
                      message:
                        "Please enter the name of your emergency contact",
                    },
                  })} // Emergency contact name input
                />
                {errors.emergencyContactName && (
                  <FormError
                    errorMessage={errors.emergencyContactName.message}
                  />
                )}
              </fieldset>
              <fieldset className="flex-grow-1">
                <label>Relationship</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("emergencyContactRelationship", {
                    required: {
                      value: true,
                      message:
                        "Please enter your relationship with the contact",
                    },
                  })} // Relationship with emergency contact
                />
                {errors.emergencyContactRelationship && (
                  <FormError
                    errorMessage={errors.emergencyContactRelationship.message}
                  />
                )}
              </fieldset>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
              {/* Two-column layout for additional emergency info */}
              <fieldset className="flex-grow-1">
                <label>Phone</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("emergencyContactPhone", {
                    required: {
                      value: true,
                      message: "Please enter the phone number of the contact",
                    },
                  })} // Emergency contact phone number
                />
                {errors.emergencyContactPhone && (
                  <FormError
                    errorMessage={errors.emergencyContactPhone.message}
                  />
                )}
              </fieldset>
              <fieldset className="flex-grow-1">
                <label>Address</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  {...register("emergencyContactAddress", {
                    required: {
                      value: true,
                      message: "Please enter the address of the contact",
                    },
                  })} // Emergency contact address
                />
                {errors.emergencyContactAddress && (
                  <FormError
                    errorMessage={errors.emergencyContactAddress.message}
                  />
                )}
              </fieldset>
            </div>
          </div>
        </div>
        <div className="profile-modal-actions d-flex justify-content-between align-items-center gap-2 px-4">
          {/* Footer container for action buttons */}
          {addNew ? ( // Conditional rendering based on whether adding new profile or editing existing
            <>
              <div className="d-flex align-items-center justify-content-center gap-2 w-100">
                {/* Action buttons for new profile */}
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
                {/* Submit button for new profile */}
                <button
                  type="reset"
                  className="btn btn-light"
                  onClick={handleResetButtonClick} // Reset form to empty state
                >
                  Reset
                </button>
                <button
                  className="btn btn-light btn-outline-secondary"
                  onClick={handleCancelAltButtonClick} // Cancel new profile creation
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="d-md-flex d-none gap-3">
                {/* Desktop-only action buttons */}
                <button className="btn btn-danger">
                  <Trash2 className="icon" /> Delete Patient
                  {/* Delete profile button */}
                </button>
                <button className="btn btn-outline-danger">
                  <AlertCircle className="icon" /> Reset password
                  {/* Password reset button */}
                </button>
              </div>
              {isEditing ? ( // Conditional rendering based on edit mode
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-secondary">
                    <Save className="icon" />
                    Save {/* Save changes button */}
                  </button>
                  <button
                    className="btn btn-light"
                    onClick={handleCancelButtonClick} // Cancel editing
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-secondary"
                  onClick={handleEditButtonClick} // Enable edit mode
                >
                  <PenBox className="icon" /> Edit Profile
                </button>
              )}
            </>
          )}
        </div>
      </form>
    </Modal>
  );
};

PatientProfileModal.propTypes = {
  isOpen: PropTypes.bool, // Controls the visibility state of the modal (true = visible, false = hidden)
  addNew: PropTypes.bool, // Determines if modal is in "add new profile" mode (true) or "edit profile" mode (false)
  closeModal: PropTypes.func, // Function to handle closing the modal and cleanup operations
  userData: PropTypes.shape({
    // Object containing all user profile data with specific shape validation
    id: PropTypes.string, // Unique identifier for the user profile
    personalInfo: PropTypes.shape({
      // Nested object for basic personal information
      name: PropTypes.string, // User's full name as text
      profileImage: PropTypes.string, // URL or path to user's profile image
    }),
    joinDate: PropTypes.string, // Date when user profile was created, stored as string
    demographics: PropTypes.shape({
      // Nested object for demographic information
      age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Age can be string or number format
      gender: PropTypes.string, // User's gender identification
      dateOfBirth: PropTypes.string, // User's birth date in string format
      bloodGroup: PropTypes.string, // User's blood type/group
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Height measurement in string or number format
      weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Weight measurement in string or number format
    }),
    contactInfo: PropTypes.shape({
      // Nested object for contact details
      email: PropTypes.string, // User's email address
      phone: PropTypes.string, // User's contact phone number
      address: PropTypes.string, // User's physical address
    }),
    emergencyContact: PropTypes.shape({
      // Nested object for emergency contact information
      name: PropTypes.string, // Name of emergency contact person
      relationship: PropTypes.string, // Relationship to the user
      phone: PropTypes.string, // Emergency contact's phone number
      address: PropTypes.string, // Emergency contact's address
    }),
  }),
};

// Export the component for use in other parts of the application
export default PatientProfileModal;
