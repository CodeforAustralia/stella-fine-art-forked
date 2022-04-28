import { Link } from 'react-router-dom';

// import { QuotesHome } from '../../Helpers/AllQuotes/quotes';
import Artist from '../Artist/artist';
import Testimonial from '../Testimonial/testimonial';
import paintBrush from '../../Assets//Images/globalimages/small brushes.jpg';
import { blueThumb } from '../.././Assets/Images/Images';
import macaw from '../../Assets//Images/wildlife/blueandgoldmacaw.jpg';

// import Img from 'react-cloudinary-lazy-image';

import './homestyles.css';

const Home = () => {
  // const PrintQuotes = QuotesHome();

  return (
    <>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            {/* <img src={HomeBanner} alt="Peacefull Journey Painting" /> */}

            {/* <Img
              cloudName={'CloudName'}
              imageName={HomeBanner}
              alt="Peacefull Journey Painting"
            /> */}
            {/* <p>{PrintQuotes}</p> */}
          </div>
        </div>
      </header>
      <div>
        <div className="paintbrush_text">
          <div className="headpaint">
            {/* <h1>NEW & EXCITING ANNOUNCEMENT</h1> */}
            <h1 className="announcement_home">Children's Art Classes </h1>{' '}
            {/* <p className="announcement_home">Starting in TERM 2 </p> */}
          </div>
          <div className="home-images-row">
            <div className="home-image-column">
              <img src={paintBrush} alt="paintBrushes" />
            </div>
          </div>

          <div className="headpaint">
            <div id="class_details1">
              <p className="ages_home">
                {' '}
                Stella's Fine-Art now teaching
                <p className="ages_home">
                  Children's Art Classes ages 8 - 14 years.
                </p>
              </p>

              <p>
                For more information click{' '}
                <em>
                  <Link to="/classes" className="enquire_now">
                    here.
                  </Link>
                </em>
              </p>

              <p>* Limited spaces available *</p>
            </div>
          </div>
        </div>
        <div className="macaw-container">
          <h1>Latest Painting</h1>
          <div className="macaw-images-row">
            <div className="macaw-image-column">
              <img src={macaw} alt="Blue and Gold Macaw" />
            </div>
          </div>
          <div className="home-bluethumb">
            <p>Blue and Gold Macaw{''}</p>

            <div id="quickLink_bluethumb_center">
              <p>Click below ⤵️ to buy {''}</p>
              <a
                href="https://bluethumb.com.au/stella-kypriotis"
                id="bluethumb-link">
                {''}
              </a>
              {blueThumb}
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Artist />
    </>
  );
};

export default Home;
