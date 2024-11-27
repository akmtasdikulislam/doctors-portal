/**
 * SecuritySettings Component
 *
 * A React component that renders a security settings interface with various security options.
 *
 * Features:
 * - Two-Factor Authentication toggle
 * - Login Alerts toggle
 * - Biometric Login toggle
 * - Password strength selection
 * - Password change functionality
 *
 * The component is structured into two main sections:
 * 1. Account Security: Contains toggles for various security features
 * 2. Password Settings: Contains password-related settings and actions
 *
 * Uses lucide-react icons for visual elements
 */

/** Icon Imports */
import { Bell, Fingerprint, Lock } from "lucide-react";

const SecuritySettings = () => {
  return (
    <div className="security-settings">
      <h5 className="m-0 mb-4">Security Settings</h5>
      <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
        <div className="account-security-settings">
          <h6 className="mb-4">Account Security</h6>

          <div className="setting-option mb-3">
            {/* Container for individual setting option with bottom margin */}
            <div>
              <p className="m-0 settings-option-title">
                {/* Title for the setting option */}
                <Lock className="icon" /> Two-Factor Authentication
                {/* Icon and text for 2FA option */}
              </p>
              <p className="m-0 small-text text-secondary">
                {/* Description text with secondary color */}
                Enable two-factor authentication for added security
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              {/* Container for toggle switch input */}
              <input
                id="two-factor-authentication-toggle-switch"
                type="checkbox"
              />
              {/* Checkbox input for 2FA toggle */}
              <label
                className="toggle-switch"
                htmlFor="two-factor-authentication-toggle-switch"
              ></label>
              {/* Custom styled label for toggle switch */}
            </fieldset>
          </div>
          <div className="setting-option mb-3">
            {/* Container for login alerts option */}
            <div>
              <p className="m-0 settings-option-title">
                <Bell className="icon" /> Login Alerts
                {/* Icon and text for login alerts */}
              </p>
              <p className="m-0 small-text text-secondary">
                Receive alerts for new login attempts
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              <input id="login-alerts-toggle-switch" type="checkbox" />
              {/* Checkbox for login alerts toggle */}
              <label
                className="toggle-switch"
                htmlFor="login-alerts-toggle-switch"
              ></label>
              {/* Custom styled label for login alerts toggle */}
            </fieldset>
          </div>

          <div className="setting-option mb-3">
            {/* Container for biometric login option */}
            <div>
              <p className="m-0 settings-option-title">
                <Fingerprint className="icon" /> Biometric Login
                {/* Icon and text for biometric login */}
              </p>
              <p className="m-0 small-text text-secondary">
                Enable biometric login (fingerprint or face recognition)
              </p>
            </div>
            <fieldset className="toggle-switch-container">
              <input id="biometric-login-toggle-switch" type="checkbox" />
              {/* Checkbox for biometric login toggle */}
              <label
                className="toggle-switch"
                htmlFor="biometric-login-toggle-switch"
              ></label>
              {/* Custom styled label for biometric toggle */}
            </fieldset>
          </div>
        </div>

        <div className="password-settings">
          {/* Container for password-related settings */}
          <h6 className="mb-4">Password Security</h6>
          {/* Subsection title for password security */}
          <div className="setting-option language-setting-option mb-3 flex-column align-items-start">
            {/* Container for password strength option */}
            <div>
              <p className="m-0 settings-option-title mb-1">
                <Lock className="icon" /> Password Strength
                {/* Icon and text for password strength */}
              </p>
            </div>
            <fieldset>
              <select name="password-strength">
                {/* Dropdown for password strength selection */}
                <option value="weak">weak</option> {/* Weak password option */}
                <option value="medium" selected>
                  {/* Medium password option - default selected */}
                  Medium
                </option>
                <option value="strong">Strong</option>
                {/* Strong password option */}
              </select>
            </fieldset>
          </div>
          <div className="setting-option mb-3 align-items-center">
            {/* Container for password change option */}
            <div>
              <p className="m-0 settings-option-title mb-1">
                Last Password Change {/* Title for last password change info */}
              </p>
              <p className="m-0 small-text text-secondary">03 November 2023</p>
              {/* Date of last password change */}
            </div>
            <button className="btn btn-outline-dark">Change Password</button>
            {/* Button to trigger password change */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
