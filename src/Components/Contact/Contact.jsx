import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cc0483c4-8023-4b5b-9466-345fe6e3635e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>
            I'm currently available to take on new project, so feel free to hit
            me up anytime
          </p>
          <div className="contact-details">
            <img src={mail_icon} alt="" /> <p>ubaniwisdom480@gmail.com</p>
          </div>
          <div className="contact-details">
            <img src={call_icon} alt="" /> <p>+2348140067333</p>
          </div>
          <div className="contact-details">
            <img src={location_icon} alt="" /> <p>FCT Abuja</p>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor=""> Your Name</label>
        <input type="text" placeholder="Enter your Name" name="name" />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter your email" name="email" />
        <label htmlFor="">Write your message here</label>
        <textarea
          name="message"
          rows="8"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" className="contact-submit">
          Submit now
        </button>
      </form>
    </div>
  );
};

export default Contact;
