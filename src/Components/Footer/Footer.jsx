import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <h1>SURE.</h1>
        <p>
          <span>Ⓒ</span> 2017-2018 Sure Inc. <br /> All rights reserved.
        </p>
        <Link className="footerLink" to="/">
          Privacy Policy
        </Link>
        <Link className="footerLink" to="/">
          Terms of Service
        </Link>
        <Link className="footerLink" to="/">
          Licenses
        </Link>
        <Link className="footerLink" to="/">
          Products
        </Link>
        <Link className="footerLink" to="/">
          Help Center
        </Link>
        <Link className="footerLink" to="/">
          Contact Us
        </Link>
        <div style={{display: 'flex', flexDirection: 'row', padding: '0'}}>
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook-f" />
          <i className="fab fa-instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
