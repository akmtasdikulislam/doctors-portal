/*
 * Footer Component
 *
 * This component renders the footer section of the website.
 * It includes three columns with different categories of information:
 *
 * 1. Services: Links to various dental checkup services
 * 2. Oral Health: Links to different dental treatments
 * 3. Our Address: Displays the business address
 *
 * The footer also includes a copyright notice at the bottom.
 *
 * The layout is responsive, using Bootstrap classes for column arrangement.
 */

const Footer = () => {
  return (
    // Render the footer section with padding
    <footer className="footer-section p-sm-5">
      {/* Container for footer links with responsive layout */}
      <div className="row px-5 pb-5 my-5">
        {/* Column for Services section */}
        <div className="col-md-4">
          {/* Services heading */}
          <h6 className="text-secondary mb-3">SERVICES</h6>
          {/* Flex container for service links */}
          <div className="d-flex flex-column gap-2">
            {/* Individual service links */}
            <a href="/">Emergency Checkup</a>
            <a href="/">Monthly Checkup</a>
            <a href="/">Weekly Checkup</a>
            <a href="/">Deep Checkup</a>
          </div>
        </div>
        {/* Column for Oral Health section */}
        <div className="col-md-4 my-5">
          {/* Oral Health heading */}
          <h6 className="text-secondary mb-3">ORAL HEALTH</h6>
          {/* Flex container for oral health links */}
          <div className="d-flex flex-column gap-2">
            {/* Individual oral health links */}
            <a href="/">Fluoride Treatment</a>
            <a href="/">Cavity Filling</a>
            <a href="/">Teeth Whitening</a>
          </div>
        </div>
        {/* Column for Address section */}
        <div className="col-md-4">
          {/* Address heading */}
          <h6 className="text-secondary mb-3">OUR ADDRESS</h6>
          {/* Address text */}
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      {/* Copyright notice */}
      <p className="footer-copyright text-center">
        Copyright © 2024 - All right reserved.
      </p>
    </footer>
  );
};

// Export the Footer component as default
export default Footer;
