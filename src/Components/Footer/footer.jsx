import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="social-media">
      <div className="bluethum-badge">
        <a href="https://bluethumb.com.au/stella-kypriotis">
          <img
            src="https://bluethumb.com.au/integrations/badge/for-sale/outline-blue.png?destination_id=my_artist_profile&fbclid=IwAR1x91rquyySqIXg33D2cTj9uIPXXUM4BE9LFwO4wnekR3NdNyHUbceF7L4"
            alt=""
            width="130"
            height="50"
          />
        </a>
      </div>
      <div id="followMe-text">
        <p>Follow me ⤵️ </p>
      </div>

      <div className="icons">
        <a href="https://www.facebook.com/search/top?q=stellas_art">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-facebook-f"></span>
          </div>
          <div className="text">Facebook</div>
        </a>
        <a href="https://twitter.com/KypriotisStella">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-twitter"></span>
          </div>
          <div className="text">Twitter</div>
        </a>
        <a href="https://www.instagram.com/stellas_art3/">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-instagram"></span>
          </div>
          <div className="text">Instagram</div>
        </a>
        <a href="https://www.linkedin.com/in/stella-kypriotis-949101206/">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin-in"></span>
          </div>
          <div className="text">Linkedin</div>
        </a>
      </div>

      <div className="footertext">
        <p>
          Copyright <i className="far fa-copyright"> </i> Stella Kypriotis 2021
          All Right Reserved.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
