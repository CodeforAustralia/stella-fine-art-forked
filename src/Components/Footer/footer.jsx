import React from 'react';
// import Menu from "../quickLink/Menu";
import { Link } from 'react-router-dom';
import { DropdownFooter } from '../Footer/dropdownFooter/DropdownFooter';
import './footer.css';
// import {
//   Redirect,
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
const mystyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '12px',
  // cursor: "pointer",
};

const Footer = () => {
  return (
    <div className="social-media">
      <h4>Quick Links</h4>
      <div className="quickLink_left" id="painting_link">
        <DropdownFooter />
      </div>
      <div id="quickLink_blueThumb">
        <div className="quickLink_left">
          <div className="quickLink_left">
            <p>
              <em>
                <Link style={mystyle} to="/home" className="enquire_now">
                  Home
                </Link>
              </em>
            </p>
            <p>
              <em>
                <Link style={mystyle} to="/classes" className="enquire_now">
                  Classes
                </Link>
              </em>
            </p>
            <p>
              <em>
                <Link style={mystyle} to="/testimonial">
                  Testimonials
                </Link>
              </em>
            </p>

            <p>
              <em>
                <Link style={mystyle} to="/Artist">
                  Artist
                </Link>
              </em>
            </p>
            <p>
              <em>
                <Link style={mystyle} to="/commissions">
                  Commissions
                </Link>
              </em>
            </p>
            <p>
              <em>
                <Link style={mystyle} to="/faquestions">
                  FAQ
                </Link>
              </em>
            </p>
            <p>
              <em>
                <Link style={mystyle} to="/contact">
                  Contact
                </Link>
              </em>
            </p>
          </div>
          {/* <p className="quickLink_left" id="painting_link">
          <DropdownFooter />
        </p> */}
        </div>

        <div id="bluethum-badge">
          <a href="https://bluethumb.com.au/stella-kypriotis">
            <img
              src="https://bluethumb.com.au/integrations/badge/for-sale/outline-blue.png?destination_id=my_artist_profile&fbclid=IwAR1x91rquyySqIXg33D2cTj9uIPXXUM4BE9LFwO4wnekR3NdNyHUbceF7L4"
              alt=""
              width="130"
              height="50"
            />
          </a>
        </div>
      </div>

      <div id="followMe-text">
        <p>Follow me ⤵️ </p>
      </div>

      <div className="icons">
        <a href="https://www.facebook.com/search/top/?q=stellas_art">
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
        {/* </div> */}
      </div>

      <div className="footertext">
        <p>
          Copyright <i className="far fa-copyright"> </i> Stella Kypriotis 2021
          All Right Reserved.
        </p>
        <hr />
        <p>ABN: 11 549 121 620</p>
      </div>
    </div>
  );
};

export default Footer;
