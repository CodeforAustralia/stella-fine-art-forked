import React, { Fragment } from 'react';
import { QuotesFlorals } from '../../../Helpers/Quotes/quotes';
import { FloralImages } from '../../../Assets/Images/Images';
import SlideControler from '../../../Components/corousel/SlideControler';
import Footer from '../../../Components/Footer/footer';

const Florals = () => {
  const PrintQuotes = QuotesFlorals();

  return (
    <Fragment>
      <SlideControler slideImages={FloralImages} PrintQuotes={PrintQuotes} />

      <Footer />
    </Fragment>
  );
};

export default Florals;
