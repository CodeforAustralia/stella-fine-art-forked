import React, { Fragment } from 'react';
import SlideControler from '../../../Components/corousel/SlideControler';
import { PortraitImages } from '../../../Assets/Images/Images';

const Portraits = () => {
  return (
    <Fragment>
      <SlideControler slideImages={PortraitImages} />
    </Fragment>
  );
};

export default Portraits;
