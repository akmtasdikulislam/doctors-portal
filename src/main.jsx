/*
# Overview - main.jsx

This file serves as the entry point for a React application. It imports necessary dependencies from React and React DOM for rendering, as well as the BrowserRouter for handling routing within the app. The main App component is also imported.
The code sets up the application to run in StrictMode and creates a root element for rendering the App component wrapped in BrowserRouter. This structure provides a solid foundation for a React-based single-page application with routing capabilities.
*/

// ** React related imports **
import { StrictMode } from "react"; // Used to enable strict mode for the entire app
import { createRoot } from "react-dom/client"; // Used to create a root for rendering React components

// ** Routing related imports **
import { BrowserRouter } from "react-router-dom"; // Provides routing functionality for the app

// ** Component imports **
import App from "./App.jsx"; // The main App component that serves as the entry point for the application

// Create a root for rendering React components and render the app
createRoot(document.getElementById("root")).render(
  // Enable strict mode for the entire app to catch potential issues
  <StrictMode>
    {/* Wrap the app in BrowserRouter to enable routing functionality */}
    <BrowserRouter>
      {/* Render the main App component, which serves as the entry point */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
