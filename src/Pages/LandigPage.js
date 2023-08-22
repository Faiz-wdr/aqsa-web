import React from 'react';
import './LandingPage.css';
import '../Components/navbar.css';
import AboutUs from '../Components/AboutUs';
import Syndicates from '../Components/Syndicates';
import Gallery from '../Components/Gallery';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import AQSALogo from '../Assets/img/aqsa-logo.svg'
import { Link } from 'react-router-dom';
import Popup from '../Components/popup';


function LandingPage() {
    
    const scrollToConatct = () => {
        const aboutSection = document.getElementById('contact-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">
          <img src={AQSALogo} alt='AQSA Logo'></img>
          <h3 className='aqsa'>AQSA</h3>
        </div>
        <div className="nav-elements">
          <ul>
            <li><Link to="/">
            Home
          </Link></li>
            <li><a href="#about-section">About Us</a></li>
            <li><a href="#Syndicates">Syndicates</a></li>
            <li><a href="#Gallery">Gallery</a></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/MagazinePage">Magazines</Link></li>
          </ul>
        </div>
        <div className="contact-button">
          <button className='btn' onClick={scrollToConatct}>Let's Talk</button>
          <button className="btn-m" onClick={() => { window.location.href = '/MagazinePage'; }}>Magazines</button>
        </div>
      </header>
      <Popup />
      <div className="hero-section">
      <div className='hero-text'>
        <h1>Cultivating Leaders of Tomorrow:<br></br>
Empowering Students to Shine</h1>
        <p>official website of ALQAMAR Students’ Association</p>
        </div>
      </div>
      <AboutUs />
      <Syndicates />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
