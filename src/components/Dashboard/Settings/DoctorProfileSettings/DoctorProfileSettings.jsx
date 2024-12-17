/*
 * DoctorProfileSettings Component
 *
 * A component that manages doctor profile settings and availability information.
 *
 * Key Features:
 * - Toggleable edit mode for profile information
 * - Form validation using react-hook-form
 * - Manages doctor availability data
 * - Handles doctor profile information updates
 *
 * Component Structure:
 * - State management for edit mode, availability, and photo upload
 * - Form handling with validation using react-hook-form
 * - Edit/Cancel functionality for profile updates
 * - Manages doctor ID and profile photo
 *
 * Props:
 * - userData: Object containing doctor profile information
 *
 * State:
 * - isEditing: Boolean to track edit mode
 * - availability: Array to store availability data
 * - doctorID: String to store doctor's ID
 * - uploadedPhoto: Stores the uploaded profile photo URL
 *
 * Dependencies:
 * - react-hook-form for form management
 * - lucide-react for UI icons
 * - FormError component for validation messages
 */

/** React related imports */
import PropTypes from "prop-types"; // PropTypes for runtime type checking of component props and maintaining code reliability
import { useEffect, useState } from "react"; // React hooks for managing component lifecycle and state

/** Form and Modal related imports */
import { useForm } from "react-hook-form"; // Form handling and validation

/** Icon imports */
import { PenBox, Plus, Save, Trash2 } from "lucide-react"; // Icons used in buttons and UI elements

/** Utility imports */
import FormError from "../../../FormError/FormError";

