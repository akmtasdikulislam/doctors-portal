/**
 * InfoCard Component
 *
 * This component renders an information card with an icon, title, and description.
 * It is designed to be used in a grid layout, occupying one-third of the width on medium screens.
 *
 * Props:
 * - info: An object containing the following properties:
 *   - icon: String URL for the card's icon image
 *   - title: String for the card's title
 *   - description: String for the card's description
 *   - background: String specifying the background color class
 *
 * The component uses Bootstrap classes for responsive layout and custom classes for styling.
 * PropTypes are used for type checking of the passed props.
 */

// ** PropTypes related imports **
import PropTypes from "prop-types"; // Import PropTypes for prop type checking and validation of component props

// Define the InfoCard functional component that receives 'info' prop
const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 col-11">
      {/* Wrapper div with Bootstrap column class */}
      <div
        className={`info-card d-flex justify-content-center align-items-center info-${info.background} text-white`}
        // Apply multiple classes for styling and layout
      >
        <img src={info.icon} alt="Icon" className="me-3 info-icon" />
        {/* Display icon image with margin and custom class */}
        <div>
          {/* Container for text content */}
          <h6>{info.title}</h6> {/* Display the title in an h6 tag */}
          <small>{info.description}</small>
          {/* Display the description in a small tag */}
        </div>
      </div>
    </div>
  );
};

// Define prop types for the InfoCard component
InfoCard.propTypes = {
  info: PropTypes.shape({
    icon: PropTypes.string.isRequired, // Require icon to be a string
    title: PropTypes.string.isRequired, // Require title to be a string
    description: PropTypes.string.isRequired, // Require description to be a string
    background: PropTypes.string.isRequired, // Require background to be a string
  }).isRequired, // Make the entire info object required
};

export default InfoCard; // Export the InfoCard component as the default export
