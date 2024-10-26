/*
 * ProfilePanel Component
 *
 * A dropdown panel component that displays user profile information and navigation options.
 *
 * Features:
 * - Displays user's name, qualifications, and specialization
 * - Shows admin badge for users with administrator access
 * - Provides navigation links for Profile, Settings, and Help & Support
 * - Includes a logout button
 *
 * Structure:
 * - Header section with user info and admin badge
 * - Content section with navigation menu items
 * - Each menu item includes an icon and label
 * - Logout button separated by border
 *
 * Dependencies:
 * - React Router for navigation
 * - Lucide React for icons
 * - Bootstrap classes for styling
 */

// ** React related imports **
import PropTypes from "prop-types";

// ** React Router related imports **
import { Link } from "react-router-dom"; // Used for navigation links in profile menu items

// ** Icon imports **
import {
  Dot, // Used as separator in profile header speciality text
  LifeBuoy, // Used as help & support menu item icon
  LogOut, // Used as logout button icon
  Settings, // Used as settings menu item icon
  User, // Used as profile menu item icon
} from "lucide-react";

// Main ProfilePanel component that displays user profile information and navigation menu
const ProfilePanel = ({ userData }) => {
  return (
    // Container for entire profile panel with absolute positioning and shadow
    <div className="profile-panel position-absolute shadow-sm">
      {/* Header section containing user info and admin badge */}
      <div className="profile-panel-header border-bottom mb-1 px-3 py-2">
        {/* Flex container for name and admin badge */}
        <div className="d-flex align-items-center">
          {/* User's name display */}
          <p className="name m-0">{userData.name}</p>
          {/* Admin badge pushed to right side */}

          <div
            className={`badge ${userData.category}-badge ms-auto text-capitalize`}
            title={userData.isAdmin && userData.accessLevel}
          >
            {userData.category}
          </div>
        </div>
        {/* User's specialization info with dot separator */}
        <p className="m-0 text-secondary small-text specialization">
          <span className="qualifications" title={userData.qualifications.full}>
            {userData.qualifications.short}
          </span>
          <Dot className="dot-icon" />
          <span className="speciality" title="Specialization">
            {userData.speciality}
          </span>
        </p>
      </div>
      {/* Content section containing navigation menu items */}
      <div className="profile-panel-content">
        {/* Profile link with user icon */}
        <Link
          className="profile-menu-item d-flex align-items-center py-2 gap-3"
          title="View or edit your profile"
        >
          {/* Container for profile icon */}
          <div className="col-1 ms-3">
            <User className="user-menu-icon" />
          </div>
          {/* Profile text label */}
          <p className="col-11 m-0">Profile</p>
        </Link>
        {/* Settings link with settings icon */}
        <Link
          className="profile-menu-item d-flex align-items-center py-2 gap-3"
          title="Manage your account settings"
        >
          {/* Container for settings icon */}
          <div className="col-1 ms-3">
            <Settings className="user-menu-icon" />
          </div>
          {/* Settings text label */}
          <p className="col-11 m-0">Settings</p>
        </Link>
        {/* Help & Support link with lifebuoy icon */}
        <Link
          className="profile-menu-item d-flex align-items-center gap-3 mb-1 py-2"
          title="Get help and support"
        >
          {/* Container for help icon */}
          <div className="col-1 ms-3">
            <LifeBuoy className="user-menu-icon" />
          </div>
          {/* Help & Support text label */}
          <p className="col-11 m-0">Help & Support</p>
        </Link>
        {/* Logout section with top border */}
        <div className="border-top py-1">
          {/* Logout button with logout icon */}
          <button
            className="btn logout-btn profile-menu-item d-flex align-items-center py-2"
            title="Sign out of your account"
          >
            {/* Container for logout icon */}
            <div className="col-1 ms-3">
              <LogOut className="user-menu-icon" />
            </div>
            {/* Logout text label */}
            <p className="m-0 ms-3">Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

ProfilePanel.propTypes = {
  // Define the expected props for the ProfilePanel component
  userData: PropTypes.shape({
    // User's full name - required string prop
    name: PropTypes.string.isRequired,
    // User's category (e.g., admin, user) - required string prop
    category: PropTypes.string.isRequired,
    // Boolean flag indicating if user has admin privileges - optional
    isAdmin: PropTypes.bool,
    // Level of admin access (e.g., full, limited) - optional string prop
    accessLevel: PropTypes.string,
    // Nested object containing user's qualification details
    qualifications: PropTypes.shape({
      // Complete qualification text - required string prop
      full: PropTypes.string.isRequired,
      // Abbreviated qualification - required string prop
      short: PropTypes.string.isRequired,
    }).isRequired,
    // User's medical specialization - required string prop
    speciality: PropTypes.string.isRequired,
  }).isRequired, // Entire userData object is required for component to function
};
// Export the component for use in other parts of the application
export default ProfilePanel;
