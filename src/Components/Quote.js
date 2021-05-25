import React from 'react';
// import NavBar from './Nav';
import './App.css';

const Quote = () => (
  <>
    <div className="quote-nav">
      {/* <NavBar /> */}
    </div>
    <div className="calculator">
      <h1 className="quote">Quote of the day</h1>
      <p className="day-quote">
        <q>
          Without mathematics, Everything around you is numbers.
          <span>Albert Einstein</span>
        </q>
      </p>

    </div>
  </>
);

export default Quote;
