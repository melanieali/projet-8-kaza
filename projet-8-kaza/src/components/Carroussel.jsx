import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Carroussel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + data.pictures.length) % data.pictures.length);
  };
  

  return (
    <div className="carousel">
      <button className='pSlide' onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="carousel-content">
        {data.pictures.map((pictures,index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img className='img-carousel'src={pictures} alt={`Slide ${index + 1}`}/>
          </div>
        ))}
      </div>
      <button className='nSlide' onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className='slide-number'>
        {currentIndex +1}/{data.pictures.length}
      </div>
    </div>
  );
};

export default Carroussel;


    