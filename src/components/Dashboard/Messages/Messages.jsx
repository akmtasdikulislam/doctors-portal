/*
 * Messages Component
 *
 * This component displays a list of messages in a doctor's portal dashboard.
 * It shows messages from various doctors with their profile pictures, names,
 * timestamps, and message content.
 *
 * Features:
 * - Sets document title for the Messages page
 * - Displays messages in a responsive layout
 * - Each message includes:
 *   - Sender's profile picture
 *   - Sender's name
 *   - Timestamp
 *   - Message content
 * - Uses Bootstrap classes for styling and responsiveness
 * - Implements shadow and rounded corners for message cards
 */

const Messages = () => {
  document.title = "Messages | Doctors Portal"; // Sets the browser tab/window title for the Messages page in the Doctors Portal application

  const messagesList = [
    {
      id: 1,
      senderImage:
        "https://img.freepik.com/free-photo/front-view-serious-man_23-2148946212.jpg",
      senderName: "Dr. John Wilson",
      time: "10:30 AM",
      message: "Patient report for John Doe is ready",
    },
    {
      id: 2,
      senderImage:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      senderName: "Dr. Sarah Smith",
      time: "11:45 AM",
      message: "Lab results are available for review",
    },
    {
      id: 3,
      senderImage:
        "https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg",
      senderName: "Dr. Michael Chen",
      time: "2:15 PM",
      message: "Following up on patient consultation",
    },
  ];

  return (
    <section
      id="messages"
      className="mx-auto d-xxl-flex flex-column align-items-center justify-content-center gap-4" // Main container with centered content, flex layout for extra large screens
    >
      <h3 className="align-self-start mb-3 mb-xl-0">
        {/* Main heading aligned to start with responsive margin */}
        Messages
      </h3>

      <div className="patient-container p-4 rounded-3">
        {/* Container with padding and rounded corners for content */}
        <div>
          {/* Header container */}
          <h4>Inbox</h4> {/* Inbox section heading */}
        </div>
        <div className="messages-content-container mt-4">
          {/* Outer container for messages with top margin */}
          <div className="messages-content-container mt-4">
            {/* Inner container for messages list */}
            {messagesList.map(
              (
                message // Iterates through messages array to display each message
              ) => (
                <div
                  key={message.id} // Unique key for React list rendering
                  className="message p-4 d-flex align-items-center gap-3 w-100 rounded-3 shadow-sm" // Message card styling with flex layout and shadow
                >
                  <div className="message-sender">
                    {/* Container for sender's image */}
                    <img src={message.senderImage} alt={message.senderName} />
                    {/* Displays sender's profile picture */}
                  </div>
                  <div className="message-details w-100">
                    {/* Container for message content taking full width */}
                    <div className="message-header d-flex align-items-center justify-content-between w-100">
                      {/* Header with sender info and time */}
                      <h6 className="m-0">{message.senderName}</h6>
                      {/* Sender's name without margin */}
                      <p className="m-0 small-text text-secondary">
                        {/* Time stamp with secondary color */}
                        {message.time}
                      </p>
                    </div>
                    <p className="m-0 text-secondary message-text">
                      {/* Message content with secondary color */}
                      {message.message}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
