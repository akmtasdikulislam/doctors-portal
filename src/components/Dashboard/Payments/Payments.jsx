/**
 * Payments Component
 *
 * A dashboard component that displays payment history and transactions.
 *
 * Features:
 * - Displays a table of payment records with details like invoice ID, patient, doctor, amount, date, and status
 * - Responsive design with columns that hide/show based on screen size
 * - Payment status badges (Paid/Pending)
 * - Generate Report button with chart icon
 * - View payment details action button
 * - Sortable columns for better data organization
 *
 * Dependencies:
 * - lucide-react for icons (BarChart2, FileText)
 * - Bootstrap classes for styling and responsiveness
 */

/** Icons Import */
import { BarChart2, FileText } from "lucide-react"; // BarChart2 for report generation button, FileText for payment details action button

const Payments = () => {
  document.title = "Payments - Dashboard | Doctors Portal"; // Set the browser tab title for the Payments page in the Dashboard section
  const payments = [
    {
      invoiceId: "INV-X7K9M2P5N3L8Q4",
      patientName: "John Doe",
      doctorName: "Dr. James Smith",
      amount: "$500",
      date: "Fri, 15 Sep 2023",
      status: "Paid",
    },
    {
      invoiceId: "INV-H4J2R8T6V9W1Y5",
      patientName: "Sarah Johnson",
      doctorName: "Dr. Michael Williams",
      amount: "$750",
      date: "Sat, 16 Sep 2023",
      status: "Pending",
    },
    {
      invoiceId: "INV-B5N7C2X8Z4Q6M3",
      patientName: "Michael Brown",
      doctorName: "Dr. Robert Anderson",
      amount: "$300",
      date: "Sun, 17 Sep 2023",
      status: "Paid",
    },
    {
      invoiceId: "INV-K8L4P9R5T2W7Y3",
      patientName: "Emily Davis",
      doctorName: "Dr. William Taylor",
      amount: "$600",
      date: "Mon, 18 Sep 2023",
      status: "Paid",
    },
    {
      invoiceId: "INV-G1H6J9K4M7N2P5",
      patientName: "David Wilson",
      doctorName: "Dr. Carlos Martinez",
      amount: "$450",
      date: "Tue, 19 Sep 2023",
      status: "Pending",
    },
    {
      invoiceId: "INV-Q8S3U7V2X5Z9B4",
      patientName: "Lisa Anderson",
      doctorName: "Dr. Thomas Johnson",
      amount: "$800",
      date: "Wed, 20 Sep 2023",
      status: "Paid",
    },
    {
      invoiceId: "INV-C7F2H8K5L9N3P6",
      patientName: "Robert Taylor",
      doctorName: "Dr. David Brown",
      amount: "$550",
      date: "Thu, 21 Sep 2023",
      status: "Paid",
    },
    {
      invoiceId: "INV-T4W7Y2B5D8G1J6",
      patientName: "Jennifer Martin",
      doctorName: "Dr. Richard Davis",
      amount: "$400",
      date: "Fri, 22 Sep 2023",
      status: "Pending",
    },
    {
      invoiceId: "INV-M3P6R9S4U7V2X8",
      patientName: "William Thompson",
      doctorName: "Dr. John Wilson",
      amount: "$700",
      date: "Sat, 23 Sep 2023",
      status: "Paid",
    },
    {
      invoiceId: "INV-Y5B8D1G4J7L2N6",
      patientName: "Jessica Moore",
      doctorName: "Dr. Peter Thompson",
      amount: "$650",
      date: "Sun, 24 Sep 2023",
      status: "Paid",
    },
  ];
  return (
    <section
      id="payments" // Unique identifier for the payments section
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Centers content, uses flex layout for xxl screens with vertical alignment and spacing
    >
      {/* Main section heading with responsive margin */}
      <h3 className="align-self-start mb-3 mb-xl-0">Payments</h3>

      {/* Container for payment content with padding and rounded corners */}
      <div className="patient-container p-4 rounded-3">
        {/* Flex container for header row with space between items */}
        <div className="d-flex align-items-center justify-content-between gap-2">
          {/* Subsection heading */}
          <h4>Payment History</h4>
          <button
            className="btn btn-secondary" // Bootstrap secondary button styling
          >
            {/*  Chart icon with margin for report generation */}
            <BarChart2 className="me-sm-2 btn-icon" />
            {/* Button text visible only on larger screens */}
            <span className="d-none d-sm-inline">Generate Report</span>
          </button>
        </div>
        {/* Container for the payments table */}
        <div className="payment-table-container">
          {/* // Table with top margin */}
          <table className="mt-4">
            <thead>
              <tr>
                <th>
                  {/* // Column header for invoice identification */}
                  Invoice ID
                </th>
                <th className="d-none d-sm-table-cell">
                  {/* Patient column, hidden on extra small screens */}
                  Patient
                </th>
                <th className="d-none d-lg-table-cell">
                  {/* Doctor column, hidden on smaller screens */}
                  Doctor
                </th>
                <th className="amount-cell">
                  {/* Column for payment amount */}
                  Amount
                </th>
                <th className="d-none d-md-table-cell">
                  {/* Date column, hidden on small screens */}
                  Date
                </th>
                <th className="status-cell">
                  {/* Column for payment status */}
                  Status
                </th>
                <th>
                  {/* Column for action buttons */}
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map(
                (
                  payment // Maps through payment data to create table rows
                ) => (
                  <tr
                    key={payment.invoiceId} // Unique key for each payment row
                  >
                    <td>
                      {/* Displays invoice ID */}

                      {payment.invoiceId}
                    </td>
                    <td className="d-none d-sm-table-cell">
                      {/* Shows patient name, responsive visibility*/}
                      {payment.patientName}
                    </td>
                    <td className="d-none d-lg-table-cell">
                      {/* Shows doctor name, responsive visibility*/}
                      {payment.doctorName}
                    </td>
                    <td className="amount-cell">
                      {/* Displays payment amount */}
                      {payment.amount}
                    </td>
                    <td className="d-none d-md-table-cell">
                      {/* Shows payment date, responsive visibility */}
                      {payment.date}
                    </td>
                    <td className="status-cell">
                      {/* Displays payment status */}
                      <span
                        className={`badge ${payment.status.toLowerCase()}-badge`} // Dynamic badge styling based on payment status
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn action-btn me-2" // Action button styling with margin
                        title="View Payment" // Tooltip for button
                      >
                        {/* Document icon for view action */}
                        <FileText className="icon" />
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

export default Payments;
