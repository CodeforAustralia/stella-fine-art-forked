import React, { Fragment } from 'react';
import SlideControler from '../../../Components/corousel/SlideControler';
import { QuotesWildLife } from '../../../Helpers/AllQuotes/quotes';
import { WildLifeImages } from '../../../Assets/Images/Images';

const BirdAnimal = () => {
  const PrintQuotes = QuotesWildLife();

  return (
    <Fragment>
      <SlideControler slideImages={WildLifeImages} PrintQuotes={PrintQuotes} />
    </Fragment>
  );
};

export default BirdAnimal;
