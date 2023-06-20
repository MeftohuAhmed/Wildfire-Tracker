/**
 * @fileOverview LocationInfo.js is a component that displays additional information about a selected location.
 */

import React from 'react';

/**
 * The LocationInfo component displays additional information about a selected location.
 * @param {Object} info - Object containing location information.
 */
const LocationInfo = ({ info }) => {
  return (
    <div className='location-info'>
      <h2>Event Location Info</h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>Title: <strong>{info.title}</strong></li>
      </ul>
    </div>
  );
}

export default LocationInfo;