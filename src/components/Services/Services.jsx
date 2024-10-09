/**
 * Services Component
 *
 * This component represents the services section of a dental website.
 * It displays a list of dental services offered, including:
 * - Fluoride Treatment
 * - Cavity Filling
 * - Teeth Whitening
 *
 * The component imports images for each service and uses the ServiceCard
 * component to render individual service cards. It defines an array of
 * service objects, each containing an id, name, description, and associated image.
 *
 * The rendered output includes a section title, subtitle, and a container
 * that displays the service cards in a flex layout.
 */

/** Image imports */
import cavity from "../../assets/images/cavity.png"; // Image for cavity filling service
import fluoride from "../../assets/images/fluoride.png"; // Image for fluoride treatment service
import whitening from "../../assets/images/whitening.png"; // Image for teeth whitening service

/** Component imports */
import ServiceCard from "../ServiceCard/ServiceCard"; // Component to render individual service cards

const Services = () => {
  // Define an array of service objects containing information for each service
  const services = [
    {
      id: 1, // Unique identifier for the service
      name: "Fluoride Treatment", // Name of the service
      description:
        "Strengthen teeth enamel and prevent decay with fluoride application.", // Description of the service
      image: fluoride, // Image associated with the service (imported from assets)
    },
    {
      id: 2, // Unique identifier for the service
      name: "Cavity Filling", // Name of the service
      description:
        "Restore damaged teeth and prevent further decay with dental fillings.", // Description of the service
      image: cavity, // Image associated with the service (imported from assets)
    },
    {
      id: 3, // Unique identifier for the service
      name: "Teeth Whitening", // Name of the service
      description:
        "Brighten your smile with professional teeth whitening treatments.", // Description of the service
      image: whitening, // Image associated with the service (imported from assets)
    },
  ];

  return (
    <section className="services-section my-md-5">
      {/* Container for the services section with margin */}
      <div className="text-center my-md-5 pt-md-5 section-header">
        {/* Centered container for section title */}
        <h6 className="sub-heading">OUR SERVICES</h6>
        {/* Subtitle for the services section */}
        <h3>Services We Provide</h3>
        {/* Main title for the services section */}
      </div>
      <div className="services-container d-flex justify-content-center gap-5 w-75 mx-md-auto">
        {/* Container for service cards with flexbox layout */}
        {services.map(
          (
            service // Map through the services array to render ServiceCard components
          ) => (
            <ServiceCard key={service.id} service={service} /> // Render a ServiceCard component for each service
          )
        )}
      </div>
    </section>
  );
};

export default Services; // Export the Services component for use in other parts of the application
