import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';

const NavBar = () => (
  <header>
    <div className="navbar">
      <h2>Math-magicians</h2>
      <ul>
        <Link to="./home"><li>Home</li></Link>
        <Link to="./app"><li>Calculator</li></Link>
        <Link to="/quote"><li>Quote</li></Link>
      </ul>

    </div>
  </header>
);

export default NavBar;
