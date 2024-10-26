/*
 * NotificationPanel Component
 *
 * A React component that displays a list of notifications with various categories and interactive features.
 *
 * Key Features:
 * - Displays notifications with different icons based on category (appointment, payment, message, system, reminder)
 * - Allows marking individual notifications as read by clicking on them
 * - Provides a "Mark all as read" button to mark all notifications as read at once
 * - Shows notification details including title, time, and message
 * - Supports visual indication of unread notifications
 * - Uses Bootstrap classes for styling and responsive layout
 *
 * Props:
 * - notificationsList: Array of notification objects containing notification data
 * - setNotificationsList: Function to update the notifications list state
 *
 * Each notification object should contain:
 * - id: Unique identifier
 * - category: Type of notification (appointment, payment, message, system, reminder)
 * - title: Notification heading
 * - message: Detailed notification content
 * - time: Timestamp of the notification
 * - isRead: Boolean indicating if notification has been read
 */

/** React related imports */
import PropTypes from "prop-types"; // For type checking component props

/** Icon imports from lucide-react */
import {
  Calendar, // Used for appointment category notifications
  CheckCheck, // Used for "Mark all as read" button
  Clock, // Used for reminder category notifications
  CreditCard, // Used for payment category notifications
  MessageSquare, // Used for message category notifications
  Settings, // Used for system category notifications
} from "lucide-react";

const NotificationPanel = ({ notificationsList, setNotificationsList }) => {
  // Function to mark all notifications as read when "Mark all as read" button is clicked
  const markAllNotificationsAsRead = () => {
    /*
    This function is responsible for marking all notifications as read when the user clicks the "Mark all as read" button. It updates the notifications list state by setting the isRead property to true for all notifications.

    Task List:
    • Access the current notifications list state
    • Map through each notification in the list
    • Create a new object for each notification with isRead set to true
    • Update the notifications list state with modified notifications
    */

    // Access and update the notifications list using the state setter function
    setNotificationsList((prevNotifications) =>
      // Iterate through each notification in the previous notifications list
      prevNotifications.map((notification) => ({
        // Spread existing notification properties to maintain other data
        ...notification,
        // Set isRead property to true for the current notification
        isRead: true,
      }))
    );
  };

  // Function to mark individual notification as read when clicked
  const handleNotificationItemClick = (notificationId) => {
    /*
    This function is responsible for marking a specific notification as read when the user clicks on it. It updates the notifications list state by finding the notification with the matching ID and setting its isRead property to true.

    Task List:
    • Access the current notifications list state
    • Find the notification with the matching ID
    • Create a new object for the matched notification with isRead set to true
    • Keep other notifications unchanged
    • Update the notifications list state with modified notifications
    */

    // Update notifications list by finding matching notification ID and setting its isRead to true
    setNotificationsList((prevNotifications) =>
      // Iterate through each notification in the previous notifications list
      prevNotifications.map((notification) =>
        // Check if current notification ID matches the clicked notification ID
        notification.id === notificationId
          ? // If matched, create new object with isRead set to true
            { ...notification, isRead: true }
          : // If not matched, return notification unchanged
            notification
      )
    );
  };
  return (
    // Main notification panel container with shadow and absolute positioning
    <div className="notification-panel shadow-sm position-absolute">
      {/* Header section containing title and "Mark all as read" button */}
      <div className="notification-panel-header border-bottom d-flex justify-content-between p-2 ">
        {/* Notifications title */}
        <p className="fw-bold ms-2 m-0">Notifications</p>
        {/* Conditional rendering of "Mark all as read" button based on unread notifications */}
        {notificationsList.filter((notification) => !notification.isRead)
          .length > 0 ? (
          // Active button when there are unread notifications
          <button
            className="btn btn-link m-0 me-2 p-0 small-text text-decoration-none"
            onClick={markAllNotificationsAsRead}
            title="Mark all notifications as read"
          >
            <CheckCheck className="notification-icon" /> Mark all as read
          </button>
        ) : (
          // Disabled button when all notifications are read
          <button
            className="btn btn-link m-0 me-2 p-0 small-text text-decoration-none"
            disabled
            title="No unread notifications"
          >
            <CheckCheck className="notification-icon" /> Mark all as read
          </button>
        )}
      </div>
      {/* Content section containing list of notifications */}
      <div className="notification-panel-content p-2">
        {/* Map through notifications array to render individual notification items */}
        {notificationsList.map((notification) => (
          // Individual notification item container with conditional unread styling
          <div
            key={notification.id}
            className={`notification-item rounded-2 ${
              !notification.isRead ? "unread" : ""
            }`}
            onClick={() => handleNotificationItemClick(notification.id)}
            title={`${!notification.isRead ? "Unread notification: " : ""}${
              notification.title
            }`}
          >
            {/* Title section containing icon and notification details */}
            <div className="notification-title align-items-center d-flex row">
              {/* Icon column */}
              <div className="col-1">
                {/* Conditional rendering of different icons based on notification category */}
                {notification.category === "appointment" ? (
                  <Calendar
                    className="notification-icon appointment-icon"
                    title="Appointment notification"
                  />
                ) : notification.category === "payment" ? (
                  <CreditCard
                    className="notification-icon payment-icon"
                    title="Payment notification"
                  />
                ) : notification.category === "message" ? (
                  <MessageSquare
                    className="notification-icon message-icon"
                    title="Message notification"
                  />
                ) : notification.category === "system" ? (
                  <Settings
                    className="notification-icon system-icon"
                    title="System notification"
                  />
                ) : notification.category === "reminder" ? (
                  <Clock
                    className="notification-icon reminder-icon"
                    title="Reminder notification"
                  />
                ) : (
                  ""
                )}
              </div>

              {/* Notification title and time section */}
              <div className="notification-meta col-11 d-flex align-items-center justify-content-between">
                {/* Notification title */}
                <p className="notification-title m-0 fw-bold">
                  {notification.title}
                </p>
                {/* Notification time */}
                <p
                  className="m-0 caption-text text-secondary"
                  title={`Notification time: ${notification.time}`}
                >
                  {notification.time}
                </p>
              </div>
            </div>
            {/* Notification message section */}
            <div className="row">
              {/* Empty column for alignment with icon above */}
              <div className="col-1"></div>
              {/* Notification message content */}
              <div className="col-11">
                <p className="m-0 mt-1 small-text text-secondary">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// Define prop types for type checking and documentation of component props
NotificationPanel.propTypes = {
  // Array prop containing the list of notifications that must be provided
  notificationsList: PropTypes.array.isRequired,
  // Function prop for updating notifications list that must be provided
  setNotificationsList: PropTypes.func.isRequired,
};

// Export the component for use in other parts of the application
export default NotificationPanel;
