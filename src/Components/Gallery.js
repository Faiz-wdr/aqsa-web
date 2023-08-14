// Gallery.js

import React from 'react';
import './Gallery.css';
import image1 from '../Assets/img/image1.jpg';
import image2 from '../Assets/img/image2.jpg'
import image3 from '../Assets/img/image3.jpg'
import image4 from '../Assets/img/image4.jpg'
import image5 from '../Assets/img/image5.jpg'
import image6 from '../Assets/img/image6.jpg'
import image7 from '../Assets/img/image7.jpg'
import image8 from '../Assets/img/image8.jpg'

const Gallery = () => {
    const imageList = [
        { id: 1, url: image1 },
        { id: 2, url: image2 },
        { id: 3, url: image3 },
        { id: 4, url: image4 },
        { id: 5, url: image5 },
        { id: 6, url: image6 },
        { id: 7, url: image7 },
        { id: 8, url: image8 }
      ];

  return (
    <div className="gallery-sections" id='Gallery'>
      <h2 className="gallery-heading">Gallery</h2>
      <p className="gallery-description">Images of various events held by AQSA</p>
      <div className='image-card'>
      <div className="gallery-grid">
        {imageList.map((image) => (
          <div key={image.id} className="gallery-image-placeholder">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Gallery;
