
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-heading">AQSA</h2>
        <nav className="footer-nav">
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Syndicates</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Magazines</a></li>
          </ul>
        </nav>
        <div className="footer-social">
        <a href="https://www.youtube.com/@aqsaofficial8407"><FontAwesomeIcon icon={faYoutube} /></a>
  <a href="https://www.instagram.com/students_union_of_alqamar/"><FontAwesomeIcon icon={faInstagram} /></a>
  <a href="https://www.facebook.com/ALQAMARstudents"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
        <hr className="footer-line" />
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} AQSA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
 