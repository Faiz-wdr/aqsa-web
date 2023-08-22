import React, { useState, useEffect } from 'react';
import './popup.css';
import Illumina from '../Assets/img/red.svg'

function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const countdownDate = new Date('2023-10-20').getTime();

  // Set the delay before showing the popup (in milliseconds)
  const popupDelay = 1000; // Adjust as needed

  useEffect(() => {
    // Automatically show the popup after the specified delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, popupDelay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <div className={`overlay ${showPopup ? 'show' : ''}`}>
        <div className={`popup-background ${showPopup ? 'show' : ''}`}></div>
        <div className={`popup-container ${showPopup ? 'show' : ''}`}>
          <div className='count-cntnt'>
          <div className="countdown">
          <p>12th Edition</p>
            <img src={Illumina} className='ill-img' alt='Illumina-logo'></img>
            <div className="countdown">
            
            <div className="countdown-unit">
              <span className='letters'>{timeLeft.days}</span><br></br><span className='ltr'>Days</span>
            </div>
            <div className="countdown-unit">
            <span className='letters'>{timeLeft.hours}</span><br></br><span className='ltr'>Hours</span>
            </div>
            <div className="countdown-unit">
            <span className='letters'>{timeLeft.minutes}</span><br></br><span className='ltr'>Minutes</span>
            </div>
            <div className="countdown-unit">
            <span className='letters'>{timeLeft.seconds}</span><br></br><span className='ltr'>Seconds</span>
            </div>
            <p className='ready'>Get Ready!</p>
          </div>
          </div>
          </div>
          <button className="close-button" onClick={() => setShowPopup(false)}>
            × Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
