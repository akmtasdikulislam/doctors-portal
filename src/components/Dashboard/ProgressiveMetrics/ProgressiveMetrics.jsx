/**
 * ProgressiveMetrics Component
 *
 * A React component that visualizes hospital statistics using progressive bars.
 *
 * Features:
 * - Displays a list of hospital metrics with their corresponding values
 * - Each metric is shown with a label, value/remarks, and a progress bar
 * - Progress bars dynamically adjust width based on the metric value
 * - Uses Bootstrap classes for responsive layout and styling
 *
 * Props:
 * @param {string} statsName - Title/category of the stats section
 * @param {Array} statsData - Array of objects containing metric information
 * @param {string} statsData[].metricName - Name/label of the metric
 * @param {number} statsData[].mainValue - Numerical value of the metric (percentage)
 * @param {string} [statsData[].remarks] - Optional remarks to display instead of percentage
 *
 * Usage:
 * <ProgressiveMetrics
 *   statsName="Hospital Statistics"
 *   statsData={[
 *     { metricName: "Occupancy", mainValue: 75 },
 *     { metricName: "Efficiency", mainValue: 85, remarks: "Excellent" }
 *   ]}
 * />
 */

/** React related imports */
import PropTypes from "prop-types"; // Import PropTypes for runtime type checking of component props (used to validate statsData prop shape)

// Component that displays hospital statistics in a progressive bar format
const ProgressiveMetrics = ({ statsName, statsData }) => {
  return (
    // Main container with padding and custom class for styling metrics
    <div className="progressive-metrics p-4">
      {/* Title section that displays the stats category name with bottom margin */}
      <h4 className="mb-4">{statsName}</h4>
      {/* Wrapper div for metrics list using flexbox for vertical layout with spacing */}
      <div className="progressive-metrics-list d-flex flex-column gap-4">
        {/* Iterate through each metric in the data array to create individual metric displays */}
        {statsData.map((metric, index) => (
          // Container for individual metric with unique key and vertical flex layout
          <div
            key={index}
            className="progressive-metrics-item d-flex flex-column"
          >
            {/* Header row containing metric name and value, using flexbox for space-between alignment */}
            <div className="progressive-metrics-item-content d-flex align-items-center justify-content-between gap-3 mb-2">
              {/* Left side: Display metric name with no margin for clean layout */}
              <p className="m-0">{metric.metricName}</p>
              {/* Right side: Show remarks if available, otherwise show percentage value */}
              <p className="m-0">
                {metric.remarks ? metric.remarks : `${metric.mainValue}%`}
              </p>
            </div>
            {/* Container for the visual progress bar element */}
            <div className="progressive-metrics-item-progress-bar">
              {/* Inner div that represents the filled portion of progress bar, width set dynamically */}
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
  // Define PropTypes for ProgressiveMetrics component to validate props at runtime
  statsName: PropTypes.string, // Optional string prop for the title/category of the stats section
  statsData: PropTypes.arrayOf(
    // Required array prop that contains the metrics data
    PropTypes.shape({
      // Define the expected shape/structure of each object in the array
      metricName: PropTypes.string.isRequired, // Required string prop for the name/label of each metric
      mainValue: PropTypes.number.isRequired, // Required number prop for the percentage value of each metric
      remarks: PropTypes.string, // Optional string prop for any additional notes/comments for the metric
    })
  ).isRequired, // Mark statsData as required to ensure component always receives data
};
// Export the component for use in other parts of the application
export default ProgressiveMetrics;
