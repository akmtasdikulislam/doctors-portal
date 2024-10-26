/*
 * DashboardHeader Component
 *
 * A React component that serves as the main header for the admin dashboard interface.
 * It provides navigation and user interaction features including:
 *
 * Key Features:
 * - Notification system with dropdown panel
 * - User profile section with dropdown panel
 * - Click-outside detection to close dropdowns
 * - Unread notification badge counter
 *
 * The component manages state for:
 * - Notification panel visibility
 * - Profile panel visibility
 * - List of notifications with read/unread status
 *
 * Uses React hooks (useState, useEffect, useRef) for state management
 * and component lifecycle handling. Implements responsive design using
 * Bootstrap classes for layout and positioning.
 */

// ** React related imports **
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react"; // Hooks for managing component lifecycle, refs and state management

// ** Icon imports **
import { Bell, Menu } from "lucide-react"; // Bell icon component used for notification trigger button

// ** Component imports **
import NotificationPanel from "../NotificationPanel/NotificationPanel "; // Component for displaying notifications dropdown panel
import ProfilePanel from "../ProfilePanel/ProfilePanel"; // Component for displaying user profile dropdown panel

const DashboardHeader = ({ toggleMobileSidebar }) => {
  // State management for dropdown panels
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfilePanelOpen, setIsProfilePanelOpen] = useState(false);

  // Refs for handling outside clicks
  const notificationPanelRef = useRef(null);
  const profilePanelRef = useRef(null);

  // Mock notifications data - can be replaced with API call
  const [notificationsList, setNotificationsList] = useState([
    {
      id: 1,
      title: "New Appointment",
      category: "appointment",
      message: "You have a new appointment scheduled for 10:00 AM.",
      time: "Just now",
      isRead: false,
    },
    {
      id: 2,
      title: "Payment Received",
      category: "payment",
      message: "Your payment of $500 has been received.",
      time: "2 minutes ago",
      isRead: false,
    },
    {
      id: 3,
      title: "New Message",
      category: "message",
      message: "You have a new message from John Doe.",
      time: "15 minutes ago",
      isRead: true,
    },
    {
      id: 4,
      title: "System Update",
      category: "system",
      message: "The system is undergoing maintenance. Please standby.",
      time: "1 hour ago",
      isRead: true,
    },
    {
      id: 5,
      title: "New Appointment",
      category: "appointment",
      message: "You have a new appointment scheduled for 10:00 AM.",
      time: "2 hours ago",
      isRead: true,
    },
    {
      id: 6,
      title: "Payment Received",
      category: "reminder",
      message: "Your payment of $500 has been received.",
      time: "3 hours ago",
      isRead: true,
    },
  ]);

  // User data object containing profile information
  const userData = {
    accessLevel: "Administrator Access Level",
    category: "admin",
    email: "john.doe@example.com",
    isAdmin: true,
    name: "Dr. John Doe",
    profilePhoto:
      "https://img.freepik.com/free-photo/attractive-woman-with-charming-smile_176532-10368.jpg?ga=GA1.1.1805791538.1723570349&semt=ais_hybrid",
    qualifications: {
      short: "BDS",
      full: "Bachelor of Dental Surgery",
    },
    speciality: "Dental Surgeon",
  };

  // Toggle handlers for dropdown panels
  const toggleNotificationPanel = () => {
    /*
    Toggles the visibility state of the notification panel dropdown when the notification bell icon is clicked.
    
    Task List:
    • Check current state of notification panel
    • Toggle between showing/hiding the notification panel
    • Update state to reflect new visibility status
    */

    setIsNotificationOpen(!isNotificationOpen); // Toggle notification panel visibility by inverting current state
  };

  const toggleProfilePanel = () => {
    /*
    Toggles the visibility state of the profile panel dropdown when the profile section is clicked.
    
    Task List:
    • Check current state of profile panel
    • Toggle between showing/hiding the profile panel
    • Update state to reflect new visibility status
    */

    setIsProfilePanelOpen(!isProfilePanelOpen); // Toggle profile panel visibility by inverting current state
  };

  // Handle clicks outside dropdown panels to close them
  useEffect(() => {
    /*
    Handles clicks outside of notification and profile panels to automatically close them when user clicks elsewhere on the page.
    This improves user experience by providing a natural way to dismiss dropdowns without explicitly clicking close buttons.
    
    Task List:
    • Check if click occurred outside notification panel and its trigger
    • Close notification panel if clicked outside
    • Check if click occurred outside profile panel and its trigger
    • Close profile panel if clicked outside
    • Set up event listener for click detection
    • Clean up event listener on component unmount
    */
    const handleClickOutside = (event) => {
      // Check if click is outside notification area and close panel if true
      if (
        // Check if notification panel reference exists and is mounted
        notificationPanelRef.current &&
        // Verify click is outside the notification panel content
        !notificationPanelRef.current.contains(event.target) &&
        // Ensure click is not on the notification bell icon or its children
        !event.target.closest(".notification-trigger")
      ) {
        setIsNotificationOpen(false); // Close notification panel when clicked outside
      }

      // Check if click is outside profile area and close panel if true
      if (
        // Check if profile panel reference exists and is mounted
        profilePanelRef.current &&
        // Verify click is outside the profile panel content
        !profilePanelRef.current.contains(event.target) &&
        // Ensure click is not on the profile trigger element or its children
        !event.target.closest(".profile-trigger")
      ) {
        setIsProfilePanelOpen(false); // Close profile panel when clicked outside
      }
    };

    // Attach click event listener to document for outside click detection
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up by removing event listener when component unmounts
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    // Main navigation container for dashboard header with flexbox layout for content alignment
    <nav
      id="dashboardHeader"
      className="p-sm-4 p-2 d-flex align-items-center justify-content-between"
    >
      {/* Left side container for dashboard title */}
      <div className="d-flex align-items gap-2">
        <button
          className="btn p-0 mx-2 d-md-none"
          onClick={toggleMobileSidebar}
        >
          <Menu size={24} />
        </button>
        {/* Dashboard heading with no margin for clean layout */}
        <h5 className="m-0">Admin Dashboard</h5>
      </div>

      {/* Container for right-aligned navigation items with spacing between elements */}
      <div className="d-flex align-items-center gap-sm-4 gap-2">
        {/* Container for notification bell and its dropdown panel with relative positioning */}
        <div className="notificationPanelRef" ref={notificationPanelRef}>
          {/* Button trigger for notification panel with click handler */}
          <button
            className="btn notification-trigger"
            onClick={toggleNotificationPanel}
          >
            {/* Bell icon component for notification trigger */}
            <Bell className="notification-trigger-icon" />
            {/* Conditional rendering of notification badge for unread notifications */}
            {notificationsList.filter((notification) => !notification.isRead)
              .length > 0 && (
              // Badge displaying count of unread notifications with styling
              <span className="badge bg-danger mt-3 position-absolute rounded-circle translate-middle">
                {
                  notificationsList.filter(
                    (notification) => !notification.isRead
                  ).length
                }
              </span>
            )}
          </button>
          {/* Conditional rendering of notification panel when isNotificationOpen is true */}
          {isNotificationOpen && (
            <NotificationPanel
              notificationsList={notificationsList}
              setNotificationsList={setNotificationsList}
            />
          )}
        </div>

        {/* Container for user profile section with relative positioning */}
        <div className="position-relative" ref={profilePanelRef}>
          {/* Clickable profile section that triggers profile panel */}
          <div
            className="profile-trigger d-flex align-items-center gap-2 me-2"
            onClick={toggleProfilePanel}
          >
            {/* Container for profile photo with column sizing */}
            <div className="col-4 profile-photo-container">
              {/* User profile image */}
              <img src={userData.profilePhoto} alt="" />
            </div>
            {/* Container for user details text with column sizing */}
            <div className="col-8 user-detail">
              {/* User name display with no margin */}
              <p className="m-0 name">{userData.name}</p>
              {/* User email display with secondary color and no margin */}
              <p className="m-0 small-text text-secondary">{userData.email}</p>
            </div>
          </div>
          {/* Conditional rendering of profile panel when isProfilePanelOpen is true */}
          {isProfilePanelOpen && <ProfilePanel userData={userData} />}
        </div>
      </div>
    </nav>
  );
};

DashboardHeader.propTypes = {
  // Defines required prop for toggling mobile sidebar visibility - must be a function and cannot be null/undefined
  toggleMobileSidebar: PropTypes.func.isRequired,
};
// Export the component for use in other parts of the application
export default DashboardHeader;
