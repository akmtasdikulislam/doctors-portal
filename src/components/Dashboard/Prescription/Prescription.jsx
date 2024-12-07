/**
 * Prescription Component
 *
 * A React component that displays a table of patient prescriptions in a dashboard.
 *
 * Features:
 * - Displays a list of medications with details like dosage, frequency, dates, and status
 * - Responsive table that adapts to different screen sizes
 * - Visual indicators for prescription status (Active/Completed)
 * - Action buttons for viewing prescription details
 * - Uses icons from lucide-react for visual enhancement
 *
 * The component includes:
 * - A main heading "Prescriptions"
 * - A table with columns for medication, dosage, frequency, dates, status, and actions
 * - Responsive design with Bootstrap classes for different breakpoints
 * - Dynamic rendering of prescription data using array mapping
 */

/** Icons Import */
import { FileText, Pill } from "lucide-react"; // Icons for prescription details (FileText) and medication (Pill)

const Prescriptions = () => {
  document.title = "Prescriptions - Dashboard | Doctors Portal"; // Set the browser tab title for the prescriptions page in the Dashboard section

  const prescriptionsData = [
    {
      medicineName: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "15 Sep 2024",
      endDate: "15 Oct 2024",
      status: "Active",
    },
    {
      medicineName: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "12 Oct 2024",
      endDate: "12 Nov 2024",
      status: "Completed",
    },
    {
      medicineName: "Amoxicillin",
      dosage: "250mg",
      frequency: "Three times daily",
      startDate: "20 Sep 2024",
      endDate: "27 Sep 2024",
      status: "Active",
    },
    {
      medicineName: "Omeprazole",
      dosage: "20mg",
      frequency: "Once daily",
      startDate: "18 Sep 2024",
      endDate: "18 Oct 2024",
      status: "Completed",
    },
    {
      medicineName: "Simvastatin",
      dosage: "40mg",
      frequency: "Once daily",
      startDate: "10 Sep 2024",
      endDate: "10 Dec 2024",
      status: "Completed",
    },
  ];
  return (
    <section
      id="prescriptions" // Unique identifier for the prescriptions section to enable direct linking and accessibility
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Centers content horizontally, applies flex layout on extra-large screens, arranges items vertically with spacing
    >
      <h3 className="align-self-start mb-3 mb-xl-0">Prescriptions</h3>

      {/* Main heading aligned to start, with responsive bottom margin */}

      <div className="patient-container p-4 rounded-3">
        {/* Container with padding and rounded corners for prescription content */}
        <h4>Your Prescriptions</h4>

        {/* Subheading for the prescriptions list section */}

        <div className="prescription-table-container">
          {/* Wrapper for the table to manage overflow and responsiveness */}
          <table className="mt-4">
            {/* Table with top margin for spacing from heading */}
            <thead>
              <tr>
                <th>
                  {/* Header row containing column titles */}
                  Medication
                </th>

                <th className="d-none d-sm-table-cell">
                  {/* Column header for medication names */}
                  Dosage
                </th>

                <th className="d-none d-lg-table-cell">
                  {/* Hidden on xs screens, visible from sm breakpoint */}
                  Frequency
                </th>

                <th className="d-none d-md-table-cell">
                  {/* Hidden on smaller screens, visible from lg breakpoint */}
                  Start Date
                </th>

                <th className="d-none d-md-table-cell">
                  {/* Hidden on smaller screens, visible from md breakpoint */}
                  End Date
                </th>

                <th className="status-cell">
                  {/* Hidden on smaller screens, visible from md breakpoint */}
                  Status
                </th>

                {/* Column for prescription status, always visible */}
                <th>Actions</th>

                {/* Column for action buttons, always visible */}
              </tr>
            </thead>
            <tbody>
              {prescriptionsData.map(
                // Iterates through prescription data array to create table rows
                (prescription, index) => (
                  <tr key={index}>
                    {/* Table row with unique key for React rendering optimization */}
                    <td>
                      {/* Cell containing medication name with icon */}
                      <Pill className="medicine-icon me-3" />

                      {/* Pill icon with right margin */}
                      {prescription.medicineName}

                      {/* Displays the medication name */}
                    </td>
                    <td className="d-none d-sm-table-cell">
                      {/* Dosage cell, responsive visibility */}
                      {prescription.dosage}

                      {/* Displays medication dosage */}
                    </td>
                    <td className="d-none d-md-table-cell">
                      {/* Frequency cell, responsive visibility */}
                      {prescription.frequency}
                      {/* Displays medication frequency */}
                    </td>
                    <td className="d-none d-lg-table-cell">
                      {/* Start date cell, responsive visibility */}
                      {prescription.startDate}

                      {/* Displays prescription start date */}
                    </td>
                    <td className="d-none d-md-table-cell">
                      {/* End date cell, responsive visibility */}
                      {prescription.endDate}

                      {/* Displays prescription end date */}
                    </td>
                    <td className="status-cell">
                      {/* Status cell with dynamic styling */}
                      <span
                        className={`badge ${prescription.status.toLowerCase()}-badge`}
                      >
                        {/* Badge with dynamic class based on status */}
                        {prescription.status}

                        {/* Displays prescription status */}
                      </span>
                    </td>
                    <td>
                      {/* Actions cell containing view button */}
                      <button
                        className="btn action-btn me-2" // Button styling with right margin
                        title="View prescription" // Tooltip text for accessibility
                      >
                        <FileText className="icon" />

                        {/* Document icon for view action */}
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default Prescriptions;
