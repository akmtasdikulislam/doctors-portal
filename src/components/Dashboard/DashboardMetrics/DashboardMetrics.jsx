/**
 * DashboardMetrics Component
 *
 * A reusable component for displaying metric information in a card format.
 * Each metric card consists of:
 * - A header section with a metric name and an icon
 * - A body section containing a main value and descriptive subtext
 *
 * Props:
 * @param {string} metricName - The name/title of the metric
 * @param {string|number} mainValue - The primary value to display
 * @param {string} subtext - Additional descriptive text below the main value
 * @param {element} icon - React element representing an icon
 *
 * The component uses Bootstrap classes for styling and layout,
 * including flex utilities for alignment and spacing.
 */

/** React related imports */
import PropTypes from "prop-types"; // Used for type checking component props at runtime and documenting expected prop types

// Component that displays metric information in a card format with a header and body
const DashboardMetrics = ({ metricName, mainValue, subtext, icon }) => {
  return (
    // Main container with card styling and flex layout for vertical alignment
    <div className="card dashboard-metrics p-3 d-flex flex-column justify-content-between">
      {/* Header section containing metric name and icon with transparent background (to reset default bootstrap styling) */}
      <div className="card-header d-flex align-items-center justify-content-between gap-xl-5 bg-transparent border-0">
        <h6>{metricName}</h6> {/* Display the metric name in h6 heading */}
        {icon} {/* Render the icon component passed as prop */}
      </div>
      {/* Body section containing the main value and descriptive subtext */}
      <div className="card-body">
        <h4>{mainValue}</h4> {/* Display the main metric value in h4 heading */}
        <p className="m-0 text-secondary small-text">{subtext}</p>
        {/* Display subtext with secondary color and small size */}
      </div>
    </div>
  );
};

// PropTypes definition for type checking and documentation
DashboardMetrics.propTypes = {
  metricName: PropTypes.string.isRequired, // Metric name must be a required string
  mainValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired, // Main value can be either string or number, but is required
  subtext: PropTypes.string.isRequired, // Subtext must be a required string
  icon: PropTypes.element.isRequired, // Icon must be a required React element
};

// Export the component for use in other parts of the application
export default DashboardMetrics;
