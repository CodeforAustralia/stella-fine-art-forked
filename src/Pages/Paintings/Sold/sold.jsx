import React, { Fragment } from 'react';
import { SoldImages } from '../../../Assets/Images/Images';
import SlideControler from './../corousel/SlideControler';
import Footer from '../../../Components/Footer/footer';

const Sold = () => {
  return (
    <Fragment>
      <SlideControler slideImages={SoldImages} />
      <Footer />
    </Fragment>
  );
};

export default Sold;
