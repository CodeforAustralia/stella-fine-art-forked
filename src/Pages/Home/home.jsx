import { Link } from 'react-router-dom';
import { BannerImage } from '../../Assets/Images/Images';
import { QuotesHome } from '../../Helpers/AllQuotes/quotes';
import Artist from '../Artist/artist';
import Testimonial from '../Testimonial/testimonial';
import PaintBrush from '../../Assets//Images/globalimages/small brushes.jpg';
import './homestyles.css';

const Home = () => {
  const PrintQuotes = QuotesHome();
  return (
    <>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <img src={BannerImage[0].image} alt={BannerImage[0].name} />
            <p>{PrintQuotes}</p>
          </div>
        </div>
      </header>

      <div>
        <div className="paintbrush_text">
          <div className="home-images-row">
            <div className="home-image-column">
              <img src={PaintBrush} alt="paintBrushes" />
            </div>
          </div>
          <div id="class_details1">
            <p id="home_paintTitle">ART CLASSES TERM 2, 2022</p>
            <p id="announcement_home">NEW & EXCITING ANNOUNCEMENT</p>

            <p id="ages_home">
              Stella's Fine-Art now teaching children's art classes age 8 - 14
              yrs.
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

            <p>* Limited spaces available. *</p>
          </div>
        </div>

        {/* temporary add ends */}
        <Testimonial />
        <Artist />
        {/* <Footer />{" "} */}
      </div>
    </>
  );
};

export default Home;
