/**
 * Header Component
 *
 * This component represents the main header section of the dental clinic website.
 * It includes the following elements:
 *
 * 1. NavBar: Navigation bar component for site navigation
 * 2. Hero Section:
 *    - Main heading and subheading introducing the dental services
 *    - Call-to-action button for appointment scheduling
 *    - Main image (dental chair)
 * 3. Contact Information:
 *    - Displayed using InfoCard components
 *    - Includes opening hours, location, and contact number
 *
 * The component uses a responsive layout with Bootstrap classes for styling.
 * It also imports various icons and images to enhance the visual presentation.
 */

// ** Icon imports **
import clock from "../../assets/icons/clock.svg"; // Used for displaying opening hours in contact information
import marker from "../../assets/icons/marker.svg"; // Used for displaying location in contact information
import phone from "../../assets/icons/phone.svg"; // Used for displaying contact number in contact information

// ** Image imports **
import chair from "../../assets/images/chair.png"; // Used as the main image in the hero section

// ** Component imports **
import InfoCard from "../InfoCard/InfoCard"; // Used to render individual contact information cards
import NavBar from "../NavBar/NavBar"; // Used to render the navigation bar at the top of the header
const Header = () => {
  // Array of objects containing contact information for rendering InfoCards
  const contactInformation = [
    {
      icon: clock, // Icon representing opening hours
      title: "Opening Hours", // Title for the opening hours information
      description: "Mon - Fri: 9:00 AM - 5:00 PM", // Detailed opening hours
      background: "primary", // Background color for the info card
    },
    {
      icon: marker, // Icon representing location
      title: "Visit our location", // Title for the location information
      description: "Brooklyn, NY 10036, United States", // Detailed address
      background: "dark", // Background color for the info card
    },
    {
      icon: phone, // Icon representing contact number
      title: "Contact us now", // Title for the contact information
      description: "+000 123 456789", // Contact phone number
      background: "primary", // Background color for the info card
    },
  ];
  return (
    <header className="d-flex flex-column justify-content-between">
      {/* Main header container with flex layout */}
      <NavBar /> {/* Renders the navigation bar component */}
      <section className="row hero-section d-flex align-items-center">
        {/* Hero section with flex layout for alignment */}
        <div className="col-4 offset-1">
          {/* Left column for text content */}
          <h1>Your New Smile Starts Here</h1>
          {/* Main heading for the hero section */}
          <p className="text-secondary">
            {/* Subheading with secondary text color */}
            Experience top-quality dental care with our expert team. Schedule
            your appointment today for a brighter, healthier smile.
          </p>
          <button className="btn">Get Started</button>
          {/* Call-to-action button */}
        </div>
        <div className="col-5 offset-1">
          {/* Right column for image */}
          <img className="img-fluid" src={chair} alt="Chair" />
          {/* Responsive image of a dental chair */}
        </div>
      </section>
      <section className="row contact-information-section container-md mx-md-auto">
        {/* Contact information section with responsive container */}
        {contactInformation.map((info, index) => (
          // Maps through contact information array
          <InfoCard key={index} info={info} />
          // Renders InfoCard component for each contact information item with unique key
        ))}
      </section>
    </header>
  );
};

export default Header;
//  Exports the Header component for use in other parts of the application
