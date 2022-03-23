import React, { Fragment } from 'react';
import { QuotesNature } from '../../../Helpers/AllQuotes/quotes';
import { NatureImages } from '../../../Assets/Images/Images';
import SlideControler from '../../../Components/corousel/SlideControler';

const Nature = () => {
  const PrintQuotes = QuotesNature();

  return (
    <Fragment>
      <SlideControler slideImages={NatureImages} PrintQuotes={PrintQuotes} />
    </Fragment>
  );
};

export default Nature;
