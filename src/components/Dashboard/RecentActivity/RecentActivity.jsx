/*
 * RecentActivity Component
 *
 * A React component that displays a list of recent activities in a dashboard.
 *
 * Features:
 * - Renders a list of activities with their names and timestamps
 * - Uses dot icons with dynamic styling based on activity type
 * - Responsive layout with flexbox for optimal display
 * - PropTypes validation for type checking
 *
 * Props:
 * - recentActivityData: Array of activity objects containing:
 *   - activityType: String - Type of activity for icon styling
 *   - activityName: String - Name/description of the activity
 *   - activityTime: String - Timestamp of when activity occurred
 *
 * Dependencies:
 * - PropTypes for type checking
 * - lucide-react for Dot icon component
 */

// ** React related imports **
import PropTypes from "prop-types"; // Used for type checking and validating component props

// ** Icon imports **
import { Dot } from "lucide-react"; // Used for displaying dot icons with dynamic styling for each activity type

// Component that displays a list of recent activities
const RecentActivity = ({ recentActivityData }) => {
  return (
    // Container for the entire recent activity section with padding
    <div className="recent-activity p-3">
      {/* Heading for the recent activity section with margin styling */}
      <h4 className="mb-4 ms-1">Recent Activity</h4>
      {/* Container for the list of recent activities */}
      <div className="recent-activity-list">
        {/* Map through each activity in the recentActivityData array */}
        {recentActivityData.map((activity, index) => (
          // Individual activity item container with flexbox alignment
          <div
            key={index}
            className="recent-activity-item d-flex align-items-center"
          >
            {/* Dot icon component with dynamic styling based on activity type */}
            <Dot
              className={`recent-activity-item-icon ${activity.activityType}-icon`}
            />
            {/* Content container for activity details with flexible layout */}
            <div className="recent-activity-item-content d-flex align-items-center justify-content-between w-100 gap-md-4 flex-wrap">
              {/* Display the activity name */}
              <p className="m-0">{activity.activityName}</p>
              {/* Display the activity timestamp with secondary styling */}
              <p className="m-0 text-secondary small-text me-2">
                {activity.activityTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes definition for type checking the component props
RecentActivity.propTypes = {
  // Defines the expected structure of the recentActivityData prop array
  recentActivityData: PropTypes.arrayOf(
    PropTypes.shape({
      activityType: PropTypes.string.isRequired, // Type of activity (required string)
      activityName: PropTypes.string.isRequired, // Name of activity (required string)
      activityTime: PropTypes.string.isRequired, // Timestamp of activity (required string)
    })
  ).isRequired,
};

// Export the RecentActivity component as the default export
export default RecentActivity;
