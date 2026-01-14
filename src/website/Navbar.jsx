import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container-fluid">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logo.webp"
            alt="Company Logo"
            height="80"
          />
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </span>
<ul className="dropdown-menu">
  <li>
    <Link to="/services" className="dropdown-item">
      Biomass Supply Management
    </Link>
  </li>
  <li>
    <Link to="/services/operation" className="dropdown-item">
      Operation & Management
    </Link>
  </li>
  <li>
    <Link to="/services/other" className="dropdown-item">
      Other Services
    </Link>
  </li>
</ul>


            </li>

            {/* Gallery Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Gallery
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/gallery/images" className="dropdown-item">
                    Images
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery/videos" className="dropdown-item">
                    Videos
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Button */}
          <div className="d-flex">
  <a
    href="https://virtualwhiteflame.com/uploads/171827829852972797.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-success"
  >
    Brochure
  </a>
</div>

        </div>
      </div>
    </nav>
  );
}
