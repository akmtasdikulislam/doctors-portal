/*
 * EmptyContainer Component
 *
 * A reusable React component that displays an empty state message with an icon.
 * It is typically used when there are no items/tasks to display in a list or container.
 *
 * Features:
 * - Displays an ArchiveX icon from lucide-react library
 * - Shows "No tasks yet" message
 * - Supports optional bordered styling through the 'bordered' prop
 * - Uses Bootstrap classes for layout and styling
 * - Centered content with flex layout
 *
 * Props:
 * - bordered (boolean): Controls whether to show a border around the container
 *   Default: false
 */

/* ** React related imports ** */
import PropTypes from "prop-types"; // Import PropTypes for component props validation and type checking

/* ** Icon imports ** */
import { ArchiveX } from "lucide-react"; // Import ArchiveX icon component for empty state visualization

// Component that displays an empty state message with an icon
const EmptyContainer = ({ bordered = false }) => {
  return (
    // Container div with flex layout and styling classes
    <div
      // Dynamic className to handle bordered and non-bordered variants
      className={`empty-container d-flex flex-column align-items-center justify-content-center mx-auto text-secondary gap-2 ${
        bordered ? "bordered-container" : ""
      } `}
    >
      {/* Archive icon from lucide-react library */}
      <ArchiveX strokeWidth={1.25} className="empty-icon" />
      {/* Empty state message text */}
      <h5 className="m-0 fw-medium">No tasks yet</h5>
    </div>
  );
};

// PropTypes definition for type checking
EmptyContainer.propTypes = {
  // Boolean prop to control bordered styling
  bordered: PropTypes.bool,
};

// Export the component for use in other parts of the application
export default EmptyContainer;
