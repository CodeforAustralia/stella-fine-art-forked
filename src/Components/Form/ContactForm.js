import React, { useState } from 'react';
import EnquiriesOption from '../Navbar/dropDownItems';
import './contact.css';
import emailjs from 'emailjs-com';
import Select from 'react-select';

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [countFinding, setcountFinding] = useState({});
  const [countEnquiries, setCountEnquiries] = useState({});
  const [thankMsg, setThankMsg] = useState(false);

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const summitData = async (e) => {
    e.preventDefault();
    setThankMsg(true);

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

    // googlesheet CLIENT
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
    // STELLA'S
    fetch(
      'https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Clients',
      requestOptions,
    )
      .then((response) => response.text())
      .catch((error) => console.log('error', error));

    //   survery form

    // googlesheet
    const myHeadersSurvey = new Headers();
    await myHeadersSurvey.append('Content-Type', 'application/json');
    const requestcountFindings = {
      method: 'post',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify([
        [
          countFinding.google,
          countFinding.facebook,
          countFinding.instagram,
          countFinding.bluethumb,
          countFinding.family,
          countFinding.other,
          new Date().toLocaleString(),
        ],
      ]),
    };
    // STELLA'S
    fetch(
      'https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Survey',
      requestcountFindings,
    )
      .then((response) => response.text())
      .catch((error) => console.log('error', error));

    //   collect service data
    const myHeaderEnquiries = new Headers();
    await myHeaderEnquiries.append('Content-Type', 'application/json');
    const requestcountEnquiries = {
      method: 'post',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify([
        [
          countEnquiries.Commissions,
          countEnquiries.Portrait,
          countEnquiries.Classes,
          countEnquiries.General,
          new Date().toLocaleString(),
        ],
      ]),
    };

    // STELLA'S enquiries data
    fetch(
      'https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Enquiries',

      requestcountEnquiries,
    )
      .then((response) => response.text())
      .catch((error) => console.log('error', error));

    reset();
  };

  const handleSelect = (e) => {
    const copycountFinding = { ...countFinding };
    copycountFinding[e.target.value] = 1;
    setcountFinding(copycountFinding);
  };

  const handleEnquiries = (e) => {
    const arrValue = e.label;
    console.log(arrValue);
    setCountEnquiries({});
    const copycountEnquiries = { ...countEnquiries };
    copycountEnquiries[arrValue] = 1;
    setCountEnquiries(copycountEnquiries);
  };

  const reset = () => {
    // setFormData({});
    formData.fname = ' ';
    formData.lname = ' ';
    formData.email = ' ';
    formData.message = ' ';
    countFinding.google = '';
    countFinding.facebook = '';
    countFinding.instagram = '';
    countFinding.bluethumb = '';
    countFinding.family = '';
    countFinding.other = '';
    countEnquiries.Classes = '';
    countEnquiries.Portrait = '';
    countEnquiries.Commissions = '';
    countEnquiries.General = '';
  };

  return (
    <div>
      <div className="contact-main ">
        <div className="bg-image"></div>

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
                <div id="select_service">
                  <Select
                    options={EnquiriesOption}
                    onChange={handleEnquiries}
                    placeholder=""
                  />
                </div>
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
              <div className="login">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email Address"
                  onChange={handleInput}
                  className="input"
                />

                {/* <h7> Service : </h7>
                <div id="select_service">
                  <Select
                    // style={{ width: "7px" }}
                    options={ServiceOption}
                    onChange={handleService}
                    placeholder="Choose a service"
                    value="1"
                  ></Select>
                </div> */}
              </div>

              <div className="msg">
                <textarea
                  name="message"
                  required
                  className="area"
                  placeholder="Leave a Message"
                  onChange={handleInput}></textarea>
              </div>

              {/*SURVEY OPTION  */}
              <div className="survey">
                <div className="title">How did you find my website?</div>
                <div className="wrapper">
                  <div className="box">
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
                  <div>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
