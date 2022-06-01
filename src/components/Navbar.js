import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/calculator">Calculator</Link>
    <Link to="/quote">Quote</Link>
  </nav>
);

export default Navbar;
