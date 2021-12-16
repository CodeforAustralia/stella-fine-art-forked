import React, { Fragment } from 'react';
import SlideControler from './../corousel/SlideControler';
import { QuotesWildLife } from '../../../Helpers/Quotes/quotes';
import { WildLifeImages } from '../../../Assets//Images/Images';
import Footer from '../../../Components/Footer/footer';

const BirdAnimal = () => {
  const PrintQuotes = QuotesWildLife();

  return (
    <Fragment>
      <SlideControler slideImages={WildLifeImages} PrintQuotes={PrintQuotes} />

      <Footer />
    </Fragment>
  );
};

export default BirdAnimal;
