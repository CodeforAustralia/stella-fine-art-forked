import { Link } from 'react-router-dom';
import HomeBanner from './peacefulJourney.jpg';
import { QuotesHome } from '../../Helpers/AllQuotes/quotes';
import Artist from '../Artist/artist';
import Testimonial from '../Testimonial/testimonial';
import PaintBrush from '../../Assets//Images/globalimages/small brushes.jpg';
// import Img from 'react-cloudinary-lazy-image';

import './homestyles.css';

const Home = () => {
  const PrintQuotes = QuotesHome();
  return (
    <>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <img src={HomeBanner} alt="Peacefull Journey Painting" />

            {/* <Img
              cloudName={'CloudName'}
              imageName={HomeBanner}
              alt="Peacefull Journey Painting"
            /> */}
            <p>{PrintQuotes}</p>
          </div>
        </div>
      </header>

      <div className="paintbrush_text">
        <p id="announcement_home">NEW & EXCITING ANNOUNCEMENT</p>{' '}
        <div className="home-images-row">
          <div className="home-image-column">
            <img src={PaintBrush} alt="paintBrushes" />
          </div>
        </div>
        <div id="class_details1">
          <p id="home_paintTitle">ART CLASSES TERM 2, 2022</p>
          {/* <p id="announcement_home">NEW & EXCITING ANNOUNCEMENT</p> */}

          <p id="ages_home">
            Stella's Fine-Art now teaching children's art classes age 8 - 14
            years.
          </p>
          <p>
            Click on this{' '}
            <em>
              <Link to="/classes" className="enquire_now">
                LINK
              </Link>{' '}
            </em>{' '}
            for further information.
          </p>

          <p>* Limited spaces available *</p>
        </div>
      </div>
      <Testimonial />
      <Artist />
    </>
  );
};

export default Home;
