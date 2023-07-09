// Syndicate.js

import React from 'react';
import './Syndicate.css';
import logo2 from '../Assets/img/qdlogo.svg';

const departments = [
  {
    logo: logo2,
    name: 'Quality & Development',
    description: 'Focused on ensuring excellence and continuous improvement in all aspects of our association'
  },
  {
    logo: logo2,
    name: 'Health & Reception',
    description: 'Dedicated to promoting well-being and providing support to students through healthcare and welcoming services'
  },
  {
    logo: logo2,
    name: 'SSF Campus Sector',
    description: 'Empowering Minds, Enriching Futures Strengthening Students Potential'
  },
  {
    logo: logo2,
    name: 'Publishing Bureau',
    description: 'Engaged in producing and disseminating relevant publications to inform and engage the student community'
  },
  {
    logo: logo2,
    name: 'Cultural & Arts',
    description: 'Promoting cultural and fostering artistic expression among students through various initiatives'
  },
  {
    logo: logo2,
    name: 'Media',
    description: 'Responsible for effective communication, media coverage, and sharing information within the association and beyond'
  }, {
    logo: logo2,
    name: 'Library & Information',
    description: 'Providing access to knowledge and resources, facilitating research, and promoting information literacy'
  },
  {
    logo: logo2,
    name: 'Islamic Research',
    description: 'Engaged in studying and advancing understanding of Islamic principles and their relevance to students lives'
  },
  {
    logo: logo2,
    name: 'Language Department',
    description: 'Focused on enhancing language skills and offering language learning opportunities to students'
  },
];

const Syndicate = () => {
  const renderDepartments = () => {
    return departments.map((department, index) => (
      <div className="syndicate-card"  key={index}>
        <div className="syndicate-card-content">
          <div className="syndicate-card-logo">
          <img src={department.logo} alt={department.name} />
          </div>
          <div className="syndicate-card-details">
            <h3 className="syndicate-card-heading">{department.name}</h3>
            <p className="syndicate-card-description">{department.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="syndicate-section" id='Syndicates'>
      <h2 className="syndicate-heading">Syndicates</h2>
      <p className="syndicate-description">One line description</p>
      <div className="syndicate-list">{renderDepartments()}</div>
    </div>
  );
};

export default Syndicate;
