import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <Link to="/view" className="brand-logo center">
          Mogger
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/view">View</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
