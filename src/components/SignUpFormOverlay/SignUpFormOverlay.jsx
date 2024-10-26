/**
 * SignUpFormOverlay Component
 *
 * This component renders an overlay for the sign-up form, displaying different states:
 * - Processing: Shows when the form is being submitted
 * - Success: Displays when the sign-up is successful
 * - Error: Shows if there's an error during sign-up
 *
 * It uses Lucide icons to visually represent each state and the FormStateCard
 * component to structure the content. The component also handles navigation to the
 * login page after a successful sign-up.
 *
 * Props:
 * - isProcessing: Boolean to indicate if the form is currently being processed
 * - authStatus: Object containing the authentication status and messages
 * - setIsProcessing: Function to update the processing state
 */

// ** React related imports **
import PropTypes from "prop-types"; // For type-checking component props

// ** React Router related imports **
import { useNavigate } from "react-router-dom"; // For programmatic navigation after successful signup

// ** Icon related imports **
import { CircleAlert, CircleCheck, RefreshCcw } from "lucide-react"; // Icons for error, success, and processing states in the form overlay

// ** Component imports **
import FormStateCard from "../FormStateCard/FormStateCard"; // Renders different states of the form (processing, success, error)

const SignUpFormOverlay = ({ isProcessing, authStatus, setIsProcessing }) => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  return (
    // Conditional rendering of the overlay based on processing state
    <div className={`form-overlay ${isProcessing ? "d-block" : "d-none"}`}>
      {isProcessing && authStatus === null ? (
        // Render processing state when isProcessing is true and authStatus is null
        <FormStateCard type="processing">
          {/* Rotating icon to indicate processing */}
          <RefreshCcw />
          <h6>
            {/* Processing message */}
            <span>Processing!</span> Creating your account.
          </h6>
        </FormStateCard>
      ) : authStatus?.success ? (
        // Render success state when authStatus.success is true
        <FormStateCard type="success">
          {/* Check circle icon to indicate success */}
          <CircleCheck />
          <h6>
            {/* Success message */}
            <span>Success!</span> {authStatus?.message}
          </h6>
          {/* Button to navigate to login page after successful signup */}
          <button
            className="btn btn-secondary py-1 px-3"
            onClick={() => navigate("/login")}
          >
            Login to your account
          </button>
        </FormStateCard>
      ) : (
        // Render error state for all other cases
        <FormStateCard type="error">
          {/* Exclamation circle icon to indicate error */}
          <CircleAlert />
          <h6>
            {/* Error message */}
            <span>Error!</span> {authStatus?.message}
          </h6>
          {/* Button to retry signup process */}
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

// Define prop types for SignUpFormOverlay component
SignUpFormOverlay.propTypes = {
  // Indicates whether the form is currently processing
  isProcessing: PropTypes.bool.isRequired,
  // Contains authentication status information
  authStatus: PropTypes.object,
  // Function to update the processing state
  setIsProcessing: PropTypes.func.isRequired,
};

// Export the SignUpFormOverlay component as the default export
export default SignUpFormOverlay;
