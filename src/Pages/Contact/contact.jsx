import React, { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [countOption, setCountOption] = useState({});
  const [thankMsg, setThankMsg] = useState(false);

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };
  // const contactUrl = config.CONTACT_URL
  // const surveyUrl = config.SURVEY_URL
  const summitData = async (e) => {
    e.preventDefault();
    // const survey = config.SURVEY
    // const contact = config.CONTACT
    // email

    // Amutha
    setThankMsg(true);
    // emailjs
    //   .sendForm(
    //     'service_1lpa9id',
    //     'template_n6n6r8p',
    //     e.target,
    //     'user_etuc4QBUGfJPQyWZealTj'
    //   )

    // stella
    emailjs
      .sendForm(
        'service_8wvri2s',
        'template_l28p8xt',
        e.target,
        'user_A0rfHSP2yohzhMSJ4oDEU',
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    // googlesheet
    const myHeaders = new Headers();
    await myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'post',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify([
        [
          formData.fname,
          formData.lname,
          formData.email,
          formData.message,
          new Date().toLocaleString(),
        ],
      ]),
    };
    // Amutha'sgit
    // fetch(contactUrl, requestOptions)
    // fetch(
    //   'https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Feedback',
    //   requestOptions
    // )
    // STELLA'S
    fetch(
      'https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Clients',
      requestOptions,
    )
      .then((response) => response.text())
      .catch((error) => console.log('error', error));
    setFormData({});
    reset();

    //   survery form

    // googlesheet
    const myHeadersSurvey = new Headers();
    await myHeadersSurvey.append('Content-Type', 'application/json');
    const requestCountOptions = {
      method: 'post',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify([
        [
          countOption.google,
          countOption.facebook,
          countOption.instagram,
          countOption.bluethumb,
          countOption.family,
          countOption.other,
          new Date().toLocaleString(),
        ],
      ]),
    };
    // Amutha'sgit
    // fetch(surveyUrl, requestCountOptions)
    // fetch(
    //   'https://v1.nocodeapi.com/amutha/google_sheets/sDBpXXCxMheMRxIY?tabId=Survey',
    //   requestCountOptions
    // )
    // STELLA'S
    fetch(
      'https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Survey',
      requestCountOptions,
    )
      .then((response) => response.text())
      .catch((error) => console.log('error', error));
    setCountOption({});
  };
  const handleSelect = (e) => {
    const copycountOption = { ...countOption };
    copycountOption[e.target.value] = 1;
    setCountOption(copycountOption);
  };
  const reset = () => {
    setFormData({});
    // formData.fname = ''
    // formData.lname = ''
    // formData.email = ''
    // formData.message = ''
  };
  return (
    <div>
      <div className="contact-main ">
        <div className="bg-image">
          <header className="bg-text">
            <p>Captivating Beauty in Arts</p>
          </header>
        </div>

        {/* <div className='bg-text'>
          <h1>Commission an Artwork</h1>
          <p>Oil and/or acrylic on canvas or wood panel.</p>
          <p> FREE SHIPPING in Australia</p>
        </div> */}
        <div className="contact-note">
          <p>
            Please fell free to contact me for any enquiries or comments and I
            will get back to you. If you are an SEO website marketer or any
            other related marketer, please do not bother me as I will not
            respond.
          </p>
        </div>
        <div className="contact-survey-wrapper">
          <div className="form-container">
            <p id="contact-form-title">Contact Form</p>
            <form className="input-form" required onSubmit={summitData}>
              <div className="login">
                {/* <label>Name:</label> */}

                <input
                  name="fname"
                  type="text"
                  required
                  placeholder="First name"
                  onChange={handleInput}
                  className="input"
                />
                <input
                  name="lname"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleInput}
                  className="input"
                />
              </div>
              {/* <div className='required-astrick-name'>*</div> */}
              <div className="login">
                {/* <label>E-mail :</label> */}

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email Address"
                  onChange={handleInput}
                  className="input"
                />
              </div>
              {/* <div className='required-astrick-email'>*</div> */}

              {/* <div className="subject">
            <input type="text" placeholder="Subject" className="input" />
          </div> */}

              <div className="msg">
                {/* <label>Message :</label> */}
                <textarea
                  name="message"
                  required
                  className="area"
                  placeholder="Leave a Message"
                  onChange={handleInput}></textarea>
                {/* <div className='required-astrick-message'>*</div> */}
              </div>

              {/*SURVEY OPTION  */}
              <div className="survey">
                <div className="title">How did you find my website?</div>
                <div className="wrapper">
                  <div className="box">
                    {/* <div className='survey-left'> */}
                    <input
                      type="radio"
                      name="select"
                      id="option-1"
                      value="google"
                      onChange={handleSelect}></input>
                    <input
                      type="radio"
                      name="select"
                      id="option-2"
                      value="facebook"
                      onChange={handleSelect}></input>
                    <input
                      type="radio"
                      name="select"
                      id="option-3"
                      value="instagram"
                      onChange={handleSelect}></input>
                    {/* </div> */}

                    {/* </div> */}
                    {/* <div className='box'> */}
                    {/* <div className='survey-left'> */}
                    <input
                      type="radio"
                      name="select"
                      id="option-4"
                      value="bluethumb"
                      onChange={handleSelect}></input>
                    <input
                      type="radio"
                      name="select"
                      id="option-5"
                      value="family"
                      onChange={handleSelect}></input>
                    <input
                      type="radio"
                      name="select"
                      id="option-6"
                      value="other"
                      onChange={handleSelect}></input>
                    {/* </div> */}
                    <label htmlFor="option-1" type="radio" className="option-1">
                      <div className="dot"></div>
                      <div className="text">Google</div>
                    </label>

                    <label htmlFor="option-2" type="radio" className="option-2">
                      <div className="dot"></div>
                      <div className="text">Facebook</div>
                    </label>

                    <label htmlFor="option-3" type="radio" className="option-3">
                      <div className="dot"></div>
                      <div className="text">Instagram</div>
                    </label>

                    <label htmlFor="option-4" type="radio" className="option-4">
                      <div className="dot"></div>
                      <div className="text">Bluethumb</div>
                    </label>

                    <label htmlFor="option-5" type="radio" className="option-5">
                      <div className="dot"></div>
                      <div className="text">Family/friend</div>
                    </label>

                    <label htmlFor="option-6" type="radio" className="option-6">
                      <div className="dot"></div>
                      <div className="text">Other</div>
                    </label>
                  </div>
                </div>
              </div>
              {/* SURVEY END HERE  */}
              <div id="thank-you-container">
                {!thankMsg ? (
                  <div className="btn">
                    <input
                      className="btn"
                      name="submit"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                ) : (
                  <p id="thank-you"> Submited Thank you!</p>
                )}
              </div>

              {/* social media */}
              {/* <div>
              <div className='social-media'>
                <p>Follow me ⤵️ </p>
                <div className='icons'>
                  <a href='https://www.facebook.com/search/top?q=stellas_art'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-facebook-f'>
                        
                      </span>
                    </div>
                    <div className='text'>Facebook</div>
                  </a>
                  <a href='https://twitter.com/KypriotisStella'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-twitter'></span>
                    </div>
                    <div className='text'>Twitter</div>
                  </a>
                  <a href='https://www.instagram.com/stellas_art3/'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-instagram'></span>
                    </div>
                    <div className='text'>Instagram</div>
                  </a>
                  <a href='https://www.linkedin.com/in/stella-kypriotis-949101206/'>
                    <div className='layer'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='fab fa-linkedin-in'></span>
                    </div>
                    <div className='text'>Linkedin</div>
                  </a>
                 
                </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* <SocialMedia /> */}
            </form>
          </div>
          {/* <div className='survey-form'>
            <Survey />
          </div> */}
        </div>

        {/* <p>
          Copyright
          {''}
          <i className='far fa-copyright contact-icons' id='contact-copyright'>
            {' '}
          </i>
          {''} 2021 All Right Reserved.
        </p> */}
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
