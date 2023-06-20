/**
 * @fileOverview Map.js is a component that displays a Google Map with location markers based on the event data.
 * It also shows additional information about a selected location.
 */

import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';

/**
 * The Map component displays a Google Map with location markers and additional information about a selected location.
 * @param {Object[]} eventData - Array of event data objects.
 * @param {Object} center - Object specifying the center coordinates of the map.
 * @param {number} zoom - The initial zoom level of the map.
 */
const Map = ({ eventData, center, zoom }) => {
    const [locInfo, setLocInfo] = useState(null); // Holds the information about the selected location

    /**
     * Create location markers based on the event data.
     * If the event category id is 8 (wildfires), a LocationMarker component is created with the coordinates and click event handler.
     * @returns {JSX.Element[]} Array of LocationMarker components.
     */
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return (
                <LocationMarker
                    key={ev.id}
                    lat={ev.geometries[0].coordinates[1]}
                    lng={ev.geometries[0].coordinates[0]}
                    onClick={() => setLocInfo({ id: ev.id, title: ev.title })}
                />
            );
        }
        return null;
    });

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'API_KEY' }} // Removed my Google Maps API key
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
                <LocationMarker lat={center.lat} lng={center.lng} /> {/* Display a marker at the center */}
            </GoogleMapReact>
            {locInfo && <LocationInfo info={locInfo} />} {/* Show location information if a location is selected */}
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8765
    },
    zoom: 6
}

export default Map;
