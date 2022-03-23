import React, { Fragment } from 'react';
import SlideControler from '../../../Components/corousel/SlideControler';
import { PetportraitsImages } from '../../../Assets/Images/Images';

const Petportraits = () => {
  return (
    <Fragment>
      <SlideControler slideImages={PetportraitsImages} />
    </Fragment>
  );
};

export default Petportraits;