const DoctorProfileSettings = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false); // State variable to track whether the form is in edit mode or view mode
  const [availability, setAvailability] = useState([]); // State variable to store and manage the availability data
  const [doctorID, setDoctorID] = useState(""); // State variable to store and manage the doctor's ID
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

  const handleAvailabilityChange = (event, scheduleID) => {
    /*
    Updates the availability slot data when the user changes either the day or time selection in the schedule form.
    Manages state updates for individual schedule slots while maintaining the rest of the availability data.
    
    Task List:
    • Extract form field name and value from event
    • Find the specific schedule slot by ID
    • Update only the changed field (day/time) in that slot
    • Preserve other slot data and unchanged slots
    • Update availability state with modified data
    */
    const { name, value } = event.target; // Destructure the field name and new value from the event object
    setAvailability((currentAvailability) => {
      return currentAvailability.map((slot) => {
        if (slot.id === scheduleID) {
          return {
            ...slot, // Spread existing slot properties to maintain other data
            [name.split(".")[2]]: value, // Update only the changed field (day or time) using dynamic key
          };
        }
        return slot; // Return unchanged slots as is
      });
    });
  };

  const handleAddAvailabilitySlot = (e) => {
    /*
    Handles the addition of a new availability slot to the schedule when the user clicks the "Add Slot" button.
    Creates a new empty slot with a unique ID and adds it to the availability array.
    
    Task List:
    • Prevent default form submission behavior
    • Generate unique ID for new slot
    • Create new slot object with empty day and time
    • Add new slot to existing availability array
    */
    e.preventDefault(); // Prevent form submission and page reload
    const newAvailabilitySlot = {
      id: `${doctorID}_${Date.now()}`, // Generate unique ID using doctor ID and timestamp
      day: "", // Initialize day field as empty string
      time: "", // Initialize time field as empty string
    };
    setAvailability([...availability, newAvailabilitySlot]); // Add new slot to existing availability array using spread operator
  };

  const handleDeleteAvailabilitySlot = (slotId, event) => {
    /*
    Handles the deletion of an availability slot from the schedule when the user clicks the delete button.
    Removes the specified slot while preserving other schedule slots in the availability array.
    
    Task List:
    • Prevent default button click behavior
    • Find and remove the slot with matching ID
    • Update availability state without the deleted slot
    • Maintain other slots unchanged
    */
    event.preventDefault(); // Prevent default button click behavior to avoid form submission
    setAvailability((prevAvailability) => {
      return prevAvailability.filter((slot) => slot.id !== slotId); // Filter out the slot with matching ID and keep all others
    });
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
      speciality: userData.speciality,
      qualifications: userData.qualifications.degree,

      // Contact Information
      email: userData.contactInfo.email, // Set email from contact information
      phone: userData.contactInfo.phone, // Set phone number from contact data
    });
    setAvailability(userData.availability);
    isEditing && setIsEditing(false); // Disable editing mode if currently enabled
    setDoctorID(userData.id); // Set the doctor's ID from user data

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
        <div className="profile-details p-md-4 w-100">
          {/* Main form container for all profile details */}
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="m-0 mb-3">Personal Information</h6>
            <div
              className={`badge ${userData.category}-badge ms-auto text-capitalize`}
              title={userData.isAdmin && userData.accessLevel}
            >
              {userData.category}
            </div>
          </div>
          {/* Section header for patient details */}
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
            {/* Two-column layout for form fields */}
            <fieldset className="flex-grow-1">
              <label>Speciality</label>
              <input
                type="text"
                disabled={!isEditing}
                {...register("speciality", {
                  required: {
                    value: true,
                    message: "Please enter your speciality",
                  },
                })}
              />
              {errors.speciality && (
                <FormError errorMessage={errors.speciality.message} />
              )}
            </fieldset>
            <fieldset className="flex-grow-1">
              <label>Qualifications</label>
              <input
                type="text"
                disabled={!isEditing}
                {...register("qualifications", {
                  required: {
                    value: true,
                    message: "Please enter your qualifications",
                  },
                })}
              />
              {errors.qualifications && (
                <FormError errorMessage={errors.qualifications.message} />
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
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 mb-3 mt-4">
            <h6 className="m-0 mt-3">Availability</h6>
            <button
              className={`btn btn-secondary ${isEditing ? "" : "d-none"}`} // Bootstrap button styling
              onClick={(e) => handleAddAvailabilitySlot(e)}
            >
              {/* Add new patient button with icon and responsive text */}
              <Plus className="me-sm-2 btn-icon" />{" "}
              {/* Plus icon with margin */}
              <span className="d-none d-sm-inline">Add Slot</span>
              {/* Button text, hidden on small screens */}
            </button>
          </div>
          <div className="availability">
            {availability.map((schedule) => (
              <div
                key={schedule.id}
                className="schedule-row d-flex flex-wrap align-items-center gap-3 my-2 p-2 rounded-2"
              >
                <select
                  {...register(`availability.${schedule.id}.day`, {
                    required: {
                      value: true,
                      message: "Please select a day",
                    },
                  })}
                  className="flex-grow-1"
                  disabled={!isEditing}
                  defaultValue={schedule.day}
                  onChange={(event) => {
                    handleAvailabilityChange(event, schedule.id);
                  }}
                >
                  <option value="">Select Day</option>
                  {[
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ].map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>

                {errors?.availability?.[schedule.id]?.day && (
                  <FormError
                    errorMessage={errors.availability[schedule.id].day.message}
                  />
                )}

                <select
                  {...register(`availability.${schedule.id}.time`, {
                    required: {
                      value: true,
                      message: "Please select a time",
                    },
                  })}
                  className="flex-grow-1"
                  disabled={!isEditing}
                  defaultValue={schedule.time}
                  onChange={(event) => {
                    handleAvailabilityChange(event, schedule.id);
                  }}
                >
                  <option value="">Select Time</option>
                  {[
                    "09:00 AM - 05:00 PM",
                    "10:00 AM - 06:00 PM",
                    "09:00 AM - 04:00 PM",
                    "08:00 AM - 04:00 PM",
                    "09:00 AM - 02:00 PM",
                  ].map((timeSlot) => (
                    <option key={timeSlot} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
                </select>
                {errors?.availability?.[schedule.id]?.time && (
                  <FormError
                    errorMessage={errors.availability[schedule.id].time.message}
                  />
                )}
                {/* Time selection dropdown */}
                <button
                  className={`btn delete-btn ${isEditing ? "" : "d-none"}`}
                  onClick={(e) => handleDeleteAvailabilitySlot(schedule.id, e)}
                >
                  <Trash2 className="btn-icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

// Add this after the component definition
DoctorProfileSettings.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    personalInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profileImage: PropTypes.string.isRequired,
    }).isRequired,
    speciality: PropTypes.string.isRequired,
    qualifications: PropTypes.shape({
      degree: PropTypes.string.isRequired,
    }).isRequired,
    contactInfo: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    availability: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      })
    ).isRequired,
    joinDate: PropTypes.string.isRequired,
    category: PropTypes.string,
    accessLevel: PropTypes.string,
    isAdmin: PropTypes.bool,
  }).isRequired,
};

// Add default props if needed
DoctorProfileSettings.defaultProps = {
  userData: {
    availability: [],
  },
};

// Export the component for use in other parts of the application
export default DoctorProfileSettings;
