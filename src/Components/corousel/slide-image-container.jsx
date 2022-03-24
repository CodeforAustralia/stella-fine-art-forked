import React from 'react';
import Buttons from '../Buttons/buttons';

const SlideImageContainer = ({
  status,
  slides,
  slideIndex,
  plusSlides,
  PrintBlueThumb,
}) => {
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
        <div id="caption_left">{PrintBlueThumb}</div>

        <div id="caption_right">
          <p>{slides[slideIndex - 1].name} </p>{' '}
          <p className="imagesize">{slides[slideIndex - 1].size}</p>
        </div>
      </div>
    </>
  );
};

export default SlideImageContainer;
