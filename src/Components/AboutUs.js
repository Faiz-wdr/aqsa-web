// components/AboutUs.js
import React from 'react';
import './about.css'; // Import the new CSS file

function AboutUs() {
  return (
    <div className="about-section" id='about-section'>
      <div className="about-left">
      <div className='text-sec-abt'>
        <h2>About Us</h2>
        <p>
An educational institution stands apart with its held high among a slew of information and technological institutions with its accent on grooming young men in to scholars fully imbued with the true spirit of Islam ever ready to meet the challenges of modern world. At present, more than 500 students are studying in various institutions like Junior and Senior Da’wa colleges, Hifz-ul-Qur’an college, Integrated Hifz Campus (IHC) with English school affiliated to CBSE, Alqamar Khaima for intellectual and moral Activation (ALKHAIMA) and Women’s Academy under the tutelage of Alqamar.
AQSA, which stands for ALQAMAR STUDENTS' ASSOCIATION, is an integral part of ALQAMAR Institute, our esteemed educational institution. With a diverse range of departments, AQSA serves as a dynamic platform for student engagement and empowerment.

The Quality & Development department within AQSA is dedicated to upholding excellence and ensuring continuous improvement in all aspects of our institute. Through rigorous quality assessments and strategic development initiatives, this department strives to enhance the overall educational experience for students.

The Health & Reception department of AQSA plays a pivotal role in promoting student well-being and providing comprehensive healthcare services. It is responsible for creating a welcoming and supportive environment that addresses the physical and emotional needs of students.

The Publishing Bureau department of AQSA is responsible for producing and disseminating relevant publications that inform and engage the student community. Through newsletters, magazines, and other mediums, this department fosters a sense of connectivity and keeps students updated about various activities and opportunities.

Cultural & Arts is an exciting department within AQSA that celebrates and promotes cultural diversity among students. It organizes events, performances, and exhibitions to showcase the rich artistic talents within our institute, fostering a vibrant and inclusive community.
</p>
        </div>
      </div>
      <div className="about-right">
        <h2>Office bearers <span className='year'>2023-24</span></h2>
        <div className="office-bearers">
          <div className="members">
            <div className="member-image1"></div>
            <div className="member-details">
              <h4>Fayiz Thirur</h4>
              <p>President</p>
            </div>
          </div>
          <div className="members">
            <div className="member-image2"></div>
            <div className="member-details">
              <h4>Ajmal Kannur</h4>
              <p>Vice President</p>
            </div>
          </div>
          <div className="members">
            <div className="member-image3"></div>
            <div className="member-details">
              <h4>Faiz Wandoor</h4>
              <p>Finance Secretary</p>
            </div>
          </div>
        </div>
        <h3>Vice Presidents</h3>
        <hr />
        <div className="vice-presidents">
          <div className="member">
            <h4>Fayiz Mangapoyil</h4>
          </div>
          <div className="member" id='name-right'>
            <h4>Fayiz Mahfool</h4>
          </div>
          <div className="member">
            <h4>Nizam Kappad</h4>
          </div>
          <div className="member" id='name-right'>
            <h4>Sahal Kummoli</h4>
          </div>
        </div>
        <h3>Secretaries</h3>
        <hr />
        <div className="secretaries">
          <div className="member">
            <h4>Jasil Karamoola</h4>
          </div>
          <div className="member" id='name-right'>
            <h4>Dilshad Kizhisseri <span className='leader'>(Leader)</span></h4>
          </div>
          <div className="member">
            <h4>Saeed Kannu</h4>
          </div>
          <div className="member" id='name-right'>
            <h4>Afsal Nallur</h4>
          </div>
          <div className="member">
            <h4>Jasir Vettuppara</h4>
          </div>
          <div className="member" id='name-right'>
            <h4>Thanseeh Mattool</h4>
          </div>
          <div className="member">
            <h4>Uvais Kattippara</h4>
          </div>
          <div className="member" id='name-right'>
            <h4>Muhsin Kayakkodi</h4>
          </div>
          <div className="member">
            <h4>Nijad Adivaram</h4>
          </div>
          <div className="member" id='name-right'>
            <h4>Yaseen Kuttyadi</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
