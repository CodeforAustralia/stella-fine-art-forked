import React, { Fragment } from 'react';
import { SoldImages } from '../../../Assets/Images/Images';
import SlideControler from '../../../Components/corousel/SlideControler';

const Sold = () => {
  return (
    <Fragment>
      <SlideControler slideImages={SoldImages} />
    </Fragment>
  );
};

export default Sold;
