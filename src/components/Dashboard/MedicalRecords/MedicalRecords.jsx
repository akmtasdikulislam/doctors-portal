/**
 * MedicalRecords Component
 *
 * A comprehensive dashboard component for displaying medical records in a tabular format.
 *
 * Key Features:
 * - Displays different views based on user category (doctor/patient)
 * - Responsive table layout with conditional column visibility
 * - Shows detailed patient/doctor information including profile images
 * - Includes demographic information, diagnosis, and treatment details
 * - Interactive view details button for each record
 *
 * Data Structure:
 * - Uses medicalRecordsData array containing detailed medical record objects
 * - Each record includes patient info, doctor info, diagnosis, and treatment
 *
 * Context Usage:
 * - Utilizes AppContext to determine user category and customize view
 *
 * Styling:
 * - Uses Bootstrap classes for responsive layout
 * - Custom CSS classes for badges and profile elements
 */

/** React related imports */
import { useContext } from "react"; // Used to access user context data from AppContext for determining user category (doctor/patient)
import { AppContext } from "../../../App"; // Provides global application context containing user data and authentication state

/** Icon imports */
import { FileText } from "lucide-react"; // Icon component used in the view details action button for medical records

const MedicalRecords = () => {
  document.title = "Medical Records - Dashboard | Doctors Portal"; // Updates the browser tab/window title to show current page name and application name for better user navigation and context

  const { user } = useContext(AppContext);

  const medicalRecordsData = [
    {
      id: "MR_12345",
      patient: {
        id: "PAT2024A001",
        personalInfo: {
          name: "John Doe",
          profileImage:
            "https://img.freepik.com/free-photo/front-view-serious-man_23-2148946212.jpg",
        },
        demographics: {
          age: 30,
          bloodGroup: "A+",
          gender: "Male",
        },
      },
      doctor: {
        id: "DOC_X7K9P2M5N3L8Q4R",
        personalInfo: {
          name: "John Doe",
          profileImage:
            "https://img.freepik.com/free-photo/front-view-serious-man_23-2148946212.jpg",
        },
        speciality: "Orthodontist",
        qualifications: {
          degree: "DDS, MSD",
          abbreviation:
            "Doctor of Dental Surgery, Master of Science in Dentistry",
        },
      },
      diagnosis: "Common Cold",
      lastVisit: "10 Feb 2024",
      treatment: "Hypertension Treatment",
    },
  ];

  return (
    <section
      id="medical-records" // Unique identifier for the medical records section
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Bootstrap classes for responsive layout and spacing
    >
      <h3 className="align-self-start mb-3 mb-xl-0">Medical Records</h3>
      {/* Section heading with responsive margin */}
      <div className="patient-container p-4 rounded-3">
        {/* Container for patient records with padding and rounded corners */}
        <h4>Patient Medical Record List</h4> {/* Subsection heading */}
        <div className="patient-table-container">
          {/* Wrapper for the table component */}
          <table className="mt-4">
            {/* Table with top margin */}
            <thead>
              {/* Table header section containing column titles and responsive classes */}
              <tr>
                {/* Table row for header columns */}
                <th>SL No.</th>
                {/* Serial number column for record identification and ordering */}
                {user.category === "doctor" ? ( // Render different columns based on user role (doctor/patient)
                  <>
                    <th>Patient Info</th>
                    {/* Display patient name, ID and profile image */}
                    <th className="d-none d-md-table-cell">Age & Gender</th>
                    {/* Patient demographic info, hidden on mobile for better readability */}
                    <th className="d-none d-md-table-cell">Blood Group</th>
                    {/* Patient blood type info, responsive visibility */}
                  </>
                ) : (
                  <>
                    <th className="d-none d-sm-table-cell">Doctor Info</th>
                    {/* Doctor name, ID and profile details for patient view */}
                    <th className="d-none d-xl-table-cell">Speciality</th>
                    {/* Doctor's medical specialization and qualifications */}
                  </>
                )}
                <th className="d-none d-md-table-cell">Diagnosis</th>
                {/* Medical condition/problem identified by doctor */}
                <th className="d-none d-xl-table-cell">Last Visit</th>
                {/* Date of patient's most recent consultation */}
                <th>Treatment</th>
                {/* Prescribed medical procedure or medication details */}
                <th>Actions</th>
                {/* Interactive buttons for viewing or managing records */}
              </tr>
            </thead>
            <tbody>
              {medicalRecordsData.map(
                (
                  medicalRecord,
                  index // Iterate through medical records array
                ) => (
                  <tr key={index}>
                    {/* Unique key for each table row */}
                    <td>{index + 1}</td> {/* Display serial number */}
                    {user.category === "doctor" ? ( // Conditionally render different content based on whether the user is a doctor or patient
                      <>
                        <td>
                          {/* Cell for displaying patient's basic information */}
                          <div className="d-flex align-items-center gap-3">
                            {/* Container for patient profile with flexbox layout and spacing */}
                            <div className="profile-photo">
                              {/* Circular container for patient's profile picture */}
                              <img
                                src={
                                  medicalRecord.patient.personalInfo
                                    .profileImage
                                } // Display patient's profile image from medical record data
                              />
                            </div>
                            <div>
                              {/* Container for patient's text information */}
                              <p className="m-0">
                                {/* Display patient's full name without margins */}
                                {medicalRecord.patient.personalInfo.name}
                              </p>
                              <p className="small-text text-secondary m-0">
                                {/* Display patient's ID in smaller, gray text */}
                                {medicalRecord.patient.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="d-none d-md-table-cell">
                          {/* Cell for age/gender info, hidden on small screens */}
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            {/* Flex container for demographic badges */}
                            <div className="badge age-badge">
                              {/* Badge displaying patient's age with custom styling */}
                              {medicalRecord.patient.demographics.age} yrs
                            </div>
                            <div className="badge gender-badge">
                              {/* Badge showing patient's gender with distinct styling */}
                              {medicalRecord.patient.demographics.gender}
                            </div>
                          </div>
                        </td>
                        <td className="d-none d-md-table-cell">
                          {/* Cell for blood group, hidden on small screens */}
                          <div className="badge blood-group-badge">
                            {/* Badge displaying patient's blood group with specific styling */}
                            {medicalRecord.patient.demographics.bloodGroup}
                          </div>
                        </td>
                      </>
                    ) : (
                      // Alternative view for when user is a patient
                      <>
                        <td className="d-none d-sm-table-cell">
                          {/* Cell for doctor's information, visible from small screens up */}
                          <div className="d-flex align-items-center gap-3">
                            {/* Flex container for doctor's profile layout */}
                            <div className="profile-photo">
                              {/* Circular container for doctor's profile picture */}
                              <img
                                src={
                                  medicalRecord.doctor.personalInfo.profileImage
                                } // Display doctor's profile image from record
                              />
                            </div>
                            <div>
                              {/* Container for doctor's text information */}
                              <p className="m-0">
                                {/* Display doctor's full name without margins */}
                                {medicalRecord.doctor.personalInfo.name}
                              </p>
                              <p className="small-text text-secondary m-0">
                                {/* Display doctor's ID in smaller, gray text */}
                                {medicalRecord.doctor.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          {/* Cell for doctor's speciality, only visible on xl screens */}
                          <div className="d-flex flex-column gap-2">
                            {/* Vertical stack for speciality and qualifications */}
                            <p className="m-0 speciality">
                              {/* Display doctor's medical speciality */}
                              {medicalRecord.doctor.speciality}
                            </p>
                            <p
                              className="m-0 small-text text-secondary" // Show doctor's degrees in smaller, gray text
                              title={
                                medicalRecord.doctor.qualifications.abbreviation
                              } // Show full qualification name on hover
                            >
                              {medicalRecord.doctor.qualifications.degree}
                            </p>
                          </div>
                        </td>
                      </>
                    )}
                    <td className="d-none d-md-table-cell">
                      {/* Diagnosis info, visible from medium screens */}
                      <p className="m-0">{medicalRecord.diagnosis}</p>
                    </td>
                    <td className="d-none d-xl-table-cell">
                      {/* Last visit date, only visible on extra large screens */}
                      {medicalRecord.lastVisit}
                    </td>
                    <td className="">
                      {/* Treatment info, always visible */}
                      <p className="m-0">{medicalRecord.treatment}</p>
                    </td>
                    <td>
                      <button
                        className="btn action-btn me-2" // Button styling with right margin
                        title="View details" // Tooltip text
                      >
                        <FileText className="icon" />
                        {/* File text icon for view details action */}
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
export default MedicalRecords;
