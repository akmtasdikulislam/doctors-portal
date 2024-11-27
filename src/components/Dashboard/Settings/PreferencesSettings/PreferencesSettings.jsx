/*
 * PreferencesSettings Component
 *
 * A React component that provides a user interface for managing various application preferences
 * and settings. It includes controls for:
 *
 * 1. Notifications:
 *    - Email notifications
 *    - SMS notifications
 *    - Appointment reminders
 *
 * 2. Appearance:
 *    - Dark mode toggle
 *    - Font size adjustment (12px-24px) with interactive slider
 *    - Language selection
 *
 * The component uses React's useState hook to manage:
 * - Font size state (default: 16px)
 * - Slider dragging state for font size adjustment
 *
 * Features custom mouse event handlers for an interactive font size slider:
 * - handleMouseDown: Initiates slider dragging
 * - handleMouseMove: Updates font size based on cursor position
 * - handleMouseUp: Terminates slider dragging
 */

/** React related imports */
import { useState } from "react"; // Hook for managing component state (font size and drag state)

/** Icon imports from Lucide */
import {
  ALargeSmall, // Icon for font size setting option
  Bell, // Icon for appointment reminders setting
  Globe, // Icon for language selection setting
  Mail, // Icon for email notifications setting
  Moon, // Icon for dark mode setting
  Smartphone, // Icon for SMS notifications setting
} from "lucide-react";
const PreferencesSettings = () => {
  const [fontSize, setFontSize] = useState(16); // State to manage font size value, initialized to 16px as default size
  const [isDragging, setIsDragging] = useState(false); // State to track if user is currently dragging the font size slider

  const handleMouseDown = () => {
    /* 
    A mouse event handler function that initiates the dragging state when the user clicks on the font size slider thumb.
    
    Task List:
    • Set the dragging state to true when mouse button is pressed
    • Enable tracking of mouse movement for slider thumb position updates
    */
    setIsDragging(true); // Update state to indicate user has started dragging the slider
  };

  const handleMouseMove = (e) => {
    /* 
    Handles the mouse movement for the font size slider, calculating the new font size based on cursor position.
    When dragging, it maps the horizontal mouse position to a font size value between 12px and 24px.
    
    Task List:
    • Get the slider container's dimensions and position
    • Calculate cursor position relative to container
    • Convert position to percentage
    • Map percentage to font size range (12-24)
    • Update font size state with bounded value
    */
    if (isDragging) {
      // Check if user is currently dragging the slider
      const container = e.currentTarget.getBoundingClientRect(); // Get the dimensions and position of the slider container
      const position = e.clientX - container.left; // Calculate cursor position relative to container's left edge
      const percentage = position / container.width; // Convert position to percentage (0-1)
      const value = 12 + percentage * (24 - 12); // Map percentage to font size range between 12px and 24px
      setFontSize(Math.min(Math.max(12, Math.round(value)), 24)); // Update font size state, ensuring value stays between 12-24
    }
  };

  const handleMouseUp = () => {
    /* 
    A mouse event handler function that stops the dragging state when the user releases the mouse button on the font size slider.
    
    Task List:
    • Reset the dragging state to false when mouse button is released
    • Stop tracking mouse movement for slider thumb position updates
    */
    setIsDragging(false); // Update state to indicate user has stopped dragging the slider
  };

  return (
    <div className="preferences-settings">
      {/* Main container for preferences settings */}
      <h5 className="m-0 mb-4">Preferences</h5>
      {/* Section title with margin bottom */}
      <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
        {/* Flex container for settings sections */}
        <div className="notification-settings">
          {/* Container for notification related settings */}
          <h6 className="mb-4">Notifications</h6>
          {/* Subsection title for notifications */}
          <div className="setting-option mb-3">
            {/* Individual setting option container */}
            <div>
              <p className="m-0 settings-option-title">
                {/* Title for the setting option */}
                <Mail className="icon" /> Email Notifications
                {/* Mail icon with label */}
              </p>
              <p className="m-0 small-text text-secondary">
                {/* Description text for the setting */}
                Receive notifications via email
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              {/* Container for toggle switch */}
              <input id="toggle-switch-checkbox-1" type="checkbox" />
              {/* Toggle switch input */}
              <label
                className="toggle-switch"
                htmlFor="toggle-switch-checkbox-1"
              ></label>
              {/* Custom styled toggle switch label */}
            </fieldset>
          </div>
          <div className="setting-option mb-3">
            {/* SMS notification setting container */}
            <div>
              <p className="m-0 settings-option-title">
                <Smartphone className="icon" /> SMS Notifications
                {/* Smartphone icon with label */}
              </p>
              <p className="m-0 small-text text-secondary">
                Receive notifications via SMS
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              <input id="toggle-switch-checkbox-2" type="checkbox" />
              <label
                className="toggle-switch"
                htmlFor="toggle-switch-checkbox-2"
              ></label>
            </fieldset>
          </div>
          <div className="setting-option mb-3">
            {/* Appointment reminders setting container */}
            <div>
              <p className="m-0 settings-option-title">
                <Bell className="icon" /> Appointment Reminders
                {/* Bell icon with label */}
              </p>
              <p className="m-0 small-text text-secondary">
                Receive reminders for upcoming appointments
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              <input id="toggle-switch-checkbox-3" type="checkbox" />
              <label
                className="toggle-switch"
                htmlFor="toggle-switch-checkbox-3"
              ></label>
            </fieldset>
          </div>
        </div>
        <div className="appearance-settings">
          {/* Container for appearance related settings */}
          <h6 className="mb-4">Appearance</h6>
          {/* Subsection title for appearance */}
          <div className="setting-option mb-3">
            {/* Dark mode setting container */}
            <div>
              <p className="m-0 settings-option-title">
                <Moon className="icon" /> Dark Mode {/* Moon icon with label */}
              </p>
              <p className="m-0 small-text text-secondary">
                Toggle dark mode for the appearance
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              <input id="toggle-switch-checkbox-4" type="checkbox" />
              <label
                className="toggle-switch"
                htmlFor="toggle-switch-checkbox-4"
              ></label>
            </fieldset>
          </div>
          <div className="setting-option font-size-setting-option mb-2 flex-column align-items-start">
            {/* Font size slider container */}
            <div>
              <p className="m-0 settings-option-title">
                <ALargeSmall className="icon" /> Font Size
                {/* Font size icon with label */}
              </p>
            </div>
            <fieldset>
              <div
                className="slider-container"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* Container for custom slider with mouse event handlers */}
                <div
                  className="slider-track"
                  style={{
                    "--progress": `${((fontSize - 12) / (24 - 12)) * 100}%`,
                  }}
                ></div>
                {/* Slider track with dynamic progress calculation */}
                <div
                  className="slider-thumb"
                  role="slider"
                  aria-valuemin="12"
                  aria-valuemax="24"
                  aria-valuenow="16"
                  tabIndex="0"
                  onMouseDown={handleMouseDown}
                  style={{
                    left: `${((fontSize - 12) / (24 - 12)) * 100}%`,
                  }}
                ></div>
                {/* Draggable slider thumb with ARIA attributes */}
              </div>
            </fieldset>
          </div>
          <div className="setting-option language-setting-option mb-3 flex-column align-items-start">
            {/* Language selection container */}
            <div>
              <p className="m-0 settings-option-title mb-1">
                <Globe className="icon" /> Language
                {/* Globe icon with label */}
              </p>
            </div>
            <fieldset>
              <select name="language">
                {/* Language dropdown selector */}
                <option value="en">English</option> {/* Language options */}
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
              </select>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default PreferencesSettings;
