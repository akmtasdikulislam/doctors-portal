/** React related imports */
import { Route, Routes } from "react-router-dom"; // Used for defining routes and navigation in the app

/** Styles */
import "./App.css"; // Imports global styles for the app

/** Page components */
import Appointment from "./pages/Appointment/Appointment"; // Imports the Appointment component from the specified path to be used in the app's routing or rendering
import Home from "./pages/Home/Home"; // Imports the Home component to be rendered for the root route

function App() {
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
