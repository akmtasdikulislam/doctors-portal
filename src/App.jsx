// ** React and React Router related imports **
import { useEffect } from "react"; // Hook for performing side effects in functional components
import { Route, Routes } from "react-router-dom"; // Components for defining routes in the application

// ** Firebase related imports **
import { initializeApp } from "firebase/app"; // Function to initialize Firebase app
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Functions for Firebase authentication

// ** Stylesheet import **
import "./App.css"; // CSS styles for the App component

// ** Page component imports **
import Appointment from "./pages/Appointment/Appointment"; // Appointment page component
import Home from "./pages/Home/Home"; // Home page component
function App() {
  // Firebase configuration object
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Firebase API key for authentication and authorization
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, // Firebase Auth domain for handling authentication
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // Unique identifier for the Firebase project
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // Firebase Storage bucket for file storage
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // Sender ID for Firebase Cloud Messaging
    appId: import.meta.env.VITE_FIREBASE_APP_ID, // Unique identifier for the Firebase app
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig); // Initialize Firebase app with the provided configuration
  const auth = getAuth(app); // Get the Auth instance for the initialized Firebase app

  useEffect(() => {
    // Set up an authentication state listener when the component mounts
    onAuthStateChanged(auth, (user) => {
      // Log the user object to the console whenever the auth state changes
      console.log({ user });
      // Note: This is useful for debugging and monitoring auth state changes
    });
  }, [auth]); // Re-run this effect if the 'auth' object changes
  return (
    <>
      <Routes>
        {/* Define the route for the home page */}
        <Route exact path="/" element={<Home />} />
        {/* Render the Home component when the path is "/" */}
        <Route path="/appointment" element={<Appointment />} />
        {/* Render the Appointment component when the path is "/appointment" */}
      </Routes>
      {/* Routes component wraps all Route components for defining app navigation */}
    </>
  );
}

export default App;
