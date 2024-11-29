/**
 * Settings Component
 *
 * A comprehensive settings management interface for the healthcare dashboard that allows users
 * to configure various aspects of their account and patient information.
 *
 * Features:
 * - Profile Settings: Manages user profile information including personal details, demographics,
 *   contact information, and emergency contacts
 * - Preferences Settings: Handles user customization options and preferences
 * - Security Settings: Controls authentication and password management
 * - Privacy Settings: Manages data sharing and privacy preferences
 *
 * The component includes:
 * - Modular settings sections using separate components
 * - User data management through props
 * - Action buttons for saving settings and deleting patient records
 * - Responsive layout with Bootstrap classes
 *
 * @component
 * @example
 * return (
 *   <Settings />
 * )
 */

/** Icon Imports */
import { SaveAll, Trash2 } from "lucide-react"; // Icons used for save all settings and delete patient buttons

/** Settings Page Component Imports */
import PreferencesSettings from "./PreferencesSettings/PreferencesSettings"; // Component for managing user preferences and customization options
import PrivacySettings from "./PrivacySettings/PrivacySettings"; // Component for handling privacy and data sharing settings
import ProfileSettings from "./ProfileSettings/ProfileSettings"; // Component for managing user profile information and personal details
import SecuritySettings from "./SecuritySettings/SecuritySettings"; // Component for security settings like password and authentication options
const Settings = () => {
  const userData = {
    id: "PAT2024A001",
    personalInfo: {
      name: "John Doe",
      profileImage:
        "https://img.freepik.com/free-photo/front-view-serious-man_23-2148946212.jpg",
    },
    demographics: {
      age: 30,
      gender: "Male",
      dateOfBirth: "1994-03-15",
      bloodGroup: "A+",
      height: "5'10\"",
      weight: "70 kg",
    },
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "456 Oak Avenue, Springfield, USA",
    },
    joinDate: "15 Jan 2024",
    emergencyContact: {
      name: "Mary Doe",
      relationship: "Sister",
      phone: "+1987654321",
      address: "789 Pine Road, Springfield, USA",
    },
    appointments: {
      total: 2,
      status: {
        paid: 1,
        unpaid: 1,
      },
    },
  };
  return (
    <section
      id="settings" // Unique identifier for the settings section for DOM manipulation and styling
      className="mx-auto d-flex flex-column align-items-center justify-content-center gap-4" // Centers content horizontally, applies flex layout on xxl screens with vertical stacking, centers items and adds spacing between them
    >
      {/* Main section heading with responsive margin */}
      <h3 className="align-self-start mb-3 mb-xl-0">Settings</h3>
      {/* Section title aligned to start, with responsive bottom margin that disappears on xl screens */}
      <div className="patient-container p-4 rounded-3">
        {/*  Container for profile settings with padding and rounded corners */}
        <ProfileSettings userData={userData} />
        {/*  Renders profile settings component with user data passed as props */}
      </div>
      <div className="patient-container p-4 rounded-3">
        {/* Container for preferences settings with padding and rounded corners */}
        <PreferencesSettings />
        {/* Renders preferences settings component for user customization options */}
      </div>
      <div className="patient-container p-4 rounded-3">
        {/* ontainer for security settings with padding and rounded corners */}
        <SecuritySettings />
        {/* Renders security settings component for authentication and password management */}
      </div>
      <div className="patient-container p-4 rounded-3">
        {/* Container for privacy settings with padding and rounded corners */}
        <PrivacySettings />
        {/* Renders privacy settings component for data sharing preferences */}
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-between w-100 settings-footer gap-3">
        {/* Footer container with flex layout for button alignment and full width */}
        <button className="btn btn-danger d-flex align-items-center gap-2">
          {/* Destructive action button styled in red */}
          <Trash2 className="icon" /> Delete Patient
          {/* Delete button with trash icon from Lucide */}
        </button>
        <button className="btn btn-secondary d-flex align-items-center gap-2">
          {/* Secondary action button for saving settings */}
          <SaveAll className="icon" /> Save All Settings
          {/* Save button with save icon from Lucide */}
        </button>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default Settings;
