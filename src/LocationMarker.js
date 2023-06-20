/**
 * @fileOverview LocationMarker.js is a component that displays a location marker on the map.
 */

import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

/**
 * The LocationMarker component displays a location marker on the map.
 * @param {number} lat - Latitude coordinate of the marker.
 * @param {number} lng - Longitude coordinate of the marker.
 * @param {Function} onClick - Click event handler for the marker.
 */
const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-icon' /> {/* Display the location icon */}
    </div>
  );
}

export default LocationMarker;