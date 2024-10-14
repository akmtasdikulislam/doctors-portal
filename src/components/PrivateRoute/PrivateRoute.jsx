/**
 * PrivateRoute Component
 *
 * This component is used to create protected routes in a React application.
 * It checks if a user is authenticated and controls access to certain pages.
 *
 * Key features:
 * - Uses React Router for navigation
 * - Accesses user authentication state from AppContext
 * - Redirects authenticated users to their intended destination or home
 * - Renders child components only for non-authenticated users
 * - Utilizes React hooks (useContext, useEffect, useNavigate, useLocation)
 *
 * Props:
 * - children: React node(s) to be rendered when the route is accessible
 *
 * Usage:
 * Wrap protected routes with this component to ensure only non-authenticated
 * users can access them. Authenticated users will be redirected.
 */

// ** React related imports **
import PropTypes from "prop-types"; // For type-checking component props
import { useContext, useEffect } from "react"; // Hooks for accessing context and side effects

// ** React Router related imports **
import { useLocation, useNavigate } from "react-router-dom"; // Hooks for accessing current location and programmatic navigation

// ** Context related imports **
import { AppContext } from "../../App"; // For accessing global application state (user information)

const PrivateRoute = ({ children }) => {
  // Extract user information from the global AppContext
  const { user } = useContext(AppContext);
  // Get the navigate function for programmatic navigation
  const navigate = useNavigate();
  // Get the current location object
  const location = useLocation();

  useEffect(() => {
    // If user is authenticated, redirect to the intended page or home
    if (user) {
      navigate(location.state?.from || "/", { replace: true });
    }
  }, [user, navigate, location]); // Re-run effect when user, navigate, or location changes

  // Render children if user is not authenticated, otherwise render nothing
  return user ? null : children;
};

// Define prop types for PrivateRoute component to ensure correct usage
PrivateRoute.propTypes = {
  // Specify that children prop is required and should be a valid React node
  children: PropTypes.node.isRequired,
};

// Export to allow other parts of the application to use the PrivateRoute component
export default PrivateRoute;
