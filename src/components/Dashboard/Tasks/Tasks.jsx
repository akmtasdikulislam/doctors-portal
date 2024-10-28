/**
 * Tasks Component
 *
 * A React component that manages and displays a list of tasks with the following features:
 *
 * Features:
 * - Displays a list of tasks with checkboxes for completion status
 * - Shows an empty state when no tasks are present
 * - Allows adding new tasks through an input form
 * - Provides delete functionality for individual tasks
 *
 * Props:
 * - taskList: An array of task objects, each containing a required 'name' property
 *
 * Layout:
 * - Uses Bootstrap classes for responsive design and flexbox layout
 * - Includes a header, task list section, and new task input form
 * - Implements mobile-friendly design with responsive form layout
 *
 * Icons:
 * - Uses Lucide React icons for delete button (X) and empty state (ArchiveX)
 */

/** Icon imports */
import { ArchiveX, X } from "lucide-react"; // Icons used for empty state and task deletion buttons

/** Type checking imports */
import PropTypes from "prop-types"; // Used for runtime type checking of component props (taskList)
// Tasks component that displays a list of tasks and allows adding new ones
const Tasks = ({ taskList }) => {
  return (
    // Container for the entire tasks section with padding and flex layout
    <div className="tasks p-4 d-flex flex-column gap-4">
      {/* Header for the tasks section */}
      <h4 className="mb-4">Tasks</h4>

      {/* Container for the list of tasks with flex growth */}
      <div className="tasks-list flex-grow-1">
        {/* Conditional rendering based on whether tasks exist */}
        {taskList.length > 0 ? (
          // Map through tasks array to render each task
          taskList.map((task, index) => (
            // Individual task item container with flex layout
            <div
              key={index}
              className="tasks-list-item d-flex align-items-center justify-content-between"
            >
              {/* Left side of task item with checkbox and task name */}
              <div className="tasks-list-item-content d-flex align-items-center gap-3 mb-2">
                {/* Checkbox for task completion status */}
                <input type="checkbox" className="task-completion-checkbox" />
                {/* Task name display */}
                <p className="m-0 task-name">{task.name}</p>
              </div>
              {/* Delete task button using X icon */}
              <X className="tasks-list-item-icon" />
            </div>
          ))
        ) : (
          // Empty state display when no tasks exist
          <div className="empty-container d-flex flex-column align-items-center justify-content-center mx-auto text-secondary gap-2">
            {/* Empty state icon */}
            <ArchiveX strokeWidth={1.25} className="empty-icon" />
            {/* Empty state message */}
            <h5 className="m-0 fw-medium">No tasks yet</h5>
          </div>
        )}
      </div>

      {/* Form section for adding new tasks */}
      <div className="add-new-task-item d-flex flex-sm-row flex-column  justify-content-between gap-3">
        {/* Input field for new task name */}
        <input
          type="text"
          className="add-new-task-item-input flex-grow-1"
          placeholder="Add new task"
        />
        {/* Button to submit new task */}
        <button className="btn btn-secondary add-new-task-btn">
          Add New Task
        </button>
      </div>
    </div>
  );
};

// PropTypes definition for type checking
Tasks.propTypes = {
  // Requires an array of task objects with name property
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Export the component for use in other parts of the application
export default Tasks;
