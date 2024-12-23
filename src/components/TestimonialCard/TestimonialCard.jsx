/**
 * TestimonialCard Component
 *
 * This component renders a testimonial card with the following features:
 * - Displays a customer review
 * - Shows author information including name, location, and photo
 * - Uses PropTypes for type-checking the passed props
 *
 * The component expects a 'testimonialData' prop with the following structure:
 * - review: string (the testimonial text)
 * - authorName: string (name of the person giving the testimonial)
 * - authorLocation: string (location of the author)
 * - authorPhoto: string (URL or path to the author's photo)
 *
 * The card is styled using Bootstrap classes for responsive layout and styling.
 */

// ** PropTypes related imports **
import PropTypes from "prop-types"; // Used for type-checking the props passed to the TestimonialCard component
const TestimonialCard = ({ testimonialData }) => {
  return (
    // Container for the testimonial card with responsive column width
    <div className="testimonial-card-container col-md-4 mt-md-5">
      {/* Inner container for the testimonial card with padding */}
      <div className="testimonial-card p-sm-5 p-4">
        {/* Paragraph to display the testimonial review text with bottom margin */}
        <p className="mb-5">{testimonialData.review}</p>
        {/* Container for author information with flex layout */}
        <div className="author d-flex align-items-center">
          {/* Container for author's photo with right margin */}
          <div className="me-3">
            {/* Author's photo with responsive sizing */}
            <img
              className="img-fluid author-photo"
              src={testimonialData.authorPhoto}
              alt={testimonialData.authorName}
            />
          </div>
          {/* Container for author's name and location */}
          <div className="author-info">
            {/* Author's name displayed as a heading */}
            <h6>{testimonialData.authorName}</h6>
            {/* Author's location displayed as a paragraph */}
            <p>{testimonialData.authorLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type-checking the testimonialData prop
TestimonialCard.propTypes = {
  // Define the shape and requirements of the testimonialData object
  testimonialData: PropTypes.shape({
    // Ensure authorLocation is a required string
    authorLocation: PropTypes.string.isRequired,
    // Ensure authorName is a required string
    authorName: PropTypes.string.isRequired,
    // Ensure authorPhoto is a required string (URL or path)
    authorPhoto: PropTypes.string.isRequired,
    // Ensure review is a required string
    review: PropTypes.string.isRequired,
  }).isRequired,
};

// Export the TestimonialCard component as the default export
export default TestimonialCard;
