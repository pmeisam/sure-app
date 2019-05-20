import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            style={{ backgroundImage: "url('./images/header-bg.png')" }}
            className="header"
          >
            <h1>Sure + You.</h1>
            <p>
              Complement your core business and{" "}
              <span>increase customer lifetime value</span>
              <br />
              with intgrated offers from top-tier insurance carriers.
            </p>
            <Link to='/hacker-news' className="headerLink">Get Started</Link>
            <img className="headerImg" src="./images/geekCity.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
