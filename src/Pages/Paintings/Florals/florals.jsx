import React, { Fragment } from 'react';
import { QuotesFlorals } from '../../../Helpers/AllQuotes/quotes';
import { FloralImages } from '../../../Assets/Images/Images';
import SlideControler from '../../../Components/corousel/SlideControler';

const Florals = () => {
  const PrintQuotes = QuotesFlorals();

  return (
    <Fragment>
      <SlideControler slideImages={FloralImages} PrintQuotes={PrintQuotes} />
    </Fragment>
  );
};

export default Florals;
