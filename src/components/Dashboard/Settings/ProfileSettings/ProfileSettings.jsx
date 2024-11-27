/*
 * ProfileSettings Component
 *
 * A comprehensive profile management component that allows users to view and edit their personal information.
 *
 * Key Features:
 * - Toggleable edit mode for profile information
 * - Profile photo upload and preview
 * - Form validation using react-hook-form
 * - Responsive layout with Bootstrap classes
 * - Handles personal details, demographics, contact info, and emergency contacts
 *
 * Component Structure:
 * - State management for edit mode and photo upload
 * - Form handling with validation
 * - Photo upload functionality
 * - Automatic form population with existing user data
 * - Organized sections for different types of information
 *
 * Props:
 * - userData: Object containing all user profile information including:
 *   • Personal info (name, profile image)
 *   • Demographics (age, gender, DOB, etc.)
 *   • Contact information
 *   • Emergency contact details
 *
 * Dependencies:
 * - react-hook-form for form management
 * - lucide-react for icons
 * - Custom utility functions for date formatting
 * - FormError component for validation messages
 */

/** React related imports */
import PropTypes from "prop-types"; // Type checking for component props
import { useEffect, useState } from "react"; // React hooks for managing component lifecycle and state

/** Form and Modal related imports */
import { useForm } from "react-hook-form"; // Form handling and validation

/** Icon imports */
import { PenBox, Save } from "lucide-react"; // Icons used in buttons and UI elements

/** Utility imports */
import formatDate from "../../../../functions/formatDate"; // Helper function to format date strings
import FormError from "../../../FormError/FormError";

const ProfileSettings = ({ userData }) => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset, userData]); // Re-run effect when reset function or userData changes
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="profile-modal d-flex flex-column justify-content-between"
    >
      {/* Main modal container with flex layout for vertical content arrangement */}
      <div className="profile-modal-content d-flex flex-lg-row flex-column justify-content-between w-100">
        {/* Content wrapper that switches between row/column layout based on screen size */}

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
              <p className="m-0 small-text text-secondary">
                {userData.id} {/* Display user ID */}
              </p>
              <p className="m-0 small-text text-secondary">
                Joined on: {userData.joinDate} {/* Display join date */}
              </p>
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
            {isEditing ? ( // Conditional rendering based on edit mode
              <div className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-secondary d-flex align-items-center gap-2"
                >
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
                className="btn btn-secondary d-flex align-items-center gap-2"
                onClick={handleEditButtonClick} // Enable edit mode
              >
                <PenBox className="icon" /> Edit Profile
              </button>
            )}
          </div>
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
                    message: "Please enter the name of your emergency contact",
                  },
                })} // Emergency contact name input
              />
              {errors.emergencyContactName && (
                <FormError errorMessage={errors.emergencyContactName.message} />
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
                    message: "Please enter your relationship with the contact",
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
      {/* <div className="profile-modal-actions d-flex justify-content-between align-items-center gap-2 px-4">
        <div className="d-md-flex d-none gap-3">
          <button className="btn btn-danger">
            <Trash2 className="icon" /> Delete Patient
          </button>
          <button className="btn btn-outline-danger">
            <AlertCircle className="icon" /> Reset password
          </button>
        </div>
      </div> */}
    </form>
  );
};

ProfileSettings.propTypes = {
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
export default ProfileSettings;
