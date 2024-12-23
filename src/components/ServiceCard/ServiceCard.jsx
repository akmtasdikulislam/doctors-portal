/**
 * ServiceCard Component
 *
 * This component renders a card displaying information about a service.
 * It takes a 'service' prop which should be an object containing:
 * - image: URL of the service image
 * - name: Name of the service
 * - description: Brief description of the service
 *
 * The card is styled using Bootstrap classes for responsive layout and spacing.
 * It displays the service image, name, and description in a centered layout.
 *
 * PropTypes are used to validate the required props and their types.
 */

/** React related imports */
import PropTypes from "prop-types"; // Used for type-checking the 'service' prop object

const ServiceCard = ({ service }) => {
  return (
    // Container for the service card with Bootstrap column class
    <div className="service-card-container col-md-4 ">
      {/* Inner container for the service card with text alignment and padding */}
      <div className="service-card text-center py-5 px-5">
        {/* Display the service image with alt text for accessibility */}
        <img className="service-image" src={service.image} alt={service.name} />
        {/* Display the service name in an h6 heading with margin */}
        <h6 className="my-md-4">{service.name}</h6>
        {/* Display the service description in a paragraph with secondary text color and padding */}
        <p className="text-secondary px-md-4">{service.description}</p>
      </div>
    </div>
  );
};

// Define prop types for type checking and documentation
ServiceCard.propTypes = {
  // Ensure that the service prop is an object with specific required properties
  service: PropTypes.shape({
    // The image property should be a required string
    image: PropTypes.string.isRequired,
    // The name property should be a required string
    name: PropTypes.string.isRequired,
    // The description property should be a required string
    description: PropTypes.string.isRequired,
  }).isRequired,
};

// Export the ServiceCard component as the default export
export default ServiceCard;
