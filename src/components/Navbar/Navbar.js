// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/genres" className="nav-link">
            Genres
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
