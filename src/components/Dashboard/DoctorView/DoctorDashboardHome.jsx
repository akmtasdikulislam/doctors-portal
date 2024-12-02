/**
 * DoctorDashboardHome Component
 *
 * This component serves as the main dashboard interface for doctors in a medical portal.
 * It provides a comprehensive overview of key metrics, activities, and tasks relevant
 * to a doctor's daily workflow.
 *
 * Key Features:
 * - Real-time metrics display (appointments, patients, test results, messages)
 * - Upcoming appointments list
 * - Recent activity feed
 * - Task management
 * - Performance statistics
 *
 * The component is structured with:
 * - Metric cards showing important daily numbers
 * - Activity sections for tracking recent events
 * - Task lists for managing daily responsibilities
 * - Progressive metrics for tracking performance indicators
 *
 * Uses Bootstrap classes for responsive layout and flexbox for arrangement
 * of dashboard elements. All data is currently hardcoded but designed to
 * be easily connected to dynamic data sources.
 */

/** Icons imports */
import { Activity, Calendar, MessageSquare, Users } from "lucide-react"; // Icons used in metrics cards for visual representation

/** Dashboard Component Imports */
import DashboardMetrics from "../../DashboardMetrics/DashboardMetrics"; // Displays individual metric cards with icons and values
import ProgressiveMetrics from "../../ProgressiveMetrics/ProgressiveMetrics"; // Shows statistical metrics with progress indicators
import RecentActivity from "../../RecentActivity/RecentActivity"; // Displays recent system activities and notifications
import Tasks from "../../Tasks/Tasks"; // Shows list of pending tasks and to-dos
import UpcomingAppointments from "../../UpcomingAppointments/UpcomingAppointments";

const DoctorDashboardHome = () => {
  document.title = "Dashboard | Doctors Portal";

  const metricsData = [
    {
      metricName: "Today's appointments",
      mainValue: 8,
      subtext: "2 urgent cases",
      icon: <Calendar />,
    },
    {
      metricName: "Total Patients",
      mainValue: "1,234",
      subtext: "15 new this week",
      icon: <Users />,
    },
    {
      metricName: "Pending Test Results",
      mainValue: 5,
      subtext: "2 critical",
      icon: <Activity />,
    },
    {
      metricName: "Unread Messages",
      mainValue: 3,
      subtext: "1 from Admin",
      icon: <MessageSquare />,
    },
  ];

  const recentActivityData = [
    {
      activityName: "New Appointment Scheduled",
      activityTime: "Just Now",
      activityType: "appointment",
    },
    {
      activityName: "Staff meeting in 30 minutes",
      activityTime: "Just Now",
      activityType: "reminder",
    },
    {
      activityName: "Patient report ready",
      activityTime: "2 hours ago",
      activityType: "patient",
    },
    {
      activityName: "New Patient Registered",
      activityTime: "3 hours ago",
      activityType: "patient",
    },
    {
      activityName: "Appointment Scheduled - Dr. Sarah with Jane Smith",
      activityTime: "6 hours ago",
      activityType: "appointment",
    },
  ];

  const taskList = [
    { name: "Review patient reports" },
    { name: "Prepare for surgery at 2 PM" },
    { name: "Follow up with post-ot patients" },
  ];

  const statsData = [
    {
      metricName: "Patient Satisfaction",
      mainValue: 95,
    },
    {
      metricName: "Appointment Punctuality",
      mainValue: 88,
    },
    {
      metricName: "Treatment Success Rate",
      mainValue: 92,
    },
  ];
  const upcomingAppointmentsData = [
    {
      patientName: "Alice Johnson",
      time: "09:00 AM",
      type: "Check-up",
    },
    {
      patientName: "Bob Smith",
      time: "10:30 AM",
      type: "Urgent",
    },
    {
      patientName: "Carlt Davis",
      time: "11:45 AM",
      type: "Follow-up",
    },
  ];

  return (
    <section
      id="dashboard-home" // Unique identifier for the dashboard home section
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Centers content and creates a flex container with vertical layout and spacing
    >
      <h2 className="m-0 p-0 mb-5">Welcome, Dr. John Doe </h2>
      {/* Main heading with margin adjustments */}
      <div className="dashboard-content d-flex flex-column gap-4">
        {/* Container for all dashboard content with vertical layout */}
        <div className="dashboard-metrics-group d-flex flex-wrap gap-4">
          {/* Container for metric cards that wraps on smaller screens */}
          {metricsData.map(
            (
              metric,
              index // Maps through metrics data to create individual metric cards
            ) => (
              <DashboardMetrics
                key={index} // React key prop for list rendering optimization
                metricName={metric.metricName} // Display name of the metric
                mainValue={metric.mainValue} // Primary value to be displayed
                subtext={metric.subtext} // Additional descriptive text
                icon={metric.icon} // Icon associated with the metric
              />
            )
          )}
        </div>
        <div className="d-flex flex-wrap gap-4">
          {/* Container for activity and tasks sections */}
          <UpcomingAppointments
            upcomingAppointmentsData={upcomingAppointmentsData} // Passes appointment data array to display scheduled patient visits
          />
          <RecentActivity
            recentActivityData={recentActivityData} // Renders component showing latest system activities and updates
          />
          {/* Component showing recent system activities */}
        </div>
        <div className="d-flex flex-wrap gap-4">
          {/* Container for metrics and quick actions */}
          <Tasks taskList={taskList} />
          {/* Component displaying pending tasks */}
          <ProgressiveMetrics statsData={statsData} />
          {/* Component showing statistical metrics */}
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default DoctorDashboardHome;
