/**
 * Testimonials Component
 *
 * This component renders a section of patient testimonials for a dental service.
 * It imports images for each testimonial author and uses a reusable TestimonialCard
 * component to display individual testimonials.
 *
 * The component defines an array of testimonial objects, each containing:
 * - authorPhoto: Imported image of the testimonial author
 * - authorName: Name of the author
 * - authorLocation: Location of the author (all set to "California" in this instance)
 * - review: The text content of the testimonial
 *
 * The rendered section includes:
 * - A header with the title "Testimonials" and subtitle "What Our Patients Says"
 * - A container that maps through the testimonials array and renders a TestimonialCard
 *   for each testimonial
 *
 * The layout uses Bootstrap classes for responsive design and styling.
 */

/** Image imports */
import winsonHerry from "../../assets/images/people1.png"; // Author photo for Winson Herry's testimonial
import merryEma from "../../assets/images/people2.png"; // Author photo for Merry Ema's testimonial
import nikoleJessy from "../../assets/images/people3.png"; // Author photo for Nikole Jessy's testimonial

/** Component imports */
import TestimonialCard from "../TestimonialCard/TestimonialCard"; // Reusable component to display individual testimonial cards
const Testimonials = () => {
  // Array of testimonial objects containing author information and reviews
  const testimonials = [
    {
      authorPhoto: winsonHerry, // Imported image for Winson Herry
      authorName: "Winson Herry", // Name of the testimonial author
      authorLocation: "California", // Location of the author
      review:
        "I was skeptical at first, but this dental service exceeded my expectations. The staff was friendly, the procedure was painless, and my smile has never looked better. I highly recommend their professional and efficient care.", // Testimonial content
    },
    {
      authorPhoto: merryEma, // Imported image for Merry Ema
      authorName: "Merry Ema", // Name of the testimonial author
      authorLocation: "California", // Location of the author
      review:
        "As someone with dental anxiety, I was pleasantly surprised by the calm and reassuring atmosphere. The dentist took time to explain everything, making me feel at ease. My teeth feel great, and I'll definitely be returning.", // Testimonial content
    },
    {
      authorPhoto: nikoleJessy, // Imported image for Nikole Jessy
      authorName: "Nikole Jessy", // Name of the testimonial author
      authorLocation: "California", // Location of the author
      review:
        "The advanced technology used by this dental practice is impressive. From digital X-rays to 3D imaging, every aspect of my treatment was precise and efficient. The results speak for themselves – my smile has never been brighter!", // Testimonial content
    },
  ];
  return (
    <section className="testimonials-section m-5">
      {/* Container for the entire testimonials section with padding */}
      <div className="mb-5 section-header">
        {/* Container for the section header with bottom margin */}
        <h6 className="sub-heading">Testimonials</h6>
        {/* Subheading for the testimonials section */}
        <h3>What Our Patients Says</h3>
        {/* Main heading for the testimonials section */}
      </div>
      <div className="testimonial-container mx-lg-5 p-lg-5 py-5 d-flex flex-wrap align-items-center justify-content-center gap-sm-5 gap-4 my-5">
        {/* Container for testimonial cards with flexbox layout and spacing */}
        {testimonials.map(
          (
            testimonial,
            index // Map through the testimonials array to create individual cards
          ) => (
            <TestimonialCard key={index} testimonialData={testimonial} /> // Render a TestimonialCard component for each testimonial, passing the data as a prop
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials; // Export the Testimonials component for use in other parts of the application
