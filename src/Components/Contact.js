// Contact.js

import React, {useState} from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Your EmailJS template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Your EmailJS service configuration
    const serviceId = 'service_maea9bc';
    const templateId = 'template_4f07n3v';
    const userId = '6NGR8LS-KLTOK471H';

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };



  return (
    <div className="contact-section" id='contact-section'>
      <div className="contact-info">
        <h2 className="contact-heading">Let's Talk</h2>
        <div className="contact-details">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p className="contact-text">&nbsp;&nbsp;+91 <span className='number'>9072 313 304</span></p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p className="contact-text">&nbsp;&nbsp;aqsanitc@gmail.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p className="contact-text">Companymukku, NITC, Kozhikode, <br></br>
   <span className='space'>&nbsp;&nbsp;</span>  Kerala, India, 673601, 0465 22 88 313</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        {/* <h2 className="contact-heading">Let's Talk</h2> */}
        <form onSubmit={handleSubmit}>
          <input  type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-input"
            required />
          <input type="email"
            name="email"
            placeholder="Email"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
            className="contact-input"
            required />
          <textarea name="message"
            placeholder="Message"
            value={message}
          onChange={(e) => setMessage(e.target.value)}
            className="contact-textarea"
            required>
            </textarea>
          <button type="submit" disabled={isLoading} className="contact-btn">
          {isLoading ? 'Sending...' : 'Send Message'}</button>
          {isSuccess && <p className='sent'>Message sent successfully!<FontAwesomeIcon className='tick-icon' icon={faCircleCheck} style={{color: "#36fa00",}} /></p>}
           {/* <p className='sent'>Message sent successfully! <FontAwesomeIcon className='tick-icon' icon={faCircleCheck} style={{color: "#36fa00",}} /></p> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
