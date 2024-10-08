# Real-Time Location Tracking App

## Overview

This application provides real-time location tracking using a combination of Express, Socket.IO, and Leaflet. Users can view live location updates on a map powered by Leaflet and OpenStreetMap. The app leverages WebSockets for real-time communication between clients and the server.

## Features

- **Real-Time Location Tracking**: Updates are sent and received in real-time using Socket.IO.
- **Leaflet Integration**: Displays live location updates on a Leaflet map.
- **Geolocation API**: Utilizes the browser's Geolocation API to fetch and send location data.
- **Permission Handling**: Manages geolocation permissions for a better user experience.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ashishkaushik05/TrackerProject
   cd TrackerProject
   ```

2. **Install dependencies:** Make sure you have Node.js and npm installed, then run:

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```
   The server will start at `http://localhost:3000`.

## Usage

1. Open the application in a browser at `http://localhost:3000`.
2. Grant geolocation permissions when prompted.
3. The map will display your real-time location along with other connected users' locations.

## File Structure

- `server.js`: The main server file for Express and Socket.IO setup.
- `public/`: Contains static files such as CSS and JavaScript.
  - `css/`: Stylesheets for the project.
  - `js/`: JavaScript files for client-side functionality.
    - `main.js`: Contains the logic for real-time location updates and Leaflet map interactions.
- `views/`: EJS template files.
  - `index.ejs`: The main HTML template for the application.
- `package.json`: Contains project metadata and dependencies.

## Dependencies

- **Express**: Web framework for Node.js.
- **Socket.IO**: Real-time bidirectional event-based communication.
- **Leaflet**: Interactive map library.
- **OpenStreetMap**: Map tiles provider.

## Contributing

Feel free to submit issues, bug reports, and pull requests. Please ensure that your contributions adhere to the project's coding standards.

## Acknowledgements

- [Leaflet](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Socket.IO](https://socket.io/)

## Contact

For any questions or feedback, please contact [ashish._.kaushik@outlook.com](mailto:ashish._.kaushik@outlook.com).
