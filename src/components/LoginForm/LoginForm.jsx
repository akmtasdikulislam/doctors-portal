/**
 * LoginForm Component
 *
 * This component renders a login form for user authentication.
 * It utilizes React Hook Form for form state management and validation.
 * The component handles both email/password login and Google authentication.
 *
 * Props:
 * - LoginProcessStatus: Status of the login process
 * - auth: Authentication object
 * - isLoginProcessing: Boolean to track if login is in progress
 * - setIsLoginProcessing: Function to update login processing state
 * - setLoginProcessStatus: Function to update login process status
 *
 * The component uses React Router for navigation and accessing location information.
 * It also includes error handling and display of form errors.
 */

/** React related imports **/
import PropTypes from "prop-types"; // For type checking of component props

/** React Hook Form related imports **/
import { useForm } from "react-hook-form"; // For handling form state and validation

/** React Router related imports **/
import { Link, useLocation, useNavigate } from "react-router-dom"; // For routing and navigation

/** Authentication function imports **/
import { handleContinueWithGoogle } from "../../functions/Authentication/handleContinueWithGoogle"; // Handles Google authentication
import { handleLogin } from "../../functions/Authentication/handleLogin"; // Handles email/password login

/** Component imports **/
import FormError from "../FormError/FormError"; // Displays form error messages
import LoginFormOverlay from "../LoginFormOverlay/LoginFormOverlay"; // Overlay component for login form

const LoginForm = ({
  LoginProcessStatus, // Status of the login process
  auth, // Authentication object
  isLoginProcessing, // Boolean to track if login is in progress
  setIsLoginProcessing, // Function to update login processing state
  setLoginProcessStatus, // Function to update login process status
}) => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to access current location object
  const {
    register, // Function to register input fields
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form errors
  } = useForm(); // Hook for managing form state and validation

  return (
    <section className="authentication-form-container-wrapper d-flex justify-content-center align-items-center w-100">
      <div className="authentication-form-container p-5 shadow rounded-3">
        <h4 className="text-center mb-4">Login</h4>
        <form
          onSubmit={handleSubmit((data) => {
            const { email, password } = data; // Destructure email and password from form data
            setIsLoginProcessing(true); // Set login processing state to true
            LoginProcessStatus && setLoginProcessStatus(null); // Reset sign up process status if it exists
            handleLogin(auth, email, password, setLoginProcessStatus); // Call login function with form data
          })}
        >
          <fieldset>
            <label className="text-secondary">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email address", // Validation: email is required
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Regex pattern for email validation
                  message: "Please enter a valid email address", // Error message for invalid email
                },
              })}
              placeholder="Enter your email address"
            />
            {errors.email && <FormError message={errors.email.message} />}{" "}
            {/* Display email error if present */}
          </fieldset>
          <fieldset className="my-3">
            <label className="text-secondary">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Please enter your password", // Validation: password is required
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long", // Validation: minimum password length
                },
              })}
              placeholder="Enter your password"
            />
            <a href="/" className="small-text mt-1">
              Forgot Password ?
            </a>
            {errors.password && <FormError message={errors.password.message} />}{" "}
            {/* Display password error if present */}
          </fieldset>
          <button type="submit" className="btn btn-secondary w-100 mt-1">
            Login
          </button>
        </form>
        <p className="text-center small-text mt-3">
          New to Doctors Portal ?{" "}
          <Link to="/sign-up" className="link-colored">
            Create an account
          </Link>
        </p>
        <p className="text-center alternative my-4">OR</p>
        <button
          className="btn btn-outline-dark w-100"
          onClick={() => handleContinueWithGoogle(auth, navigate, location)} // Handle Google sign-in
        >
          CONTINUE WITH GOOGLE
        </button>
        <LoginFormOverlay
          isProcessing={isLoginProcessing} // Pass login processing state to overlay
          authStatus={LoginProcessStatus} // Pass login status to overlay
          setIsProcessing={setIsLoginProcessing} // Pass function to update processing state to overlay
        />
      </div>
    </section>
  );
};

LoginForm.propTypes = {
  LoginProcessStatus: PropTypes.any, // Defines the prop type for login process status, allowing any value
  auth: PropTypes.object.isRequired, // Specifies that the auth prop must be an object and is required
  isLoginProcessing: PropTypes.bool.isRequired, // Indicates whether login is in progress, must be a boolean and is required
  setIsLoginProcessing: PropTypes.func.isRequired, // Function to update login processing state, must be a function and is required
  setLoginProcessStatus: PropTypes.func.isRequired, // Function to set login process status, must be a function and is required
};

export default LoginForm; // Exports the LoginForm component as the default export
