export function FquestionsAsked() {
  return (
    <div className='question-container'>
      <div className='question-box'>
        <div className='whole-list-questions'>
          <h2>Frequently Asked Questions</h2>

          <div className='question-answer'>
            <p className='each-question'>Q1. Are you a professional artist? </p>
            <p className='each-answer'>
              A1. Yes, I have a registered business and it operates under the
              Australian Law.
            </p>
          </div>

          <div className='question-answer'>
            <p className='each-question'>Q2. Do you sell original artworks? </p>
            <p className='each-answer'>
              A2. Yes, I do sell original artworks which is all painted by
              myself. A signed Certificate of Authenticity is given with each
              artwork.
            </p>
          </div>

          <div className='question-answer'>
            <p className='each-question'>
              Q3. Where can I purchase your paintings?{' '}
            </p>
            <p className='each-answer'>
              A3. Some of these paintings are available for purchase on my
              personal account on{' '}
              <a
                href='https://bluethumb.com.au/stella-kypriotis'
                id='bluethumb-link'
              >
                Bluethumb
              </a>
              .
            </p>
            {/* <p>
            {' '}
            <a href='https://bluethumb.com.au/stella-kypriotis'>
              <img
                src='https://bluethumb.com.au/integrations/badge/for-sale/outline-blue.png?destination_id=my_artist_profile&fbclid=IwAR1x91rquyySqIXg33D2cTj9uIPXXUM4BE9LFwO4wnekR3NdNyHUbceF7L4'
                alt=''
                width='140'
                height='60'
              />
            </a>
          </p> */}
            {/* <div className='bluethum-badge'> */}

            {/* </div> */}
          </div>

          <div className='question-answer'>
            <p className='each-question'>Q4. What materials do you use? </p>
            <p className='each-answer'>
              A4. I use artist grade quality oil paints such as Michael Harding,
              Gamblin, Artist Spectrum and masterclass paints on stretched
              canvas or wood panels.
            </p>
          </div>

          <div className='question-answer'>
            <p className='each-question'>
              Q5. What type of guarantee do you give for your artwork?{' '}
            </p>
            <p className='each-answer'>
              A5. I give life-time guarantee to the client.
            </p>
          </div>

          <div className='question-answer'>
            <p className='each-question'>Q6. What payment do you accept? </p>
            <p className='each-answer'>
              A6. For any commissioned work I accept bank transfers, which
              guarantees safety to you. I do not accept cheques.
            </p>
          </div>
          <div className='question-answer'>
            <p className='each-question'>Q7. How is the Artwork delivered? </p>
            <p className='each-answer'>
              A7. Through the Post Office firmly secured, or depending on
              location I may be able to deliver it to your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
