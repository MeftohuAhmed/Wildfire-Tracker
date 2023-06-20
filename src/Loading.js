/**
 * @fileOverview Loading.js is a component that displays a loading spinner and a message while data is being fetched.
 */

import React from 'react';
import spinner from './Spinner.gif';

/**
 * The Loading component displays a loading spinner and a message while data is being fetched.
 */
const Loading = () => {
  return (
    <div className='loader'>
      <img src={spinner} alt='Loading' /> {/* Display the loading spinner */}
      <h1>Fetching Data</h1> {/* Display the loading message */}
    </div>
  );
};

export default Loading;