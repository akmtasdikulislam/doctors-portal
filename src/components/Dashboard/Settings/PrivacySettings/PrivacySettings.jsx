/**
 * PrivacySettings Component
 *
 * A React component that renders a comprehensive privacy settings interface.
 * The component is divided into two main sections:
 *
 * 1. Data Privacy Settings:
 *    - Profile visibility controls (public/private)
 *    - Data sharing preferences
 *    - Activity tracking options
 *
 * 2. Data Management Settings:
 *    - Data retention period selection
 *    - Cookie preferences
 *    - Data download functionality
 *
 * The interface uses a responsive two-column layout with Bootstrap classes
 * and includes toggle switches and dropdown menus for user interaction.
 * Icons from lucide-react are used to enhance visual representation.
 */

/** Icon Imports */
import { Activity, Clock, Cookie, Eye, Share2 } from "lucide-react";

const PrivacySettings = () => {
  return (
    <div className="privacy-settings">
      {/* Main container for privacy settings section */}
      <h5 className="m-0 mb-4">Privacy Settings</h5>
      {/* Section title with margin bottom spacing */}
      <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
        {/* Flex container for two-column layout */}
        <div className="data-privacy-settings">
          {/* Left column container for privacy controls */}
          <h6 className="mb-4">Data Privacy</h6> {/* Subsection heading */}
          <div className="setting-option language-setting-option mb-3 flex-column align-items-start">
            {/* Container for profile visibility setting */}
            <div>
              <p className="m-0 settings-option-title mb-1">
                {/* Setting title with eye icon */}
                <Eye className="icon" /> Profile Visibility
              </p>
            </div>
            <fieldset>
              {/* Form control for visibility selection */}
              <select name="profile-visibility">
                {/* Dropdown for visibility options */}
                <option value="public">Public</option>
                {/* Public visibility option */}
                <option value="private">Private</option>
                {/* Private visibility option */}
              </select>
            </fieldset>
          </div>
          <div className="setting-option mb-3">
            {/* Container for data sharing toggle */}
            <div>
              <p className="m-0 settings-option-title">
                {/* Setting title with share icon */}
                <Share2 className="icon" /> Data Sharing
              </p>
              <p className="m-0 small-text text-secondary">
                {/* Description text for the setting */}
                Allow sharing of your data for research purposes
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              {/* Toggle switch container */}
              <input id="data-sharing-toggle-switch" type="checkbox" />
              {/* Toggle switch input */}
              <label
                className="toggle-switch"
                htmlFor="data-sharing-toggle-switch"
              ></label>
              {/* Toggle switch label for styling */}
            </fieldset>
          </div>
          <div className="setting-option mb-3">
            {/* Container for activity tracking toggle */}
            <div>
              <p className="m-0 settings-option-title">
                {/* Setting title with activity icon */}
                <Activity className="icon" /> Activity Tracking
              </p>
              <p className="m-0 small-text text-secondary">
                {/* Description text for the setting */}
                Allow tracking of your activity within the application
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              {/* Toggle switch container */}
              <input id="activity-tracking-toggle-switch" type="checkbox" />
              {/* Toggle switch input */}
              <label
                className="toggle-switch"
                htmlFor="activity-tracking-toggle-switch"
              ></label>
              {/* Toggle switch label for styling */}
            </fieldset>
          </div>
        </div>
        <div className="data-management-settings">
          {/* Right column container for data management */}
          <h6 className="mb-4">Data Management</h6> {/* Subsection heading */}
          <div className="setting-option language-setting-option mb-3 flex-column align-items-start">
            {/* Container for retention period setting */}
            <div>
              <p className="m-0 settings-option-title mb-1">
                {/* Setting title with clock icon */}
                <Clock className="icon" /> Data Retention Period
              </p>
            </div>
            <fieldset>
              {/* Form control for retention period selection */}
              <select name="profile-visibility">
                {/* Dropdown for retention period options */}
                <option value="06 months">06 months</option>
                {/* 6-month retention option */}
                <option value="12 months">12 months</option>
                {/* 12-month retention option */}
                <option value="24 Months">24 Months</option>
                {/* 24-month retention option */}
                <option value="36 Months">36 Months</option>
                {/* 36-month retention option */}
              </select>
            </fieldset>
          </div>
          <div className="setting-option language-setting-option mb-3 flex-column align-items-start">
            {/* Container for cookie preferences */}
            <div>
              <p className="m-0 settings-option-title mb-1">
                {/* Setting title with cookie icon */}
                <Cookie className="icon" /> Cookie Preferences
              </p>
            </div>
            <fieldset>
              {/* Form control for cookie preferences selection */}
              <select name="profile-visibility">
                {/* Dropdown for cookie preference options */}
                <option value="essential only">Essential Only</option>
                {/* Essential cookies only option */}
                <option value="all">All</option> {/* All cookies option */}
              </select>
            </fieldset>
          </div>
          <button className="btn btn-outline-dark">Download My Data</button>
          {/* Button to trigger data download */}
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default PrivacySettings;
