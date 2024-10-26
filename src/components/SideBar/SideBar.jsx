/*
 * SideBar Component
 *
 * A responsive sidebar navigation component for a medical dashboard application.
 *
 * Features:
 * - Responsive design that adapts to mobile, tablet, and desktop views
 * - Collapsible sidebar functionality for better space management
 * - Mobile-friendly with toggle functionality
 * - Navigation links to different sections of the dashboard
 * - Auto-collapse feature for tablet view (576px - 1024px)
 *
 * Props:
 * - isMobileSidebarOpen: Controls mobile sidebar visibility
 * - toggleMobileSidebar: Function to toggle mobile sidebar state
 *
 * Navigation Sections:
 * - Dashboard
 * - Appointments
 * - Patients
 * - Doctors
 * - Payments
 * - Settings
 */

// ** React related Imports **
import PropTypes from "prop-types"; // Runtime type checking for React props

// ** React Router related Imports **
import { useEffect, useState } from "react"; // Hooks for managing component lifecycle and state
import { NavLink } from "react-router-dom"; // Component for navigation with active state styling

// ** Icon Imports **
import {
  Calendar, // Used for appointments section navigation icon
  CreditCard, // Used for payments section navigation icon
  Home, // Used for dashboard section navigation icon
  PanelLeftClose, // Used for sidebar collapse button icon
  Settings, // Used for settings section navigation icon
  Stethoscope, // Used for doctors section navigation icon
  Users, // Used for patients section navigation icon
  X, // Used for mobile sidebar close button icon
} from "lucide-react";

// ** Asset Imports **
import logo from "../../assets/logo/logo.png"; // Logo image used in sidebar header

const SideBar = ({ isMobileSidebarOpen, toggleMobileSidebar }) => {
  // State management for sidebar collapse state
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Effect hook to handle responsive sidebar collapse based on window width
  useEffect(() => {
    // Function to handle window resize events and update sidebar state
    const handleResize = () => {
      /* 
      A utility function that manages the sidebar's collapse state based on the window width. 
      It ensures responsive behavior by automatically collapsing the sidebar for tablet views 
      while keeping it expanded for mobile and desktop views.

      Task List:
      • Check current window width
      • Determine if width falls within tablet view range
      • Set collapse state based on screen size
      • Update sidebar UI accordingly
      */

      // Get current window width and compare with tablet breakpoints (576px - 1024px) to determine responsive behavior
      if (window.innerWidth < 1024 && window.innerWidth > 576) {
        // Check if viewport width is within tablet range (between 576px and 1024px)
        // Collapse sidebar for tablet view to optimize screen space and improve user experience
        setIsCollapsed(true); // Update state to collapse sidebar when in tablet view for better layout
      } else {
        // Keep sidebar expanded for better visibility and accessibility on mobile (<576px) and desktop (>1024px) views
        setIsCollapsed(false); // Update state to expand sidebar when not in tablet view for optimal display
      }
    };

    // Run initial resize check when component mounts
    handleResize();

    // Add resize event listener to window for responsive updates
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  // Combine mobile and collapse classes for dynamic sidebar styling
  const sidebarClasses = ` ${
    // Conditionally apply 'mobile-open' class when mobile sidebar is open, otherwise check if sidebar is collapsed
    isMobileSidebarOpen ? "mobile-open" : isCollapsed ? "collapsed" : ""
  }`;

  return (
    <aside id="sidebar" className={sidebarClasses}>
      {/* Main sidebar container with dynamic classes for mobile/collapse states */}
      <div className="p-3 sidebar-header">
        {/* Header section of sidebar with padding and styling */}
        <img src={logo} alt="" />
        {/* Logo image display in the sidebar header */}
        <span className="title m-0">Doctors Portal</span>
        {/* Application title text */}
        {isMobileSidebarOpen && (
          <X className="ms-1" onClick={toggleMobileSidebar} />
        )}
        {/* Close button for mobile view, only shows when sidebar is open */}
      </div>
      <hr className="m-0" /> {/* Horizontal line separator with no margin */}
      <div className="sidebar-links-wrapper p-3 d-flex flex-column justify-content-between">
        {/* Container for navigation links with flex layout */}
        <div className="sidebar-links">
          {/* Group container for navigation links */}
          <NavLink to="/dashboard" className="sidebar-link">
            {/* Dashboard navigation link */}
            <Home className="sidebar-link-icon" />
            {/* Home icon for dashboard */}
            <span className="sidebar-link-text">Dashboard</span>
            {/* Dashboard link text */}
          </NavLink>
          <NavLink to="/dashboard/appointments" className="sidebar-link">
            {/* Appointments navigation link */}
            <Calendar className="sidebar-link-icon" />
            {/* Calendar icon for appointments */}
            <span className="sidebar-link-text">Appointments</span>
            {/* Appointments link text */}
          </NavLink>
          <NavLink to="/dashboard/patients" className="sidebar-link">
            {/* Patients navigation link */}
            <Users className="sidebar-link-icon" />
            {/* Users icon for patients */}
            <span className="sidebar-link-text">Patients</span>
            {/* Patients link text */}
          </NavLink>
          <NavLink to="/dashboard/doctors" className="sidebar-link">
            {/* Doctors navigation link */}
            <Stethoscope className="sidebar-link-icon" />
            {/* Stethoscope icon for doctors */}
            <span className="sidebar-link-text">Doctors</span>
            {/* Doctors link text */}
          </NavLink>
          <NavLink to="/dashboard/payments" className="sidebar-link">
            {/* Payments navigation link */}
            <CreditCard className="sidebar-link-icon" />
            {/* Credit card icon for payments */}
            <span className="sidebar-link-text">Payments</span>
            {/* Payments link text */}
          </NavLink>
          <NavLink to="/dashboard/settings" className="sidebar-link">
            {/* Settings navigation link */}
            <Settings className="sidebar-link-icon" /> {/* Settings icon */}
            <span className="sidebar-link-text">Settings</span>
            {/* Settings link text */}
          </NavLink>
        </div>
        <button
          className="btn sidebar-link sidebar-collapse-trigger m-0 d-sm-flex d-none"
          // Collapse button, hidden on mobile
          onClick={() => setIsCollapsed(!isCollapsed)}
          // Toggle sidebar collapse state
          title="Collapse Sidebar"
          // Tooltip text for accessibility
        >
          <PanelLeftClose className="sidebar-link-icon" /> {/* Collapse icon */}
          <span className="sidebar-link-text">Collaspe Sidebar</span>
          {/* Collapse button text */}
        </button>
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool.isRequired, // Required boolean prop to control mobile sidebar's open/closed state
  toggleMobileSidebar: PropTypes.func.isRequired, // Required function prop to handle toggling mobile sidebar visibility
};

// Export the component for use in other parts of the application
export default SideBar;
