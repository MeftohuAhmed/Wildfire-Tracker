/**
 * @fileOverview App.js is the main component of the application that fetches event data from NASA's API
 * and renders the Header and Map components.
 */

import "./App.css";
import Header from "./Header";
import Map from "./Map";
import { useState, useEffect } from "react";
import Loading from "./Loading";


function App() {
  // State variables
  const [eventData, setEventData] = useState([]); // Holds the fetched event data
  const [loading, setLoading] = useState(false); // Indicates whether data is being fetched

  /**
   * useEffect is a React hook that runs the specified effect function after the component is rendered.
   * It fetches event data from NASA's API and updates the state variables accordingly.
   */
  useEffect(() => {
    /**
     * fetchEvents is an async function that fetches event data from NASA's API and updates the state variables.
     */
    const fetchEvents = async () => {
      setLoading(true); // Set loading state to true before fetching data
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events"); // Fetch event data
      const { events } = await res.json(); // Extract the 'events' property from the response

      setEventData(events); // Update the state variable with fetched event data
      setLoading(false); // Set loading state to false after data is fetched
    };

    fetchEvents(); // Call the fetchEvents function when the component is rendered
    console.log(eventData); // Log the event data to the console
  }, []); // The empty dependency array ensures that the effect runs only once, when the component mounts

  /**
   * The App component renders the Header and Map components.
   * If loading state is true, it renders the Loading component; otherwise, it renders the Map component with the fetched event data.
   */
  return (
    <div className="App">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loading />}
    </div>
  );
}

export default App;