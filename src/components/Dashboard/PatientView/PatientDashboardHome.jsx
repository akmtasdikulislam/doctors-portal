/**
 * PatientDashboardHome Component
 *
 * This component serves as the main dashboard interface for patients in a medical portal.
 * It provides a comprehensive overview of key health metrics, appointments, and medical
 * information relevant to a patient's healthcare management.
 *
 * Key Features:
 * - Real-time metrics display (appointments, prescriptions, test results, balance)
 * - Upcoming appointments with doctors
 * - Active prescriptions and medications
 * - Health reminders and checkup schedules
 * - Quick action shortcuts for common patient tasks
 *
 * The component is structured with:
 * - Metric cards showing important health indicators
 * - Appointment section for tracking scheduled visits
 * - Prescription section for medication management
 * - Progressive metrics for health checkup reminders
 * - Quick actions for common patient tasks
 *
 * Uses Bootstrap classes for responsive layout and flexbox for arrangement
 * of dashboard elements. Designed to provide an intuitive interface for
 * patients to monitor and manage their healthcare information.
 */

/** Icon imports */
import { Activity, Calendar, CreditCard, Pill } from "lucide-react"; // Used for visual indicators in metric cards: Activity for test results, Calendar for appointments, CreditCard for balance, Pill for prescriptions

/** Metric and Statistics Related Component Imports */
import DashboardMetrics from "../DashboardMetrics/DashboardMetrics"; // Renders individual metric cards with icons and values for appointments, prescriptions, test results, and balance
import ProgressiveMetrics from "../ProgressiveMetrics/ProgressiveMetrics"; // Displays health reminders with progress bars and due dates

/** Patient Information Component Imports */
import RecentPrescriptions from "../RecentPrescriptions/RecentPrescriptions"; // Shows list of current medications with dosage details
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments"; // Displays scheduled doctor appointments with time and specialist info

/** Action Component Imports */
import QuickActions from "../QuickActions/QuickActions"; // Provides quick access buttons for common patient actions and shortcuts

const PatientDashboardHome = () => {
  document.title = "Dashboard | Doctors Portal"; // Sets the browser tab/window title for the patient dashboard page to maintain consistent navigation context
  const metricsData = [
    {
      metricName: "Upcoming Appointments",
      mainValue: 2,
      subtext: "Next: 20 May 2024",
      icon: <Calendar />,
    },
    {
      metricName: "Active Prescription",
      mainValue: "3",
      subtext: "Last updated: 3 days ago",
      icon: <Pill />,
    },
    {
      metricName: "Recent Test Results",
      mainValue: 1,
      subtext: "Blood work reults available",
      icon: <Activity />,
    },
    {
      metricName: "Outstanding Balance",
      mainValue: "$150",
      subtext: "Due: 01 June 2024",
      icon: <CreditCard />,
    },
  ];

  const statsData = [
    {
      metricName: "Annual Physical Exam",
      mainValue: 75,
      remarks: "Due in 2 months",
    },
    {
      metricName: "Flu Vaccination",
      mainValue: 100,
      remarks: "Overdue",
    },
    {
      metricName: "Dental Check-up",
      mainValue: 90,
      remarks: "Due in 1 week",
    },
  ];
  const upcomingAppointmentsData = [
    {
      doctor: {
        name: "Dr. Sarah Johnson",
        speciality: "Cardiology",
      },
      time: "09:00 AM",
      date: "12 Nov 2024",
    },
    {
      doctor: {
        name: "Dr. Micheal Chen",
        speciality: "Dematorlogy",
      },
      time: "09:00 AM",
      date: "19 Dec 2024",
    },
  ];
  const prescriptionsData = [
    {
      medicineName: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      endDate: "15 Oct 2024",
    },
    {
      medicineName: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      endDate: "12 Nov 2024",
    },
  ];

  return (
    <section
      id="dashboard-home" // Unique identifier for the main dashboard section to enable direct DOM access and styling
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Bootstrap classes for responsive layout and spacing on extra-large screens
    >
      <h2 className="m-0 p-0 mb-5">Welcome, John Doe </h2>
      {/* Main welcome heading with margin adjustments for visual hierarchy */}
      <div className="dashboard-content d-flex flex-column gap-4">
        {/* Container for all dashboard content using flexbox for vertical stacking */}
        <div className="dashboard-metrics-group d-flex flex-wrap gap-4">
          {/* Wrapper for metric cards with responsive wrapping behavior */}
          {metricsData.map(
            (
              metric, // Individual metric object containing card data
              index // Unique index for React key prop
            ) => (
              <DashboardMetrics
                key={index} // Unique identifier for React's reconciliation process
                metricName={metric.metricName} // Title of the metric card (e.g., "Upcoming Appointments")
                mainValue={metric.mainValue} // Primary numeric or text value to display
                subtext={metric.subtext} // Secondary information or context for the metric
                icon={metric.icon} // Visual indicator icon component for the metric type
              />
            )
          )}
        </div>
        <div className="d-flex flex-wrap gap-4">
          {/* Flex container for appointment and prescription sections */}
          <UpcomingAppointments
            upcomingAppointmentsData={upcomingAppointmentsData} // Array of scheduled appointments with doctor details
          />
          <RecentPrescriptions
            prescriptionsData={prescriptionsData} // Array of current medications and dosage information
          />
        </div>
        <div className="d-flex flex-wrap gap-4">
          {/* Container for health metrics and quick action buttons */}
          <ProgressiveMetrics
            statsName={"Health Reminders"} // Title for the health metrics section
            statsData={statsData} // Array of health-related statistics and due dates
          />
          <QuickActions />
          {/* Component for frequently used patient actions and shortcuts */}
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default PatientDashboardHome;
