import { BannerImage } from '../../Assets/Images/Images';
import './homestyles.css';

const Home = () => {
  return (
    <>
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            <p>Captivated by Nature</p>
            <img src={BannerImage[0].image} alt={BannerImage[0].name} />
          </div>
          <div className="quotes-container">
            <div className="quotePeace">
              <h3>Peaceful Destination</h3>
              <p>
                A commission painting - "On a journey towards a peaceful and
                heavenly destination."
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="footertext-home">
        <p>
          Copyright <i className="far fa-copyright"> </i> Stella Kypriotis 2021
          All Right Reserved.
        </p>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default Home;
