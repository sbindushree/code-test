import React from "react";
import "./FormContainer.scss";
import Footer from "./Footer";


function FormContainer() {
  return (
    <>
      <div className="form-container">
        <section className="contact-section">
          <h1 className="contact-title">Contact About Awesomeness</h1>
          <p className="contact-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <div className="form-component">
          <form name="contact_form">
            <label>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your name"
              required
            />
            <label>Your Telephone Number</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Please enter your number"
              required
            />
            <label>Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email"
              required
            />
            <label>Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Please enter your message"
              required
            ></textarea>
            <a href="/" className="submit-container">
              <input type="submit" className="btn" value="submit" />
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormContainer;
