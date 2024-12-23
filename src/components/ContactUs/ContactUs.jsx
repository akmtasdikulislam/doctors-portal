/**
 * ContactUs Component
 *
 * This component renders a contact form that allows users to send emails directly from the website.
 * It utilizes the react-hook-form library for form handling and validation.
 *
 * Key features:
 * - Uses useForm hook for form state management and validation
 * - Implements a sendEmail function to handle form submission
 * - Creates a mailto link with the form data and redirects to the user's default email client
 * - Renders form fields for email, subject, and message
 * - Displays error messages for invalid form inputs using the FormError component
 *
 * The component is styled with flexbox for responsive layout and includes a header section with a title and subtitle.
 */

/** React related imports */
import { useForm } from "react-hook-form"; // Used for form handling and validation in the ContactUs component

/** Custom component imports */
import FormError from "../FormError/FormError"; // Renders error messages for form fields when validation fails

const ContactUs = () => {
  // Destructure useForm hook to get form handling functions and state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission (send email)
  const sendEmail = (data) => {
    /*
    This function handles the email sending process by creating a mailto link with the form data
    and redirecting the user to their default email client.

    Task List:
    • Extract form data from the input object
    • Create a mailto link with the extracted data
    • Redirect the user to the generated mailto link
    */

    // Extract email, subject, and message from the form data object
    const { email, subject, message } = data;

    // Construct the mailto link with encoded subject and body
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    // Redirect the user to their default email client with the pre-filled information
    window.location.href = mailtoLink;
  };

  return (
    // Main container for the contact us section with flex layout
    <section className="contact-us-section py-5 d-flex flex-column justify-content-center align-items-center">
      {/* Header section for the contact form */}
      <div className="section-header text-center">
        <h6 className="sub-heading">Contact Us</h6>
        <h3 className="text-white">Stay Connected with us</h3>
      </div>
      {/* Contact form with flex layout and gap between elements */}
      <form
        className="contact-us-form mt-5 col-md-3 col-10 d-flex flex-column gap-3"
        onSubmit={handleSubmit((data) => sendEmail(data))}
      >
        {/* Email input field with validation */}
        <input
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email Address"
        />
        {/* Display error message for email field if validation fails */}
        {errors.email && <FormError errorMessage={errors.email.message} />}

        {/* Subject input field with required validation */}
        <input
          type="text"
          {...register("subject", { required: true })}
          placeholder="Subject"
        />
        {/* Display error message for subject field if validation fails */}
        {errors.subject && <FormError errorMessage={errors.subject.message} />}

        {/* Message textarea with required validation */}
        <textarea
          {...register("message", { required: true })}
          placeholder="Your Message"
        ></textarea>
        {/* Display error message for message field if validation fails */}
        {errors.message && <FormError errorMessage={errors.message.message} />}

        {/* Submit button for the form */}
        <button type="submit" className="btn submit-btn mx-auto btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

// Export the ContactUs component as the default export
export default ContactUs;
