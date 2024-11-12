/** React related imports */
import { useState } from "react"; // Used to manage state for modal visibility, selected doctor, and new doctor form

/** Component imports */
import DoctorProfileModal from "../DoctorProfileModal/DoctorProfileModal"; // Modal component for viewing/editing doctor details and adding new doctors

/** Icon imports */
import { FileUser, Plus } from "lucide-react"; // FileUser: View doctor details button icon, Plus: Add new doctor button icon

const Doctors = () => {
  document.title = "Doctors - Dashboard | Doctors Portal"; // Set the browser tab title for the Doctors page in the Dashboard

  const [selectedDoctor, setSelectedDoctor] = useState(0); // Initialize state to track the currently selected doctor for viewing in the modal, starting with the first doctor (index 0)

  const [addNewDoctor, setAddNewDoctor] = useState(false); // Initialize state to control the visibility of the "Add New Doctor" modal dialog (true = visible, false = hidden)

  const [isOpen, setIsOpen] = useState(false); // Initialize state to control the visibility of the doctor details modal dialog (true = visible, false = hidden)
  const doctorsData = [
    {
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
      contactInfo: {
        email: "john.doe@doctors-portal.com",
        phone: "+1234567890",
      },
      joinDate: "15 Jan 2024",
      availability: [
        {
          id: "DOC_X7K9P2M5N3L8Q4R_1731400517773",
          day: "Monday",
          time: "09:00 AM - 05:00 PM",
        },
        {
          id: "DOC_X7K9P2M5N3L8Q4R_1731400517774",
          day: "Wednesday",
          time: "10:00 AM - 06:00 PM",
        },
        {
          id: "DOC_X7K9P2M5N3L8Q4R_1731400517775",
          day: "Friday",
          time: "09:00 AM - 04:00 PM",
        },
      ],
      appointments: {
        total: 45,
        status: {
          paid: 38,
          unpaid: 7,
        },
      },
    },
    {
      id: "DOC_H4J8T6W2Y9V5B1C",
      personalInfo: {
        name: "Sarah Wilson",
        profileImage:
          "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      },
      speciality: "Periodontist",
      qualifications: {
        degree: "DMD, PhD",
        abbreviation: "Doctor of Medical Dentistry, Doctor of Philosophy",
      },
      contactInfo: {
        email: "sarah.wilson@doctors-portal.com",
        phone: "+1987654321",
      },
      joinDate: "20 Jan 2024",
      availability: [
        {
          id: "DOC_H4J8T6W2Y9V5B1C_1731400517776",
          day: "Tuesday",
          time: "08:00 AM - 04:00 PM",
        },
        {
          id: "DOC_H4J8T6W2Y9V5B1C_1731400517777",
          day: "Thursday",
          time: "09:00 AM - 05:00 PM",
        },
      ],
      appointments: {
        total: 32,
        status: {
          paid: 29,
          unpaid: 3,
        },
      },
    },
    {
      id: "DOC_A3D7F1G5K8M2N6P",
      personalInfo: {
        name: "Michael Chen",
        profileImage:
          "https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg",
      },
      speciality: "Endodontist",
      qualifications: {
        degree: "DDS, MS",
        abbreviation: "Doctor of Dental Surgery, Master of Science",
      },
      contactInfo: {
        email: "michael.chen@doctors-portal.com",
        phone: "+1567890123",
      },
      joinDate: "22 Jan 2024",
      availability: [
        {
          id: "DOC_A3D7F1G5K8M2N6P_1731400517778",
          day: "Monday",
          time: "10:00 AM - 06:00 PM",
        },
        {
          id: "DOC_A3D7F1G5K8M2N6P_1731400517779",
          day: "Thursday",
          time: "09:00 AM - 05:00 PM",
        },
        {
          id: "DOC_A3D7F1G5K8M2N6P_1731400517780",
          day: "Saturday",
          time: "09:00 AM - 02:00 PM",
        },
      ],
      appointments: {
        total: 28,
        status: {
          paid: 25,
          unpaid: 3,
        },
      },
    },
  ];
  const openModal = ({ doctorID, addNewDoctor }) => {
    /* 
    A function that handles opening a modal dialog for either viewing doctor details or adding a new doctor.
    It manages the state for modal visibility and selected doctor data based on the provided parameters.

    Task List:
    • Set the appropriate state for adding a new doctor or viewing existing doctor
    • Update the selected doctor state with the provided doctor ID
    • Control modal visibility by setting isOpen state
    • Ensure proper state management for different modal interactions
    */

    setAddNewDoctor(addNewDoctor || false); // Set state to determine if modal should show add new doctor form
    doctorID &&
      setSelectedDoctor(
        doctorsData.findIndex((doctor) => doctor.id === doctorID)
      ); // Find and set the index of selected doctor in doctorsData array
    setIsOpen(true); // Display the modal by updating visibility state to true
  };

  const closeModal = () => setIsOpen(false); // Hides the modal by setting its visibility state to false when called

  return (
    <section
      id="doctors" // Unique identifier for the doctors section
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Container styling with flexbox layout and spacing
    >
      <h3 className="align-self-start mb-3 mb-xl-0">Doctors</h3>
      {/* Main heading for the doctors section */}
      <div className="patient-container p-4 rounded-3">
        {/* Container for doctors list with padding and rounded corners */}
        <div className="d-flex align-items-center justify-content-between gap-2">
          {/* Header row with flex layout */}
          <h4>Doctors List</h4> {/* Subheading for the doctors list */}
          <button
            className="btn btn-secondary" // Bootstrap button styling
            onClick={() => openModal({ addNewDoctor: true })} // Opens modal for adding new doctor
          >
            {/* Add new doctor button with icon and responsive text */}
            <Plus className="me-sm-2 btn-icon" /> {/* Plus icon with margin */}
            <span className="d-none d-sm-inline">Add Doctor</span>
            {/* Button text, hidden on small screens */}
          </button>
        </div>
        <div className="patient-table-container">
          {/* Container for the doctors data table */}
          <table className="mt-4">
            {/* Table with top margin */}
            <thead>
              {/* Table header row */}
              <tr>
                <th>
                  {/* Serial number column */}
                  SL No.
                </th>
                <th>
                  {/* Doctor information column */}
                  Doctor Info
                </th>
                <th className="d-none d-md-table-cell">
                  {/* Speciality column */}
                  Speciality
                </th>
                <th className="d-none d-xl-table-cell">
                  {/* Contact info column, hidden on smaller screens */}
                  Contact Info
                </th>
                <th className="d-none d-xl-table-cell">
                  {/* Join date column, hidden on smaller screens */}
                  Join Date
                </th>
                <th className="patient-table-appointments-cell">
                  {/* Appointments column */}
                  Appointments
                </th>
                <th>
                  {/* Actions column for interactive buttons */}
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {doctorsData.map(
                (
                  doctor,
                  index // Maps through doctors data to create table rows
                ) => (
                  // Table row for each doctor
                  <tr key={index}>
                    <td>
                      {/* Display serial number */}
                      {index + 1}
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        {/* Container for doctor basic info */}
                        <div className="profile-photo">
                          {/* Profile image container */}
                          <img src={doctor.personalInfo.profileImage} />
                          {/* Doctor's profile picture */}
                        </div>
                        <div>
                          <p className="m-0">{doctor.personalInfo.name}</p>
                          {/* Doctor's name */}
                          <p className="small-text text-secondary m-0">
                            {doctor.id}
                          </p>
                          {/* Doctor's ID */}
                        </div>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      {/* Speciality and qualifications info, hidden on small screens */}
                      <div className="d-flex flex-column gap-2">
                        <p className="m-0 speciality">{doctor.speciality}</p>
                        <p
                          className="m-0 small-text text-secondary"
                          title={doctor.qualifications.abbreviation}
                        >
                          {doctor.qualifications.degree}
                        </p>
                      </div>
                    </td>
                    <td className="d-none d-xl-table-cell">
                      {/* Contact info, hidden on smaller screens */}
                      <p className="m-0">{doctor.contactInfo.email}</p>
                      {/* Doctor's email */}
                      <p className="m-0 small-text text-secondary">
                        {doctor.contactInfo.phone}
                      </p>
                      {/* Doctor's phone */}
                    </td>
                    <td className="d-none d-xl-table-cell">
                      {doctor.joinDate}
                    </td>
                    {/* Join date, hidden on smaller screens */}
                    <td className="patient-table-appointments-cell">
                      {/* Appointments information */}
                      <div className="d-flex align-items-center gap-3">
                        <div className="d-flex flex-column align-items-center gap-1">
                          <h4 className="m-0">{doctor.appointments.total}</h4>
                          {/* Total appointments count */}
                          <p className="m-0 small-text text-secondary">Total</p>
                          {/* Total label */}
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <div className="badge paid-badge">
                            {doctor.appointments.status.paid} Paid
                          </div>
                          {/* Paid appointments count */}
                          <div className="badge unpaid-badge">
                            {doctor.appointments.status.unpaid} Unpaid
                          </div>
                          {/* Unpaid appointments count */}
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn action-btn me-2" // Action button styling
                        title="View Doctor" // Button tooltip
                        onClick={() => openModal({ doctorID: doctor.id })} // Opens modal with doctor details
                      >
                        <FileUser className="icon" /> {/* User file icon */}
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <DoctorProfileModal
            isOpen={isOpen} // Controls modal visibility
            closeModal={closeModal} // Function to close modal
            userData={doctorsData[selectedDoctor]} // Selected doctor data
            addNew={addNewDoctor} // Flag for new doctor form
          />
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default Doctors;
