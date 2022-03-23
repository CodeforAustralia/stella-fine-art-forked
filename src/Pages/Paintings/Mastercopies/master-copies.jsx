import React, { Fragment } from 'react';
import { MastercopiesImages } from '../../../Assets/Images/Images';
import SlideControler from '../../../Components/corousel/SlideControler';

const Mastercopies = () => {
  return (
    <Fragment>
      <SlideControler slideImages={MastercopiesImages} />
    </Fragment>
  );
};

export default Mastercopies;
