/**
 * FormError Component
 *
 * This component displays an error message for form fields.
 * It takes an optional errorMessage prop and renders it within a styled container.
 *
 * Features:
 * - Displays a bullet point symbol for visual emphasis
 * - Uses a default message if no errorMessage is provided
 * - Applies consistent styling for error messages
 * - Implements prop type checking for the errorMessage prop
 *
 * Usage:
 * <FormError errorMessage="Custom error message" />
 *
 * If no errorMessage is provided, it will display "This field is required".
 */

/** React related imports */
import PropTypes from "prop-types"; // Used for type-checking the component's props

// Define the FormError component that takes an errorMessage prop
const FormError = ({ errorMessage }) => {
  return (
    // Container div for the error message with styling classes
    <div className="form-error p-2 ps-3 rounded-1 d-flex flex-row align-items-center gap-2">
      {/* Bullet point symbol for visual emphasis */}
      <span className="bullet-symbol">•</span>
      {/* Paragraph element to display the error message */}
      <p className="form-error-message small-text">
        {/* Display the provided errorMessage or a default message if not provided */}
        {errorMessage || "This field is required"}
      </p>
    </div>
  );
};

// Define prop types for type checking
FormError.propTypes = {
  // Define the errorMessage prop as a string
  errorMessage: PropTypes.string,
};

// Export the FormError component as the default export
export default FormError;
