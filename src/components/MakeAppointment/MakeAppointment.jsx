/**
 * MakeAppointment Component
 *
 * This component renders a section for making appointments in a healthcare application.
 * It displays an image of a doctor alongside appointment details and a call-to-action button.
 *
 * Key features:
 * - Responsive layout with Bootstrap classes
 * - Doctor image import and display
 * - Appointment information and description
 * - "Get Started" button for user interaction
 *
 * The component uses a combination of custom CSS classes and Bootstrap utilities
 * to achieve its layout and styling.
 */

/** Image imports */
import doctor from "../../assets/images/doctor-small.png"; // Import doctor image for the appointment section background

const MakeAppointment = () => {
  return (
    // Wrapper section for the appointment component with vertical margin
    <section className="appointment-section my-5">
      {/* Container for appointment content with responsive width and centering */}
      <div className="appointment-container w-75 mx-md-auto d-flex align-items-center">
        {/* Doctor image with responsive sizing */}
        <img src={doctor} alt="Doctor" className="appointment-img img-fluid" />
        {/* Container for appointment details with responsive column width and alignment */}
        <div className="appointment-details col-md-5 ms-md-auto">
          {/* Small heading for appointment section */}
          <h6 className="sub-heading">Appointment</h6>
          {/* Main heading for appointment section with white text and top margin */}
          <h3 className="text-white mt-2">Make an Appointment Today</h3>
          {/* Paragraph with appointment description, white text, and vertical margin */}
          <p className="text-white my-4">
            It&apos;s quick and easy to schedule your visit with our experienced
            healthcare professionals. Don&apos;t delay your health concerns;
            book an appointment now and take the first step towards better
            well-being. Our friendly staff is ready to assist you in finding the
            perfect time slot.
          </p>
          {/* Call-to-action button for starting the appointment process */}
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

// Export the MakeAppointment component as the default export
export default MakeAppointment;
