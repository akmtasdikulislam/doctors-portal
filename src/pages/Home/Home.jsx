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

// ** Component imports **

import ContactUs from "../../components/ContactUs/ContactUs"; // Displays contact information and form on the home page
import DentalCareService from "../../components/DentalCareService/DentalCareService"; // Displays dental care services on the home page
import Footer from "../../components/Footer/Footer"; // Renders the footer section of the home page
import Header from "../../components/Header/Header"; // Renders the header section of the home page
import MakeAppointment from "../../components/MakeAppointment/MakeAppointment"; // Displays appointment booking section on the home page
import Services from "../../components/Services/Services"; // Displays the services section on the home page
import Testimonials from "../../components/Testimonials/Testimonials"; // Displays customer reviews and feedback on the home page
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
      {/* Render the Services component */}
      <Services />
      {/* Render the DentalCareService component */}
      <DentalCareService />
      {/* Render the MakeAppointment component */}
      <MakeAppointment />
      {/* Render the Testimonials component */}
      <Testimonials />
      {/* Render the ContactUs component */}
      <ContactUs />
      {/* Render the Footer component */}
      <Footer />
    </main>
  );
};

// Export the Home component as the default export
export default Home;
