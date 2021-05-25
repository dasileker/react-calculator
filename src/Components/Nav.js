import { Link } from 'react-router-dom';
import React from 'react';
<<<<<<< HEAD
// import Home from './Home';
=======
>>>>>>> 47348e66858a86e9e984fbcaebd62c444ac4abac
import './App.css';

const NavBar = () => (
  <header>
    <div className="navbar">
      <h2>Math-magicians</h2>
      <ul>
        <Link to="./home"><li>Home</li></Link>
        <Link to="./app"><li>Calculator</li></Link>
<<<<<<< HEAD
        <Link to="./Quote"><li>Quote</li></Link>
=======
        <Link to="/quote"><li>Quote</li></Link>
>>>>>>> 47348e66858a86e9e984fbcaebd62c444ac4abac
      </ul>

    </div>
  </header>
);

export default NavBar;
