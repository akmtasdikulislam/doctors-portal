/**
 * NotFound Component
 *
 * This component renders a "Not Found" or "Not Available" page based on the provided pageType prop.
 * It uses conditional rendering to display different content for each case:
 *
 * 1. For "not-available" pageType:
 *    - Displays a message indicating the page is not available
 *    - Provides a link to return to the home page
 *
 * 2. For 404 error (default case):
 *    - Shows a sad face icon
 *    - Displays a 404 error message
 *    - Provides a link to return to the home page
 *
 * The component utilizes React Router for navigation and FontAwesome for icons.
 * It also implements responsive design using flexbox for centering content.
 */

/** React related imports */
import PropTypes from "prop-types"; // For pageType-checking component props

/** React Router related imports */
import { Link } from "react-router-dom"; // For creating navigation links

/** Icon related imports */
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons"; // Sad face icon for 404 error page
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome component for rendering icons

const NotFound = ({ pageType }) => {
  return (
    // Container for the not found page with flex layout and centering
    <div className="d-flex flex-column align-items-center justify-content-center not-found-page gap-4">
      {pageType === "not-available" ? (
        // Render content for "not available" pageType
        <>
          {/* Display heading for not available page */}
          <h1 className="text-center">
            Opps! Sorry <br /> This page is not available right now.
          </h1>
          {/* Link to navigate back to home page */}
          <Link to="/" className="link-colored">
            <h5>
              Go back to <b>Home</b>
            </h5>
          </Link>
        </>
      ) : (
        // Render content for 404 error
        <>
          {/* Display sad face icon for 404 error */}
          <FontAwesomeIcon className="icon" icon={faFaceSadTear} />
          {/* Display heading for 404 error page */}
          <h1 className="text-center">
            404 Error! <br /> Requested page not found.
          </h1>
          {/* Link to navigate back to home page */}
          <Link to="/" className="link-colored">
            <h5>
              Go back to <b>Home</b>
            </h5>
          </Link>
        </>
      )}
    </div>
  );
};
// Define prop types for the NotFound component to ensure correct prop usage
NotFound.propTypes = {
  // Specify that pageType should be a string prop
  pageType: PropTypes.string,
};

// Export the NotFound component as the default export for this module
export default NotFound;
