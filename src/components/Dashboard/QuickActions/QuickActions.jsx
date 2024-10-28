/**
 * QuickActions Component
 *
 * A dashboard component that displays a set of quick action buttons for common tasks.
 *
 * Features:
 * - Displays 4 action buttons in a 2x2 responsive grid layout
 * - Each button includes an icon and descriptive text
 * - Actions include: New Appointment, Add Doctor, Generate Report, and View Alerts
 * - Uses Bootstrap classes for responsive design and styling
 * - Icons are imported from lucide-react library
 *
 * Layout:
 * - Container with padding and responsive flex growth
 * - Heading section with "Quick Actions" title
 * - Two rows of buttons with responsive wrapping
 * - Each button uses secondary styling with custom icon placement
 *
 * Usage:
 * Import and place this component within the dashboard layout
 * to provide users with quick access to common actions.
 */

/** Icon imports */
import {
  AlertCircle, // Used for View Alerts button icon
  BarChart2, // Used for Generate Report button icon
  Plus, // Used for New Appointment button icon
  User, // Used for Add Doctor button icon
} from "lucide-react";

// Component for displaying quick action buttons in the dashboard
const QuickActions = () => {
  return (
    // Container div with padding and responsive flex growth classes
    <div className="quick-actions p-4 flex-lg-grow-1 flex-xxl-grow-0">
      {/* Section heading */}
      <h4 className="mb-5">Quick Actions</h4>
      {/* Content wrapper with flex column layout and spacing */}
      <div className="quick-actions-content d-flex flex-column flex-wrap gap-3 ">
        {/* First row of action buttons with responsive flex layout */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          {/* Button for creating new appointment with icon */}
          <button className="btn btn-secondary">
            <Plus className="quick-actions-content-icon" />
            New Appointment
          </button>
          {/* Button for adding new doctor with icon */}
          <button className="btn btn-secondary">
            <User className="quick-actions-content-icon" />
            Add Doctor
          </button>
        </div>
        {/* Second row of action buttons with responsive flex layout */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          {/* Button for generating reports with icon */}
          <button className="btn btn-secondary">
            <BarChart2 className="quick-actions-content-icon" />
            Generate Report
          </button>
          {/* Button for viewing alerts with icon */}
          <button className="btn btn-secondary">
            <AlertCircle className="quick-actions-content-icon" />
            View Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the QuickActions component for use in other parts of the application
export default QuickActions;
