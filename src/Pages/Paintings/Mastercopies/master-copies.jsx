import React, { Fragment } from 'react';
import Footer from '../../../Components/Footer/footer';
import { MastercopiesImages } from '../../../Assets/Images/Images';
import SlideControler from './../corousel/SlideControler';

const Mastercopies = () => {
  return (
    <Fragment>
      <SlideControler slideImages={MastercopiesImages} />
      <Footer />
    </Fragment>
  );
};

export default Mastercopies;
