/**
 * Patients Component
 *
 * A React component that displays a comprehensive patient management interface.
 *
 * Features:
 * - Displays a table of patient records with detailed information
 * - Allows viewing individual patient profiles through a modal
 * - Supports adding new patients via a modal form
 * - Responsive design with conditional column visibility
 * - Shows patient demographics, contact info, and appointment status
 *
 * State Management:
 * - selectedPatient: Tracks currently selected patient for modal view
 * - addNewPatient: Controls visibility of add new patient form
 * - isOpen: Controls visibility of patient profile modal
 *
 * Data Structure:
 * - Uses patientsData array containing detailed patient objects
 * - Each patient object includes personal info, demographics, contact details,
 *   emergency contacts, and appointment history
 *
 * UI Components:
 * - Patient list table with sortable columns
 * - Profile photo display
 * - Status badges for appointments
 * - Action buttons for viewing patient details
 */

/** React and hooks imports */
import { useState } from "react"; // Import useState hook to manage component state for modal visibility and selected patient

/** Components imports */
import PatientProfileModal from "../PatientProfileModal/PatientProfileModal"; // Import ProfileModal component to display patient details in a modal

/** Icon imports */
import { FileUser, Plus } from "lucide-react"; // Import icons for view patient and add new patient buttons

const Patients = () => {
  document.title = "Patients - Dashboard | Doctors Portal"; // Set the browser tab title for the Patients page in the Dashboard

  const [selectedPatient, setSelectedPatient] = useState(0); // Initialize state to track the currently selected patient for viewing in the modal, starting with the first patient (index 0)

  const [addNewPatient, setAddNewPatient] = useState(false); // Initialize state to control the visibility of the "Add New Patient" modal dialog (true = visible, false = hidden)

  const [isOpen, setIsOpen] = useState(false); // Initialize state to control the visibility of the patient details modal dialog (true = visible, false = hidden)

  const patientsData = [
    {
      id: "PAT2024A001",
      personalInfo: {
        name: "John Doe",
        profileImage:
          "https://img.freepik.com/free-photo/front-view-serious-man_23-2148946212.jpg",
      },
      demographics: {
        age: 30,
        gender: "Male",
        dateOfBirth: "1994-03-15",
        bloodGroup: "A+",
        height: "5'10\"",
        weight: "70 kg",
      },
      contactInfo: {
        email: "john.doe@example.com",
        phone: "+1234567890",
        address: "456 Oak Avenue, Springfield, USA",
      },
      joinDate: "15 Jan 2024",
      emergencyContact: {
        name: "Mary Doe",
        relationship: "Sister",
        phone: "+1987654321",
        address: "789 Pine Road, Springfield, USA",
      },
      appointments: {
        total: 2,
        status: {
          paid: 1,
          unpaid: 1,
        },
      },
    },
    {
      id: "PAT2024A002",
      personalInfo: {
        name: "Sarah Wilson",
        profileImage:
          "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      },
      demographics: {
        age: 25,
        gender: "Female",
        dateOfBirth: "1999-08-22",
        bloodGroup: "B-",
        height: "5'6\"",
        weight: "58 kg",
      },
      contactInfo: {
        email: "sarah.wilson@example.com",
        phone: "+1987654321",
        address: "789 Maple Street, Riverside, USA",
      },
      joinDate: "20 Jan 2024",
      emergencyContact: {
        name: "Robert Wilson",
        relationship: "Father",
        phone: "+1122334455",
        address: "321 Cedar Lane, Riverside, USA",
      },
      appointments: {
        total: 3,
        status: {
          paid: 2,
          unpaid: 1,
        },
      },
    },
    {
      id: "PAT2024A003",
      personalInfo: {
        name: "Michael Chen",
        profileImage:
          "https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg",
      },
      demographics: {
        age: 35,
        gender: "Male",
        dateOfBirth: "1989-11-30",
        bloodGroup: "O+",
        height: "5'9\"",
        weight: "68 kg",
      },
      contactInfo: {
        email: "michael.chen@example.com",
        phone: "+1567890123",
        address: "123 Elm Street, Maplewood, USA",
      },
      joinDate: "22 Jan 2024",
      emergencyContact: {
        name: "Lisa Chen",
        relationship: "Wife",
        phone: "+1678901234",
        address: "123 Elm Street, Maplewood, USA",
      },
      appointments: {
        total: 1,
        status: {
          paid: 1,
          unpaid: 0,
        },
      },
    },
    {
      id: "PAT2024A004",
      personalInfo: {
        name: "Emily Brown",
        profileImage:
          "https://img.freepik.com/free-photo/smiley-african-woman-with-golden-earrings_23-2148747979.jpg",
      },
      demographics: {
        age: 28,
        gender: "Female",
        dateOfBirth: "1996-04-18",
        bloodGroup: "AB+",
        height: "5'7\"",
        weight: "62 kg",
      },
      contactInfo: {
        email: "emily.brown@example.com",
        phone: "+1345678901",
        address: "567 Birch Lane, Oakville, USA",
      },
      joinDate: "25 Jan 2024",
      emergencyContact: {
        name: "James Brown",
        relationship: "Brother",
        phone: "+1456789012",
        address: "789 Birch Lane, Oakville, USA",
      },
      appointments: {
        total: 4,
        status: {
          paid: 3,
          unpaid: 1,
        },
      },
    },
    {
      id: "PAT2024A005",
      personalInfo: {
        name: "David Kim",
        profileImage:
          "https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg",
      },
      demographics: {
        age: 42,
        gender: "Male",
        dateOfBirth: "1982-07-25",
        bloodGroup: "A-",
        height: "5'11\"",
        weight: "75 kg",
      },
      contactInfo: {
        email: "david.kim@example.com",
        phone: "+1234567891",
        address: "890 Pine Street, Willowbrook, USA",
      },
      joinDate: "27 Jan 2024",
      emergencyContact: {
        name: "Susan Kim",
        relationship: "Mother",
        phone: "+1345678902",
        address: "891 Pine Street, Willowbrook, USA",
      },
      appointments: {
        total: 2,
        status: {
          paid: 2,
          unpaid: 0,
        },
      },
    },
    {
      id: "PAT2024A006",
      personalInfo: {
        name: "Rachel Martinez",
        profileImage:
          "https://img.freepik.com/free-photo/close-up-portrait-young-african-man-with-stubble_171337-1296.jpg",
      },
      demographics: {
        age: 31,
        gender: "Female",
        dateOfBirth: "1993-09-12",
        bloodGroup: "B+",
        height: "5'5\"",
        weight: "57 kg",
      },
      contactInfo: {
        email: "rachel.martinez@example.com",
        phone: "+1456789013",
        address: "234 Oak Street, Riverdale, USA",
      },
      joinDate: "28 Jan 2024",
      emergencyContact: {
        name: "Carlos Martinez",
        relationship: "Father",
        phone: "+1567890124",
        address: "235 Oak Street, Riverdale, USA",
      },
      appointments: {
        total: 3,
        status: {
          paid: 1,
          unpaid: 2,
        },
      },
    },
    {
      id: "PAT2024A007",
      personalInfo: {
        name: "Thomas Anderson",
        profileImage:
          "https://img.freepik.com/premium-photo/portrait-young-handsome-iranian-businessman-white_251136-79633.jpg",
      },
      demographics: {
        age: 45,
        gender: "Male",
        dateOfBirth: "1979-12-03",
        bloodGroup: "O-",
        height: "6'0\"",
        weight: "82 kg",
      },
      contactInfo: {
        email: "thomas.anderson@example.com",
        phone: "+1678901235",
        address: "567 Maple Avenue, Springfield, USA",
      },
      joinDate: "30 Jan 2024",
      emergencyContact: {
        name: "Jennifer Anderson",
        relationship: "Wife",
        phone: "+1789012346",
        address: "567 Maple Avenue, Springfield, USA",
      },
      appointments: {
        total: 5,
        status: {
          paid: 4,
          unpaid: 1,
        },
      },
    },
    {
      id: "PAT2024A008",
      personalInfo: {
        name: "Sofia Garcia",
        profileImage:
          "https://img.freepik.com/free-photo/portrait-modern-woman_23-2148131700.jpg",
      },
      demographics: {
        age: 29,
        gender: "Female",
        dateOfBirth: "1995-06-20",
        bloodGroup: "AB-",
        height: "5'4\"",
        weight: "54 kg",
      },
      contactInfo: {
        email: "sofia.garcia@example.com",
        phone: "+1890123457",
        address: "789 Cedar Street, Oakwood, USA",
      },
      joinDate: "1 Feb 2024",
      emergencyContact: {
        name: "Maria Garcia",
        relationship: "Mother",
        phone: "+1901234568",
        address: "790 Cedar Street, Oakwood, USA",
      },
      appointments: {
        total: 2,
        status: {
          paid: 1,
          unpaid: 1,
        },
      },
    },
  ];

  const openModal = ({ patientID, addNewPatient }) => {
    /* 
    A function that handles opening a modal dialog for either viewing patient details or adding a new patient.
    It manages the state for modal visibility and selected patient data based on the provided parameters.

    Task List:
    • Set the appropriate state for adding a new patient or viewing existing patient
    • Update the selected patient state with the provided patient ID
    • Control modal visibility by setting isOpen state
    • Ensure proper state management for different modal interactions
    */

    setAddNewPatient(addNewPatient || false); // Set state to determine if modal should show add new patient form
    patientID &&
      setSelectedPatient(
        patientsData.findIndex((patient) => patient.id === patientID)
      ); // Find and set the index of selected patient in patientsData array
    setIsOpen(true); // Display the modal by updating visibility state to true
  };

  const closeModal = () => setIsOpen(false); // Hides the modal by setting its visibility state to false when called

  return (
    <section
      id="patients" // Unique identifier for the patients section
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Container styling with flexbox layout and spacing
    >
      <h3 className="align-self-start mb-3 mb-xl-0">Patients</h3>
      {/* Main heading for the patients section */}
      <div className="patient-container p-4 rounded-3">
        {/* Container for patient list with padding and rounded corners */}
        <div className="d-flex align-items-center justify-content-between gap-2">
          {/* Header row with flex layout */}
          <h4>Patient List</h4> {/* Subheading for the patient list */}
          <button
            className="btn btn-secondary" // Bootstrap button styling
            onClick={() => openModal({ addNewPatient: true })} // Opens modal for adding new patient
          >
            {/* Add new patient button with icon and responsive text */}
            <Plus className="me-sm-2 btn-icon" /> {/* Plus icon with margin */}
            <span className="d-none d-sm-inline">Add Patient</span>
            {/* Button text, hidden on small screens */}
          </button>
        </div>
        <div className="patient-table-container">
          {/* Container for the patient data table */}
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
                  {/* Patient information column */}
                  Patient Info
                </th>
                <th className="d-none d-md-table-cell">
                  {/* Age/Gender column, hidden on small screens */}
                  Age & Gender
                </th>
                <th className="d-none d-md-table-cell">
                  {/* Blood group column, hidden on small screens */}
                  Blood Group
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
                  Actions
                  {/* Actions column for interactive buttons */}
                </th>
              </tr>
            </thead>
            <tbody>
              {patientsData.map(
                (
                  patient,
                  index // Maps through patient data to create table rows
                ) => (
                  <tr key={index}>
                    {/* Table row for each patient */}
                    <td>{index + 1}</td> {/* Display serial number */}
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        {/* Container for patient basic info */}
                        <div className="profile-photo">
                          {/* Profile image container */}
                          <img src={patient.personalInfo.profileImage} />
                          {/* Patient's profile picture */}
                        </div>
                        <div>
                          <p className="m-0">{patient.personalInfo.name}</p>
                          {/* Patient's name */}
                          <p className="small-text text-secondary m-0">
                            {patient.id}
                          </p>
                          {/* Patient's ID */}
                        </div>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      {/* Age and gender info, hidden on small screens */}
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <div className="badge age-badge">
                          {patient.demographics.age} yrs
                        </div>
                        {/* Age badge */}
                        <div className="badge gender-badge">
                          {patient.demographics.gender}
                        </div>
                        {/* Gender badge */}
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      {/* Blood group info, hidden on small screens */}
                      <div className="badge blood-group-badge">
                        {patient.demographics.bloodGroup}
                      </div>
                      {/* Blood group badge */}
                    </td>
                    <td className="d-none d-xl-table-cell">
                      {/* Contact info, hidden on smaller screens */}
                      <p className="m-0">{patient.contactInfo.email}</p>
                      {/* Patient's email */}
                      <p className="m-0 small-text text-secondary">
                        {patient.contactInfo.phone}
                      </p>
                      {/* Patient's phone */}
                    </td>
                    <td className="d-none d-xl-table-cell">
                      {patient.joinDate}
                    </td>
                    {/* Join date, hidden on smaller screens */}
                    <td className="patient-table-appointments-cell">
                      {/* Appointments information */}
                      <div className="d-flex align-items-center gap-3">
                        <div className="d-flex flex-column align-items-center gap-1">
                          <h4 className="m-0">{patient.appointments.total}</h4>
                          {/* Total appointments count */}
                          <p className="m-0 small-text text-secondary">Total</p>
                          {/* Total label */}
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <div className="badge paid-badge">
                            {patient.appointments.status.paid} Paid
                          </div>
                          {/* Paid appointments count */}
                          <div className="badge unpaid-badge">
                            {patient.appointments.status.unpaid} Unpaid
                          </div>
                          {/* Unpaid appointments count */}
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn action-btn me-2" // Action button styling
                        title="View Patient" // Button tooltip
                        onClick={() => openModal({ patientID: patient.id })} // Opens modal with patient details
                      >
                        <FileUser className="icon" /> {/* User file icon */}
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <PatientProfileModal
            isOpen={isOpen} // Controls modal visibility
            closeModal={closeModal} // Function to close modal
            userData={patientsData[selectedPatient]} // Selected patient data
            addNew={addNewPatient} // Flag for new patient form
          />
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default Patients;
