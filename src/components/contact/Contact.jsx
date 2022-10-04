import React, { useRef, useState, useContext } from "react";
import "./contact.css";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Address from "../../assets/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const inputStyle = {
    backgroundColor: darkMode && "#333",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_0lk4wdq",
        "template_d2f9b6s",
        formRef.current,
        "KEoRymmkvGdLzwl6S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contactBackground"></div>
      <div className="contactWrapper">
        <div className="contactLeft">
          <h1 className="contactTitle">Let's discuss your project</h1>
          <div className="contactInfo">
            <div className="contactItem">
              <img src={Phone} alt="" className="contactIcon" />
              +1 234 567 890
            </div>
            <div className="contactItem">
              <img src={Email} alt="" className="contactIcon" />
              snupeyrn@gmail.com
            </div>
            <div className="contactItem">
              <img src={Address} alt="" className="contactIcon" />
              1234, Main Street, New York, USA
            </div>
          </div>
        </div>
        <div className="contactRight">
          <p className="contactDescription">
            <b>What's your story?</b> Get in touch. Whether you have a project
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={inputStyle}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={inputStyle}
              type="email"
              placeholder="email"
              name="user_email"
            />
            <textarea
              name="message"
              placeholder="message"
              id=""
              rows="5"
              style={inputStyle}
            ></textarea>
            <button>Submit</button>
            {done && <p className="thankYou">Thank you! I'll reply soon...</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
