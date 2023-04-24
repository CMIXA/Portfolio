import React from "react";
import "../css/contact.css";
import cm from "../images/cm.png";
import cm1 from "../images/cm1.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="nav-space"></div>
      <div class="contact-form-container">
        <div className="left-div">
          <img src={cm1} alt="Contact Image" />
        </div>
        <div className="right-div">
          <div className="form-title">
            <h1>Get in touch with me</h1>
            <p>
              Don't hesitate to connect with me. I look forward to hearing from
              you and exploring opportunities to work together!
            </p>
          </div>
          <form>
            <div className="fl-name">
              <div className="f-name" id="div">
                <label>First Name</label>
                <br></br>
                <input type="firstname" name="name"></input>
              </div>
              <div id="div">
                <label>Last Name</label>
                <br></br>
                <input type="lastname" name="name"></input>
              </div>
            </div>
            <div id="div">
              <label>Email</label>
              <br></br>
              <input type="email" name="email" />
            </div>
            <div id="div">
              <label>Message</label>
              <br></br>
              <textarea name="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        {/* <div className="left-div">
          <img src="image.jpg" alt="Contact Image" />
        </div>
        <div className="right-div">
          <h1>Contact Us</h1>
          <p>Get in touch with us</p>
          <div class="form-container">
            <form className="contact-form">
              <div className="name-inputs">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" name="last-name" placeholder="Last Name" />
                </div>
              </div>
              <input type="email" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
