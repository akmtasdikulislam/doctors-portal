/*
 * Home Component
 *
 * This component represents the home page of the Doctors Portal application.
 * It uses the useEffect hook to set the document title when the component mounts.
 * The component renders a main element with an id of "home" and includes the Header component.
 *
 * Key features:
 * - Sets document title to "Home | Doctors Portal"
 * - Renders the Header component
 * - Serves as the main entry point for the application's home page
 */

// ** React related imports **
import { useEffect } from "react"; // Hook used to set document title on component mount
import Header from "../../components/Header/Header";

const Home = () => {
  // Use the useEffect hook to perform side effects in the component
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = "Home | Doctors Portal";
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render the component's JSX
  return (
    // Main container for the home page
    <main id="home">
      {/* Render the Header component */}
      <Header />
    </main>
  );
};

// Export the Home component as the default export
export default Home;
