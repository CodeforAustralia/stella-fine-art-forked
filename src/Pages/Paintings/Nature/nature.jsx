import React, { Fragment } from 'react';
import Footer from '../../../Components/Footer/footer';
import { QuotesNature } from '../../../Helpers/Quotes/quotes';
import { NatureImages } from '../../../Assets/Images/Images';
import SlideControler from './../corousel/SlideControler';

const Nature = () => {
  const PrintQuotes = QuotesNature();

  return (
    <Fragment>
      <SlideControler slideImages={NatureImages} PrintQuotes={PrintQuotes} />

      <Footer />
    </Fragment>
  );
};

export default Nature;
