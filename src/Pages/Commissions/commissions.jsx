import React from 'react';
import { CommissionSamples } from '../../Assets/Images/Images';
import { Testimonial } from '../../Helpers/Testimonial/testimonial';
import Footer from '../../Components/Footer/Footer';
import './commission.css';

const Commissions = () => {
  return (
    <div className="commission-container">
      {/* blury background */}
      <div className="hero-image-container">
        <div className="bg-image">
          <div className="bg-text">
            <h1>Commission an Artwork</h1>
            <p>Oil and/or acrylic on canvas or wood panel.</p>
            <p> FREE SHIPPING in Australia</p>
          </div>
        </div>
      </div>
      {/* notes for commission */}
      <div className="commission-note">
        <p>
          If you are interested in commissioning me to do a custom painting for
          you or a loved one, please leave your details in the contact section
          provided. I would contact you to discuss what you are considering for
          a painting, the size of your canvas, your budget and how long it
          should roughly take, (depending if I have other commission work needed
          to be completed first).
        </p>
        <br></br>
        <p>
          If you and I are both happy with the discussion and you would like to
          go ahead, I will then start on the exciting journey of your painting.
          I will keep you informed on the progress painting and will send you
          development photos along the way. On the final photo if there are any
          minor adjustments we will look at that too.
        </p>
        <br></br>
        <p>
          Upon completion, I will varnish your work (minimum 2 - 4 weeks) when
          dry for longevity and then mail it to you once the final payment is
          received.
        </p>
        <br></br>
        <div className="table-container">
          <p>
            Please note: All paintings require a non-refundable 50% deposit
            before starting.
          </p>
        </div>
      </div>

      <div className="commission-images-row">
        {CommissionSamples.map((sampleImg, i) => (
          <div key={i} className="commission-image-column">
            <img src={sampleImg.image} alt={sampleImg.name} />
          </div>
        ))}
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
};

export default Commissions;
