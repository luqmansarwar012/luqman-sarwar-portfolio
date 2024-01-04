import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="contact__section">
            <div className="contact__info">
              {/* left */}
              <h1 className="contact__title">Contact Me</h1>
              <p>
                <i className="fa-solid fa-location-dot icon"></i> Punjab,
                Pakistan
              </p>
              <p style={{ margin: "8px 0px", wordBreak: "break-all" }}>
                <i className="fa-solid fa-envelope icon"></i>{" "}
                luqmanrajput012@gmail.com
              </p>
              <p>
                {" "}
                <i className="fa-solid fa-phone-square-alt icon"></i> +92 317
                1582302
              </p>
              <div className="social__icons">
                <h4 className="my__resume">
                  <em>My Socials:</em>
                </h4>
                <a href="https://www.facebook.com/luqmanrajput20">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/luqman.rajput_">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/luqman-rajput20/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/luqmansarwar012">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <h4 className="my__resume">
                <em>My Resume:</em>
              </h4>
              <a href="images/luqman-sarwar.pdf" download className="download__btn">
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
            <div className="contact__form">
              {/* right */}
              <form
                action="https://formsubmit.co/1d5362289dba7e7336b2df02408e40b1"
                method="POST"
                autoComplete="off"
              >
                <h2 className="contact__formTitle">
                  Have any query? Reach me out!
                </h2>
                <input
                  type="text"
                  name="name"
                  className="input"
                  required
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  className="input"
                  required
                  placeholder="Your Email"
                />
                <textarea
                  type="text"
                  name="message"
                  className="input"
                  required
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="form__btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
