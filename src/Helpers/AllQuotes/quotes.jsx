export const MessageForSale = () => {
  return (
    <div>
      <p>
        These paintings are available for sale through my personal account on{' '}
        <a href="https://bluethumb.com.au/stella-kypriotis">Bluethumb</a> online
        gallery.
      </p>
      <p>
        If you would like further information, please leave you details in the
        contact section provided and I will get back to you as soon as possible.
      </p>
      <br></br> <br></br>
      <p>Thank you</p>
    </div>
  );
};

// Quotes
export const QuotesHome = () => {
  return (
    <div className="quotes-container">
      <div className="quotePeace">
        <h3>Peaceful Destination</h3>
        <p id="oilOnCanvas">Oil on canvas</p>
      </div>
    </div>
  );
};
// qoutesNature
export const QuotesNature = () => {
  return (
    <div className="quotes-container">
      <div className="quotes">
        <h3>Nature</h3>
        <p>
          "It's the colours, the light and space thats really unique about
          Nature. The Australian bush and inland desert that provide health to
          the soul." - Stella Kypriotis
        </p>
      </div>
    </div>
  );
};

// qoutesFlorals
export const QuotesFlorals = () => {
  return (
    <div className="quotes-container">
      <div className="quotes">
        <h3>Florals</h3>
        <p>
          "The sweet fragrance of a single flower brings colour and hope in your
          world." - Stella Kypriotis
        </p>
      </div>
    </div>
  );
};
// qoutesWildLife
export const QuotesWildLife = () => {
  return (
    <div className="quotes-container">
      <div className="quotes">
        <h3>Wildlife</h3>
        <p>
          "It is in the beauty of Natures' Wildlife that holds itself by its
          splendorous form of Creation." - Stella Kypriotis
        </p>
      </div>
    </div>
  );
};
// export function FrequentQuestions() {
export const FrequentlyAskedQuestions = () => {
  return (
    <div className="question-container">
      <header>
        <h1>Frequently Asked Questions (FAQs)</h1>

        <div className="whole-list-questions">
          <div className="question-answer">
            <p className="each-question">Q1. Do you sell original artworks? </p>
            <p className="each-answer">
              A1. Yes, my artworks available on this website are painted by
              myself. A signed Certificate of Authenticity is given with each
              artwork.
            </p>
          </div>

          <div className="question-answer">
            <p className="each-question">Q2. Are you a professional artist? </p>
            <p className="each-answer">
              A2. Yes, I have a registered business and it operates under the
              Australian Law.
            </p>
          </div>

          <div className="question-answer">
            <p className="each-question">Q3. What materials do you use? </p>
            <p className="each-answer">
              A3. I use artist grade quality oil paints such as Michael Harding,
              Gamblin, Artist Spectrum and masterclass paints.
            </p>
          </div>

          <div className="question-answer">
            <p className="each-question">
              Q4. What type of guarantee do you give for your artwork?{' '}
            </p>
            <p className="each-answer">
              A4. I give life-time guarantee to the client.
            </p>
          </div>

          <div className="question-answer">
            <p className="each-question">Q5. What payment do you accept? </p>
            <p className="each-answer">
              A5. For any commissioned work I accept bank transfers, which
              guarantees safety to you. I do not accept cheques.
            </p>
          </div>
          <div className="question-answer">
            <p className="each-question">Q6. How is the Artwork delivered? </p>
            <p className="each-answer">
              A6. Through the Post Office firmly secured, or depending on
              location I may be able to deliver it to your door.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};
