import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          SURE.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "#039BE5", border: "none" }}
        >
          <i class="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/" className="dropdown-item">
                  Action
                </Link>
                <Link to="/" className="dropdown-item">
                  Another action
                </Link>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Claim
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto navRightIcons">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Download App
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Button variant="outline-secondary" >Sign Up</Button>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
