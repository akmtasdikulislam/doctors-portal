/** React related imports */
import { Route, Routes } from "react-router-dom"; // Used for defining routes and navigation in the app

/** Styles */
import "./App.css"; // Imports global styles for the app

/** Page components */
import Home from "./pages/Home/Home"; // Imports the Home component to be rendered for the root route

function App() {
  return (
    <>
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Render the Home component when the path is "/" */}
      </Routes>
      {/* Routes component wraps all Route components for defining app navigation */}
    </>
  );
}

export default App;
