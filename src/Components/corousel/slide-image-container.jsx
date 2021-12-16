import React from 'react';
import Buttons from '../Buttons/buttons';

const SlideImageContainer = ({ status, slides, slideIndex, plusSlides }) => {
  return (
    <>
      {slides.map((item, index) => (
        <div
          className="mySlides"
          style={status[index] ? { display: 'block' } : { display: 'none' }}
          key={index}>
          {<img src={item.image} alt={item.name} />}
        </div>
      ))}

      <Buttons plusSlides={plusSlides} />
      <div id="caption">
        <p>{slides[slideIndex - 1].name} </p>{' '}
        <p className="imagesize">{slides[slideIndex - 1].size}</p>
      </div>
    </>
  );
};

export default SlideImageContainer;
