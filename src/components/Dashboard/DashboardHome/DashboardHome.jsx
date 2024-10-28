/**
 * DashboardHome Component
 *
 * A comprehensive dashboard interface for a medical portal that displays various
 * metrics and information for healthcare management.
 *
 * Features:
 * - Displays key metrics (patients, doctors, appointments, revenue)
 * - Shows recent activities and notifications
 * - Lists pending tasks and to-dos
 * - Presents statistical metrics with progress indicators
 * - Provides quick access buttons for common actions
 *
 * The component uses a responsive layout with Bootstrap classes for flexible
 * display across different screen sizes. It organizes information into distinct
 * sections using child components for better maintainability and separation
 * of concerns.
 */

/** Icons imports */
import { Calendar, DollarSign, Stethoscope, Users } from "lucide-react"; // Icons used in metrics cards for visual representation

/** Dashboard Component Imports */
import DashboardMetrics from "../DashboardMetrics/DashboardMetrics"; // Displays individual metric cards with icons and values
import ProgressiveMetrics from "../ProgressiveMetrics/ProgressiveMetrics"; // Shows statistical metrics with progress indicators
import QuickActions from "../QuickActions/QuickActions"; // Provides quick access buttons for common actions
import RecentActivity from "../RecentActivity/RecentActivity"; // Displays recent system activities and notifications
import Tasks from "../Tasks/Tasks"; // Shows list of pending tasks and to-dos

const DashboardHome = () => {
  document.title = "Dashboard | Doctors Portal";

  const metricsData = [
    {
      metricName: "Total Patients",
      mainValue: 1234,
      subtext: "50 new this week",
      icon: <Users />,
    },
    {
      metricName: "Total Doctors",
      mainValue: 56,
      subtext: "3 new this month",
      icon: <Stethoscope />,
    },
    {
      metricName: "Appointments Today",
      mainValue: 28,
      subtext: "6 urgent",
      icon: <Calendar />,
    },
    {
      metricName: "Total Revenue",
      mainValue: 12345,
      subtext: "15% increase from last month",
      icon: <DollarSign />,
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
    { name: "Update inventory" },
    { name: "Staff meeeting at 2 PM" },
  ];

  const statsData = [
    {
      metricName: "Bed Occupancy Rate",
      mainValue: 75,
    },
    {
      metricName: "Patient Satisfaction Rate",
      mainValue: 92,
    },
    {
      metricName: "Staff Efficiency",
      mainValue: 85,
    },
  ];

  return (
    <section
      id="dashboard-home" // Unique identifier for the dashboard home section
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Centers content and creates a flex container with vertical layout and spacing
    >
      <h2 className="m-0 p-0 mb-5">Dashboard Overview</h2>
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
          <RecentActivity recentActivityData={recentActivityData} />
          {/* Component showing recent system activities */}
          <Tasks taskList={taskList} />
          {/* Component displaying pending tasks */}
        </div>
        <div className="d-flex flex-wrap gap-4">
          {/* Container for metrics and quick actions */}
          <ProgressiveMetrics statsData={statsData} />
          {/* Component showing statistical metrics */}
          <QuickActions /> {/* Component for quick access buttons/actions */}
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default DashboardHome;
