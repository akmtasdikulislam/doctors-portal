/**
 * QuickActions Component
 *
 * A dashboard component that provides quick access buttons for common actions based on user role.
 *
 * Features:
 * - Responsive 2x2 grid layout of action buttons
 * - Role-based button display (admin vs patient)
 * - Icon integration using lucide-react library
 * - Bootstrap-based styling and layout
 *
 * Admin Actions:
 * - New Appointment: Create new patient appointments
 * - Add Doctor: Add new doctors to the system
 * - Generate Report: Access reporting functionality
 * - View Alerts: Monitor system alerts
 *
 * Patient Actions:
 * - New Appointment: Schedule appointments
 * - Message Doctor: Direct communication with doctors
 * - View Test Results: Access medical test results
 * - Set Reminders: Manage medical reminders
 *
 * Dependencies:
 * - lucide-react for icons
 * - React Context for user role management
 * - Bootstrap classes for styling
 */

/** Import required icons from lucide-react library for button icons */
import {
  AlertCircle, // Icon used for View Alerts button in admin dashboard
  BarChart2, // Icon used for Generate Report button in admin dashboard
  Bell, // Icon used for Set Reminders button in patient dashboard
  FileText, // Icon used for View Test Results button in patient dashboard
  MessageSquare, // Icon used for Message Doctor button in patient dashboard
  Plus, // Icon used for New Appointment button in both dashboards
  User, // Icon used for Add Doctor button in admin dashboard
} from "lucide-react"; // External library providing modern, customizable icons

/** Import React hook for accessing context */
import { useContext } from "react";

/** Import application-wide context for user data and settings */
import { AppContext } from "../../../App";

// Component for displaying quick action buttons in the dashboard
const QuickActions = () => {
  const { user } = useContext(AppContext);
  return (
    // Main container with padding and flex growth classes for responsive layout
    <div className="quick-actions p-4 flex-lg-grow-1 flex-xxl-grow-0">
      {/* Section heading displaying "Quick Actions" with bottom margin */}
      <h4 className="mb-5">Quick Actions</h4>
      {/* Content wrapper using flex layout for organizing buttons in a column */}
      <div className="quick-actions-content d-flex flex-column flex-wrap gap-3 ">
        {/* First row container with flex properties for responsive button placement */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          {/* Conditional rendering based on user category (admin vs patient) */}
          {user.category === "admin" ? (
            // Fragment wrapper for admin-specific buttons
            <>
              {/* New Appointment button with Plus icon for admin users */}
              <button className="btn btn-secondary">
                {/* Plus icon component with custom styling class */}
                <Plus className="quick-actions-content-icon" />
                New Appointment
              </button>
              {/* Add Doctor button with User icon for admin users */}
              <button className="btn btn-secondary">
                {/* User icon component with custom styling class */}
                <User className="quick-actions-content-icon" />
                Add Doctor
              </button>
            </>
          ) : (
            // Fragment wrapper for patient-specific buttons
            <>
              {/* New Appointment button with Plus icon for patients */}
              <button className="btn btn-secondary">
                {/* Plus icon component with custom styling class */}
                <Plus className="quick-actions-content-icon" />
                New Appointment
              </button>
              {/* Message Doctor button with MessageSquare icon for patients */}
              <button className="btn btn-secondary">
                {/* MessageSquare icon component with custom styling class */}
                <MessageSquare className="quick-actions-content-icon" />
                Message Doctor
              </button>
            </>
          )}
        </div>
        {/* Second row container with flex properties for responsive button placement */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          {/* Conditional rendering based on user category (admin vs patient) */}
          {user.category === "admin" ? (
            // Fragment wrapper for admin-specific buttons
            <>
              {/* Generate Report button with BarChart2 icon for admin users */}
              <button className="btn btn-secondary">
                {/* BarChart2 icon component with custom styling class */}
                <BarChart2 className="quick-actions-content-icon" />
                Generate Report
              </button>
              {/* View Alerts button with AlertCircle icon for admin users */}
              <button className="btn btn-secondary">
                {/* AlertCircle icon component with custom styling class */}
                <AlertCircle className="quick-actions-content-icon" />
                View Alerts
              </button>
            </>
          ) : (
            // Fragment wrapper for patient-specific buttons
            <>
              {/* View Test Results button with FileText icon for patients */}
              <button className="btn btn-secondary">
                {/* FileText icon component with custom styling class */}
                <FileText className="quick-actions-content-icon" />
                View Test Results
              </button>
              {/* Set Reminders button with Bell icon for patients */}
              <button className="btn btn-secondary">
                {/* Bell icon component with custom styling class */}
                <Bell className="quick-actions-content-icon" />
                Set Reminders
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the QuickActions component for use in other parts of the application
export default QuickActions;
