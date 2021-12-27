import React, { Fragment } from 'react';
import SlideControler from '../../../Components/corousel/SlideControler';
import { PortraitImages } from '../../../Assets/Images/Images';
import Footer from '../../../Components/Footer/footer';

const Portraits = () => {
  return (
    <Fragment>
      <SlideControler slideImages={PortraitImages} />
      <Footer />
    </Fragment>
  );
};

export default Portraits;
