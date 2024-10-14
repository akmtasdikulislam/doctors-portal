/*
 * SignUp Component
 *
 * This component handles the sign-up page of the Doctors Portal application.
 * It uses the AppContext to access user data and conditionally renders content
 * based on the user's authentication status.
 *
 * Key features:
 * - Renders a sign-up form for new or logged-out users
 * - Displays a "not available" page for already authenticated users
 * - Includes a navigation bar component
 * - Sets the document title for the Sign Up page
 *
 * The component leverages React hooks (useContext) and conditional rendering
 * to provide a seamless user experience during the sign-up process.
 */

// ** React related imports **
import { useContext } from "react"; // Hook to access context values
// ** React Router related imports **

// ** Context imports **
import { AppContext } from "../../App"; // App-wide context for user data

// ** Component imports **
import NavBar from "../../components/NavBar/NavBar"; // Navigation bar component
import SignUpForm from "../../components/SignUpForm/SignUpForm"; // Sign-up form component
import NotFound from "../NotFound/NotFound";

const SignUp = () => {
  // Extract user data from the AppContext using useContext hook
  const { user } = useContext(AppContext);

  // Set the document title for the Sign Up page
  document.title = "Sign up | Doctors Portal";

  // Conditional rendering based on user authentication status
  return !user ||
    user.metadata.creationTime === user.metadata.lastSignInTime ? (
    // Render sign-up form for new or logged-out users
    <main id="sign-up">
      {/* Include the navigation bar component */}
      <NavBar />
      {/* Include the sign-up form component */}
      <SignUpForm />
    </main>
  ) : (
    <NotFound pageType={"not-available"} /> // Render unavailable page for authenticated users
  );
};

// Export to allow other parts of the application to use the SignUp component
export default SignUp;
