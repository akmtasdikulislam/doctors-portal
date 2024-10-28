/**
 * ProgressiveMetrics Component
 *
 * A React component that visualizes hospital statistics using progressive bars.
 *
 * Features:
 * - Displays a list of hospital metrics with their corresponding values
 * - Each metric is shown with a label, percentage value, and a progress bar
 * - Progress bars dynamically adjust width based on the metric value
 * - Uses Bootstrap classes for responsive layout and styling
 *
 * Props:
 * @param {Array} statsData - Array of objects containing metric information
 * @param {string} statsData[].metricName - Name/label of the metric
 * @param {number} statsData[].mainValue - Numerical value of the metric (percentage)
 *
 * Usage:
 * <ProgressiveMetrics statsData={[
 *   { metricName: "Occupancy", mainValue: 75 },
 *   { metricName: "Efficiency", mainValue: 85 }
 * ]} />
 */

/** React related imports */
import PropTypes from "prop-types"; // Import PropTypes for runtime type checking of component props (used to validate statsData prop shape)

// Component that displays hospital statistics in a progressive bar format
const ProgressiveMetrics = ({ statsData }) => {
  return (
    // Main container with padding
    <div className="progressive-metrics p-4">
      {/* Title for the hospital stats section */}
      <h4 className="mb-4">Hospital Stats</h4>
      {/* Container for the list of metrics with flex column layout and gap */}
      <div className="progressive-metrics-list d-flex flex-column gap-4">
        {/* Map through each metric in the hospital stats data */}
        {statsData.map((metric, index) => (
          // Individual metric item container with flex column layout
          <div
            key={index}
            className="progressive-metrics-item d-flex flex-column"
          >
            {/* Content section displaying metric name and value */}
            <div className="progressive-metrics-item-content d-flex align-items-center justify-content-between gap-3 mb-2">
              {/* Metric name display */}
              <p className="m-0">{metric.metricName}</p>
              {/* Metric value display with percentage */}
              <p className="m-0">{metric.mainValue}%</p>
            </div>
            {/* Progress bar container */}
            <div className="progressive-metrics-item-progress-bar">
              {/* Filled portion of progress bar with dynamic width based on metric value */}
              <div
                className="filled"
                style={{ width: `${metric.mainValue}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes definition for type checking
ProgressiveMetrics.propTypes = {
  // Requires an array of objects with specific shape
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      metricName: PropTypes.string.isRequired, // Required string for metric name
      mainValue: PropTypes.number.isRequired, // Required number for metric value
    })
  ).isRequired,
};

// Export the component for use in other parts of the application
export default ProgressiveMetrics;
