/**
 * SignUpForm Component
 *
 * This component renders a sign-up form for user registration.
 * It utilizes React Hook Form for form handling and validation.
 * The component manages sign-up processing state and status.
 * It includes functionality for both email/password registration
 * and Google sign-in.
 *
 * Key features:
 * - Form fields for name, email, and password
 * - Form validation using react-hook-form
 * - Sign-up process status tracking
 * - Integration with Firebase authentication
 * - Google sign-in option
 * - Navigation to other routes (e.g., sign-in page)
 * - Overlay display during sign-up process
 *
 * The component uses various hooks and context for state management,
 * routing, and accessing global app context.
 */

// ** React related imports **
import { useContext, useState } from "react"; // For managing state and context

// ** React Hook Form related imports **
import { useForm } from "react-hook-form"; // For handling form state and validation

// ** React Router related imports **
import { Link, useLocation, useNavigate } from "react-router-dom"; // For navigation and routing

// ** Context imports **
import { AppContext } from "../../App"; // For accessing global app context

// ** Authentication function imports **
import { handleContinueWithGoogle } from "../../functions/Authentication/handleContinueWithGoogle"; // For handling Google sign-in
import { handleSignUp } from "../../functions/Authentication/handleSignUp"; // For handling user registration

// ** Component imports **
import FormError from "../FormError/FormError"; // For displaying form validation errors
import SignUpFormOverlay from "../SignUpFormOverlay/SignUpFormOverlay"; // For displaying overlay during sign-up process

const SignUpForm = () => {
  const { auth } = useContext(AppContext); // Get the auth object from the AppContext
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to access the current location object
  const [isSignUpProcessing, setIsSignUpProcessing] = useState(false); // State to track if sign up is in progress
  const [signUpProcessStatus, setSignUpProcessStatus] = useState(null); // State to store the sign up process status
  const {
    register, // Function to register input fields for validation
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form validation errors
  } = useForm(); // Initialize react-hook-form

  return (
    <section className="authentication-form-container-wrapper d-flex justify-content-center align-items-center w-100">
      <div className="authentication-form-container p-5 shadow rounded-3">
        <h4 className="text-center mb-4">Sign Up</h4>
        <form
          onSubmit={handleSubmit((data) => {
            const { name, email, password } = data; // Destructure form data
            setIsSignUpProcessing(true); // Set sign up processing state to true
            signUpProcessStatus && setSignUpProcessStatus(null); // Reset sign up process status if it exists
            handleSignUp(auth, email, name, password, setSignUpProcessStatus); // Call sign up function with form data
          })}
        >
          <fieldset>
            <label className="text-secondary">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Please enter your name", // Validation rule for name field
              })}
              placeholder="Enter your name"
            />
            {errors.name && <FormError errorMessage={errors.name.message} />}{" "}
            {/* Display name field error if any */}
          </fieldset>
          <fieldset className="mt-3">
            <label className="text-secondary">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email address", // Validation rule for email field
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Regex pattern for email validation
                  message: "Please enter a valid email address",
                },
              })}
              placeholder="Enter your email address"
            />
            {errors.email && <FormError errorMessage={errors.email.message} />}{" "}
            {/* Display email field error if any */}
          </fieldset>
          <fieldset className="my-3">
            <label className="text-secondary">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Please enter your password", // Validation rule for password field
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <FormError errorMessage={errors.password.message} />
            )}{" "}
            {/* Display password field error if any */}
          </fieldset>
          <button type="submit" className="btn btn-secondary w-100 mt-1">
            Sign up
          </button>
        </form>
        <p className="text-center small-text mt-3">
          Already have an account ?{" "}
          <Link to="/login" className="link-colored">
            Login
          </Link>
        </p>
        <p className="text-center alternative my-4">OR</p>
        <button
          className="btn btn-outline-dark w-100"
          onClick={() => handleContinueWithGoogle(auth, navigate, location)} // Handle Google sign in
        >
          CONTINUE WITH GOOGLE
        </button>
        <SignUpFormOverlay
          isProcessing={isSignUpProcessing} // Pass sign up processing state to overlay
          authStatus={signUpProcessStatus} // Pass sign up process status to overlay
          setIsProcessing={setIsSignUpProcessing} // Pass function to update processing state to overlay
        />
      </div>
    </section>
  );
};
// Export to allow other parts of the application to use the SignUpForm component
export default SignUpForm;
