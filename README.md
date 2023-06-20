# Wildfire Tracker

Wildfire Tracker is a web application that tracks and displays wildfire events using NASA's EONET API. It provides real-time information about wildfires happening around the world.

## Features

- Fetches wildfire event data from NASA's EONET API
- Displays the wildfire events on a Google Map
- Shows additional information about selected wildfire locations
- Uses location markers to indicate the presence of wildfires
- Responsive design for different screen sizes

## Technologies Used

- React.js
- Google Maps API
- NASA's EONET API
- Iconify for icons

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   
git clone https://github.com/MeftohuAhmed/wildfire-tracker.git


2. Navigate to the project directory:

cd wildfire-tracker

3. Install the dependencies:

npm install

### Usage

1. Obtain a Google Maps API key by following the instructions [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

2. Replace `'API_KEY'` with your actual Google Maps API key in the `Map.js` file:

bootstrapURLKeys={{ key: 'API_KEY' }}

3. Start the development server:

npm start

4. Open your browser and visit `http://localhost:3000` to view the application.
