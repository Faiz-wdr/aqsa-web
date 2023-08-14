// Syndicate.js

import React from 'react';
import './Syndicate.css';
import Quality from '../Assets/img/qdlogo.svg';
import Health from '../Assets/icons/Health.svg'
import Publish from '../Assets/icons/Publish.svg'
import Media from '../Assets/icons/Media.svg'
import Library from '../Assets/icons/Library.svg'
import Language from '../Assets/icons/Language.svg'
import Islamic from '../Assets/icons/IslamicResearch.svg'
import SSF from '../Assets/icons/ssf.svg'
import Cultural from '../Assets/icons/cultural.svg'

const departments = [
  {
    logo: Quality,
    name: 'Quality & Development',
    description: 'Focused on ensuring excellence and continuous improvement in all aspects of our association'
  },
  {
    logo: Health,
    name: 'Health & Reception',
    description: 'Dedicated to promoting well-being and providing support to students through healthcare and welcoming services'
  },
  {
    logo: SSF,
    name: 'SSF Campus Sector',
    description: 'Empowering Minds, Enriching Futures Strengthening Students Potential'
  },
  {
    logo: Publish,
    name: 'Publishing Bureau',
    description: 'Engaged in producing and disseminating relevant publications to inform and engage the student community'
  },
  {
    logo: Cultural,
    name: 'Cultural & Arts',
    description: 'Promoting cultural and fostering artistic expression among students through various initiatives'
  },
  {
    logo: Media,
    name: 'Media',
    description: 'Responsible for effective communication, media coverage, and sharing information within the association and beyond'
  }, {
    logo: Library,
    name: 'Library & Information',
    description: 'Providing access to knowledge and resources, facilitating research, and promoting information literacy'
  },
  {
    logo: Islamic,
    name: 'Islamic Research Hub',
    description: 'Engaged in studying and advancing understanding of Islamic principles and their relevance to students lives'
  },
  {
    logo: Language,
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
      <p className="syndicate-description">Various departments under AQSA</p>
      <div className="syndicate-list">{renderDepartments()}</div>
    </div>
  );
};

export default Syndicate;
