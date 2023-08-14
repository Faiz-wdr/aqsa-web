// MagazinePage.js

import React from 'react';
import './magazinePage.css';
import LauhulAug from '../Assets/img/Lah-Aug.jpg';
import MagazineCover from '../Assets/img/magazine1.png';
import InspiraAug from '../Assets/img/Inspira-Aug.jpg';
import NilavuAug from '../Assets/img/Nilavu-Aug.jpg';
import Footer from '../Components/Footer';

const MagazinePage = () => {


  // Dummy data for the list of magazines
  const magazines = [
    {
      id: 1,
      cover: NilavuAug,
      name: 'നിലാവ്',
      language: 'Malayalam',
      publishedDate: 'August 2023',
      link: 'https://online.fliphtml5.com/ohujj/nkmz/'
    },
    {
      id: 2,
      cover: LauhulAug,
      name: 'ضوء القمر',
      language: 'Arabic',
      publishedDate: 'August 2023',
      link: 'https://online.fliphtml5.com/ohujj/utsv/'
    },
    {
      id: 3,
      cover: InspiraAug,
      name: 'Inspira',
      language: 'English',
      publishedDate: 'August 2023',
      link: 'https://online.fliphtml5.com/ohujj/pnnh/'
    },
    {
      id: 4,
      cover: MagazineCover,
      name: 'Inspira',
      language: 'English',
      publishedDate: 'September 2020',
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
