import React, { Fragment } from 'react';
import { QuotesFlorals } from '../../../Helpers/AllQuotes/quotes';
import { FloralImages, blueThumb } from '../../../Assets/Images/Images';
import SlideControler from '../../../Components/corousel/SlideControler';

const Florals = () => {
  const PrintQuotes = QuotesFlorals();

  return (
    <Fragment>
      <SlideControler
        slideImages={FloralImages}
        PrintQuotes={PrintQuotes}
        blueThumb={blueThumb}
      />
    </Fragment>
  );
};

export default Florals;
