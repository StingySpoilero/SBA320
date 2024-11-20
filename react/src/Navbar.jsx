import React from 'react';
import './Navbar.css'; // Import CSS for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Player Data Fetcher</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Players">Players</a></li>
        <li><a href="/Secret">Secret</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;