import React, { Fragment } from 'react';
import SlideControler from '../../../Components/corousel/SlideControler';
import { PetportraitsImages } from '../../../Assets/Images/Images';
import Footer from '../../../Components/Footer/footer';

const Petportraits = () => {
  return (
    <Fragment>
      <SlideControler slideImages={PetportraitsImages} />
      <Footer />
    </Fragment>
  );
};

export default Petportraits;
