/*
 * NavBar Component
 *
 * This component represents the navigation bar of the application.
 * It includes the following features:
 * - Displays the app logo and brand
 * - Provides navigation links to different pages
 * - Implements responsive design with a collapsible menu for mobile views
 * - Utilizes React Router for navigation
 * - Accesses authentication and user data from AppContext
 * - Includes a sign-out functionality
 *
 * The component uses Bootstrap classes for styling and layout.
 * It dynamically renders different navigation options based on the user's authentication status.
 */

// ** React related imports **
import { useContext } from "react"; // Hook to access context values

// ** React Router related imports **
import { Link, NavLink } from "react-router-dom"; // Components for navigation

// ** Context imports **
import { AppContext } from "../../App"; // Global app context for auth and user data

// ** Asset imports **
import logo from "../../assets/logo/logo-main.png"; // Logo image for the navbar brand

// ** Utility function imports **
import { handleSignOut } from "../../functions/Authentication/handleSignOut"; // Function to handle user sign out

const NavBar = () => {
  const { auth, user } = useContext(AppContext); // Destructure auth and user from AppContext for authentication state and user information
  return (
    // Main navigation container with Bootstrap classes
    <nav className="navbar navbar-expand-lg">
      {/* Fluid container for full-width navbar */}
      <div className="container-fluid">
        {/* Brand logo link to home page */}
        <Link className="navbar-brand ms-sm-5" to="/">
          {/* Logo image */}
          <img src={logo} alt="Doctors Portal" className="logo" />
        </Link>
        {/* Hamburger button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Icon for hamburger menu */}
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navbar content */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* Navigation links container */}
          <div className="navbar-nav ms-auto">
            {/* Home page link */}
            <NavLink
              className="nav-link me-2 me-xl-5"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            {/* About page link */}
            <NavLink className="nav-link me-2 me-xl-5" to="/about">
              About
            </NavLink>
            {/* Appointment page link */}
            <NavLink className="nav-link me-2 me-xl-5" to="/appointment">
              Appointment
            </NavLink>
            {/* Reviews page link */}
            <NavLink className="nav-link me-2 me-xl-5" to="/reviews">
              Reviews
            </NavLink>
            {/* Contact page link */}
            <NavLink className="nav-link me-2 me-xl-5" to="/contact">
              Contact Us
            </NavLink>
            {!user.token ? (
              // Conditional rendering: If user is not logged in, show login link
              <NavLink className="nav-link me-2 me-xl-5" to="/login">
                {/* Text for the login link */}
                Login
              </NavLink>
            ) : (
              // If user is logged in, show logout button
              <button
                // Event handler for signing out the user
                onClick={() => handleSignOut(auth)}
                // Bootstrap classes for styling the button
                className="btn btn-danger me-5"
              >
                {/* Text for the logout button */}
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export NavBar component for use in other parts of the application
export default NavBar;
