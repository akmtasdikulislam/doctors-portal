/**
 * Login Component
 *
 * This component handles the login functionality for the Doctors Portal application.
 * It utilizes React hooks and context for state management and navigation.
 *
 * Key features:
 * - Uses AppContext for global state management
 * - Implements React Router for navigation
 * - Manages login process state (isLoginProcessing, LoginProcessStatus)
 * - Sets document title for the login page
 * - Includes NavBar and LoginForm components
 * - Handles redirection after successful login
 * - Conditionally renders login page or redirects based on user state
 */

// ** React related imports **
import { useContext, useEffect, useState } from "react"; // Hooks for managing state and side effects
// ** React Router related imports **
import { useLocation, useNavigate } from "react-router-dom"; // Hooks for handling routing and navigation

// ** Context imports **
import { AppContext } from "../../App"; // Global context for managing application state

// ** Component imports **
import LoginForm from "../../components/LoginForm/LoginForm"; // Component for rendering the login form
import NavBar from "../../components/NavBar/NavBar"; // Component for rendering the navigation bar
import NotFound from "../NotFound/NotFound"; // Component for rendering 404 or unavailable page

// Define the Login component as a functional component
const Login = () => {
  // Destructure user and auth from the global AppContext
  const { user, auth } = useContext(AppContext);
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();
  // Hook to access the current location object
  const location = useLocation();
  // State to track if login process is ongoing
  const [isLoginProcessing, setIsLoginProcessing] = useState(false);
  // State to store the status of the login process
  const [LoginProcessStatus, setLoginProcessStatus] = useState(null);

  // Set the document title for the Login page
  document.title = "Login | Doctors Portal";

  // Effect hook to handle redirection after successful login
  useEffect(() => {
    // Check if login was successful
    if (LoginProcessStatus?.success) {
      // Set a timer to redirect the user after a delay
      const redirectTimer = setTimeout(() => {
        // Navigate to the previous page or home, replacing the current history entry
        navigate(location.state?.from || "/", { replace: true });
      }, 2500); // Redirect after 2.5 seconds

      // Cleanup function to clear the timeout if component unmounts
      return () => clearTimeout(redirectTimer);
    }
  }, [LoginProcessStatus?.success, location.state?.from, navigate]);

  // Conditional rendering based on user state and login process
  return !user || isLoginProcessing ? (
    // Render login page if user is not logged in or login is processing
    <main id="login">
      <NavBar />
      <LoginForm
        // Pass the current login process status to the form
        LoginProcessStatus={LoginProcessStatus}
        // Provide authentication context to the form
        auth={auth}
        // Indicate whether the login process is currently ongoing
        isLoginProcessing={isLoginProcessing}
        // Function to update the login processing state
        setIsLoginProcessing={setIsLoginProcessing}
        // Function to update the login process status
        setLoginProcessStatus={setLoginProcessStatus}
      />
    </main>
  ) : (
    // Render NotFound component if user is already logged in
    <NotFound pageType="not-available" />
  );
};

// Export to allow other parts of the application to use the Login component
export default Login;
