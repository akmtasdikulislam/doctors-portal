# Doctor Portal

A comprehensive web application designed to streamline doctor-patient interactions, appointment scheduling, and medical record management. This project aims to improve healthcare accessibility and efficiency for both medical professionals and patients.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)
- [Useful Resources](#useful-resources)
- [Acknowledgements](#acknowledgements)
- [Author](#author)
- [Dependencies](#dependencies)
- [Version History](#version-history)
- [Browser Compatibility](#browser-compatibility)
- [Performance Metrics](#performance-metrics)
- [Accessibility](#accessibility)
- [Security](#security)
- [FAQs](#faqs)
- [Related Projects](#related-projects)

## Technologies Used

- React.js for the frontend user interface
- Node.js and Express.js for the backend server
- MongoDB for the database
- Bootstrap v5.3 for responsive design
- Render.com for cloud hosting and deployment

## Features

- User-friendly interface for doctors and patients
- Secure patient registration and login system
- Appointment scheduling and management
- Electronic health records (EHR) management
- Real-time chat between doctors and patients
- Prescription management and tracking
- Automated appointment reminders via email and SMS
- Integration with medical imaging systems
- Billing and insurance claim processing
- Tele-medicine video consultations
- Patient health monitoring and analytics dashboard
- Multi-language support for diverse patient populations

## Demo

[Link to live demo](https://your-demo-link.com)

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Installation

```bash
git clone https://github.com/akmtasdikulislam/doctors-portal.git
cd doctors-portal
npm install
```

## Usage

```bash
npm start
```

## API Reference

<!-- Get all items
  GET /api/items

| Parameter | Type | Description |
|-----------|------|-------------|
| api_key   | string | Required. Your API key | -->

To be written soon.

## Environment Variables

<!-- To run this project, you will need to add the following environment variables to your .env file

API_KEY

ANOTHER_API_KEY -->

To be written soon.

## Project Structure

<pre>
doctors-portal/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   │   ├── appointment.png
│   │   │   ├── bg.png
│   │   │   ├── cavity.png
│   │   │   ├── chair.png
│   │   │   ├── doctor-small.png
│   │   │   ├── doctor.png
│   │   │   ├── dribble_1.gif
│   │   │   ├── fluoride.png
│   │   │   ├── footer.png
│   │   │   ├── login.png
│   │   │   ├── people1.png
│   │   │   ├── people2.png
│   │   │   ├── people3.png
│   │   │   ├── treatment.png
│   │   │   └── whitening.png
│   │   ├── logo/
│   │   │   ├── logo-main.png
│   │   │   ├── logo.ai
│   │   │   ├── logo.ico
│   │   │   ├── logo.png
│   │   │   └── logo.svg
│   ├── screenshots/
│   ├── components/
│   │   ├── AppointmentHeader/
│   │   |   └── AppointmentHeader.jsx
│   │   ├── BookAppointment/
│   │   |   └── BookAppointment.jsx
│   │   ├── BookAppointmentCard/
│   │   |   └── BookAppointmentCard.jsx
│   │   ├── BookAppointmentModal/
│   │   |   └── BookAppointmentModal.jsx
│   │   ├── ContactUs/
│   │   |   └── ContactUs.jsx
│   │   ├── Dashboard/
│   │   |   ├── AppointmentModal
|   │   │   |   └── AppointmentModal.jsx
│   │   |   ├── Appointments
|   │   │   |   └── Appointments.jsx
│   │   |   ├── DashboardHeader
|   │   │   |   └── DashboardHeader.jsx
│   │   |   ├── DashboardHome
|   │   │   |   └── DashboardHome.jsx
│   │   |   ├── DashboardMetrics
|   │   │   |   └── DashboardMetrics.jsx
│   │   |   ├── DoctorProfileModal
|   │   │   |   └── DoctorProfileModal.jsx
│   │   |   ├── Doctors
|   │   │   |   └── Doctors.jsx
│   │   |   ├── DoctorView
|   │   │   |   ├── DoctorAppointments.jsx
|   │   │   |   └── DoctorDashboardHome.jsx
│   │   |   ├── MedicalRecords
|   │   │   |   └── MedicalRecords.jsx
│   │   |   ├── Messages
|   │   │   |   └── Messages.jsx
│   │   |   ├── NotificationPanel
|   │   │   |   └── NotificationPanel.jsx
│   │   |   ├── PatientProfileModal
|   │   │   |   └── PatientProfileModal.jsx
│   │   |   ├── Patients
|   │   │   |   └── Patients.jsx
│   │   |   ├── Payments
|   │   │   |   └── Payments.jsx
│   │   |   ├── Prescription
|   │   │   |   └── Prescription.jsx
│   │   |   ├── ProfilePanel
|   │   │   |   └── ProfilePanel.jsx
│   │   |   ├── ProgressiveMetrics
|   |   │   │   └── ProgressiveMetrics.jsx
│   │   |   ├── QuickActions
|   │   │   |   └── QuickActions.jsx
│   │   |   ├── RecentActivity
|   │   │   |   └── RecentActivity.jsx
│   │   |   ├── RecentPrescriptions
|   │   │   |   └── RecentPrescriptions.jsx
│   │   |   ├── Settings
|   │   │   |   ├── DoctorProfileSettings
|   |   │   │   |   └── DoctorProfileSettings.jsx
|   │   │   |   ├── PreferencesSettings
|   |   │   │   |   └── PreferencesSettings.jsx
|   │   │   |   ├── PrivacySettings
|   |   │   │   |   └── PrivacySettings.jsx
|   │   │   |   ├── PatientProfileSettings
|   |   │   │   |   └── PatientProfileSettings.jsx
|   │   │   |   ├── SecuritySettings
|   |   │   │   |   └── SecuritySettings.jsx
|   │   │   |   └── Settings.jsx
│   │   |   ├── Tasks
|   │   │   |   └── Tasks.jsx
│   │   |   ├── UpcomingAppointments
|   │   │   |   └── UpcomingAppointments.jsx
│   │   ├── DentalCareService/
│   │   |   └── DentalCareService.jsx
│   │   ├── EmptyContainer/
│   │   |   └── EmptyContainer.jsx
│   │   ├── Footer/
│   │   |   └── Footer.jsx
│   │   ├── FormError/
│   │   |   └── FormError.jsx
│   │   ├── FormStateCard/
│   │   |   └── FormStateCard.jsx
│   │   ├── Header/
│   │   |   └── Header.jsx
│   │   ├── InfoCard/
│   │   |   └── InfoCard.jsx
│   │   ├── LoginForm/
│   │   |   └── LoginForm.jsx
│   │   ├── LoginFormOverlay/
│   │   |   └── LoginFormOverlay.jsx
│   │   ├── MakeAppointment/
│   │   |   └── MakeAppointment.jsx
│   │   ├── NavBar/
│   │   |   └── NavBar.jsx
│   │   ├── PrivateRoute/
│   │   |   └── PrivateRoute.jsx
│   │   ├── ServiceCard/
│   │   |   └── ServiceCard.jsx
│   │   ├── Services/
│   │   |   └── Services.jsx
│   │   ├── SideBar/
│   │   |   └── SideBar.jsx
│   │   ├── SignUpForm/
│   │   |   └── SignUpForm.jsx
│   │   ├── SignUpFormOverlay/
│   │   |   └── SignUpFormOverlay.jsx
│   │   ├── TestimonialCard/
│   │   |   └── TestimonialCard.jsx
│   │   ├── Testimonials/
│   │   |   └── Testimonials.jsx
│   ├── functions/
│   │   ├── Authentication/
|   │   │   ├── handleContinueWithGoogle.js
|   │   │   ├── handleLogin.js
|   │   │   ├── handleSignOut.js
│   │   |   └── handleSignUp.js
│   │   ├── formatDate.js
│   │   ├── formatErrorMessage.js
│   │   ├── generatedId.js
│   ├── pages/
│   │   ├── Appointment/
│   │   |   └── Appointment.jsx
│   │   ├── Dashboard/
│   │   |   └── Dashboard.jsx
│   │   ├── Home/
│   │   |   └── Home.jsx
│   │   ├── Login/
│   │   |   └── Login.jsx
│   │   ├── NotFound/
│   │   |   └── NotFound.jsx
│   │   ├── SignUp/
│   │   |   └── SignUp.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── desktop.ini
├── doctors-portal.fig
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── yarn.lock
</pre>

## Contributing

Contributions are always welcome!

## Testing

To run tests, run the following command

```bash
npm test
```

## Deployment

To deploy this project run

```bash
npm run deploy
```

## License

MIT

## Useful Resources

- [100 CSS Box Shadow Examples](https://htmlcssfreebies.com/css-box-shadow-examples/) - The box-shadow used in this project is taken from this link.

- [Typescale](https://typescale.com/) - The font-sizes (Minor Third Ratio)for headings and other texts are generated using Typescale.

- [Google Fonts](https://fonts.google.com/) - The font-family used in this project is taken from Google Fonts.

- [Color Pedia | DopleyColors](https://colors.dopely.top/color-pedia) - The color palette (Shades & Tints) used in this project is taken from Color Pedia.

- [react-calendar](https://github.com/wojtekmaj/react-calendar) - The calendar used in this project is taken from react-calendar.

- [react-hook-form](https://react-hook-form.com/) - The form validation used in this project is taken from react-hook-form.

- [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/) - The Bootstrap framework used in this project is taken from Bootstrap.

- [Environment Variables in Vite + React](https://www.youtube.com/watch?v=yGNGtd-d3ro) - This video helped me to understand how to use environment variables in Vite + React.

- [Env Variables and Modes](https://vite.dev/guide/env-and-mode.html) - This article helped me to understand how to use environment variables in Vite + React.
- [How to Undo Pushed Commits with Git](https://dev.to/github/how-to-undo-pushed-commits-with-git-2pe6) - This article helped me to understand how to undo pushed commits with Git.

- [How can I undo a `git commit` locally and on a remote after `git push`](https://stackoverflow.com/questions/6459080/how-can-i-undo-a-git-commit-locally-and-on-a-remote-after-git-push) - This StackOverflow question helped me to understand how to undo a `git commit` locally and on a remote after `git push`.

- [Authenticate Using Google with JavaScript](https://firebase.google.com/docs/auth/web/google-signin?authuser=0) - This article helped me to understand how to authenticate using Google with JavaScript.

- [Authenticate with Firebase using Password-Based Accounts using Javascript ](https://firebase.google.com/docs/auth/web/password-auth?authuser=0) - This article helped me to understand how to authenticate with Firebase using Password-Based Accounts using Javascript.

- [Manage Users in Firebase](https://firebase.google.com/docs/auth/web/manage-users) - This article helped me to understand how to manage users (create and update user profile) in Firebase.

- [Set Up with React | Font Awesome Docs](https://docs.fontawesome.com/web/use-with/react) - This article helped me to understand how to set up Font Awesome with React.

- [Using a Package Manager | Font Awesome Docs](https://docs.fontawesome.com/web/setup/packages) - This article helped me to understand how to use a package manager (npm or Yarn) to install Font Awesome package.

## Acknowledgements

- [Icons8](https://icons8.com/) - The hospital icon used as the logo is taken from Icons8.

## Author

This project was developed by Akm Tasdikul Islam.

### Contact Information

- **Email:** akmtasdikulislam@gmail.com
- **GitHub:** [Akm Tasdikul Islam](https://github.com/akmtasdikulislam)

## Dependencies

- firebase: ^10.14.1
- lucide-react: ^0.453.0
- react: ^18.3.1
- react-calendar: ^5.0.0
- react-dom: ^18.3.1
- react-hook-form: ^7.53.0
- react-modal: ^3.16.1
- react-router-dom: ^6.26.2

## Browser Compatibility

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)

## Performance Metrics

<!-- Lighthouse score: 95/100
Page load time: < 3s -->

To be written soon.

## Accessibility

This project aims to be WCAG 2.1 AA compliant.

## Security

<!-- Describe any security measures or considerations... -->

To be written soon.

## FAQs

<!-- Question 1? Answer 1

Question 2? Answer 2 -->

To be written soon.

## Related Projects

To be written soon.

CSS Heading/Title Levels
• Level 1 ⇒ ===== Pages =====
• Level 2 ⇒ >>> Components <<<
• Level 3 ⇒ ** Group **
• Level 4 ⇒ Selector
