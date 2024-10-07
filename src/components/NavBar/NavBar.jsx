/*
 * NavBar Component
 *
 * This component represents the navigation bar for the application.
 * It uses React Router for navigation and Bootstrap for styling.
 *
 * Key features:
 * - Responsive design with collapsible menu for mobile views
 * - Brand logo linking to the home page
 * - Navigation links to Home, About, Appointment, and Reviews pages
 * - Uses NavLink for active link styling
 *
 * The component is designed to be placed at the top of the application
 * to provide consistent navigation across all pages.
 */

/** Asset imports */
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-main.png"; // Import logo image for the navbar brand

const NavBar = () => {
  return (
    // Main navigation container with Bootstrap classes
    <nav className="navbar navbar-expand-lg">
      {/* Fluid container for full-width navbar */}
      <div className="container-fluid">
        {/* Brand logo link to home page */}
        <Link className="navbar-brand ms-5" to="/">
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
            <NavLink className="nav-link me-5" aria-current="page" to="/">
              Home
            </NavLink>
            {/* About page link */}
            <NavLink className="nav-link me-5" to="/about">
              About
            </NavLink>
            {/* Appointment page link */}
            <NavLink className="nav-link me-5" to="/appointment">
              Appointment
            </NavLink>
            {/* Reviews page link */}
            <NavLink className="nav-link me-5" to="/reviews">
              Reviews
            </NavLink>
            {/* Contact page link */}
            <NavLink className="nav-link me-5" to="/contact">
              Contact Us
            </NavLink>
            {/* Login page link */}
            <NavLink className="nav-link me-5" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export NavBar component for use in other parts of the application
export default NavBar;
