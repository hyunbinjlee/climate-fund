# Donor Stories Application

## Overview
The Donor Stories application allows users to submit their profiles, including a name, a bio, and an image, to acknowledge their contributions to the Evanston Climate Fund. The application consists of a React frontend and an Express backend that handles API requests and serves the React application.

## Features
- **Donor Submission**: Donors can submit their profiles via a form.
- **Admin Dashboard**: Admins can review and approve submitted profiles.
- **User Profiles Page**: Displays all submitted and approved profiles.

## Technology Stack
- **Frontend**: React, Axios
- **Backend**: Node.js, Express, Multer (for handling file uploads)
- **Database**: [Your database here if applicable]

## Project Structure
project/
|-- node_modules/
|-- src/
| |-- components/
| |-- pages/
| |-- App.js
| |-- index.js
|-- api/
| |-- donors.js
|-- uploads/
|-- server.js
|-- package.json
|-- .gitignore
|-- README.md


## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
git clone [repository-url]

cd [project-name]
npm install


### Running the Application
1. Run the backend server:
2. In a new terminal, navigate to the React application and start the React development server:
cd [path-to-react-app]
npm start3. Open `http://localhost:3000` in your browser to view the app.

## API Endpoints
- `POST /api/donors`: Submit a new donor profile.
- `GET /api/donors`: Retrieve all submitted donor profiles.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Your Name – [hyunbinlee@u.northwestern.edu]

Project Link: placeholder

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
