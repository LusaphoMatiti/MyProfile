import React from "react";
import "../Styling/Header.css";
import "../Styling/Contact.css";

const Contact = () => {
  return (
    <div className="section contact">
      <div className="contact-details">
        <h2>Hire me</h2>
        <div className="c-me">
          <div className="contact-item">
            <img src="phone-call.png" alt="call" />
            <p>Number:</p> <div className="myDetails">063 520 2097</div>
          </div>
          <div className="contact-item">
            <img src="arroba.png" alt="email" />
            <p>Email:</p>{" "}
            <div className="myDetails">Lusaphomatiti07@gmail.com</div>{" "}
          </div>
        </div>

        <div className="s-me">
          <h3>Social Media</h3>
          <div className="contact-item">
            <img src="instagram.png" alt="instagram" />
            <p>Instagram: </p>
            <div className="myDetails">@LM</div>
          </div>
          <div className="contact-item">
            <img src="linkedin.png" alt="linkedin" />
            <p>LinkedIn: </p>
            <div className="myDetails">Lusapho Matiti</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
