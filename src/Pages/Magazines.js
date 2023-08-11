// MagazinePage.js

import React from 'react';
import './magazinePage.css';
import MagazineCover from '../Assets/img/magazine1.png';
import Footer from '../Components/Footer';

const MagazinePage = () => {


  // Dummy data for the list of magazines
  const magazines = [
    {
      id: 1,
      cover: MagazineCover,
      name: 'Magazine 1',
      language: 'English',
      publishedDate: 'May 2023',
      link: 'https://online.fliphtml5.com/ohujj/wqld/'
    },
    {
      id: 2,
      cover: MagazineCover,
      name: 'Magazine 2',
      language: 'Spanish',
      publishedDate: 'June 2023',
      link: 'https://online.fliphtml5.com/ohujj/wqld/'
    },
    {
      id: 3,
      cover: MagazineCover,
      name: 'Magazine 3',
      language: 'French',
      publishedDate: 'July 2023',
      link: 'https://online.fliphtml5.com/ohujj/wqld/'
    },
    {
      id: 4,
      cover: MagazineCover,
      name: 'വളണ്ടിയർ',
      language: 'German',
      publishedDate: 'August 2023',
      link: 'https://online.fliphtml5.com/ohujj/wqld/'
    }
  ];

  return (
    
    <div className="magazine-page">
    <div className='magzi-cntn'>
      <h2 className="magazine-heading">Magazines</h2>
      <p className="magazine-description">Explore our collection of magazines published by AQSA</p>
      <div className="magazine-list">
        {magazines.map(magazine => (
          <div key={magazine.id} className="magazine-card">
            <img src={magazine.cover} alt="Magazine Cover" className="magazine-cover" />
            <h3 className="magazine-name">{magazine.name}</h3>
            <p className="magazine-language">Language: <span className='value-lang-date'>{magazine.language}</span></p>
            <p className="magazine-date">Published Date: <span className='value-lang-date'>{magazine.publishedDate}</span></p>
            <button className="read-button" onClick={() => { window.location.href = magazine.link; }}>Read</button>
          </div>
        ))}
        </div>
      </div>
<div className='ftr'>
  <Footer />
</div>
    </div>
    
  );
};

export default MagazinePage;
