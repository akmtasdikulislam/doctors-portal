/**
 * LoginFormOverlay Component
 *
 * This component renders an overlay for the login form, displaying different states
 * based on the authentication process.
 *
 * Props:
 * - isProcessing: Boolean indicating if the login process is ongoing
 * - authStatus: Object containing the authentication status and message
 * - setIsProcessing: Function to update the processing state
 *
 * The component uses React Router for navigation and LucideIcons for icons.
 * It conditionally renders a FormStateCard component to show:
 * - Processing state: When logging in
 * - Success state: When login is successful
 * - Error state: When login fails (not shown in the provided code snippet)
 *
 * The overlay visibility is controlled by the isProcessing prop and CSS classes.
 */

// ** React related imports **
import PropTypes from "prop-types"; // For type-checking component props

// ** React Router related imports **
import { Link, useLocation } from "react-router-dom"; // For navigation and accessing current location

// ** Icons imports **
import { CircleAlert, CircleCheck, RefreshCcw } from "lucide-react"; // Icons for error, success, and processing states in form overlay

// ** Component imports **
import FormStateCard from "../FormStateCard/FormStateCard"; // Renders different states of the form (processing, success, error)

const LoginFormOverlay = ({ isProcessing, authStatus, setIsProcessing }) => {
  // Get the current location object from React Router
  const location = useLocation();

  return (
    // Render the form overlay, showing or hiding based on the processing state
    <div className={`form-overlay ${isProcessing ? "d-block" : "d-none"}`}>
      {isProcessing && authStatus === null ? (
        // Show processing state when isProcessing is true and authStatus is null
        <FormStateCard type="processing">
          {/* Display rotating icon to indicate processing */}
          <RefreshCcw />
          {/* Show processing message */}
          <h6 className="mb-4">
            <span>Processing!</span> Logging in...
          </h6>
        </FormStateCard>
      ) : authStatus?.success ? (
        // Show success state when authStatus.success is true
        <FormStateCard type="success">
          {/* Display check circle icon to indicate success */}
          <CircleCheck />
          {/* Show success message */}
          <h6 className="mb-0">
            <span>{authStatus?.message}</span>
          </h6>
          {/* Display redirection message with loading animation */}
          <p className="fw-bold">
            Redirecting <span className="loading-dots"></span> to{" "}
            {/* Link to redirect the user after successful login */}
            <Link className="link-colored" to="/">
              <span>/{location.state?.from || "home"}</span>
            </Link>
          </p>
        </FormStateCard>
      ) : (
        // Show error state when authStatus.success is false
        <FormStateCard type="error">
          {/* Display exclamation circle icon to indicate error */}
          <CircleAlert />
          {/* Show error message */}
          <h6>
            <span>Error!</span> {authStatus?.message}
          </h6>
          {/* Button to retry login attempt */}
          <button
            className="btn btn-secondary py-1 px-3"
            onClick={() => setIsProcessing(false)}
          >
            Try Again
          </button>
        </FormStateCard>
      )}
    </div>
  );
};

// Define prop types for LoginFormOverlay component
LoginFormOverlay.propTypes = {
  // Indicates whether the login process is ongoing
  isProcessing: PropTypes.bool.isRequired,
  // Object containing authentication status information
  authStatus: PropTypes.shape({
    // Indicates whether the authentication was successful
    success: PropTypes.bool,
    // Contains any message related to the authentication process
    message: PropTypes.string,
  }),
  // Function to update the processing state
  setIsProcessing: PropTypes.func.isRequired,
};

// Export to allow other parts of the application to use the LoginFormOverlay component
export default LoginFormOverlay;
