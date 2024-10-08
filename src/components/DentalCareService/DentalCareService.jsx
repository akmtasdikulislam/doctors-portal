/**
 * DentalCareService Component
 *
 * This component renders a section showcasing exceptional dental care services.
 * It includes an image of dental treatment and informative text about the services offered.
 *
 * The component is structured with:
 * - An image of dental care treatment
 * - A heading highlighting exceptional dental care
 * - A paragraph describing the dental practice's priorities and services
 * - A "Get Started" button for user interaction
 *
 * The layout is responsive, using Bootstrap classes for column arrangement and spacing.
 */

/** Image imports */
import dentalCare from "../../assets/images/treatment.png"; // Importing dental care image for the service section
const DentalCareService = () => {
  return (
    // Wrapper section for the dental care service component
    <section className="dental-care-service-section my-md-5 py-md-5">
      {/* Container for the content with responsive width and centering */}
      <div className="w-75 mx-auto row my-md-5">
        {/* Left column for the image, takes up 4 columns on medium screens */}
        <div className="col-md-4">
          {/* Responsive image with rounded corners */}
          <img
            src={dentalCare}
            alt="Dental Care"
            className="img-fluid rounded-3"
          />
        </div>
        {/* Right column for text content, takes up 7 columns with left margin on medium screens */}
        <div className="col-md-7 ms-md-5 align-self-center">
          {/* Main heading for the service description */}
          <h2>Exceptional Dental Care, on Your Terms</h2>
          {/* Paragraph with secondary text color and vertical margins */}
          <p className="text-secondary my-4">
            At our dental practice, we prioritize your comfort and convenience.
            Our experienced team offers personalized care tailored to your
            unique needs. From routine check-ups to advanced treatments, we
            provide comprehensive dental services using state-of-the-art
            technology. Experience exceptional dental care that fits your
            schedule and preferences.
          </p>
          {/* Call-to-action button */}
          <button className="btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default DentalCareService;
